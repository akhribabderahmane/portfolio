import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { useSelector, useDispatch } from "react-redux";
import {
  setGithubData,
  setGithubStats,
} from "../../features/generale/generaleSlice";

const GitHubContributionsCalendar = () => {
  const isDarkMode = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  //   const [data, setData] = useState([]);
  const data = useSelector((state) => state.generale.githubData);

  useEffect(() => {
    const fetchContributions = async () => {
      const token =import.meta.env.VITE_GITHUB_API_KEY;
      const query = `{
        user(login: "akhribabderahmane") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }`;
    
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });
    
      const result = await response.json();
      console.log(result)
      const contributions = result.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
        (week) =>
          week.contributionDays.map((day) => ({
            date: day.date, // Keep date as string
            count: day.contributionCount,
          }))
      );
    
      dispatch(setGithubData(contributions));
    
      const totalContributions = contributions.reduce((sum, d) => sum + d.count, 0);
      const averagePerDay = (totalContributions / contributions.length).toFixed(2);
      const currentWeekStart = new Date();
      currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay());
    
      const totalThisWeek = contributions
        .filter((d) => new Date(d.date) >= currentWeekStart)
        .reduce((sum, d) => sum + d.count, 0);
    
      const bestDay = contributions.reduce((prev, current) =>
        prev.count > current.count ? prev : current
      ).count;
    
      dispatch(
        setGithubStats({
          totalContributions: totalContributions,
          countThisWeek: totalThisWeek,
          bestDayCount: bestDay,
          averageCount: averagePerDay,
        })
      );
    };

    fetchContributions();
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
  
    const createCalendar = (data) => {
      const width = 1500;
      const cellSize = 23;
      const height = cellSize * 7 + 4 * 6;
      const gap = 4;
  
      // Deserialize dates
      const parsedData = data.map(d => ({ ...d, date: new Date(d.date) }));
      const startDate = new Date(parsedData[0].date);
      const endDate = new Date(parsedData[parsedData.length - 1].date);
  
      const adjustedStartDate = new Date(startDate);
      adjustedStartDate.setDate(adjustedStartDate.getDate() - adjustedStartDate.getDay());
  
      const svg = d3
        .create("svg")
        .attr("width", width)
        .attr("height", height + 50)
        .attr("viewBox", `0 0 ${width} ${height + cellSize}`)
        .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");
  
      const color = d3
        .scaleSequential(d3.interpolateGreens)
        .domain([0, d3.max(parsedData, (d) => d.count) + 5]);
  
      let weekStartDate = new Date(adjustedStartDate);
      let weekIndex = 0;
  
      while (weekStartDate <= endDate) {
        const weekData = parsedData.filter((d) => {
          const weekEnd = new Date(weekStartDate);
          weekEnd.setDate(weekEnd.getDate() + 6);
          return d.date >= weekStartDate && d.date <= weekEnd;
        });
  
        weekData.forEach((d, i) => {
          if (d.date >= startDate) {
            svg
              .append("rect")
              .attr("width", cellSize - 1)
              .attr("height", cellSize - 1)
              .attr("x", weekIndex * (cellSize + gap))
              .attr("y", d.date.getDay() * (cellSize + gap) + cellSize)
              .attr(
                "fill",
                d.count === 0
                  ? isDarkMode
                    ? "#2C2C2C"
                    : "#d0d0d0"
                  : color(d.count + 4)
              )
              .attr("rx", 5)
              .attr("ry", 5)
              .attr(
                "class",
                "transition-colors duration-300 hover:opacity-75 cursor-pointer"
              )
              .append("title")
              .text(`Date: ${d.date.toLocaleDateString()}\nContributions: ${d.count}`);
          }
        });
  
        weekStartDate.setDate(weekStartDate.getDate() + 7);
        weekIndex += 1;
      }
  
      const months = d3.timeMonths(startDate, endDate);
      months.forEach((month) => {
        const monthPosition =
          Math.floor(
            (d3.timeMonday.ceil(month) - adjustedStartDate) /
            (7 * 24 * 60 * 60 * 1000)
          ) *
          (cellSize + gap) -
          gap;
  
        svg
          .append("text")
          .attr("x", monthPosition)
          .attr("y", cellSize / 2)
          .attr("dy", "-0.3em")
          .attr(
            "class",
            "text-lg font-semibold text-text-light dark:text-text-dark text-white"
          )
          .text(d3.timeFormat("%B")(month))
          .attr("fill", isDarkMode ? "#ccc" : "#000");
      });
  
      return svg.node();
    };
  
    const calendarContainer = document.getElementById("calendar");
    calendarContainer.innerHTML = ""; // Clear previous calendar
    const svgNode = createCalendar(data);
    calendarContainer.appendChild(svgNode);
  }, [data, isDarkMode]);
  

  return <div id="calendar" />;
};

export default GitHubContributionsCalendar;

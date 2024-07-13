import React, { useEffect, useState } from "react";
import { SiWakatime } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { setWakaTimeStats } from "../../features/generale/generaleSlice";
import { getReadStats, getALLTimeSinceToday } from "../../utils/wakatime";
import { formatDate, formatSeconds } from "../../utils/helper";
const WakatimeStats = () => {
  const dispatch = useDispatch();
  const wakaTimeStats = useSelector((state) => state.generale.wakaTimeStats);
  const dummyReadStats = {
    last_update: "2023-07-12T12:34:56Z",
    start_date: "2023-07-06",
    end_date: "2023-07-12",
    categories: [
      { name: "Coding", total_seconds: 3600 },
      { name: "Debugging", total_seconds: 1800 },
    ],
    best_day: {
      date: "2023-07-10",
      text: "Best coding day!",
    },
    human_readable_daily_average: "1 hour",
    human_readable_total: "7 hours",
    best_day: {
      date: "2023-07-08T00:00:00Z",
      text: "Best day for coding!",
      total_seconds: 14400, // Total seconds coding on the best day
    },
    human_readable_daily_average: "3 hrs 25 mins",
    human_readable_total: "24 hrs 15 mins",
    languages: [
      { name: "JavaScript", total_seconds: 43200 },
      { name: "TypeScript", total_seconds: 21600 },
      { name: "Python", total_seconds: 10800 },
    ],
    editors: [
      { name: "VS Code", total_seconds: 54000 },
      { name: "WebStorm", total_seconds: 18000 },
    ],
  };

  const dummyAllTimeStats = {
    text: "10 days 5 hours",
    total_seconds: 864000,
  };

  return (
    <div>
      <div className="space-y-2">
        <div className=" flex flex-row gap-4 items-center">
          <SiWakatime size={30} />
          <h3 className=" text-2xl font-medium ">Weekly Statistics</h3>
        </div>
        <p className=" text-neutral-500 text-lg font-medium">
          My WakaTime last 7 days stats.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
        <StatBox
          title="start date"
          score={formatDate(new Date(dummyReadStats.start_date))}
        />
        <StatBox
          title="end date"
          score={formatDate(new Date(dummyReadStats.end_date))}
        />
        <StatBox
          title="Daily coding Average"
          score={dummyReadStats.human_readable_daily_average}
        />
        <StatBox
          title="This Week Coding Time"
          score={dummyReadStats.human_readable_total}
        />
        <StatBox
          title="Best Day Coding Time"
          score={
            formatDate(new Date(dummyReadStats.best_day.date)) +
            `(${formatSeconds(dummyReadStats.best_day.total_seconds)})`
          }
        />
        <StatBox
          title={"All Time Since Today"}
          score={formatSeconds(dummyAllTimeStats.total_seconds)}
        />
      </div>
      <div className=" flex flex-col md:flex-row gap-4 w-full">
        <LanguagesBox />
        <CategoriesBox />
      </div>
    </div>
  );
};

export default WakatimeStats;

const StatBox = ({ title, score }) => {
  return (
    <div className=" text-lg flex flex-col justify-center gap-1 py-1 px-4 bg-neutral-100 shadow-lg border-2 dark:border-none rounded-xl">
      <p className=" text-blue-bright ">{title}</p>
      <p className=" text-xl text-neutral-500">{score}</p>
    </div>
  );
};

const LanguagesBox = () => {
  return (
    <div class="flex-1 rounded-3xl p-1 bg-gradient-to-r  from-blue-bright-darker-1 to-red-600 my-6">
      <div class=" bg-background-light-100 dark:bg-background-light-950 px-4 py-6 rounded-[calc(1.5rem-1px)] relative">
        <p class=" absolute text-2xl  left-6 -top-[22px] px-4  bg-background-light-100 dark:bg-background-light-950">Languages</p>
        <div>
          <div className=" flex flex-row items-center gap-3 md:gap-6">
            <p class=" text-lg font-semibold w-28">JavaScript</p>
            <ProgressBar progress={60} />
            <p className=" text-lg font-medium w-10">60%</p>
          </div>
          <div className=" flex flex-row items-center gap-3 md:gap-6">
            <p class=" text-lg font-semibold  w-28">Json</p>
            <ProgressBar progress={30} />
            <p className=" text-lg font-medium w-10">30%</p>
          </div>
          <div className=" flex flex-row items-center gap-3 md:gap-6">
            <p class=" text-lg font-semibold  w-28">Python</p>
            <ProgressBar progress={10} />
            <p className=" text-lg font-medium w-10">10%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoriesBox = () => {
  return (
    <div class=" flex-1 rounded-3xl p-1 bg-gradient-to-r  from-fuchsia-800 to-rose-600 my-6">
      <div class=" bg-background-light-100 dark:bg-background-light-950 px-4 py-6 rounded-[calc(1.5rem-1px)] relative h-full ">
        <p class=" absolute text-2xl  left-6 -top-[22px] px-4  bg-background-light-100 dark:bg-background-light-950">Categories</p>
        <div>
          <div className=" flex flex-row items-center gap-3 md:gap-6">
            <p class=" text-lg font-semibold w-28">Coding</p>
            <ProgressBar progress={75} />
            <p className=" text-lg font-medium w-10">75%</p>
          </div>
          <div className=" flex flex-row items-center gap-3 md:gap-6">
            <p class=" text-lg font-semibold  w-28">Debugging</p>
            <ProgressBar progress={15} />
            <p className=" text-lg font-medium w-10">15%</p>
          </div>
          {/* <div className=" flex flex-row items-center gap-3 md:gap-6">
            <p class=" text-lg font-semibold  w-28">Python</p>
            <ProgressBar progress={10} />
            <p className=" text-lg font-medium w-10">10%</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const ProgressBar=({progress})=>{
  return(
    <div className=" flex-1 relative z-20  bg-background-light-400 dark:bg-background-light-700 h-3 rounded-full">
      <div className={`absolute z-30 -top-6  h-full bg-gradient-to-r rounded-full  from-blue-bright-darker-1 to-red-600 my-6 `} style={{width:`${progress}%`}}></div>
    </div>
  )
}

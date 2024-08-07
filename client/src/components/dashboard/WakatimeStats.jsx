import React, { useEffect, useState } from "react";
import { SiWakatime } from "react-icons/si";
import { useSelector, useDispatch } from "react-redux";
import { formatDate, getLastUpdate } from "../../utils/helper";
import axios from "axios";
import { setAllTimeStats, setLastWeekStats } from "../../features/wakatime/wakatimeSlice";

const WakatimeStats = () => {
  const dispatch = useDispatch();
  const lastWeekStats = useSelector((state) => state.wakatime.lastWeekStats);
  const allTimeStats = useSelector((state) => state.wakatime.allTimeStats);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    const fetchLastweekStats = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-wakatime-api.onrender.com/api/wakatime/stats"
        );
        dispatch(setLastWeekStats(response.data.data));
      } catch (error) {
        setError(error.message);
      }
    };
    const fetchallTimeStats = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-wakatime-api.onrender.com/api/wakastats/alltime"
        );
        dispatch(setAllTimeStats(response.data.data));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLastweekStats();
    fetchallTimeStats();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className=" py-8">
      <div className="space-y-2">
        <div className=" flex flex-row gap-4 items-center">
          <SiWakatime size={30} />
          <h3 className=" text-2xl font-medium ">Weekly Statistics</h3>
        </div>
        <div className=" flex flex-row md:flex-row md:justify-between gap-4">
        <p className=" text-neutral-500 text-lg font-medium">
          My WakaTime last 7 days stats.
        </p>
        <p>
          {getLastUpdate(allTimeStats?.modified_at || 'N/A')}
        </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 py-4">
        <StatBox
          title="start date"
          score={lastWeekStats?.start ? formatDate(new Date(lastWeekStats.start)) : 'N/A'}
        />
        <StatBox
          title="end date"
          score={lastWeekStats?.end ? formatDate(new Date(lastWeekStats.end)) : 'N/A'}
        />
        <StatBox
          title="Daily coding Average"
          score={lastWeekStats?.human_readable_daily_average || 'N/A'}
        />
        <StatBox
          title="This Week Coding Time"
          score={lastWeekStats?.human_readable_total || 'N/A'}
        />
        <StatBox
          title="Best Day Coding Time"
          score={
            lastWeekStats?.best_day ? formatDate(new Date(lastWeekStats?.best_day.date)) + ` (${" " + lastWeekStats?.best_day.text})` : 'N/A'
          }
        />
        <StatBox
          title={"All Time Since Today"}
          score={allTimeStats?.human_readable_total || 'N/A'}
        />
      </div>
      <div className=" flex flex-col md:flex-row gap-4 w-full">
        <CategorizedBox
          title={"Languages"}
          color1={"#119a8d"}
          color2={"#dc2626"}
          statsArray={lastWeekStats?.languages || []}
        />
        <CategorizedBox
          title={"Categories"}
          color1={"#0891b2"}
          color2={"#a21caf"}
          statsArray={lastWeekStats?.categories || []}
        />
      </div>
    </div>
  );
};

export default WakatimeStats;

const StatBox = ({ title, score }) => {
  return (
    <div className=" text-lg flex flex-col  justify-center gap-1 py-1 px-4 bg-neutral-100 shadow-lg border-2  rounded-xl">
      <p className=" text-blue-bright ">{title}</p>
      <p className=" text-xl text-neutral-500">{score}</p>
    </div>
  );
};

const CategorizedBox = ({ title, color1, color2, statsArray = [] }) => {
  return (
    <div
      className={`flex-1 rounded-3xl   p-1   my-6`} style={{ backgroundImage: `linear-gradient(to right, ${color1}, ${color2})` }}
    >
      <div className=" bg-background-light-100 dark:bg-background-light-950 px-4 py-6 rounded-[calc(1.5rem-1px)] relative h-full ">
        <p className=" absolute text-2xl  left-6 -top-[22px] px-4  bg-background-light-100 dark:bg-background-light-950">
          {title}
        </p>
        <div>
          {statsArray.map((item, index) => {
            return (
              <ProgressBar
                key={index}
                text={item.name}
                progress={item.percent}
                color1={color1}
                color2={color2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ text, progress, color1, color2 }) => {
  return (
    <div className=" flex flex-row items-center gap-3 md:gap-6">
      <p className=" text-lg font-semibold w-24">{text}</p>
      <div className=" flex-1 relative z-20  bg-background-light-400 dark:bg-background-light-700 h-3 rounded-full">
        <div
          className={`absolute z-30 -top-6  h-full  rounded-full   my-6 `}
          style={{ width: `${progress}%`,backgroundImage: `linear-gradient(to right, ${color1}, ${color2})` }}
        ></div>
      </div>
      <p className=" text-lg font-medium w-12">{progress + "%"}</p>
    </div>
  );
};

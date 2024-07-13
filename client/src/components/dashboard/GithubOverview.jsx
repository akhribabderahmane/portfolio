import React from "react";
import { useSelector } from "react-redux";
const GithubOverview = () => {
  const githubStats = useSelector((state) => state.generale.githubStats);
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:flex flex-row gap-4 w-full">
      <StatBox title="Total" score={githubStats.totalContributions} />
      <StatBox title="This Week" score={githubStats.countThisWeek} />
      <StatBox title="Best Day" score={githubStats.bestDayCount} />
      <StatBox title="Average" score={githubStats.averageCount} />
    </div>
  );
};

export default GithubOverview;

const StatBox = ({ title, score }) => {
  return (
    <div className=" sm:col-span-1  flex flex-col  flex-1 justify-center gap-1 p-2 px-6 bg-neutral-100 border-[1px] dark:border-none shadow-lg rounded-xl">
      <p className=" text-neutral-900 dark:text-neutral-600 capitalize">
        {title}
      </p>
      <p className=" text-green-600 text-3xl font-medium">{score}  {title=="Average" && <span  className=" text-base font-normal text-neutral-400">/per day</span>}</p>
    </div>
  );
};

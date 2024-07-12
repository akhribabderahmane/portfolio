import React from "react";
import { BsGithub } from "react-icons/bs";
import { format, subDays } from "date-fns";
import GitHubContributionsCalendar from "./Calendar";

// Generate random data for contributions
const generateData = (numDays = 365) => {
  const today = new Date();
  return Array.from({ length: numDays }).map((_, index) => {
    const date = subDays(today, index);
    return {
      date: format(date, "yyyy-MM-dd"),
      count: Math.floor(Math.random() * 5),
    };
  });
};

const Contributions = () => {
  return (
    <div className="py-8 space-y-6">
      <div className=" space-y-2">
        <div className=" flex flex-row gap-4 items-center">
          <BsGithub size={30} />
          <h3 className=" text-2xl font-medium ">My Contributions</h3>
        </div>
        <p className=" text-neutral-500 text-lg font-medium">
          my contribution from the last year on github
        </p>
      </div>
      <div>
        <GitHubContributionsCalendar />
      </div>
    </div>
  );
};

export default Contributions;

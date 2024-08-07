import React from "react";

const Loading = () => {
  return (
    <div className=" flex flex-row items-center justify-center flex-1 gap-6">
      <p className=" text-3xl text-neutral-900 dark:text-neutral-100 capitalize ">coming soon</p>
      <div className="newtons-cradle ">
        <div className="newtons-cradle__dot   after:bg-text-light dark:after:bg-text-dark"></div>
        <div className="newtons-cradle__dot   after:bg-text-light dark:after:bg-text-dark"></div>
        <div className="newtons-cradle__dot   after:bg-text-light dark:after:bg-text-dark"></div>
        <div className="newtons-cradle__dot   after:bg-text-light dark:after:bg-text-dark"></div>
      </div>
    </div>
  );
};

export default Loading;

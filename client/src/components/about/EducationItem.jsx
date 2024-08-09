import React from "react";

const EducationItem = ({ educationItem }) => {
  return (
    <div className=" flex flex-row gap-4 items-center border-2 border-neutral-300 dark:border-neutral-500 p-2 sm:p-6 rounded-xl ">
      <div>
        <img
          className="w-20 sm:w-24"
          src={educationItem.img}
          alt={educationItem.name}
        />
      </div>
      <div className=" space-y-2">
        <h3 className="text-base sm:text-xl font-medium">{educationItem.name}</h3>
        <p className="text-sm sm:text-lg text-neutral-500 relative flex sm:block  flex-col gap-1">
          {" "}
          <span className=" sm:pr-2 pr-0">{educationItem.degree}</span>
          <span className=" font-bold  text-neutral-300  -top-1 absolute hidden sm:inline-block ">
            .
          </span>{" "}
          <span className=" pl-0 sm:pl-2">{educationItem.degreeType}</span>
        </p>
        <div className="text-xs sm:text-base text-neutral-500 relative">
          {educationItem.inProgress ? (
            <span className=" pr-2 text-neutral-600">{educationItem.startYear} - present</span>
          ) : (
            <span className=" pr-2 text-neutral-600">
              {educationItem.startYear} - {educationItem.endYear}
            </span>
          )}
          <span className=" font-bold  text-neutral-300 absolute -top-1">
            .
          </span>{" "}
          <span className=" pl-2">{educationItem.location}</span>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;

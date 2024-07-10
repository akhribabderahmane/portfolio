import React from "react";
import { setSelectedMenuItem } from "../../features/generale/generaleSlice";
import { useDispatch } from "react-redux";
const MenuBtn = ({ children, isSelected, title }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(setSelectedMenuItem(title))}
      className={`bg-none hover:bg-background-light-200 dark:hover:bg-background-light-100 dark:hover:bg-opacity-25 transition duration-200 py-2 px-4 rounded-lg group  ${
        isSelected
          ? "bg-background-light-200 dark:bg-background-light-100 dark:bg-opacity-25"
          : ""
      }`}
    >
      {children}
    </button>
  );
};

export default MenuBtn;

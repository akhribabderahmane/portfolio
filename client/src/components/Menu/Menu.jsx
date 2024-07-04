import React from "react";
import SearchBar from "./SearchBar";
import MenuBtn from "./MenuBtn";
import { RiHome6Line } from "react-icons/ri";

const Menu = () => {
  return (
    <div className="w-full font-onest">
      <div>
        <SearchBar />
      </div>
      <div>
        <MenuBtn >
          <div className=" flex flex-row items-center gap-4 ">
            <RiHome6Line className=" scale-150 text-background-light-600 group-hover:-rotate-12 group-hover:text-background-light-800 transition duration-500" />
            <p className=" text-background-light-600 group-hover:text-background-light-800 font-medium text-lg">Home</p>
          </div>
        </MenuBtn>
      </div>
    </div>
  );
};

export default Menu;

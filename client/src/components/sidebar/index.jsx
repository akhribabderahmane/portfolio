import React from "react";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Menu from "../Menu/Menu";
import useIsLaptop from "./../../hooks/useIsMobile";
import { useSelector } from "react-redux";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import {toggleTheme} from "./../../features/theme/themeSlice"
import { useDispatch } from "react-redux";

const Sidebar = () => {
    const isLaptop=useIsLaptop();
    const isDarkMode=useSelector(state=>state.theme.value);
    const dispatch=useDispatch();
  return (
    <div className="min-w-[300px] py-6 px-4 max-h-screen ">
      <div className=" space-y-2">
        <img
          src="./images/profile-pic.jpg"
          className=" object-cover w-24 aspect-square rounded-full "
          alt=""
        />
        <div>
          <div className=" flex flex-row items-center gap-2">
            <p className="truncate dark:text-text-dark text-text-light font-medium font-onest text-2xl">
              A.Abderahmane
            </p>
            <VerifiedIcon className=" text-sky-600" size={26} />
          </div>
          <div>
            <p className=" text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-700  transition font-onest text-xl duration-700">
              @akhrib
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-6">
      <Menu />
      </div>
      {/* <div>
        apps
      </div> */}
      <div>
        <div className=" text-xl flex flex-row justify-between items-center mr-2 px-4 py-2 dark:text-text-dark">
          <p className=" capitalize font-medium">{isDarkMode?"Light mode":"Dark mode"}</p>
          <button onClick={()=>dispatch(toggleTheme())} className=" p-3 hover:bg-gray-300 dark:hover:bg-background-light-700 dark:bg-opacity-35 rounded-full bg-opacity-35 transition duration-500">
          {isDarkMode ?<MdOutlineLightMode className=" scale-150 " /> :<MdOutlineDarkMode className=" scale-150 " />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

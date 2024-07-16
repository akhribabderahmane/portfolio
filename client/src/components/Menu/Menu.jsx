import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MenuBtn from "./MenuBtn";
import menuItems from "./../../constant/menu.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Define variants for the animation
const menuVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const Menu = () => {
  const selectedMenuItem = useSelector(
    (state) => state.generale.selectedMenuItem
  );
  return (
    <div className="w-full font-onest">
      {/* <div>
        <SearchBar />
      </div> */}
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={menuVariants}
        className=" flex flex-col gap-1"
      >
        {menuItems &&
          menuItems.map((item, index) => {
            return (
              <MenuBtn
                key={index}
                isSelected={selectedMenuItem === item.title}
                title={item.title}
                link={item.href}
              >
                {/* <Link to={item.href}> */}
                  <div className=" flex flex-row justify-between items-center">
                    <div className=" flex flex-row items-center gap-4  ">
                      {item.icon}
                      <p className={`text-background-light-600 dark:text-background-light-400 group-hover:text-background-light-800 dark:group-hover:text-background-light-200 font-medium text-lg ${selectedMenuItem === item.title?" text-background-light-800 dark:text-background-light-200":""}`}>
                        {item.title}
                      </p>
                    </div>
                    {selectedMenuItem === item.title && (
                      <FaArrowRight className=" scale-110 text-background-light-600 dark:text-background-light-400 dark:group-hover:text-background-light-300 group-hover:text-background-light-800 transition duration-500" />
                    )}
                  </div>
                {/* </Link> */}
              </MenuBtn>
            );
          })}
      </motion.div>
    </div>
  );
};

export default Menu;

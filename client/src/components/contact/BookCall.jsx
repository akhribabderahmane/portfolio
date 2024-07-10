import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FiVideo } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import useIsLaptop from "../../hooks/useIsMobile";

const BookCall = () => {
 const redirectToBooking = () => {
    window.open("https://cal.com/akhrib-abderahmane", "_blank");
  };
  const isLaptop=useIsLaptop();
  return (
    <div className="py-8 space-y-6 cursor-pointer" onClick={redirectToBooking}>
      <h3 className=" text-2xl font-medium ">Book a call now</h3>
      <div className={` flex flex-row justify-between px-4 md:px-8 py-6 rounded-lg  bg-gradient-to-r from-[#063836] to-[#0E5550] text-text-dark hover:scale-[1.01] transition duration-700`}>
        <div className="">
          <h4 className={`text-2xl font-medium ${isLaptop?"":"text-xl"}`}>1 on 1 chat-session</h4>
          <p className={`text-background-light-300 text-xl ${isLaptop?"":"text-xl"} `}>Get a 30 min chat-session to talk about anything</p>
          <div className="flex flex-row items-center text-base md:text-lg font-medium md:gap-4 gap-4 mt-6">
            <div className="flex flex-row items-center gap-1 md:gap-2 ">
              <FaRegClock />
              <p>30 minutes</p>
            </div>
            <div className=" flex flex-row items-center gap-1 md:gap-2">
              <FiVideo />
              <p>Google meet</p>
            </div>
          </div>
        </div>
        <div className=" border-4 border-[#0D8D81] rounded-full h-fit p-3 ">
          <FiCalendar size={35} />
        </div>
      </div>
    </div>
  );
};

export default BookCall;

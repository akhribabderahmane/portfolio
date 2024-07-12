import React from "react";
import socialMedia from "../../constant/socialMedia";
import useIsLaptop from "../../hooks/useIsMobile"
import { redirectToLink } from "../../utils/helper";
const SocialMedia = () => {
  const isLaptop=useIsLaptop();
  return (
    <div className=" space-y-8 my-8">
     <h3 className=" text-2xl font-medium ">Find me on social media</h3>
    <div className={` flex ${isLaptop?"flex-row gap-4":'flex-col gap-4'} w-full items-center text-xl font-medium text-text-dark`}>

      {socialMedia.map((item,index) => {
        return <button onClick={()=>redirectToLink(item.link)} key={index} className={` rounded-lg flex flex-row justify-center items-center gap-3 px-2 py-2 hover:scale-105 transition duration-500 flex-1 ${item.bgColor} ${isLaptop?"":"w-full"}`}>
               {item.icon}
               {item.name}
        </button>;
      })}
    </div>
    </div>
  );
};

export default SocialMedia;

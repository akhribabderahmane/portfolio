import React from "react";
import { formatTimestamp } from "../../utils/helper";
import { MdAdminPanelSettings } from "react-icons/md";

const Message = ({ msg }) => {
  console.log(msg.createdAt);
  return (
    <div className=" flex flex-row gap-2 sm:gap-4 font-onest">
      <img
        src={msg.photoURL}
        alt={`${msg.author}'s avatar`}
        className=" w-8 h-8 sm:w-14 sm:h-14  rounded-full mt-2"
      />
      <div className=" space-y-1">
        <div className=" flex flex-row items-center gap-2 sm:gap-2">
          <p className=" text-sm sm:text-base text-neutral-700 dark:text-neutral-200 font-medium ">
            {msg.author}
          </p>
          {msg.email==="la_akhrib@esi.dz" && <AuthorBadge />}
          <p className=" text-xs sm:text-sm text-neutral-500 hidden sm:block">
            {formatTimestamp(msg.createdAt)}
          </p>
        </div>
        <p className=" rounded-xl rounded-tl-none bg-neutral-200 dark:bg-neutral-800 text-base sm:text-xl px-2 sm:px-4 py-1 sm:py-2 w-fit">
          {msg.text}
        </p>
        <p className=" text-xs sm:text-sm text-neutral-500 block sm:hidden">
            {formatTimestamp(msg.createdAt)}
          </p>
      </div>
    </div>
  );
};

export default Message;

const AuthorBadge = () => {
  return (
    <div className=" flex flex-row gap-1 items-center justify-center  text-neutral-50 bg-fuchsia-900 px-2 text-xs sm:text-sm  rounded-full">
      <MdAdminPanelSettings />
      <p>Author</p>
    </div>
  );
};

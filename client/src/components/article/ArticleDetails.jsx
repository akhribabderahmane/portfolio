import React, { useState } from "react";
import Tag from "./Tag";
import { FaRegCalendarCheck } from "react-icons/fa";
import { formatDate } from "../../utils/helper";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ArticleDetails = ({ item }) => {
  const [isHovered, setisHovered] = useState(false);
  console.log(isHovered)
  return (
    <AnimatePresence mode="wait">
    <div
       key={item.id}
      className="group min-w-[400px] w-[350px] aspect-[0.8] bg-slate-600 text-neutral-100 overflow-hidden relative rounded-xl group"
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-105 group-hover:blur-md"
        style={{ backgroundImage: `url('${item.image}')` }}
      ></div>
      <div className="relative z-10 p-4 pb-0 h-full">
        <div className="h-full flex flex-col justify-between ">
          <div className=" tags flex flex-row gap-2">
            {item.tags.map((tag, index) => {
              return <Tag key={index} text={tag} />;
            })}
          </div>
          <div className=" divide-y-[1px] divide-slate-700">
            <div className=" space-y-3 mb-6">
              <h3 className=" text-neutral-100 text-2xl group-hover:underline underline-offset-4">
                {item.title}
              </h3>
              <div className=" text-lg text-neutral-400 space-y-3">
                <div className=" flex flex-row items-center gap-2 ">
                  <FaRegCalendarCheck />
                  <p>{formatDate(item.date)}</p>
                </div>
                <p className="line-clamp-3 overflow-hidden leading-7">
                  {item.body}
                </p>
              </div>
            </div>
            <div className=" flex flex-row justify-between py-4">
              <div>
                <img
                  className=" object-cover w-8 aspect-square rounded-full"
                  src="./images/profile-pic.jpg"
                  alt=""
                />
              </div>
              
                {!isHovered ? (
                  <motion.div
                    key="studyField"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-neutral-400"
                  >
                    {item.studyField}
                  </motion.div>
                ) : (
                  <motion.div
                    key="readMore"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-neutral-400 flex flex-row items-center gap-2"
                  >
                    <p>READ MORE</p>
                    <FaArrowRightLong />
                  </motion.div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </AnimatePresence>
  );
};

export default ArticleDetails;

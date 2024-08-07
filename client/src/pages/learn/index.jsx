import React from "react";
import { motion } from "framer-motion";
import Loading from "../../components/Loading";
const Learn = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      className="flex h-full"
    >
      <div className=" w-full flex items-center justify-center flex-1 h-full">
        <Loading />
      </div>
    </motion.div>
  );
};

export default Learn;

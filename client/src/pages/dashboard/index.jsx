import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import Contributions from "../../components/dashboard/Contributions";
import WakatimeStats from "../../components/dashboard/WakatimeStats";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      className=' text-text-light dark:text-text-dark py-6 sm:py-10 pt-7 sm:pt-14 flex flex-col  px-5 sm:px-8'
    >
      <div>
        <PageHeader
          title="GuestBook"
          description="this is a guestBook ,leave a message for me"
        />
      </div>
      <div className=" divide-y-[1px] divide-background-light-400 dark:divide-background-light-800">
      <div>
        <Contributions />
      </div>
      <div>
        <WakatimeStats />
      </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;

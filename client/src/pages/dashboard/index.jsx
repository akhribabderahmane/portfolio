import React from "react";
import { motion } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import Contributions from "../../components/dashboard/Contributions";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      className=' text-text-light dark:text-text-dark py-10 pt-14 flex flex-col px-8'
    >
      <div>
        <PageHeader
          title="Dashboard"
          description="This is my personal dashboard, displaying my recent performance"
        />
      </div>
      <div>
        <Contributions />
      </div>
    </motion.div>
  );
};

export default Dashboard;

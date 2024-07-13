import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../../components/PageHeader";
import ToopBar from "../../components/about/ToopBar";
import { useSelector } from "react-redux";
import Intro from "../../components/about/Intro";
import Resume from "../../components/about/Resume";
import Career from "../../components/about/Career";
import Education from "../../components/about/Education";

const About = () => {
  const aboutElementSelected = useSelector(
    (state) => state.generale.aboutElementSelected
  );
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      className=" text-text-light dark:text-text-dark py-10 pt-14 flex flex-col px-8"
    >
      <div>
        <PageHeader
          title="About"
          description="Feel free to get in touch and let's have a discussion about how we can work together."
        />
      </div>
      <div className=" my-8 border-2 border-t-0 dark:border-neutral-500  rounded-md">
        <div className="">
          <ToopBar />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={aboutElementSelected}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" py-8"
          >
            {aboutElementSelected == "About me" && <Intro />}
            {aboutElementSelected == "Resume" && <Resume />}
            {aboutElementSelected == "Career" && <Career />}
            {aboutElementSelected == "Education" && <Education />}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default About;

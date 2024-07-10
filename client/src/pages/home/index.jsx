import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Article from "../../components/article/Article";
import Stack from "../../components/stack";
import { BiRocket as ContactIcon } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
  const selectedRoute=useSelector(state=>state.generale.selectedMenuItem)
  const waveAnimation = {
    rotate: [0, 20, -20, 20, -20, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0.5, // Add a delay after each cycle
    },
  };
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 0.59 }}
      key={selectedRoute}
      className=" text-text-light dark:text-text-dark font-onest px-8 divide-y-[1px] divide-background-light-400 dark:divide-background-light-800 "
    >
      <div className=" space-y-9 py-10 pt-14">
        <div className="name-location space-y-5">
          <div>
            <h2 className=" text-3xl md:text-4xl font-medium">
              Hi I'm Abderahmane Akhrib{" "}
              <motion.span
                animate={waveAnimation}
                className="text-4xl md:text-5xl inline-block"
              >
                👋
              </motion.span>
            </h2>
          </div>
          <div>
            <ul className=" flex flex-col md:flex-row md:gap-8 gap-4 text-xl list-inside ml-6 dark:text-background-light-400">
              <li className=" list-disc capitalize">
                based in Algeria,Algiers 🇩🇿
              </li>
              <li className=" list-disc capitalize">Working remotely</li>
            </ul>
          </div>
        </div>
        <div className="description dark:text-background-light-100 text-xl tracking-wide leading-8">
          <p>
            Seasoned Software Engineer especially in Frontend side, with a
            passion for creating pixel-perfect web experiences. I work with
            JavaScript and specialize in all-things web. I thrive on
            collaborating with teams to deliver efficient, scalable, and
            visually appealing web applications.
          </p>
        </div>
      </div>

      {/* artciles */}
      <div className=" py-10 space-y-5">
        <div className=" flex flex-row justify-between">
          <h2 className=" text-2xl font-medium ">Latest articles</h2>
          <button className=" flex flex-row items-center text-background-light-500 gap-2 hover:gap-4 transition-all duration-300 ">
            <p className=" text-lg font-meduim">view all</p>
            <FaArrowRight />
          </button>
        </div>
        <div>
          <Article />
        </div>
      </div>

      {/* stack */}
      <div className=" py-10 space-y-5">
        <div className="">
          <h2 className=" text-2xl font-medium capitalize ">
            Tools that I have used
          </h2>
        </div>
        <div>
          <Stack />
        </div>
      </div>

      {/* what i have been working on */}
      <div className=" py-10 space-y-4">
        <div className=" space-y-4">
          <h2 className=" text-2xl font-medium capitalize ">
            What i have been workong on
          </h2>
          <p className=" text-xl leading-10">
            Experienced in delivering diverse web solutions and collaborating
            with scientific clubs. Let's enhance your business with top-tier
            expertise and digital solutions
          </p>
        </div>
        <div className=" w-full px-6 py-10 flex flex-col gap-5 justify-center border-neutral-300 dark:border-neutral-700 border-2 rounded-lg">
          <div className=" text-4xl flex flex-row gap-4">
            <ContactIcon />
            <p>Lets work together!</p>
          </div>
          <p className=" text-xl ">
            I'm open for freelance projects, feel free to email me to see how
            can we collaborate.
          </p>
          <div>
            <Link to="/contact">
              <button className="  bg-blue-bright text-text-dark  text-2xl py-2 px-4 rounded-lg">
                Contact me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

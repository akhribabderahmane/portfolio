import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../../components/PageHeader';
import projects from '../../constant/projects';
import ProjectItem from '../../components/projects/ItemProject';
const Projects = () => {
  return (
    <motion.div  initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -200, opacity: 0 }}
    transition={{ duration: 0.59 }}
    className=' text-text-light dark:text-text-dark py-10 pt-14 flex flex-col px-8'
    >
       <PageHeader title={"Projects"} description={"Several projects that I have worked on ."} />
       <div className=' grid grid-cols-2 gap-8 py-8'>
        {projects.map((project,index)=><ProjectItem project={project} key={index} />)}
       </div>
    </motion.div>
  )
}

export default Projects

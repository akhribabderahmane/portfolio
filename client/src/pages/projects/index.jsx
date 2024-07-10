import React from 'react'
import { motion } from 'framer-motion'
const Projects = () => {
  return (
    <motion.div  initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -200, opacity: 0 }}
    transition={{ duration: 0.59 }}>
      projects
    </motion.div>
  )
}

export default Projects

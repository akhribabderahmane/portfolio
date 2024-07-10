import React from 'react'
import { motion } from 'framer-motion'

const Blog = () => {
  return (
    <motion.div  initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -200, opacity: 0 }}
    transition={{ duration: 0.59 }}>
      blog
    </motion.div>
  )
}

export default Blog

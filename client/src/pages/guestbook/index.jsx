import React from 'react'
import { motion } from 'framer-motion'
import Guestbook from '../../components/guestbook/Guestbook'
import PageHeader from '../../components/PageHeader'
const Dashboard = () => {
  return (
    <motion.div  initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -200, opacity: 0 }}
    transition={{ duration: 0.59 }}
    className=' text-text-light dark:text-text-dark py-10 pt-14 flex flex-col px-8'
    >
      <div>
        <PageHeader
          title="Guestbook"
          description="Leave whatever you like to say, suggestions, questions or anything!"
        />
      </div>
      <div>
      <Guestbook />
      </div>
    </motion.div>
  )
}

export default Dashboard

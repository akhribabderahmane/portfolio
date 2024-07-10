import React from 'react'
import { motion } from 'framer-motion'
import PageHeader from '../../components/PageHeader'
import SocialMedia from '../../components/contact/SocialMedia'
import BookCall from '../../components/contact/BookCall'
import MessageForm from '../../components/contact/MessageForm'

const Contact = () => {
  return (
    <motion.div  initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -200, opacity: 0 }}
    transition={{ duration: 0.59 }}
    className=' text-text-light dark:text-text-dark py-10 pt-14 flex flex-col px-8'>
        <div>
           <PageHeader title="Contact" description="Feel free to get in touch and let's have a discussion about how we can work together." />
        </div>
        <div className=' divide-y-[1px] divide-background-light-400 dark:divide-background-light-800'>
          <SocialMedia />
          <BookCall />
          <MessageForm />
        </div>
    </motion.div>
  )
}

export default Contact

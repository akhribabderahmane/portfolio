import React,{useState} from 'react'
import SwitchButton from './SwitchButton'
import { Divide as Hamburger } from 'hamburger-react'
import { useSelector } from 'react-redux'
import {motion} from "framer-motion"
import Menu from './Menu/Menu'


const Navbar = () => {
  // this state is for menu 
  const [isOpen, setOpen] = useState(false);
  const isDarkMode=useSelector(state=>state.theme.value);
  const spring = {
    type: "spring",
    stiffness: 120,
    damping: 16,
    duration:2
  };
  return (
    <div className='navbar py-4 pt-6 px-4 flex flex-col border-b-background-light-400 dark:border-b-background-light-800 border-b-[1px]'>
    <div className={`flex flex-row justify-between items-center px-4 pr-2`}>
      <motion.div
        layout
        transition={spring}
        className={`image-name flex ${isOpen ? 'flex-col justify-start items-start gap-8' : 'flex-row items-center gap-2'}`}
      >
        <div>
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: isOpen ? 1.5 : 1 }}
            transition={{ duration: 1.5 }}
            className='rounded-full w-12 h-12 object-cover shadow-sm shadow-[#f5f5f5]'
            src='./images/profile-pic.jpg'
            alt='abderahmane akhrib pic'
          />
        </div>
        <div className='flex flex-row items-center gap-2'>
          <p className='truncate dark:text-text-dark text-text-light font-medium font-onest text-lg'>A.Abderahmane</p>
          <div>
            <img src='./icons/official.svg' className='scale-75' alt='certified' />
          </div>
        </div>
      </motion.div>
      <motion.div
        layout
        transition={spring}
        className={`switch-menuBtn flex gap-2 ${isOpen ? 'flex-col-reverse items-end gap-8' : 'flex-row items-center'}`}
      >
        <div>
          <SwitchButton />
        </div>
        <div>
          <Hamburger toggled={isOpen} toggle={setOpen} color={isDarkMode ? '#f9fafb' : '#1f2937'} />
        </div>
      </motion.div>
    </div>
    {isOpen && (
      <motion.div layout transition={spring} className='w-full mt-4'>
        <Menu />
      </motion.div>
    )}
  </div>
  )
}

export default Navbar

import React from 'react'
import {motion} from 'framer-motion'
import '../assets/Navbar.css'

// Icon Imports
import { AiOutlineCloseSquare } from 'react-icons/ai'


const NavbarDrawer = ({handleDrawer}) => {
  return (
    <>
      <motion.div
        className='fixed bg-gradient-to-r from-NeutralDark to-transparent h-screen left-0 right-0 top-0 bottom-0 z-40'
        onClick={() => handleDrawer()}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0}}
        transition={{ duration: 0.2 }}
        exit={{ opacity: 0, transition: {duration: 0.3 } }}
      >

          <button type='button'
            onClick={() => handleDrawer(false)}
            className='fixed top-4 right-0 z-40'
          > 
            <AiOutlineCloseSquare size={35}/>  
          </button>
        <motion.nav 
          className='fixed flex flex-col space-y-7 right-0 w-[50%] h-screen z-20  bg-white justify-start items-center'
          initial={{ x:100 }}
          animate={{ x:0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.2}}
          exit={{ x: '100%', transition: { duration: 0.3 } }}
        >
          
          <ul className='flex flex-col w-full mt-[7rem]'>
            <li className='navbar_drawer-link'>
              Find jobs
            </li>
            <li className='navbar_drawer-link'>
              Employers
            </li>
            <li className='navbar_drawer-link'>
              Upload Job
            </li>
            <li className='navbar_drawer-link'>
              About Us
            </li>
          </ul>
        </motion.nav>
      </motion.div>
    </>
  )
}

export default NavbarDrawer
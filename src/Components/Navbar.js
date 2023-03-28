import React,{useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion' 
import '../assets/Navbar.css'
import demoAvi from '../assets/Test_Images/DemoAvi.jpg'

// Icon Imports
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeftText } from 'react-icons/bs'

// Component Imports
import NavbarDrawer from './NavbarDrawer'




const Navbar = () => {

    const [drawer, setDrawer] = useState(false);
    
  return (
    <div className='w-full flex justify-center items-center border py-5 px-6 md:px-8'>
        <nav className='flex flex-row w-full max-w-7xl justify-start items-center'>
            <h1 className='font-bold text-PrimaryLight text-xl md:text-3xl'>TalentConnect</h1>
            <ul className='hidden lg:flex flex-row space-x-5 ml-[4rem]'>
                <li className='navbar_links'>
                    <a id='#FindJobs' >
                        Find Jobs
                    </a>
                </li>
                <li className='navbar_links'>
                    <a id='#Employers'>
                        Employers
                    </a>
                </li>
                <li className='navbar_links'>
                    <a id='#UploadJob' >
                        Upload Job
                    </a>
                </li>
                <li className='navbar_links'>
                    <a id='#AboutUs' >
                        About Us
                    </a>
                </li>
            </ul>

            {/* This Section should only show if user is signed in */}

            <div className='hidden lg:flex flex-row space-x-4 ml-auto items-center justify-center'>
                <IoMdNotificationsOutline 
                    size={25}
                    className='cursor-pointer hover:scale-125 duration-75 ease-linear'
                />

                <div className='hidden lg:flex flex-col justify-center items-start text-[0.68rem] text-start font-semibold'>
                    {/* User Name Goes Below */}
                    <p>Emma R.</p>
                    {/* Position Desired Goes Below */}
                    <p className='text-gray-500'>Software Developer</p>
                </div>
                <img 
                    src={demoAvi} 
                    className='hidden lg:flex border-2 rounded-full w-14 h-14'
                />
            </div>

            {/* Small Screen components */}
            <div className='flex lg:hidden ml-auto items-center space-x-5'>
                <button>
                    <BsChatLeftText 
                        size={25}
                        className='cursor-pointer hover:scale-125 duration-75 ease-linear'
                    />
                </button>
                <button>
                    <IoMdNotificationsOutline 
                        size={30}
                        className='cursor-pointer hover:scale-125 duration-75 ease-linear'
                    />
                </button>
                <button 
                    onClick={() => setDrawer(!drawer)}
                >
                    <AiOutlineMenu 
                        size={30}
                        className='cursor-pointer hover:scale-125 duration-75 ease-linear'
                    />
                    
                </button>
            </div>
            <AnimatePresence>
                {drawer ? (
                    <NavbarDrawer handleDrawer={(value) => setDrawer(value)}/>
                ): null}
            </AnimatePresence>
            
        </nav>
    </div>
  )
}

export default Navbar
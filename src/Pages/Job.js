import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import CompanyImagePlaceholder from '../assets/Test_Images/CompanyPlaceholder.png';

// icon imports
import { CiLocationOn } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { CiClock1 } from 'react-icons/ci';
import { FaBriefcase } from 'react-icons/fa';
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin  } from 'react-icons/bs'

const Job = () => {

    const { id } = useParams();
    const [job, setJob] = useState({
      company: {
        name: '',
        description: '',
        city:'',
        state:'',
        email: '',
        phoneNumber: '',
        logoBase64: '',
        logoMimeType: '',
      },
      position: '',
      description: '',
      city:'',
      state:'',
      country:'',
      salary: '',
    });

    const formatPhoneNumber = (phoneNumber)  => {
      const cleaned = ('' + phoneNumber).replace(/\D/g, '');

      if (cleaned.length !==10) {
        return phoneNumber;
      }

      const formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

      return formatted;
    }



    useEffect(() => {

      const fetchJob = async (jobId) => {
       await fetch('/api/Job/' + jobId)
          .then(res => res.json())
          .then(data => setJob(data))
      }
      fetchJob(id);
      console.log(job)
    },[])

    const formatedPhoneNumber = formatPhoneNumber(job.company.phoneNumber);
  return (
    <>
        <div className='w-full flex flex-col space-y-4 justify-center items-center py-10 px-10 bg-gray-100'>

            <div className='w-full max-w-xl bg-white flex-col md:flex-row justify-start items-start px-6 py-8'>
              {job.company.logoBase64 && job.company ? (   
                <img 
                    className='w-[4rem] '
                    src={`data:${job.company.logoMimeType};base64,${job.company.logoBase64}`}
                    alt="Company Logo"
                />

              ): (
                <img
                    className='w-[4rem] md:w-[6rem] border'
                    src={CompanyImagePlaceholder}
                    alt="Company Logo"
                />
              )}
              <div className='flex flex-col justify-start items-start'>
                <h1 className='font-semibold text-2xl '>{job.position}</h1>
                <h2 className='font-light text-lg'>{job.company.name}</h2>
                <ul className='flex flex-col space-y-1 md:flex-row md:space-y-0 md:space-x-3 items-start justify-start text-xs font-light'>

                  <li className='flex flex-row justify-start space-x-2 lg:space-x-1'>
                    <CiLocationOn size={15}/>
                    <p className=''>{job.city}, {job.state}</p>
                  </li>

                  <li className='flex flex-row justify-start space-x-2 lg:space-x-1'>
                    <FaRegMoneyBillAlt size={15}/>
                    <p className=''>{job.salary}</p>
                  </li>

                  <li className='flex flex-row justify-start space-x-2 lg:space-x-1'>
                    <CiClock1 size={15}/>
                    <p className=''>Full Time</p>
                  </li>


                </ul>
                <button className='rounded-md bg-PrimaryLight py-2 px-4 cursor-pointer hover:bg-PrimaryDark text-white flex justify-center items-center space-x-2 mt-4'>
                  <FaBriefcase className='mr-2'/>
                  Apply For This Job
                </button>

                <div className='flex flex-row items-center mt-4 space-x-3'>
                  <h3 className='font-semibold text-sm'>SHARE THIS AD:</h3>
                    <BsFacebook size={15}/>
                    <BsTwitter size={15}/>
                    <BsPinterest size={15}/>
                    <BsLinkedin size={15}/>
                </div>
              </div>
            </div>

            <div className='w-full max-w-xl bg-white flex-col justify-start items-start px-6 py-8'>
                <p className='font-semibold text-lg'>Description:</p>
                <p className='mt-8 text-sm leading-loose'>{job.description}.</p>
            </div>

            <div className='w-full max-w-xl bg-white flex-col justify-start items-start space-y-8 px-6 py-8 text-sm'>
                <h3 className='font-semibold text-lg'>Company Info:</h3>
                <p className=''>Company Name: {job.company.name}</p>
                <p>Address: {job.company.city}, {job.company.state}</p>
                <p>Phone: {formatedPhoneNumber}</p>
                <p>Email: {job.company.email}</p>
                <ul className='flex space-x-4 items-center '>
                  <BsFacebook size={20} className='cursor-pointer hover:scale-125 ease-linear duration-100'/>
                  <BsTwitter size={20} className='cursor-pointer hover:scale-125 ease-linear duration-100'/>
                  <BsLinkedin size={20} className='cursor-pointer hover:scale-125 ease-linear duration-100'/>
                </ul>
            </div>

          </div>
        
        
    </>
  )
}

export default Job
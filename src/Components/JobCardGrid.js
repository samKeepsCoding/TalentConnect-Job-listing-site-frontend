import React from 'react'
import '../assets/JobCard.css'
import CompanyImagePlaceholder from '../assets/Test_Images/CompanyPlaceholder.png'

const JobCardGrid = ({job}) => {
  return (
    <>
        <a href={`job/${job.id}`} className='jobCard-container flex items-center justify-center hover:bg-gray-100 cursor-pointer'>

           
                <div className='jobCard-company flex items-center space-x-3'>
                    {job.company.logoBase64 ? (
                        
                        <img 
                            className='w-[4rem]'
                            src={`data:${job.company.logoMimeType};base64,${job.company.logoBase64}`}
                            alt="Company Logo"
                        />
                    ): (
                        <img
                            className='w-[4rem]'
                            src={CompanyImagePlaceholder}
                            alt="Company Logo"
                        />
                    )}
                    <div className='flex flex-col'>

                        <h1 className='font-bold text-sm'>{job.position}</h1>
                        <p className='text-xs font-light text-'>{job.company.name}</p>
                    </div>
                </div>
                <div className='jobCard-salary hidden md:flex justify-center '>
                    <p>${job.salary}</p>
                </div>
                <div className='jobCard-city flex justify-center'>
                    <p>{job.city}, {job.state}</p>
                </div>
                <div className='jobCard-Applybtn flex justify-center items-center'>
                    <button className='bg-PrimaryLight hover:bg-[#026FB0] text-white px-4 border rounded-lg text-sm font-bold'>
                        APPLY
                    </button>
                </div>
          
        </a>
    </>
  )
}

export default JobCardGrid
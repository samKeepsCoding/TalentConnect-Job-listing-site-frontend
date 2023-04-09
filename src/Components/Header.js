import React, {useState, useEffect} from 'react';

// Icon Imports
import { CiSearch } from 'react-icons/ci';
import { FaBriefcase } from 'react-icons/fa'
// Component Imports
import JobGrid from './JobGrid';

const Header = () => { 

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

  
    const fetchData = () => {
      fetch("/api/Job")
        .then(res => res.json())
        .then(data => setJobs(data));
    };

    setLoading(true);
  
    fetchData();
    setLoading(false)
    console.log(jobs)
  }, [])


  return (
    <>
      
        <div className='bg-NeutralLight '>
            <div className='flex justify-center w-full'>
              <div className='flex flex-col items-start justify-center w-full max-w-7xl px-6 py-8 space-y-4'>
                <div className='flex flex-row justify-start space-x-4 items-center'>
                  <h1 className='font-bold text-2xl md:text-4xl lg:text-6xl duration-200 ease-linear'>Find Your Dream Job Here</h1>
                  <FaBriefcase size={20}/>

                </div>
                <div className='w-full flex flex-row justify-start items-center'>
                  <input
                    type='text' 
                    className='border w-full px-6 py-4 rounded-l-full'
                    placeholder={`JOB TITLE OR KEYWORD`}
                  />
                  <button className='border px-6 py-4 rounded-r-full bg-PrimaryLight text-white font-semibold hover:scale-105 duration-100 hover:bg-BaseBlack'>
                    SEARCH
                  </button>
                </div>
              </div>              
            </div>
        </div>
        {loading ? (
          <p>Loading....</p>
        ): 
        
        <JobGrid jobs={jobs}/>
        }
    </>
  )
}

export default Header


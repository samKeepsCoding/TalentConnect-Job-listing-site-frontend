import React from 'react'

// Compnent Imports
import JobCardGrid from './JobCardGrid'

const JobGrid = ({jobs}) => {
  return (
    <>
        {jobs ? (
            <div className='flex w-full justify-center items-start p-4 min-h-screen'>
                <div className='flex max-w-4xl w-full flex-col justify-center items-start space-y-3'>
                    {/* {jobs.map((job) => (
                        <JobCard job={job} key={job.id}/>
                    ))} */}
                    {jobs.map(job => (
                        <JobCardGrid job={job} key={job.id}/>
                    ))}
                </div>
            </div>
        ):<p>loading..</p>}
    </>
  )
}

export default JobGrid
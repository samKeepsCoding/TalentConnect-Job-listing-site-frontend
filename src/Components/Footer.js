import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className='w-full flex flex-col justify-center items-center py-8 bg-PrimaryLight text-white text-center space-y-4'>
            <h1 className='font-bold  text-xl  md:text-3xl'>TalentConnect</h1>
            <p className='font-light text-[.5rem] '>
                Copyright @ 2010-2020 TalentConnect All rights reserved
            </p>
        </footer>
    </>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className=' h-[100vh] w-full flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center space-y-20'>
            <h1 className='text-4xl text-indigo-800'>Create Product</h1>
            <p className='text-xl text-indigo-700'>No Product Found😒<Link to={"/create"} className=''>Creat a Product</Link></p>
        </div>
    </div>
  )
}

export default HomePage
HomePage

// 'bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400
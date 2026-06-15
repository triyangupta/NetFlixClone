import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute w-screen aspect-video text-white pt-[15%] p-12'>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <p className='mt-2 text-xl w-1/3'>{overview}</p>
      <div className='mt-3 flex items-center'>
        <button className=' flex items-center px-6 py-2 bg-gray-300 text-black rounded-md hover:bg-opacity-80 m-1'>
            <FaRegPlayCircle  className='m-1' size="23px" />
            <span className='ml-1'>Play</span>
            </button>
        <button className='flex items-center px-6 py-2 bg-gray-500 text-black rounded-md hover:bg-opacity-30 m-1'>
            <BsInfoCircle  className='m-1' size="23px" />
            <span className='ml-1'>Watch More</span>
            </button>
      </div>
    </div>
  )
}

export default VideoTitle

import React from 'react'
import Img1 from '../img/Netflix-tv.png'


const Streaming = () => {
  return (
    <div className='bg-black h-[500px] border-b-8 border-[#232323] flex justify-center items-center'>
        <div className='flex items-center'>
            <div className='w-full flex flex-col gap-y-3 pl-8'>
                <h1 className='text-white font-black text-[50px]'>Enjoy on your TV</h1>
                <p className='text-white font-medium text-[20px] w-[500px]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className='w-full flex items-center justify-center'>
                <img src={Img1} alt="" className='w-[400px] h-[300px]'/>
            </div>
        </div>
    </div>
  )
}

export default Streaming
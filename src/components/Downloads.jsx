import React from 'react'
import Img1 from '../img/Downloads.jpeg'

const Downloads = () => {
  return (
    <div className='bg-black h-[500px] border-b-8 border-[#232323] flex justify-center items-center'>
        <div className='flex items-center'>
            <div className='w-full flex items-center justify-center'>
                <img src={Img1} alt="" className='w-[450px] h-[350px]'/>
            </div>
            <div className='w-full flex flex-col gap-y-3'>
                <h1 className='text-white font-black text-[40px]'>Download your shows to watch offline</h1>
                <p className='text-white font-medium text-[20px] w-[500px]'>Save your favorites easily and always have something to watch.</p>
            </div>
        </div>
    </div>
  )
}

export default Downloads
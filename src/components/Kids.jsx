import React from 'react'
import Img1 from '../img/kids.png'

const Kids = () => {
  return (
    <div className='bg-black h-[500px] border-b-8 border-[#232323] flex justify-center items-center'>
        <div className='flex items-center gap-9'>
            <div className='w-full flex items-center justify-center'>
                <img src={Img1} alt="" className='w-[450px] h-[350px]'/>
            </div>
            <div className='w-full flex flex-col gap-y-3'>
                <h1 className='text-white font-black text-[40px]'>Create profiles for kids</h1>
                <p className='text-white font-medium text-[20px] w-[500px]'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
    </div>
  )
}

export default Kids
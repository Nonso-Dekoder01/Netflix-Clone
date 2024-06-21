import React from 'react'
import NavBar from './NavBar'
// import '../css/Opener.css'
import backgroundImage from '../img/Bg-netflix.png'
import { IoIosArrowForward } from 'react-icons/io'

const Opener = () => {

  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className='min-h-screen border-b-8 border-[#232323]' style={bgImage} >
      <NavBar/>
      <div className='flex flex-col items-center justify-center min-h-[600px] gap-y-3'>
        <h1 className='text-white font-black text-[50px]'>Unlimited movies, TV shows, and more</h1>
        <p className='text-white text-[30px] font-medium'>Watch anywhere. Cancel anytime.</p>
        <p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
        <form action="POST" className='flex gap-x-2'>
          <input type="email" placeholder='Email Address' required className='pl-5 py-3 w-[400px] rounded bg-transparent border outline-none text-white'/>
          <button className='text-white bg-[#E50915] py-3 px-5 rounded font-semibold flex items-center gap-2 text-[20px]'> Get Started <IoIosArrowForward/> </button>
        </form>
      </div>
    </div>
  )
}

export default Opener
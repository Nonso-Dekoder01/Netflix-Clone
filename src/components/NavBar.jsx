import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='flex w-full h-[90px] px-[150px] justify-between items-center'>
            <div className='font-black font-custom text-[#E50915] text-[50px]'>Netfl!x</div>
            <div className='flex gap-7 items-center'>
                {/* <select className='bg-transparent text-white font-semibold outline-none w-[50px] rounded-[9px] border-solid placeholderh-[45px]' name="language" id="language" placeholder='EN'>
                    <option className='py-0 px-0' value="ENGLISH">english</option>
                    <option className='py-0 px-0' value="ENGLISH">SPANISH</option>
                    <option className='py-0 px-0' value="ENGLISH">FRENCH</option>
                    <option className='py-0 px-0' value="ENGLISH">RUSSIAN</option> 
                </select> */}
                <button className='py-2 px-5 bg-[#E50915] text-white rounded-[5px] font-semibold'>Sign In</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar
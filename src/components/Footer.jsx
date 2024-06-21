import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black h-[300px] border-b-8 border-[#232323] flex flex-col justify-center items-center text-white'>
        <div className='flex justify-between gap-[300px]'>
            <ul className='flex flex-col gap-3'>
                <li>Questions? Contact us</li>
                <li>Ways to Watch</li>
                <li>Account</li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li>Cookie Preferences</li>
                <li>Help Center</li>
                <li>Privacy</li>
            </ul>
            <ul className='flex flex-col gap-3'>
                <li> </li>
                <li>&#169; Copyright - 2023</li>
                <li>Nonso</li> 
            </ul>
        </div>
    </div>
  )
}

export default Footer
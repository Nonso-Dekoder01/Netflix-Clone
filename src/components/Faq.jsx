import React, { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import AccordionItem from './AccordionItem'

const Faq = () => {

    const [open, setOpen] = useState(false);

    const toggle = (index) => {
        if(open === index) {
            return setOpen(null)
        }
        setOpen(index)
    }

    const accordionData = [
        {
            title: "What is Netflix?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
        {
            title: "How much does Netflix cost?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
        {
            title: "Where can I watch?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "How do I cancel?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur"
        },
        {
            title: "What can I watch on Netflix?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
        {
            title: "Is Netflix good for kids?",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident, quisquam labore eum voluptatum neque soluta nihil mollitia voluptatem dignissimos recusandae iur, Ex quos nobis perferendis pariatur reiciendis, architecto repellendus provident"
        },
    ]


  return (
    <div className='bg-black h-[1250px] border-b-8 border-[#232323] flex justify-center items-center'>
        <div className='flex flex-col gap-y-9 justify-center w-[1200px]'>
            <h1 className='text-white font-black text-[50px] flex justify-center'>Frequently Asked Questions</h1>
            <div className='flex flex-col gap-3'>
                {accordionData.map((data, index) => {
                    return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)}/>
                })}
            </div>
            <div className='flex flex-col items-center gap-3'>
                <p className='text-white'>Ready to watch? Enter your email to create or restart your membership.</p>
                <form action="POST" className='flex gap-x-2'>
                    <input type="email" placeholder='Email Address' required className='pl-5 py-3 w-[400px] rounded bg-transparent border outline-none text-white'/>
                    <button className='text-white bg-[#E50915] py-3 px-5 rounded font-semibold flex items-center gap-2 text-[20px]'> Get Started <IoIosArrowForward/> </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Faq
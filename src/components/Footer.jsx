import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaArrowUp, FaGithub, FaGraduationCap, FaLinkedin, FaPhone } from 'react-icons/fa'
import { IoCodeSlashSharp, IoMail } from 'react-icons/io5'
import { TiLocation } from 'react-icons/ti'

const Footer = ({ scrollToSection, homeRef, aboutRef,educationRef,skillRef, contactRef, projectRef }) => {
  return (
    <>
      <div className='bg-blue-950'> 
        <div className='flex justify-between items-baseline p-10'>     
          <div className='w-100 ml-10 '>  {/* for left side footer content*/}
            <h1 className='flex items-center gap-3 text-2xl font-extrabold text-white'><span><IoCodeSlashSharp className='text-3xl  text-white' /></span><span className='text-blue-500 '>MERN</span> Dev</h1>
            <h2 className='text-white sm:font-semibold pt-8 '>MERN Stack Developer trained at SLA Chennai. Passionate about building modern web applications with cutting-edge technologies.</h2>
            <div className='flex gap-4 text-2xl m-5 text-white'>
              <a href="http://www.linkedin.com/in/dinesh-k-k5" target='_blank' rel="noopener noreferrer"><FaLinkedin className='hover:bg-black/50 bg-transparent p-3 rounded-full  w-13 h-13 duration-300 hover:-translate-y-2'/></a>
              <a href="https://github.com/dineshk055/FestMate" target='_blank' rel="noopener noreferrer"><FaGithub  className='hover:bg-black/50 bg-transparent p-3 rounded-full  w-13 h-13 duration-300 hover:-translate-y-2' /></a>
              <a href="https://wa.me/919500851314?text=Hi%20Dinesh" target="_blank" rel="noopener noreferrer"><BsWhatsapp  className='hover:bg-black/50 bg-transparent p-3 rounded-full  w-13 h-13 duration-300 hover:-translate-y-2'/></a>
            </div>
          </div>
          <div className='w-100'>    {/* for center side footer content*/}
            <h1 className='text-white font-extrabold text-2xl mb-2 '>Quick Links</h1>
            <div className='text-white font-semibold '>
              <h1  className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-3 w-20' onClick={()=>scrollTo({top:0,behavior:"smooth"})}>Home</h1>
              <h1  className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-3 w-20'  onClick={()=>scrollToSection(aboutRef)}>About</h1>
              <h1  className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-3 w-20'  onClick={()=>scrollToSection(educationRef)}>Education</h1>
              <h1  className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-3 w-20'  onClick={()=>scrollToSection(skillRef)}>Skills</h1>
              <h1  className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-3 w-20'  onClick={()=>scrollToSection(contactRef)}>Contact</h1>
              <h1  className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-3 w-20'  onClick={()=>scrollToSection(projectRef)}>Projects</h1>
            </div>
          </div>
          <div className='w-100'>    {/* for right side footer content*/}
            <h1 className='text-white font-extrabold text-2xl'>Contact Info</h1>
            <div>
              <h1 className='flex items-center gap-2 font-semibold text-white my-3'><span><IoMail className='text-2xl text-blue-300' /></span> kdineshuchb@gmail.com</h1>
              <h1 className='flex items-center gap-2 font-semibold text-white my-3'><span><FaPhone className='text-2xl text-blue-300'/></span>+91 9500851314</h1>
              <h1 className='flex items-center gap-2 font-semibold text-white my-3'><span><TiLocation className='text-2xl text-blue-300'/></span>Chennai, Tamil Nadu</h1>
              <h1 className='flex items-center gap-2 font-semibold text-white my-3'><span><FaGraduationCap className='text-2xl text-blue-300'/></span>SLA Chennai Certified</h1>
            </div>
          </div>
        </div>
        <span className='border w-200 m-auto h-0.5 block text-white my-2'></span>
        <h1 className='text-white text-center p-3'>© 2026 Dinesh K. MERN Stack Developer | Certified from SLA Chennai</h1>
      </div>
      
    </>
  )
}

export default Footer
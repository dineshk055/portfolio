import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaArrowUp, FaGithub, FaGraduationCap, FaLinkedin, FaPhone } from 'react-icons/fa'
import { IoCodeSlashSharp, IoMail } from 'react-icons/io5'
import { TiLocation } from 'react-icons/ti'

const Footer = ({ scrollToSection, homeRef, aboutRef,educationRef,skillRef, contactRef, projectRef }) => {
  return (
    <>
      <div className='bg-blue-950'> 
        {/* Main footer container - responsive flex layout */}
        <div className='flex flex-col lg:flex-row justify-between items-baseline p-5 md:p-10 gap-8 lg:gap-0'>     
          {/* Left section */}
          <div className='w-full lg:w-1/3 ml-0 lg:ml-10 px-4 lg:px-0'>  
            <h1 className='flex items-center gap-3 text-xl md:text-2xl font-extrabold text-white'>
              <span><IoCodeSlashSharp className='text-2xl md:text-3xl text-white' /></span>
              <span className='text-blue-500'>MERN</span> Dev
            </h1>
            <h2 className='text-white font-medium md:font-semibold pt-4 md:pt-8 text-sm md:text-base'>
              MERN Stack Developer trained at SLA Chennai. Passionate about building modern web applications with cutting-edge technologies.
            </h2>
            <div className='flex gap-3 md:gap-4 text-xl md:text-2xl mt-4 md:m-5 text-white'>
              <a href="http://www.linkedin.com/in/dinesh-k-k5" target='_blank' rel="noopener noreferrer">
                <FaLinkedin className='hover:bg-black/50 bg-transparent p-2 md:p-3 rounded-full w-10 h-10 md:w-13 md:h-13 duration-300 hover:-translate-y-1 md:hover:-translate-y-2'/>
              </a>
              <a href="https://github.com/dineshk055/FestMate" target='_blank' rel="noopener noreferrer">
                <FaGithub className='hover:bg-black/50 bg-transparent p-2 md:p-3 rounded-full w-10 h-10 md:w-13 md:h-13 duration-300 hover:-translate-y-1 md:hover:-translate-y-2' />
              </a>
              <a href="https://wa.me/919500851314?text=Hi%20Dinesh" target="_blank" rel="noopener noreferrer">
                <BsWhatsapp className='hover:bg-black/50 bg-transparent p-2 md:p-3 rounded-full w-10 h-10 md:w-13 md:h-13 duration-300 hover:-translate-y-1 md:hover:-translate-y-2'/>
              </a>
            </div>
          </div>
          
          {/* Center section */}
          <div className='w-full lg:w-1/3 px-4 lg:px-0'>    
            <h1 className='text-white font-extrabold text-xl md:text-2xl mb-2 md:mb-2'>Quick Links</h1>
            <div className='text-white font-medium md:font-semibold text-sm md:text-base'>
              <h1 className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-2 md:my-3 w-full' 
                  onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>Home</h1>
              <h1 className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-2 md:my-3 w-full' 
                  onClick={()=>scrollToSection(aboutRef)}>About</h1>
              <h1 className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-2 md:my-3 w-full' 
                  onClick={()=>scrollToSection(educationRef)}>Education</h1>
              <h1 className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-2 md:my-3 w-full' 
                  onClick={()=>scrollToSection(skillRef)}>Skills</h1>
              <h1 className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-2 md:my-3 w-full' 
                  onClick={()=>scrollToSection(contactRef)}>Contact</h1>
              <h1 className='hover:translate-x-2 duration-300 cursor-pointer hover:text-blue-400 my-2 md:my-3 w-full' 
                  onClick={()=>scrollToSection(projectRef)}>Projects</h1>
            </div>
          </div>
          
          {/* Right section */}
          <div className='w-full lg:w-1/3 px-4 lg:px-0'>    
            <h1 className='text-white font-extrabold text-xl md:text-2xl mb-2 md:mb-2'>Contact Info</h1>
            <div className='text-sm md:text-base'>
              <h1 className='flex items-center gap-2 font-medium md:font-semibold text-white my-2 md:my-3'>
                <span><IoMail className='text-xl md:text-2xl text-blue-300' /></span>
                kdineshuchb@gmail.com
              </h1>
              <h1 className='flex items-center gap-2 font-medium md:font-semibold text-white my-2 md:my-3'>
                <span><FaPhone className='text-xl md:text-2xl text-blue-300'/></span>
                +91 9500851314
              </h1>
              <h1 className='flex items-center gap-2 font-medium md:font-semibold text-white my-2 md:my-3'>
                <span><TiLocation className='text-xl md:text-2xl text-blue-300'/></span>
                Chennai, Tamil Nadu
              </h1>
              <h1 className='flex items-center gap-2 font-medium md:font-semibold text-white my-2 md:my-3'>
                <span><FaGraduationCap className='text-xl md:text-2xl text-blue-300'/></span>
                SLA Chennai Certified
              </h1>
            </div>
          </div>
        </div>
        
        {/* Divider line */}
        <span className='border w-full lg:w-4/5 mx-auto h-0.5 block text-white my-4 md:my-2'></span>
        
        {/* Copyright section */}
        <h1 className='text-white text-center p-3 text-xs md:text-sm lg:text-base px-4'>
          © 2026 Dinesh K. MERN Stack Developer | Certified from SLA Chennai
        </h1>
      </div>
      
    </>
  )
}

export default Footer;
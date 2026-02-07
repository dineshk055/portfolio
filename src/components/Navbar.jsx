import React from 'react'
import { FaReact } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({ scrollToSection, homeRef, aboutRef,educationRef,skillRef, contactRef, projectRef }) => {

   

  return (
    <>
    <div className='flex justify-between items-center h-20 bg-white shadow-lg fixed w-full z-100 '>
       <div className='flex items-center gap-2 text-2xl mx-50'>
        <h1 className='text-5xl text-blue-700'><FaReact /></h1>
        <h1 className='font-bold text-black/70'><span className='text-violet-950'>MERN</span> Dev</h1>

       </div>
       <div className='flex gap-2 mx-50'>
        
            <Link>
             <div onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
                <h1 className="px-4 py-3 text-gray-700  font-medium   text-sm   hover:text-blue-600  relative   group transition-colors duration-200 ">Home
              <span className="absolute  bottom-0  left-0  w-full  h-0.5  bg-blue-600  transform  scale-x-0  group-hover:scale-x-100  transition-transform  duration-300 origin-left "></span>
              </h1>
                </div>
            </Link>
            <Link>
             <div  onClick={()=>scrollToSection(aboutRef)}>
                <h1 className="px-4 py-3 text-gray-700  font-medium   text-sm   hover:text-blue-600  relative   group transition-colors duration-200 ">About
              <span className="absolute  bottom-0  left-0  w-full  h-0.5  bg-blue-600  transform  scale-x-0  group-hover:scale-x-100  transition-transform  duration-300 origin-left "></span>
              </h1>
                </div>
            </Link>
            <Link>
             <div  onClick={()=>scrollToSection(educationRef)}>
                <h1 className="px-4 py-3 text-gray-700  font-medium   text-sm   hover:text-blue-600  relative   group transition-colors duration-200 ">Education
              <span className="absolute  bottom-0  left-0  w-full  h-0.5  bg-blue-600  transform  scale-x-0  group-hover:scale-x-100  transition-transform  duration-300 origin-left "></span>
              </h1>
                </div>
            </Link>
            <Link>
             <div  onClick={()=>scrollToSection(skillRef)}>
                <h1 className="px-4 py-3 text-gray-700  font-medium   text-sm   hover:text-blue-600  relative   group transition-colors duration-200 ">Skills
              <span className="absolute  bottom-0  left-0  w-full  h-0.5  bg-blue-600  transform  scale-x-0  group-hover:scale-x-100  transition-transform  duration-300 origin-left "></span>
              </h1>
                </div>
            </Link>
            <Link>
             <div  onClick={()=>scrollToSection(contactRef)}>
                <h1 className="px-4 py-3 text-gray-700  font-medium   text-sm   hover:text-blue-600  relative   group transition-colors duration-200 ">Contact
              <span className="absolute  bottom-0  left-0  w-full  h-0.5  bg-blue-600  transform  scale-x-0  group-hover:scale-x-100  transition-transform  duration-300 origin-left "></span>
              </h1>
                </div>
            </Link>
            <Link>
             <div  onClick={()=>scrollToSection(projectRef)}>
                <h1 className="px-4 py-3 text-gray-700  font-medium   text-sm   hover:text-blue-600  relative   group transition-colors duration-200 ">Projects
              <span className="absolute  bottom-0  left-0  w-full  h-0.5  bg-blue-600  transform  scale-x-0  group-hover:scale-x-100  transition-transform  duration-300 origin-left "></span>
              </h1>
                </div>
            </Link>
            

        
        
        
      
        
        
       </div>
    </div>
    
    </>
  )
}

export default Navbar
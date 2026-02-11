import React, { forwardRef } from 'react'
import { MdOutlineFestival } from 'react-icons/md'

const Projects = forwardRef ((props,ref) => {
  return (
    <>
    
      <div className='w-full px-4 md:px-6 lg:px-8' ref={ref}>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 my-4 md:my-6 text-center">My Projects</h1>
        <h1 className="w-20 md:w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4 md:mb-6"></h1>
        <h1 className='text-center text-lg md:text-xl lg:text-2xl text-gray-700 px-4'>Applications built with MERN stack technologies</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-around gap-6 md:gap-8 lg:gap-0 mt-8 md:mt-10'>
          <div className='w-full md:w-4/5 lg:w-130 p-4 md:p-5 m-4 md:m-6 lg:m-10 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl duration-500 hover:scale-105 border-l-4 md:border-l-6 border-gray-900'>
            <div className='flex items-center gap-2 md:gap-3'>
              <MdOutlineFestival className='text-3xl md:text-4xl bg-blue-400 rounded-full w-12 h-12 md:w-15 md:h-15 p-2 md:p-3' />

              <h1 className='font-semibold text-gray-900 text-sm md:text-base lg:text-lg'> 
                <span className='text-xl md:text-2xl font-bold text-gray-900'>FestMate</span> 
                <span className='hidden md:inline'> - Event & Helper Management Platform</span>
                <span className='inline md:hidden'> - Event Platform</span>
              </h1>

            </div>
            <h2 className='p-4 md:p-6 font-medium md:font-semibold text-gray-800 text-sm md:text-base'>
              <span className='text-blue-600 font-bold'> FestMate </span> 
              is a web-based event management application for organizing college and community events. 
              It allows organizers to manage events and registrations, while helpers can easily discover 
              and support events. Built with modern web technologies, this project showcases my skills 
              in React, responsive UI design, and scalable application development.
            </h2>
            <div className='flex flex-wrap justify-center gap-2 md:gap-3'>
              <span className='bg-purple-300/40 text-blue-800 px-2 md:px-3 py-1 rounded-full font-medium md:font-semibold text-sm'>React.js</span>
              <span className='bg-purple-300/40 text-blue-800 px-2 md:px-3 py-1 rounded-full font-medium md:font-semibold text-sm'>Node.js</span>
              <span className='bg-purple-300/40 text-blue-800 px-2 md:px-3 py-1 rounded-full font-medium md:font-semibold text-sm'>Express</span>
              <span className='bg-purple-300/40 text-blue-800 px-2 md:px-3 py-1 rounded-full font-medium md:font-semibold text-sm'>MongoDB</span>
            </div>
            <div className='text-center bg-blue-700 w-full md:w-50 mx-auto mt-6 md:m-6 text-white font-bold p-3 md:p-4 rounded-xl md:rounded-full duration-500 hover:bg-blue-400 '>
              <a href="https://festmate.netlify.app/" className='text-sm md:text-base'>Live Demo</a>
            </div>

          </div>

          {/* for other cards*/}

        </div>

      </div>
    </>
  )
})

export default Projects
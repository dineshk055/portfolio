import React, { forwardRef } from 'react'
import { MdOutlineFestival } from 'react-icons/md'

const Projects = forwardRef ((props,ref) => {
  return (
    <>
    
      <div className='w-full ' ref={ref}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-6 text-center">My Projects</h1>
        <h1 className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></h1>
        <h1 className='text-center text-2xl text-gray-700 '>Applications built with MERN stack technologies</h1>
        <div className='flex justify-around'>
          <div className='w-130 p-5 m-10 rounded-2xl shadow-lg hover:shadow-2xl duration-500 hover:scale-105  border-l-6 border-gray-900'>
            <div className='flex items-center gap-2'>
              <MdOutlineFestival className='text-4xl bg-blue-400 rounded-full w-15 h-15 p-3 ' />

              <h1 className='font-semibold text-gray-900'> <span className='text-2xl md:text-2xl font-bold text-gray-900'>FestMate</span> - Event & Helper Management Platform</h1>

            </div>
            <h2 className='p-6 font-semibold text-gray-800'><span className='text-blue-600 font-bold'> FestMate </span> is a web-based event management application for organizing college and community events. It allows organizers to manage events and registrations, while helpers can easily discover and support events. Built with modern web technologies, this project showcases my skills in React, responsive UI design, and scalable application development.</h2>
            <div className='flex justify-around'>
              <span className='bg-purple-300/40 text-blue-800 px-3 py-1 rounded-full font-semibold '>React.js</span>
              <span className='bg-purple-300/40 text-blue-800 px-3 py-1 rounded-full font-semibold '>Node.js</span>
              <span className='bg-purple-300/40 text-blue-800 px-3 py-1 rounded-full font-semibold '>Express</span>
              <span className='bg-purple-300/40 text-blue-800 px-3 py-1 rounded-full font-semibold '>MongoDB</span>
            </div>
            <div className='text-center bg-blue-700 w-50 m-6 text-white font-bold p-4 rounded-full duration-500 hover:bg-blue-400 '>
              <a href="#" className='  rounded p-5 px-11 text-white'>Live Demo</a>
            </div>

          </div>

          


          {/* for other cards*/}

        </div>

      </div>
    </>
  )
})

export default Projects
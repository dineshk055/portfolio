import React from 'react'

const Banner = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row items-center justify-between px-4 py-8 lg:p-12 bg-blue-50'>

      {/* Left Content */}
      <div className='w-full lg:w-1/2 px-4 py-8 lg:p-8'>
        <div className='bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100'>
          <h1 className='text-lg lg:text-xl font-semibold text-gray-600 mb-2'>
            Hello, I am
          </h1>
          <h1 className='text-4xl lg:text-5xl font-bold text-blue-900 mb-6'>
            Dinesh K
          </h1>
          <h1 className='text-gray-700 text-base lg:text-lg leading-relaxed mb-8'>
            A passionate MERN Stack Developer trained at SLA Chennai. I specialize in building full-stack web applications with MongoDB, Express.js, React.js, and Node.js. Ready to create innovative digital solutions.
          </h1>

          <div className='flex flex-col sm:flex-row gap-4 mt-8'>
            
            <button
              onClick={() => window.location.href = "mailto:kdineshuchb@gmail.com"}
              className='border-2 border-blue-700 text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg'
            >
              Hire me
            </button>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className='w-full lg:w-1/2 flex justify-center items-center px-4 py-8 lg:p-8'>
        <div className='relative w-64 h-64 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl'>
          {/* Placeholder for your image */}
          {/* Instead of the gradient placeholder, use your image */}
          <img
            src="IMG_20260128_220645.png"
            alt="Dinesh K - MERN Stack Developer"
            className='w-full h-full object-cover'
          />
          {/* Decorative element */}
          <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-50'></div>
          <div className='absolute -top-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-50'></div>
        </div>
      </div>

    </div>
  )
}

export default Banner
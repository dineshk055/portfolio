import React, { forwardRef } from 'react';
import { FaDownload } from 'react-icons/fa';

const About = forwardRef ((props,ref) => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white px-4 py-12" ref={ref}>
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <div className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about my journey as a MERN Stack Developer
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Card */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-blue-600">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">🚀</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  MERN Stack Expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Completed comprehensive training at SLA Chennai, mastering the complete MERN stack ecosystem.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-6 py-3 rounded-full font-semibold">
                  <span className="text-lg">📍</span>
                  Chennai, Tamil Nadu
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-3/5">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                My Journey in 
                <span className="text-blue-600 ml-2">Web Development</span>
              </h2>
              <div className="w-16 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>

            {/* Journey Cards */}
            <div className="space-y-6 mb-10">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 leading-relaxed">
                  I completed my MERN Stack training at SLA Chennai, where I gained hands-on experience building modern web applications. The intensive program covered everything from frontend development with React to backend development with Node.js and Express, along with database management using MongoDB.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 leading-relaxed">
                  My passion for coding and problem-solving drives me to create efficient, scalable, and user-friendly applications. I enjoy turning complex problems into simple, beautiful designs.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                <p className="text-gray-700 leading-relaxed">
                  I'm currently looking for opportunities to apply my skills in a professional setting and contribute to innovative projects.
                </p>
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="/Dinesh_K_Resume .pdf"
                download
                className="group relative inline-flex items-center gap-3 bg-linear-to-r from-blue-900 to-purple-900 text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <FaDownload className="text-xl" />
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
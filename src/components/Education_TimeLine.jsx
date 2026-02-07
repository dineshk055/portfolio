import React, { forwardRef } from 'react';
import { FaSchool } from 'react-icons/fa';

const Education_TimeLine = forwardRef((props,ref) => {
  const education = [
    {
      year: "2025",
      title: "MERN Stack Development",
      institute: "SLA Institute, Chennai",
      description:
        "Hands-on experience in React, Node.js, Express, MongoDB with real-time projects.",
    },
    {
      year: "2019 - 2022",
      title: "B.Sc Chemistry",
      institute: "GTN Arts and Science College, Dindigul (Madurai Kamaraj University)",
      percentage: "Percentage: 79%",
    },
    {
      year: "2017 - 2019",
      title: "Higher Secondary (HSC)",
      institute: "M.S.P. Solai Nadar Memorial Higher Secondary School, Dindigul",
      percentage: "Percentage: 59%",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-16 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <h1 className="w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></h1>
          <p className="text-lg text-gray-600">
            My academic and professional learning journey
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-400 to-purple-400"></div>

          {education.map((item, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline Item */}
              <div className="flex flex-col md:flex-row items-center">
                {/* Left Side - Year (Desktop) */}
                <div className="hidden md:flex w-1/2 pr-12 justify-end">
                  <div className="text-right">
                    <span className="inline-block bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Center - Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 pl-16 md:pl-12">
                  {/* Year - Mobile */}
                  <div className="md:hidden mb-4">
                    <span className="inline-block bg-linear-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-lg font-semibold">
                      {item.year}
                    </span>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-6 h-6 bg-linear-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-bold"><FaSchool /></span>
                      </div>
                      <p className="font-semibold text-gray-700">
                        {item.institute}
                      </p>
                    </div>

                    <div className="bg-linear-to-r from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        {item.description || item.percentage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Education_TimeLine;
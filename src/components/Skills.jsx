import { forwardRef } from "react";
import { FaNode } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";


const Skills= forwardRef ((props,ref) => {
  const mernSkills = {
    mongodb: {
      name: 'MongoDB',
      level: 'Advanced',
      color: 'from-green-500 to-emerald-600',
      icon: <SiMongodb/>,
      description: 'NoSQL database, aggregation, indexing, data modeling'
    },
    express: {
      name: 'Express.js',
      level: 'Advanced',
      color: 'from-gray-700 to-gray-900',
      icon: <SiExpress />,
      description: 'Middleware, routing, REST APIs, authentication'
    },
    react: {
      name: 'React.js',
      level: 'Expert',
      color: 'from-cyan-500 to-blue-600',
      icon: <RiReactjsFill />,
      description: 'Components, hooks, state management, React Router'
    },
    nodejs: {
      name: 'Node.js',
      level: 'Advanced',
      color: 'from-green-600 to-lime-500',
      icon: <FaNode />,
      description: 'Event loop, streams, file system, npm packages'
    },
    additional: [
      { name: 'JavaScript/ES6+', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Git/GitHub', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'JWT Auth', level: 88 },
      { name: 'Mongoose', level: 92 },
    ]
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            MERN Stack <span className="text-blue-600">Skills</span>
          </h1>
          <span className='w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6'></span>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack development expertise with MongoDB, Express.js, React, and Node.js
          </p>
        </div>

        {/* MERN Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {Object.entries(mernSkills).filter(([key]) => key !== 'additional').map(([key, skill]) => (
            <div 
              key={key}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className={`h-2 bg-linear-to-r ${skill.color}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skill.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{skill.name}</h3>
                </div>
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                    {skill.level}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional <span className="text-blue-600">Technologies</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mernSkills.additional.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            Continuously learning and adapting to new technologies in the MERN ecosystem
          </p>
        </div>
      </div>
    </div>
  );
});

export default Skills;
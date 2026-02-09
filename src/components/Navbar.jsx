import React, { useState } from 'react'
import { FaReact, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = ({ scrollToSection, homeRef, aboutRef,educationRef,skillRef, contactRef, projectRef }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = (sectionRef) => {
        scrollToSection(sectionRef)
        setIsMenuOpen(false)
    }

    const handleHomeClick = () => {
        window.scrollTo({top:0,behavior:"smooth"})
        setIsMenuOpen(false)
    }

    return (
    <>
    <div className='flex justify-between items-center h-16 md:h-20 bg-white shadow-lg fixed w-full z-50 px-4 md:px-8 lg:px-12'>
        {/* Logo */}
        <div className='flex items-center gap-2 text-xl md:text-2xl'>
            <h1 className='text-3xl md:text-5xl text-blue-700'><FaReact /></h1>
            <h1 className='font-bold text-black/70'>
                <span className='text-violet-950'>MERN <span className='text-gray-800'>Dev</span></span> 
                
            </h1>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-1 lg:gap-2'>
            <Link>
                <div onClick={handleHomeClick}>
                    <h1 className="px-3 lg:px-4 py-2 md:py-3 text-gray-700 font-medium text-sm hover:text-blue-600 relative group transition-colors duration-200">Home
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(aboutRef)}>
                    <h1 className="px-3 lg:px-4 py-2 md:py-3 text-gray-700 font-medium text-sm hover:text-blue-600 relative group transition-colors duration-200">About
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(educationRef)}>
                    <h1 className="px-3 lg:px-4 py-2 md:py-3 text-gray-700 font-medium text-sm hover:text-blue-600 relative group transition-colors duration-200">Education
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(skillRef)}>
                    <h1 className="px-3 lg:px-4 py-2 md:py-3 text-gray-700 font-medium text-sm hover:text-blue-600 relative group transition-colors duration-200">Skills
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h1>
                </div>
            </Link>
            
            <Link>
                <div onClick={() => handleNavClick(contactRef)}>
                    <h1 className="px-3 lg:px-4 py-2 md:py-3 text-gray-700 font-medium text-sm hover:text-blue-600 relative group transition-colors duration-200">Contact
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(projectRef)}>
                    <h1 className="px-3 lg:px-4 py-2 md:py-3 text-gray-700 font-medium text-sm hover:text-blue-600 relative group transition-colors duration-200">Projects
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </h1>
                </div>
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
            className='md:hidden text-2xl text-gray-700'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
    </div>

    {/* Mobile Menu */}
    <div className={`fixed top-16 left-0 w-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
        <div className='flex flex-col py-4'>
            <Link>
                <div onClick={handleHomeClick}>
                    <h1 className="px-6 py-3 text-gray-700 font-medium text-base hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Home</h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(aboutRef)}>
                    <h1 className="px-6 py-3 text-gray-700 font-medium text-base hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">About</h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(educationRef)}>
                    <h1 className="px-6 py-3 text-gray-700 font-medium text-base hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Education</h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(skillRef)}>
                    <h1 className="px-6 py-3 text-gray-700 font-medium text-base hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Skills</h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(projectRef)}>
                    <h1 className="px-6 py-3 text-gray-700 font-medium text-base hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Projects</h1>
                </div>
            </Link>
            <Link>
                <div onClick={() => handleNavClick(contactRef)}>
                    <h1 className="px-6 py-3 text-gray-700 font-medium text-base hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200">Contact</h1>
                </div>
            </Link>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
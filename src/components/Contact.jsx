import React, { forwardRef, useState } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { IoIosSend } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import emailjs from 'emailjs-com'
import { LuSend, LuSendHorizontal } from 'react-icons/lu';

const Contact = forwardRef((props,ref) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_hkrs3qe",    // your Service ID
        "template_7t3e6wl",   // your Template ID
        formData,           // state object
        "iI5KElDtyaWqEOM4D"      // your Public Key
      );

      alert("Message sent successfully!");

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div   className="min-h-screen bg-white" ref={ref}>
      {/* Header Section */}
      <div className="pt-10 px-4" >
        <h1 className='text-4xl md:text-5xl text-center font-bold text-gray-900 mb-4'>
          Get In Touch
        </h1>
        <div className='flex justify-center mb-6'>
          <span className='w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6'></span>
        </div>
        <p className='text-center text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
          Let's discuss opportunities or project collaborations.
        </p>
      </div>

      {/* Main Content */}
      <div className='flex flex-col lg:flex-row p-4 md:p-8 lg:p-12 gap-8 lg:gap-10 max-w-6xl mx-auto'>
        
        {/* Left Side - Contact Information */}
        <div className='lg:w-1/2 w-full p-6 md:p-8 bg-white rounded-lg'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>
            Contact Information
          </h2>
          <p className='text-gray-600 mb-8'>
            I'm actively seeking opportunities as a MERN Stack Developer. Feel free to reach out for project discussions or job opportunities.
          </p>
          
          <div className='space-y-6'>
            {/* Email */}
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-3 rounded-full'>
                <MdEmail className='text-xl text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-700'>Email</h3>
                <a 
                  href="mailto:kdineshuchb@gmail.com" 
                  className='text-blue-600 hover:text-blue-800 text-base'
                >
                  kdineshuchb@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-3 rounded-full'>
                <BsTelephoneFill className='text-lg text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-700'>Phone</h3>
                <a 
                  href="tel:+919500851314" 
                  className='text-blue-600 hover:text-blue-800 text-base'
                >
                  +91 9500851314
                </a>
              </div>
            </div>

            {/* Location */}
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-3 rounded-full'>
                <HiLocationMarker className='text-xl text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-700'>Location</h3>
                <span className='text-gray-600 text-base'>
                  Chennai, Tamil Nadu
                </span>
              </div>
            </div>

            {/* Training */}
            <div className='flex items-center gap-4'>
              <div className='bg-blue-100 p-3 rounded-full'>
                <FaGraduationCap className='text-xl text-blue-600' />
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-700'>Training</h3>
                <span className='text-gray-600 text-base'>
                  SLA Chennai - MERN Stack
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className='lg:w-1/2 w-full drop-shadow-lg'>
          <div className='bg-white p-6 md:p-8 rounded-lg border border-gray-200'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
              Send Message
            </h2>
            <p className='text-gray-600 mb-6'>
              Fill the form below and I'll get back to you soon.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                  Full Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none'
                  placeholder='Your name'
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none'
                  placeholder='Your email'
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor='subject' className='block text-gray-700 font-medium mb-2'>
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none'
                  placeholder='What is this regarding?'
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 outline-none resize-none'
                  placeholder='Your message...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full flex items-center justify-center bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-black duration-500 transition-colors mt-2 '
              >
                {loading ? <LuSend className='mr-2 text-xl' /> : <LuSendHorizontal className='mr-2 text-xl' /> }
                
                 {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>

          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a 
              href="mailto:kdineshuchb@gmail.com" 
              className="flex-1 min-w-30 bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-lg text-center font-medium transition-colors text-sm"
            >
              Email Direct
            </a>
            <a 
              href="tel:+919500851314" 
              className="flex-1 min-w-30 bg-blue-50 hover:bg-blue-100 text-blue-600 p-3 rounded-lg text-center font-medium transition-colors text-sm"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
});

export default Contact;
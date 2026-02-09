import React, { forwardRef, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import emailjs from "emailjs-com";

const Contact = forwardRef((props,ref) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <div className="min-h-screen bg-white" ref={ref}>
      <div className="pt-10 px-4 text-center">
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-2'>
          Get In Touch
        </h1>
        <span className='w-24 h-1.5 bg-linear-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4'></span>
        <p className='text-gray-600 text-base md:text-lg max-w-2xl mx-auto'>
          Let's discuss opportunities or project collaborations.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row p-4 md:p-8 lg:p-12 gap-8 lg:gap-10 max-w-6xl mx-auto'>
        {/* Left Side: Contact Info */}
        <div className='lg:w-1/2 w-full p-6 md:p-8 bg-white rounded-lg shadow'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Contact Information</h2>
          <p className='text-gray-600 mb-6'>
            I'm actively seeking opportunities as a MERN Stack Developer. Reach out for collaborations or job discussions.
          </p>

          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold text-gray-700'>Email</h3>
              <a href="mailto:kdineshuchb@gmail.com" className='text-blue-600 hover:underline'>
                kdineshuchb@gmail.com
              </a>
            </div>

            <div>
              <h3 className='font-semibold text-gray-700'>Phone</h3>
              <a href="tel:+919500851314" className='text-blue-600 hover:underline'>
                +91 9500851314
              </a>
            </div>

            <div>
              <h3 className='font-semibold text-gray-700'>Location</h3>
              <span className='text-gray-600'>Chennai, Tamil Nadu</span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className='lg:w-1/2 w-full bg-white p-6 md:p-8 rounded-lg shadow'>
          <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className='block text-gray-700 mb-1'>Full Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Your name'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
              />
            </div>

            {/* Email */}
            <div>
              <label className='block text-gray-700 mb-1'>Email Address</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Your email'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200'
              />
            </div>

            {/* Message */}
            <div>
              <label className='block text-gray-700 mb-1'>Message</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder='Your message...'
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 resize-none'
              />
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full flex items-center justify-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors'
            >
              <IoIosSend className='mr-2 text-xl' />
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default Contact;

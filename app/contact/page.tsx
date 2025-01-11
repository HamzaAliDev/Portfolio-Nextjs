import { Raleway } from 'next/font/google';
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5';

const raleway = Raleway({
  subsets: ['latin'],
});
export default function Contact() {
  return (
    <>
      <section className='bg-gray-100 hero-section'>
        <div className='container mx-auto px-4 lg:px-24'>
          <h2 className={` text-3xl mt-20 font-bold mb-2 relative group ${raleway.className}`}>
            Contact Me
            <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-40"></span>
          </h2>
          <div className="flex flex-wrap justify-around lg:justify-around sm:justify-start items-center sm:content-start mt-10 gap-y-2">
            <div className="flex w-full sm:w-auto ">
              <div className="contact-icon-container">
                <IoIosMail size={30} color="#d73e0f" />
              </div>
              <i className="ms-2 text-lg mt-1">hamzamashooq492@gmail.com</i>
            </div>
            <div className="flex w-full sm:w-auto">
              <div className="contact-icon-container">
                <IoCall size={27} color="#d73e0f" />
              </div>
              <i className="ms-2 text-lg">+923037740991</i>
            </div>
            <div className="flex w-full sm:w-auto">
              <div className="contact-icon-container">
                <FaLocationDot size={25} color="#d73e0f" />
              </div>
              <i className="ms-2 text-lg">Green Town Faisalabad,<br /> Pakistan</i>
            </div>
          </div>



          {/* map and form section */}
          <div className='container flex flex-col md:flex-row align-center justify-center my-10'>
            {/* google map */}
            <div className='w-full md:w-1/2 '>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13604.123456789!2d73.1234567!3d31.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190123456789!2sGreen%20Town%2C%20Faisalabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1611234567890!5m2!1sen!2s"
                width="100%"
                height="480"
                style={{ border: 0 }}
                // allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className='w-full md:w-1/2'>
           
              <form className='bg-white shadow-md  px-8 pt-6 pb-8 mb-20'>

                <h2 className='text-4xl mb-10'>Interested to work together? <br /> Let's talk</h2>
              
                <div className="flex gap-5 mb-4">
                  <div className="form__group field w-full" style={{ maxWidth: 240 }}>
                    <input type="input" className="form__field" placeholder="Name" />
                    <label htmlFor="name" className="form__label">Name</label>
                  </div>
                  <div className="form__group field w-full" style={{ maxWidth: 270 }}>
                    <input type="input" className="form__field" placeholder="Email" />
                    <label htmlFor="email" className="form__label">Email</label>
                  </div>
                </div>

                <div className="form__group field w-full mb-4">
                  <input type="input" className="form__field" placeholder="Subject" />
                  <label htmlFor="subject" className="form__label">Subject</label>
                </div>

                <div className="form__group field w-full mb-4">
                  <textarea className="form__field" placeholder="Message" rows={2}></textarea>
                  <label htmlFor="message" className="form__label">Message</label>
                </div>


                <div className='flex items-center justify-end'>
                  <button
                    className='bg-custommain text-white font-bold py-2 px-4 rounded hero-btn-resume'
                    type='button'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

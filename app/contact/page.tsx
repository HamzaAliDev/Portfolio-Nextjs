"use client";
import React, { useState } from 'react'
import { Raleway } from 'next/font/google';
import { FaLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import { IoCall } from 'react-icons/io5';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase';
import { toast, Toaster } from 'sonner';
import Loader from '@/components/Loader';

const raleway = Raleway({
  subsets: ['latin'],
});
interface ContactProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}
const initialState: ContactProps = { name: '', email: '', subject: '', message: '' };
export default function Contact() {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false); 

  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let { name, email, subject, message } = state;
    name = name.trim();
    email = email.trim();
    subject = subject.trim();
    message = message.trim();

    if (!name || !email || !subject || !message) return toast.error('All fields are required');

    const data = {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),

    }

    // console.log("data", data);
    setLoading(true);

    try {
      const newDocRef = await doc(collection(firestore, "messages"));

      // Get the generated document ID
      const documentId = newDocRef.id;

      // Set the document data with the document ID included
      await setDoc(newDocRef, {
        ...data,
        id: documentId,  // Include the ID in the document data
      });

      toast.success('Message Sent Successfully');
    } catch (e) {
      console.error("Error adding document: ", e);
      // alert('Error sending message');
      toast.error('Error sending message');
    } finally {
      setState(initialState);
      setLoading(false);

    }


  }

  return (
    <>
      <section className='bg-gray-100 hero-section'>
        <div className='container mx-auto px-4 lg:px-24'>
          <h2 className={` text-3xl mt-20 font-bold mb-2 relative group ${raleway.className}`}>
            Contact Me
            <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-40"></span>
          </h2>
          <div className="flex flex-wrap justify-around lg:justify-around sm:justify-start items-center sm:content-start mt-10 gap-y-2 mb-10">
            <div className="flex w-full sm:w-auto me-3">
              <div className="contact-icon-container">
                <IoIosMail size={60} color="#d73e0f" />
              </div>
              <div className='ms-3'>
                <p className='font-semibold '>Email:</p>
                <a href="mailto:hamzamashooq492@gmail.com" className="text-lg mt-1 hover:text-custommain">hamzamashooq492@gmail.com</a>
              </div>
            </div>
            <div className="flex w-full sm:w-auto me-3">
              <div className="contact-icon-container">
                <IoCall size={52} color="#d73e0f" />
              </div>
              <div className='ms-3'>
                <p className='font-semibold '>Phone:</p>
                <a href="tel:+923037740991" className="text-lg hover:text-custommain">+923037740991</a>
              </div>
            </div>
            <div className="flex w-full sm:w-auto me-3">
              <div className="contact-icon-container">
                <FaLocationDot size={50} color="#d73e0f" />
              </div>
              <div className='ms-3'>
                <p className='font-semibold '>Address: </p>
                <a href="https://www.google.com/maps?q=Green+Town+Faisalabad+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg hover:text-custommain">Green Town Faisalabad,<br /> Pakistan</a>
              </div>
            </div>
          </div>



          {/* map and form section */}
          <div className='container flex flex-wrap flex-col md:flex-row align-center justify-center '>
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

                <div className="flex gap-5 mb-4 flex-row inputs-container">
                  <div className="form__group field w-full" >
                    <input type="input" className="form__field" placeholder="Name" name='name' value={state.name} onChange={handleChange} />
                    <label htmlFor="name" className="form__label">Name</label>
                  </div>
                  <div className="form__group field w-full"   >
                    <input type="input" className="form__field" placeholder="Email" name='email' value={state.email} onChange={handleChange} />
                    <label htmlFor="email" className="form__label">Email</label>
                  </div>
                </div>

                <div className="form__group field w-full mb-4">
                  <input type="input" className="form__field" placeholder="Subject" name='subject' value={state.subject} onChange={handleChange} />
                  <label htmlFor="subject" className="form__label">Subject</label>
                </div>

                <div className="form__group field w-full mb-4">
                  <textarea className="form__field" placeholder="Message" rows={2} name='message' value={state.message} onChange={handleChange}></textarea>
                  <label htmlFor="message" className="form__label">Message</label>
                </div>


                <div className='flex items-center justify-end'>
                  <button
                    className='bg-custommain text-white font-bold py-2 px-2 rounded hero-btn-resume h-10 w-32 flex items-center justify-center' 
                    type='button' onClick={handleSubmit}
                  >
                     {loading ? <Loader /> : 'Send Message'}
                  </button>
                </div>
              </form>
              <Toaster  richColors/>
            </div>
          </div>
        </div>
      </section>
      <section>
        
      </section>
    </>
  )
}

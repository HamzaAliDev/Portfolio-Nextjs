"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import { Raleway, Roboto } from 'next/font/google';
import { HiPaintBrush } from 'react-icons/hi2';
import { IoDesktopOutline } from 'react-icons/io5';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { RiFirebaseFill, RiNextjsFill } from 'react-icons/ri';
import { SiAntdesign, SiCplusplus, SiExpress, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { FaBootstrap, FaBrain, FaCss3Alt, FaGithub, FaHtml5, FaLaptopCode, FaNodeJs, FaPython, FaReact, FaSass } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandReactNative, TbDeviceMobileCode, TbSettingsCode } from 'react-icons/tb';
import blob1 from '../../public/assets/images/blob1.png';
import blob2 from '../../public/assets/images/blob2.png';
import blob3 from '../../public/assets/images/blob3.png';
import blob4 from '../../public/assets/images/blob4.png';
import blob5 from '../../public/assets/images/blob5.png';
import blob6 from '../../public/assets/images/blob6.png';
import aboutImg from '../../public/assets/images/servicesPic.png';
import chooseImg from '../../public/assets/images/choose.png';
import Image, { StaticImageData } from 'next/image';


const raleway = Raleway({
  subsets: ['latin'],
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
});
// Define the type for each service item
interface ServiceItem {
  title: string;
  description: string;
  img: StaticImageData |string;  // Path to the image
  dataIcon: React.ComponentType;  // React component for the icon
}

const data: ServiceItem[] = [{
  title: "Web Development",
  description: "I build responsive, Full Stack Development, ensuring seamless user experiences across all devices.",
  img: blob1,
  dataIcon: FaLaptopCode,
}, {
  title: "Android App Development",
  description: "I create mobile apps with intuitive designs and smooth functionality for Android platforms.",
  img: blob2,
  dataIcon: TbDeviceMobileCode,
}, {
  title: "UI/UX Design",
  description: "I design user-friendly and visually appealing interfaces, focusing on seamless and enjoyable user experiences.",
  img: blob3,
  dataIcon: HiPaintBrush,
}, {
  title: "AI Based Solutions",
  description: "Artificial Intelligence based model integration with Web & Mobile Apps.",
  img: blob4,
  dataIcon: FaBrain,
}, {
  title: "API Development & Integration",
  description: "I develop and integrate APIs to enhance the functionality of web and mobile applications.",
  img: blob5,
  dataIcon: TbSettingsCode,
},
{
  title: "Progressive Web Apps",
  description: "I create Progressive Web Apps that offer native app-like experiences on the web.",
  img: blob6,
  dataIcon: IoDesktopOutline,
}
]
export default function Services() {
  useEffect(() => {
        AOS.init();
      }, []);
  return (
    <>
      {/* hero section */}
      <section>
        <div data-aos="fade-up" className="flex  items-center justify-center  bg-gray-100 hero-section">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
            {/* Left section (text + buttons) */}
            <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
              <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                Our Services
                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-44"></span>
              </h2>
              <p className=' text-center '>
                <i >&quot;Building the Future of Web and Mobile Development&quot;</i>
              </p>
              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                I offer a wide range of web and mobile development services tailored to bring your ideas to life. Whether you&apos;re looking to build
                a robust website, an intuitive mobile app, or enhance your digital presence, I&apos;m here to provide innovative, user-centric solutions.
              </p>
              <div className="">
                <Link href="/contact" passHref>
                  <button className="hero-btn-resume text-white font-bold py-2 px-5 rounded">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>

            {/* Right section (image with SVG background) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative">
              <Image src={aboutImg.src} className='rounded-3xl' alt='about-hero' width={350} height={350} />

            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center bg-gray-100 ">
        <div className="container">
          {/* Services Section */}
          <section className=" py-10">
            <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
              {/* Title */}
              <h2 className={`text-3xl mt-5 font-bold mb-10 inline-block relative group ${raleway.className}`}>
                What I Offer
                <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-44"></span>
              </h2>

              {/* Highlights List */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  ${roboto.className}`}>
                {
                  data.map((item, index) => {
                    return (
                      <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center service-card "  >
                        <div className="text text-5xl mb-4 blob-background-container">
                          <div className='blob-background  flex items-center justify-center' style={{ backgroundImage: `url(${typeof item.img === "string" ? item.img : item.img.src})` }}>
                            <item.dataIcon />
                          </div>

                        </div>
                        <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    );
                  })
                }

              </div>
            </div>
          </section>

          {/* tools and Technologies section */}
          <section className=' py-10'>
            <div data-aos="zoom-in" className='container mx-auto px-4 lg:px-24'>
              <h2 className={`text-3xl mt-5 font-bold  inline-block relative group ${raleway.className}`}>
                Tools & Technologies
                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-72"></span>
              </h2>

              <div className='mt-16 flex flex-wrap gap-4 justify-center items-center'>
                <div className='tool-card  '>
                  <FaHtml5 style={{ color: '#e34c26' }} />
                </div>
                <div className='tool-card  '>
                  <FaCss3Alt style={{ color: '#264de4' }} />
                </div>
                <div className='tool-card  '>
                  <TbBrandJavascript style={{ color: '#f0db4f' }} />
                </div>
                <div className='tool-card  '>
                  <SiTypescript style={{ color: '#007acc' }} />
                </div>
                <div className='tool-card  '>
                  <SiCplusplus style={{ color: '#5E97D0' }} />
                </div>
                <div className='tool-card  ' >
                  <FaPython style={{ color: '#4584B6' }} />
                </div>
                <div className='tool-card  '>
                  <FaReact style={{ color: '#61DBFB' }} />
                </div>
                <div className='tool-card  '>
                  <FaBootstrap style={{ color: '#563d7c' }} />
                </div>
                <div className='tool-card  '>
                  <FaSass style={{ color: '#cc6699' }} />
                </div>
                <div className='tool-card  '>
                  <SiAntdesign style={{ color: '#1677ff' }} />
                </div>
                <div className='tool-card  '>
                  <SiTailwindcss style={{ color: '#38BDF8' }} />
                </div>
                <div className='tool-card  '>
                  <RiNextjsFill />
                </div>
                <div className='tool-card  '>
                  <TbBrandReactNative style={{ color: '#61DBFB' }} />
                </div>
                <div className='tool-card  '>
                  <FaNodeJs style={{ color: '#3C873A' }} />
                </div>
                <div className='tool-card  '>
                  <SiMongodb style={{ color: ' #3FA037' }} />
                </div>
                <div className='tool-card  '>
                  <SiExpress />
                </div>
                <div className='tool-card  '>
                  <RiFirebaseFill style={{ color: '#FFC400' }} />
                </div>
                <div className='tool-card  '>
                  <FaGithub />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gray-100 py-10">
            <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
              {/* Title */}
              <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
                Why Choose me ?
                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-60"></span>
              </h2>

              <div className={`flex align-center justify-around choose-section bg-gray-700  ${roboto.className}`}>
                <div className=" flex flex-col p-6 justify-center gap-2">
                  <div className='flex align-center '>
                    <div className='bullet-point text-white'>
                      <IoIosArrowRoundForward size={40} />
                    </div>
                    <div className='text-white'>
                      <h4 className='ms-3 mt-1 text-xl'>Delivering innovative web and mobile solutions.</h4>
                    </div>
                  </div>
                  <div className='flex align-center'>
                    <div className='bullet-point text-white'>
                      <IoIosArrowRoundForward size={40} />
                    </div>
                    <div className='text-white'>
                      <h4 className='ms-3 mt-1 text-xl'>Offering complete end-to-end services.</h4>
                    </div>
                  </div>
                  <div className='flex align-center'>
                    <div className='bullet-point text-white'>
                      <IoIosArrowRoundForward size={40} />
                    </div>
                    <div className='text-white'>
                      <h4 className='ms-3 mt-1 text-xl'>Providing ongoing support and maintenance.</h4>
                    </div>
                  </div>
                  <div className='flex align-center'>
                    <div className='bullet-point text-white'>
                      <IoIosArrowRoundForward size={40} />
                    </div>
                    <div className='text-white'>
                      <h4 className='ms-3 mt-1 text-xl'>Collaborating with teams to achieve goals.</h4>
                    </div>
                  </div>
                  <div className='flex align-center'>
                    <div className='bullet-point text-white'>
                      <IoIosArrowRoundForward size={40} />
                    </div>
                    <div className='text-white'>
                      <h4 className='ms-3 mt-1 text-xl'>Demonstrating leadership and proactive support.</h4>
                    </div>
                  </div>
                </div>
                <div className='choose-img-container'>
                  <Image src={chooseImg.src} alt='about-hero' width={350} height={350}  className='z-10'/>
                </div>
              </div>


            </div>
          </section>
        </div>
      </div>
    </>
  )
}


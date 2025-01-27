"use client";
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa';
import { Roboto, Raleway } from '@next/font/google';
import aboutImg from '../../public/assets/images/about pic.png';
import missionImg from '../../public/assets/images/mission.png';
import Contact from '@/components/Contact';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
});
const raleway = Raleway({
  subsets: ['latin'],
});

export default function About() {
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
                About Me
                <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-36"></span>
              </h2>
              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                I’m a Web and Mobile App Developer from Faisalabad, Pakistan, with expertise in building high-performing, user-friendly websites and applications.<br /><br /> I specialize in crafting innovative digital solutions that
                combine functionality, aesthetics, and seamless user experiences. Problem-solving and transforming ideas into impactful designs are at the core of my passion.
              </p>
              <div className="">
                <Link href="/resume" passHref>
                  <button className="hero-btn-resume text-white font-bold py-2 px-4 rounded">
                    Download Resume
                  </button>
                </Link>
              </div>
            </div>

            {/* Right section (image with SVG background) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative">
              <img src={aboutImg.src} className='rounded-3xl' alt='about-hero' width={350} />

            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-10">
        <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
          {/* Title */}
          <h2 className={`text-3xl font-bold mb-6 inline-block relative group ${raleway.className}`}>
            Resume
            <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-28"></span>
          </h2>

          <article className={`resume bg-gray-50 p-6 rounded-lg shadow-lg ${raleway.className}`}>
            <section className="timeline">
              <div className="title-wrapper flex items-center gap-2 ">
                <div className="icon-box bg-customprimary text-white p-2 rounded-full">
                  <FaBookOpen size={25} />
                </div>
                <h3 className="text-xl font-semibold text-gray-700">Education</h3>
              </div>

              <ol className="timeline-list ml-12">
                <li className="timeline-item relative mb-6 ">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2 ">
                    SMIT Faisalabad
                  </h4>
                  <span className="text-custommain font-medium">2024</span>
                  <p className="text-gray-500 mt-2">
                    I successfully completed the Web and Mobile App Development course at SMIT Faisalabad, under the guidance of exceptional instructors.
                    Where I gained extensive knowledge and hands-on experience in building high-quality web and mobile applications.
                  </p>
                </li>

                <li className="timeline-item relative mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    GC University Faisalabad
                  </h4>
                  <span className="text-custommain font-medium">2022 — Present</span>
                  <p className="text-gray-500 mt-2">
                    I am currently pursuing a Computer Science degree at GC University Faisalabad, where I have developed a strong foundation
                    in computer science principles and practical applications.
                  </p>
                </li>

                <li className="timeline-item relative">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    KIPS Faisalabad
                  </h4>
                  <span className="text-custommain font-medium">2020 — 2022</span>
                  <p className="text-gray-500 mt-2">
                    I successfully completed my FSc Pre-Medical from KIPS College Faisalabad, achieving
                    an outstanding academic performance with a remarkable 96% score.
                  </p>
                </li>
              </ol>
            </section>
          </article>
        </div>
      </section>

      {/* Vision & Mission section */}
      <section className="bg-gray-100">
        <div data-aos="fade-up" className="bg-gray-100 py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
            {/* Right section (image with SVG background) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative">
              <img src={missionImg.src} className='rounded-3xl' alt='about-hero' width={360} />

            </div>
          
            {/* Left section (text + buttons) */}
            <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
              <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                Vision & Mission
                <span className="text-underline ms-1 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-56"></span>
              </h2>
              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                My mission is to craft innovative and user-centric digital solutions that solve real-world problems while delivering exceptional user experiences.
                Driven by creativity and precision, I strive to bridge the gap between technology and usability, ensuring every project makes a meaningful impact.
              </p>
              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                I believe in leveraging the latest technologies and creative strategies
                to deliver solutions that not only meet expectations but exceed them, leaving a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact section */}
      <Contact titlePre="Want to " highlight="Collaborate " titlePost="or just say hi?" />

    </>
  )
}

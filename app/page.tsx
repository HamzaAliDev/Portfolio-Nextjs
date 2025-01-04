"use client"

import Image from "next/image";
import Link from "next/link";
import profilePic from "../public/assets/images/profile-bg-reomve.png";
import { Roboto, Rubik, Raleway } from '@next/font/google';
import { FaCode, FaPaintBrush, FaChartLine, FaArrowRight, FaEye } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import project2 from "../public/assets/images/project2.png";
import project1 from "../public/assets/images/project1.png";
import project3 from "../public/assets/images/project3.png";
import project4 from "../public/assets/images/project4.png";
import project5 from "../public/assets/images/project5.png";
import project6 from "../public/assets/images/project6.png";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'], 
});
const rubik = Rubik({
  subsets: ['latin'], 
  weight: ['500'], 
});

const raleway = Raleway({
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
    {/* hero section */}
      <section>
        <div className="flex  items-center justify-center  bg-gray-100 hero-section">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
            {/* Left section (text + buttons) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-8 lg:px-20">
              <p className={`text-xl hellow-text ${rubik.className}`}>Hello!</p>
              <h1 className={`text-6xl font-semibold text-center md:text-left ${rubik.className}`}>I'm {' '}
                <span >
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={['Ali Hamza', 'a Developer']}
                    loop={Infinity}
                    cursor
                    // cursorStyle='_'
                    typeSpeed={90}
                    deleteSpeed={80}
                    delaySpeed={3000}
                    cursorColor="#d73e0f"
                  />
                </span>
              </h1>
              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                I design and develop impactful web and mobile solutions with a focus on seamless user experiences and user-centric design.
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start ">
                <Link href="/resume" passHref>
                  <button className="hero-btn-resume text-white font-bold py-2 px-4 rounded">
                    Download Resume
                  </button>
                </Link>
                <button className="hero-btn-quote text-white font-bold py-2 px-4 rounded">
                  Get a Free Quote
                </button>
              </div>
            </div>

            {/* Right section (image with SVG background) */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative">
              {/* SVG background */}
              <svg
                viewBox="0 0 500 500"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                id="blobSvg"
                className="absolute inset-0 z-0"
              >
                <path
                  id="blob"
                  d="M385.5,299.5Q349,349,299.5,380Q250,411,172.5,408Q95,405,82,327.5Q69,250,82.5,173Q96,96,173,64Q250,32,304,87Q358,142,390,196Q422,250,385.5,299.5Z"
                  fill="#219ebc"
                ></path>
              </svg>

              {/* Image on top of SVG */}
              <div className="relative z-10 mt-4">
                <div className="">
                  <Image
                    src={profilePic}
                    alt="Picture of the author"
                    width={350}
                    height={350}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* highlight section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-24">
          {/* Title */}
          <h2 className={`text-3xl font-bold mb-6 relative group ${raleway.className}`}>
            What I Do Best
            <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-52"></span>
          </h2>

          {/* Highlights List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Highlight 1 */}
            <div className="bg-white shadow-lg rounded-lg p-7 flex flex-col items-center text-center">
              <div className="text-blue-500 text-5xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-lg font-semibold mb-2">Web and Mobile App Development</h3>
              <p className="text-gray-600">Developing high-quality web and mobile applications tailored to meet the specific needs of users</p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-green-500 text-5xl mb-4">
                <FaPaintBrush />
              </div>
              <h3 className="text-lg font-semibold mb-2">User-Centric Designs</h3>
              <p className="text-gray-600">Designing intuitive and seamless user interfaces that prioritize delivering smooth and effortless interactions</p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-yellow-500 text-5xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-lg font-semibold mb-2">Impactful Solutions</h3>
              <p className="text-gray-600">create digital solutions that help solve complex problems, increase efficiency, and enhance user satisfaction,</p>
            </div>
          </div>
        </div>
      </section>

    {/* project section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-24">
          {/* Title */}
          <h2 className={`text-3xl font-bold mb-6 relative group ${raleway.className}`}>
            Recent Projects
            <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-52"></span>
          </h2>
          <div className="flex flex-wrap">
            {/* Left Column (col-md-4) */}
            <div className="w-full md:w-2/5 p-2">
              <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                  style={{ backgroundImage: `url(${project1.src})` }}
                ></div>
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>
                {/* Text */}
                <div className="text text-center p-4 z-10 text-content">
                  <h3 className="text-white text-lg font-semibold">
                    <a href="#">
                      <FaEye size={30} />
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column (col-md-8) */}
            <div className="w-full md:w-3/5 p-2">
              <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                  style={{ backgroundImage: `url(${project2.src})` }}
                ></div>
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>
                {/* Text */}
                <div className="text text-center p-4 z-10 text-content">
                  <h3 className="text-white text-lg font-semibold">
                    <a href="#">
                      <FaEye size={30} />
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Left Column (col-md-6) */}
            <div className="w-full md:w-1/2 p-2">
              <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                  style={{ backgroundImage: `url(${project3.src})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>
                {/* Text */}
                <div className="text text-center p-4 z-10 text-content">
                  <h3 className="text-white text-lg font-semibold">
                    <a href="#">
                      <FaEye size={30} />
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Left Column (col-md-6) */}
            <div className="w-full md:w-1/2 p-2">
              <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                  style={{ backgroundImage: `url(${project4.src})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>
                {/* Text */}
                <div className="text text-center p-4 z-10 text-content">
                  <h3 className="text-white text-lg font-semibold">
                    <a href="#">
                      <FaEye size={30} />
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Column (col-md-8) */}
            <div className="w-full md:w-3/5 p-2">
              <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                  style={{ backgroundImage: `url(${project5.src})` }}
                ></div>
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>
                {/* Text */}
                <div className="text text-center p-4 z-10 text-content">
                  <h3 className="text-white text-lg font-semibold">
                    <a href="#">
                      <FaEye size={30} />
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            {/* Left Column (col-md-4) */}
            <div className="w-full md:w-2/5 p-2">
              <div className="relative project-img bg-cover bg-center h-72 flex justify-center items-center group overflow-hidden">
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transform scale-100 transition-transform duration-500 ease-in-out group-hover-image"
                  style={{ backgroundImage: `url(${project6.src})` }}
                ></div>
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black h-full overlay"></div>
                {/* Text */}
                <div className="text text-center p-4 z-10 text-content">
                  <h3 className="text-white text-lg font-semibold">
                    <a href="#">
                      <FaEye size={30} />
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* contact section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 lg:px-24">
          {/* Title */}
          <h2 className={`text-3xl font-bold mb-6 relative group ${raleway.className}`}>
            Contact Me
            <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-40"></span>
          </h2>

          <div className="home-contact-section">
            <div className="contact-overlay flex items-center justify-center flex-col space-y-6 lg:px-16 px-4">
              {/* Title and Call to Action */}
              <h2 className={`text-5xl font-extrabold mb-6 text-center text-white ${raleway.className}`}>
                Let's <span className="font-extrabold build-text">Build</span> Something Amazing Together.
              </h2>

              <div className="mt-6">
                <button className="relative text-xl font-semibold btn-default flex items-center justify-center overflow-hidden group">
                  <span className="absolute inset-0 bg-gray-100 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                  <span className="relative z-10 group-hover:text-customprimary transition-colors duration-500 ease-in-out">
                    Contact Me
                  </span>
                  <FaArrowRight className="ms-2 mt-1 transform -rotate-45 transition-transform duration-500 ease-in-out group-hover:rotate-0  group-hover:text-customprimary  relative z-10" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

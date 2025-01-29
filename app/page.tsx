"use client"

import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";
import Link from "next/link";
import { Roboto, Rubik, Raleway } from '@next/font/google';
import { FaCode, FaPaintBrush, FaChartLine, FaEye, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter'
import profilePic from "../public/assets/images/profile-bg-reomve.png";
import project2 from "../public/assets/images/project2.png";
import project1 from "../public/assets/images/project1.png";
import project3 from "../public/assets/images/project3.png";
import project4 from "../public/assets/images/project4.png";
import project5 from "../public/assets/images/project5.png";
import project6 from "../public/assets/images/project6.png";
import Contact from "../components/Contact";
import Modal from "@/components/Modal";

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

const randomQuotes = [
  "Design is not just what it looks like, it's how it works. – Steve Jobs",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "The best way to predict the future is to invent it. – Alan Kay",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
  "Good code is its own best documentation. – Steve McConnell",
  "Opportunities don't happen. You create them. – Chris Grosser",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
  "If you can change your mind, you can change your life. – William James",
  "Make each day your masterpiece. – John Wooden",
  "Be so good they can't ignore you. – Steve Martin",
  "Success is a Journey, Not a Destination. – Ben Sweetland",
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    const selectedQuote = randomQuotes[randomIndex];

    // Split the selected quote into quote text and author
    const [quoteText, authorName] = selectedQuote.split(" – ");

    setQuote(quoteText);
    setAuthor(authorName);
  };

  return (
    <>
      {/* hero section */}
      <section>
        <div data-aos="fade-up" className="flex  items-center justify-center  bg-gray-100 hero-section">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4  md:space-y-0">
            {/* Left section (text + buttons) */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center space-y-8 lg:px-20">
              <p className={`text-xl hellow-text ${rubik.className}`}>Hello!</p>
              <h1 className={`text-6xl font-semibold text-center md:text-left ${rubik.className}`}>I'm Ali Hamza</h1>
              <p className="type-writer-text text-xl">
                <i>
                  <Typewriter
                    words={['MERN Stack Developer', 'UI / UX Designer', 'Android App Developer']}
                    loop={Infinity}
                    cursor
                    // cursorStyle='_'
                    typeSpeed={90}
                    deleteSpeed={80}
                    delaySpeed={3000}
                    cursorColor="#d73e0f"
                  />
                </i>
              </p>

              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                I design and develop impactful web and mobile solutions with a focus on seamless user experiences and user-centric design.
              </p>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start ">
                <Link href="/resume.pdf" download="Hamza_Resume.pdf" passHref>
                  <button className="hero-btn-resume text-white font-bold py-2 px-4 rounded">
                    Download Resume
                  </button>
                </Link>
                <button className="hero-btn-quote text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    getRandomQuote();
                    setIsModalOpen(true);
                  }}>
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
        <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
          {/* Title */}
          <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
            What I Do Best
            <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-52"></span>
          </h2>

          {/* Highlights List */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${roboto.className}`}>
            {/* Highlight 1 */}
            <div className="bg-white shadow-lg rounded-lg p-7 flex flex-col items-center text-center">
              <div className="text-blue-500 text-5xl mb-4">
                <FaCode />
              </div>
              <h3 className="text-xl font-medium mb-2">Web and Mobile App Development</h3>
              <p className="text-gray-600">Developing high-quality web and mobile applications tailored to meet the specific needs of users</p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-green-500 text-5xl mb-4">
                <FaPaintBrush />
              </div>
              <h3 className="text-xl font-medium mb-2">User-Centric Designs</h3>
              <p className="text-gray-600">Designing intuitive and seamless user interfaces that prioritize delivering smooth and effortless interactions</p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
              <div className="text-yellow-500 text-5xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-medium mb-2">Impactful Solutions</h3>
              <p className="text-gray-600">create digital solutions that help solve complex problems, increase efficiency, and enhance user satisfaction,</p>
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
      <section className="bg-gray-100 py-10">
        <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
          {/* Title */}
          <h2 className={`text-3xl font-bold mb-10 inline-block relative group ${raleway.className}`}>
            Archived Projects
            <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded  h-1  w-12 transition-all duration-500 group-hover:w-60"></span>
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
                    <a href="https://foodhub-hotel.web.app/" target="_blank" rel="noreferrer">
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
      <Contact titlePre={"Let's "} highlight={"Build"} titlePost={" Something Amazing Together."} />

      {/* modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Quote">
        <div className="p-6 flex items-center justify-center space-x-4">
          {quote ? (
            <>
              <FaQuoteLeft color="#d73e0f" size={40} />
              <p className={`text-3xl font-normal text-center ${roboto.className}`}> {quote} </p>
              <FaQuoteRight color="#d73e0f" size={40} />
            </>
          ) : (
            <p className="text-xl font-medium text-center">Loading...</p>
          )}
        </div>
          <p className="text-md text-center italic mt-2">- {author}</p>
      </Modal>

    </>
  );
}

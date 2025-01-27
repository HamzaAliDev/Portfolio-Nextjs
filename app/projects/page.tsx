"use client";
import { useEffect, useState, useRef } from "react";
import { Raleway, Roboto } from "@next/font/google";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import AOS from 'aos';
import CountUp from "react-countup";
import projectPic from "../../public/assets/images/projectPic01.png";
import project01 from "../../public/assets/images/proj01.jpg";
import project02 from "../../public/assets/images/travel.jpg";
import project03 from "../../public/assets/images/cozera.jpg";
import project04 from "../../public/assets/images/event.webp";
import project05 from "../../public/assets/images/postify.avif";
import project06 from "../../public/assets/images/todo.jpg";
import Contact from "@/components/Contact";
import Modal from "@/components/Modal";

const raleway = Raleway({
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const data = [
  {
    title: "FoodHub",
    description: "A web app for easy food ordering and table booking, streamlining the dining experience.",
    image: project01,
    mtitle: "FoodHub Restaurant App",
    mdescription: "This is a comprehensive food ordering and table reservation application designed for a restaurant. The app provides a seamless experience for users to browse menus, place orders, add items to their wishlist, and book tables. It also features a powerful admin dashboard for restaurant staff to manage orders, reservations, and customer interactions efficiently.",
    techstack: ["React","sass", "Bootstrap", "Antd", "Firebase", "Authentication"],
    githubUrl: "https://github.com/HamzaAliDev/SMIT-MAD-REACT-Assignment03.git",
    url: "https://foodhub-hotel.web.app",
  },
  {
    title: "Travel Dot.",
    description: "A web app for tourists to find the best travel destinations and plan their trips.",
    image: project02,
    mtitle: "Travel Dot Tourist App",
    mdescription: "Travel Dot is a dynamic tourist web app that allows users to plan and book their dream tours to international destinations. The app offers a seamless experience for browsing popular tourist spots, booking hotels, and exploring user testimonials and travel blogs for inspiration. Travel Dot aims to simplify travel planning and provide users with all the essential tools for an unforgettable journey.",
    techstack: ["React","sass", "Bootstrap", "Antd", "Firebase", "Authentication"],
    githubUrl: "https://github.com/HamzaAliDev/Travel-Dot.git",
    url: "working on it",
  },
  {
    title: "Cozera",
    description: "A web app for online shopping, providing a seamless experience for customers.",
    image: project03,
    mtitle: "Cozera E-commerce App",
    mdescription: "Cozera is an e-commerce web application designed to provide users with a seamless online shopping experience. The app features a user-friendly interface for browsing products, adding items to the cart, and making secure payments. With a wide range of product categories and advanced search filters, Cozera aims to cater to the diverse needs of online shoppers.",
    techstack: ["React","sass", "Bootstrap", "Antd", "Firebase", "Authentication"],
    githubUrl: "https://github.com/HamzaAliDev/Cozera-store.git",
    url: "working on it",
  },
  {
    title: "Event App",
    description: "Android app providing a platform for event management and ticket booking.",
    image: project04,
    mtitle: "Event Management App",
    mdescription: "Event Management App is an Android application designed to streamline the process of managing and organizing events. The app allows users to efficiently handle event details, update event information, and manage event bookings. With secure user authentication. Whether it's booking an event, viewing event details, or managing updates, this app provides an all-in-one solution for event management.",
    techstack: ["React Native", "NodeJs", "Express", "Mongodb","Axios"],
    githubUrl: "https://github.com/HamzaAliDev/SMIT-MERN-Hackathon.git",
    url: "Android app on working",
  },
  {
    title: "Postify",
    description: "A social media android app for sharing posts, photos with friends and family.",
    image: project05,
    mtitle: "Postify Mini Social Media App",
    mdescription: "Postify is a social media app designed for users to share posts, photos, and updates with friends and family. The app features a user-friendly interface for creating posts, uploading images, and interacting with other users through comments and likes. Postify aims to provide a safe and engaging platform for users to connect and share their stories.",
    techstack: ["React Native", "NodeJs", "Express", "Mongodb","Axios"],
    githubUrl: "https://github.com/HamzaAliDev/Learning-React-Native.git",
    url: "Android App on working",
  },
  {
    title: "Todo",
    description: "A web app for managing daily tasks, setting reminders, and tracking progress.",
    image: project06,
    mtitle: "Todo Management App",
    mdescription: "Todo Management App is a web application designed to help users manage daily tasks, set reminders, and track progress. The app features a user-friendly interface for creating to-do lists, setting deadlines, and organizing tasks by priority. With a clean and intuitive design, Todo Management App aims to simplify task management and boost productivity.",
    techstack: ["React","sass", "Bootstrap", "Antd", "Authentication","localstorage"],
    githubUrl: "https://github.com/HamzaAliDev/SMIT-MAD-React-Assignment02.git",
    url: "not publically available",
  }
]

export default function Projects() {
  const [startCount, setStartCount] = useState(false);
  const countUpSectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);
  const [selectedProject, setSelectedProject] = useState<{
    mtitle: string;
    mdescription: string;
    techstack: string[];
    githubUrl: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.5 } // Trigger when 30% of the section is visible
    );

    if (countUpSectionRef.current) {
      observer.observe(countUpSectionRef.current);
    }

    return () => {
      if (countUpSectionRef.current) {
        observer.unobserve(countUpSectionRef.current);
      }
    };
  }, []);

   useEffect(() => {
        AOS.init();
      }, []);


  const handleCardClick = (project: {
    mtitle?: string;
    mdescription?: string;
    techstack?: string[];
    githubUrl?: string;
    url?: string;
  }) => {
    setSelectedProject({
      mtitle: project.mtitle || "Untitled",
      mdescription: project.mdescription || "No description available.",
      techstack: project.techstack || [],
      githubUrl: project.githubUrl || "#",
      url: project.url || "#",
    });
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <div data-aos="fade-up" className="flex items-center justify-center bg-gray-100 hero-section">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 space-y-6 md:space-y-0">
            {/* Left Section */}
            <div className="w-full md:w-1/2 mt-4 flex flex-col items-center md:items-start justify-center space-y-6 lg:px-20">
              <h2 className={`text-3xl font-bold mb-2 relative group ${raleway.className}`}>
                My Projects
                <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-40"></span>
              </h2>
              <p className={`text-lg text-center md:text-left ${roboto.className}`}>
                Discover a selection of projects that highlight my skills, creativity, and dedication to crafting impactful digital solutions.
                Each project reflects my expertise in delivering high-quality results.
              </p>
              <div>
                <Link href="/resume" passHref>
                  <button className="hero-btn-resume text-white font-bold py-2 px-5 rounded">
                    Contact Me
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center relative">
              <img src={projectPic.src} className="rounded-3xl" alt="about-hero" width={350} />
            </div>
          </div>
        </div>
      </section>

      {/* project Cards */}
      <section className="bg-gray-100 py-10">
        <div data-aos="fade-up" className="container mx-auto px-4 lg:px-24">
          <h2 className={`text-3xl font-bold mb-2 inline-block relative group ${raleway.className}`}>
            Featured Projects
            <span className="text-underline ms-2 absolute left-0 bottom-[-4px] rounded h-1 w-12 transition-all duration-500 group-hover:w-60"></span>
          </h2>
          <div className={`mt-4 flex flex-wrap items-center justify-center ${roboto.className}`}>
            {data.map((project, index) => (
              <div key={index} className="project-card m-2" >
                <div className="project-card-img" style={{ backgroundImage: `url(${project.image.src})` }}></div>
                <div className="project-card-content">
                  <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
                  <p className="text-md">{project.description}</p>

                  <div className="text-right">
                    <button className="project-btn" onClick={() => handleCardClick(project)}>
                      View
                    </button>
                  </div>
                </div>
                <div className="card-icon">
                  <FiExternalLink size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Stats Metrics */}
      <section className="bg-gray-100 py-10" ref={countUpSectionRef}>
        <div data-aos="zoom-in" className="container mx-auto px-4 lg:px-24">
          <div className="flex flex-wrap items-center justify-center">
            <div className="metrics m-5">
              {startCount && <CountUp end={24} duration={4} className="metric-text" />}
              <p className="text-xl font-semibold">Projects</p>
            </div>
            <div className="metrics m-5">
              {startCount && <CountUp end={96} duration={4} className="metric-text" suffix="%" />}
              <p className="text-xl font-semibold"> + Feedback</p>
            </div>
            <div className="metrics m-5">
              {startCount && <CountUp end={10} duration={4} className="metric-text" />}
              <p className="text-xl font-semibold">Team Work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact titlePre="Your vision, my" highlight="Expertise—" titlePost="let’s craft extraordinary!" />


      {/* Modal */}
      {selectedProject && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedProject.mtitle}>
          <p className={`${roboto.className}`}>{selectedProject.mdescription}</p>
          <h3 className="mt-3 text-xl font-semibold">Techstack</h3>
          <div className="flex flex-wrap">
            {selectedProject.techstack.map((tech, index) => (
              <span key={index} className="techstack-badge">{tech}</span>
            ))}
          </div>
          <div className="mt-4">
            {selectedProject.url == "working on it" ?
            <div><span className="font-semibold">Visit Website: </span><span className="text-custommain">{selectedProject.url}</span></div>:

            <div><span className="font-semibold">Visit Website: </span><a href={selectedProject.url} target="_blank" className="italic hover:text-customprimary">{selectedProject.url}</a></div>
            }
            <div><span className="font-semibold">Visit Github: </span><a href={selectedProject.githubUrl} target="_blank" className="italic hover:text-customprimary">{selectedProject.githubUrl}</a></div>
          </div>
        </Modal>
      )}
    </>
  );
}

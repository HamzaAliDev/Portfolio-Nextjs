"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav
                className="navbar flex items-center justify-between shadow-md fixed w-full z-50 px-6 py-2 top-0 bg-white"
                id="ftco-navbar"
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    <div className="logo-container">
                        {/* <Image src={logo} alt='logo' className='logo-img'/> */}
                    </div>
                    <button
                        className="text-black focus:outline-none md:hidden"
                        type="button"
                        aria-controls="ftco-nav"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? (
                            <FaTimes className="text-2xl" /> 
                        ) : (
                            <FaBars className="text-2xl" /> 
                        )}
                    </button>

                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'
                            } md:flex flex-col md:flex-row md:space-x-6 absolute md:static bg-white w-full md:w-auto top-16 left-0 shadow-md md:shadow-none z-40 lg:pe-6`}
                        id="ftco-nav"
                    >
                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 px-4 md:px-0">
                            <li className="nav-item">
                                <Link href="/" className="nav-link hover:text-gray-500">
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="about" className="nav-link hover:text-gray-500">
                                    <span>About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="services" className="nav-link hover:text-gray-500">
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="projects" className="nav-link hover:text-gray-500">
                                    <span>Projects</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="contact" className="nav-link hover:text-gray-500">
                                    <span>Contact</span>
                                </Link>
                            </li>
                            <li className="nav-item ">

                                <Link href='contact' className='header_btn'>
                                    Hire me
                                    <div className='header_container__6am1c'>
                                        <div className='header-dot1'></div>
                                        <div className='header-dot2'></div>
                                        <div className='header-dot3'></div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

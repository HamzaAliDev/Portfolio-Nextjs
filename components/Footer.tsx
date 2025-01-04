import Link from 'next/link';
import logo from '../public/assets/images/logo2.png';
import Image from 'next/image';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer bg-light">
            <div className="container mx-auto px-4 lg:px-24 ">
                <div className='flex justify-between flex-wrap '>
                    {/* <div className="footer-logo">

                    </div> */}
                    <Image src={logo} alt="logo" width={250} />

                    <ul className="example-2 ps-4">
                        {/* LinkedIn */}
                        <li className="icon-content ">
                            <Link
                                href="https://www.linkedin.com/in/ali-hamza-software-engineer/"
                                aria-label="linkedin"
                                data-social="linkedin"
                            >
                                <div className="filled"></div>
                                <FaLinkedin className="icon" />
                            </Link>
                            {/* <div className="tooltip">linkedIn</div> */}
                        </li>

                        {/* Facebook */}
                        <li className="icon-content ">
                            <a
                                href="https://www.spotify.com/"
                                aria-label="facebook"
                                data-social="facebook"
                            >
                                <div className="filled"></div>
                                <FaFacebook className="icon" />
                            </a>
                            {/* <div className="tooltip">Facebook</div> */}
                        </li>

                        {/* instagram */}
                        <li className="icon-content ">
                            <a
                                href="https://www.spotify.com/"
                                aria-label="instagram"
                                data-social="instagram"
                            >
                                <div className="filled"></div>
                                <FaInstagram className="icon" />
                            </a>
                            {/* <div className="tooltip">Instagram</div> */}
                        </li>

                        {/* GitHub */}
                        <li className="icon-content ">
                            <a
                                href="https://github.com/HamzaAliDev"
                                aria-label="github"
                                data-social="github"
                            >
                                <div className="filled"></div>
                                <FaGithub className="icon" />
                            </a>
                            {/* <div className="tooltip">Github</div> */}
                        </li>

                    </ul>
                </div>

                <hr className='footer-line'/>

                <p className='text-center py-4'>© 2025 Ali Hamza. All Right Reserved.</p>

            </div>
        </footer>
    )
}


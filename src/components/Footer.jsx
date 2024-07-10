import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif'


function Footer() {
    return (
        <div>
        <footer className="footer bg-black text-white p-14">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Company Info */}
                <div className="flex items-center space-x-4">
                    <img
                        src={logo}
                        alt="Profile"
                        className="w-32 h-32 bg-gray-300 rounded-md mb-4"
                    />
                    <div>
                        <p className="font-bold text-lg">XsanDev.</p>
                        <p>Since 2022</p>
                    </div>
                </div>
                {/* Services */}
                <nav className='md:ml-64 md:text-left text-center'>
                    <h6 className="footer-title mb-4 font-bold text-xl">Services</h6>
                    <Link to='/about' className="link link-hover hover:text-gray-300 block mb-2">Design</Link>
                </nav>

                {/* Company */}
                <nav className='md:ml-64 md:text-left text-center'>
                    <h6 className="footer-title mb-4 font-bold text-xl">Link</h6>
                    <Link to='/about' className="link link-hover block mb-2">About</Link>
                    <Link to='/about' className="link link-hover block mb-2">Contact</Link>
                </nav>

                {/* Social Media Icons */}
                <nav className="flex items-center justify-end">
                    <a href="#" className="text-gray-300 hover:text-white mx-3">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white mx-3">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white mx-3">
                        <FaInstagram size={24} />
                    </a>
                </nav>
            </div>

        </footer>
                    {/* Copyright */}
                    <div className="text-center p-3 bg-black">
                <p className="text-sm text-gray-500 mb-1">
                    &copy; {new Date().getFullYear()} Xsan Dev
                </p>
            </div>
        </div>
    );
}

export default Footer;

import { useState } from 'react';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';


function AboutCard() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
        
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        {/* Profile Section */}
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img
                                        src="https://via.placeholder.com/150"
                                        alt="Profile"
                                        className="w-32 h-32 bg-gray-300 rounded-md mb-4"
                                    />
                                    <h1 className="text-xl font-bold">Xsan Udin</h1>
                                    <p className="text-gray-700">Mahasiswa IT Udinus</p>
                                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a
                                            href="#"
                                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300"
                                        >
                                            Contact
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded transition-colors duration-300"
                                        >
                                            Resume
                                        </a>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                                        Skills
                                    </span>
                                    <ul>
                                        <li className="mb-2">JavaScript</li>
                                        <li className="mb-2">React</li>
                                        <li className="mb-2">Node.js</li>
                                        <li className="mb-2">HTML/CSS</li>
                                        <li className="mb-2">Tailwind CSS</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Details Section */}
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Tentangku</h2>
                                <p className="text-gray-700">
                                <h2 className="text-xl font-bold">Hallo Semuanya</h2>
                                    Namaku ikhsan, Aku adalah mahasiswa jurusan Teknik Informatika di salah satu Universitas swasta indonesia
                                    . Tepatnya berada di Jawa Tengah, di tengah Kota Semarang, Berdekatan dengan Tugu Muda, dan dengan warna ikoniknya yaitu Biru.
                                     Univ itu bernama <div className='font-bold'>Universitas Dian Nuswantoro.</div>
                                </p>

                                {/* Social Media Links */}
                                <h3 className="font-semibold text-center mt-6 mb-2">Find me on</h3>
                                <div className="flex justify-center items-center gap-6 my-6">
                                    {/* LinkedIn */}
                                    <a
                                        className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                                        aria-label="LinkedIn"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        className="text-gray-700 hover:text-purple-600 transition-colors duration-300"
                                        aria-label="Instagram"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram size={24} />
                                    </a>

                                    {/* GitHub */}
                                    <a
                                        className="text-gray-700 hover:text-gray-800 transition-colors duration-300"
                                        aria-label="GitHub"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub size={24} />
                                    </a>

                                    {/* Twitter */}
                                    <a
                                        className="text-gray-700 hover:text-blue-400 transition-colors duration-300"
                                        aria-label="Twitter"
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaTwitter size={24} />
                                    </a>
                                </div>

                                {/* Experience Section */}
                                <h2 className="text-xl font-bold mt-6 mb-4">Pengalaman</h2>
                                {/* Experience Item */}
                                <div className="mb-6">
                                    <div className="flex justify-between flex-wrap gap-2 w-full">
                                        <span className="text-gray-700 font-bold">Web Developer</span>
                                        <p>
                                            <span className="text-gray-700 mr-2">di Universitas</span>
                                            <span className="text-gray-700">2022</span>
                                        </p>
                                    </div>
                                    <p className={`mt-2 ${showDetails ? 'block' : 'hidden'}`}>
                                        Membuat Blog menggunakan React JS
                                    </p>
                                    {/* Toggle button for details */}
                                    <button
                                        className="text-blue-500 hover:text-blue-600 mt-2 focus:outline-none"
                                        onClick={() => setShowDetails(!showDetails)}
                                    >
                                        {showDetails ? 'Show less' : 'Show more'}
                                    </button>
                                </div>
                                {/* Add more experience items similarly */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutCard;

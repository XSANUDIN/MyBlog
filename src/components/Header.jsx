// Header.js

import Avatar from './Avatar';
import TypeAbout from './TypeAbout';


const Header = () => {

  return (
    <header className="bg-black text-white py-16 h-auto">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        
        <div className="flex flex-col items-center md:flex-row md:items-center ">
            <div >
            <Avatar
            src="https://i.pinimg.com/originals/db/d9/c7/dbd9c7130573d763b31bc08932dd06c7.jpg" 
            alt="Profile" 
            />
            <div className="mt-8 md:mt-5 ">
                <a href="https://x.com/CodeXsan" className="text-3xl mr-6 hover:text-blue-500">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://github.com/XSANUDIN" className="text-3xl mr-6 hover:text-gray-500">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://linkedin.com/in/yourprofile" className="text-3xl hover:text-blue-700">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
          <div className="ml-6">
            <h1 className="text-5xl font-bold md:text-left md:mt-0 mt-10 text-center">Xsan</h1>
            <p className="text-2xl mt-4">
              <TypeAbout/>
              <div className="mb-4 mt-4">
                <p>I started learning to code in 2022 when I started college.</p>
                <p>I have a passion for AI.</p>
                <p>I started this blog to practice my skill and share my knowledge.</p>
            </div>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

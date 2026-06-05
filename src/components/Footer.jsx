import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/10 mt-12 bg-[#0f172a]/80 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-display font-bold text-white mb-2">GOKULAKUMAR .S</h2>
          <p className="text-gray-400 text-sm">MERN Stack Developer</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Gokulakumar2005/" className="p-2 rounded-full glass text-gray-400 hover:text-white hover:bg-[#38bdf8]/20 transition-all">
            <FaGithub className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
            target="_blank"
            rel="noopener noreferrer" className="p-2 rounded-full glass text-gray-400 hover:text-white hover:bg-[#c084fc]/20 transition-all">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="mailto:gokulakumar2005@gmail.com"className="p-2 rounded-full glass text-gray-400 hover:text-white hover:bg-[#38bdf8]/20 transition-all">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] flex items-center justify-center text-white cursor-pointer hover:shadow-[0_0_15px_rgba(192,132,252,0.5)] transition-all hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </Link>
          <p className="text-gray-500 text-xs text-center">
            &copy; {new Date().getFullYear()} GokulaKumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

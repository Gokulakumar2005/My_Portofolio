


import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Download, ArrowRight, Mail, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import heroImage from "../assets/heroimage1.jpg";
import heroImage2 from "../assets/heroimage2.jpg";
import Resume from "../assets/Gokulakumar_Resume1.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Welcome Badge */}
          <div className="inline-block px-4 py-2 rounded-full glass border border-[#38bdf8]/30 w-fit">
            <span className="text-[#38bdf8] font-medium tracking-wide text-sm">
              Welcome to my portfolio
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white">
            Hi, I'm <br />
            <span className="text-gradient">GOKULAKUMAR</span>
          </h1>

          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl font-medium text-gray-300 h-10">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer",
                2000,
                "React Developer",
                2000,
                "Node.js Developer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Passionate MERN Stack Developer with hands-on experience in
            building responsive web applications using MongoDB, Express.js,
            React, and Node.js. I enjoy creating scalable, user-friendly
            solutions and transforming ideas into real-world applications.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#c084fc] text-white font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(192,132,252,0.6)] transition-all hover:-translate-y-1 cursor-pointer"
            >
              View Projects
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={Resume}
              download="Gokulakumar_Resume.pdf"
              className="px-6 py-3 rounded-full glass hover:bg-white/10 text-white font-semibold flex items-center gap-2 transition-all border border-white/20 hover:-translate-y-1"
            >
              Resume
              <Download className="w-5 h-5" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-6">
            <a
              href="https://github.com/Gokulakumar2005"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#38bdf8]/20 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
            >
              <FaGithub className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#c084fc]/20 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(192,132,252,0.5)]"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>

            <a
              href="mailto:gokulakumar2005@gmail.com"
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#e879f9]/20 transition-all hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(232,121,249,0.5)]"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Glow Effect */}
          <div className="absolute w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] rounded-full blur-[100px] opacity-30"></div>

          {/* Profile Image Container */}
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] shadow-[0_0_40px_rgba(56,189,248,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0f172a]">
              <img
                src={heroImage}
                alt="Gokulakumar"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, Code2 } from 'lucide-react';
// import { FaGithub } from 'react-icons/fa';

// const projects = [
//   {
//     title: 'Rental Parking System',
//     desc: 'A comprehensive solution for parking management with authentication, real-time booking, and secure payment integration and Live Chat Between two User of the system .',
//     tech: ['React', 'Node.js', 'Express', 'MongoDB'],
//     image: 'bg-gradient-to-br from-blue-500 to-cyan-500',
//     icon: <Code2 className="w-12 h-12 text-white/50" />,
//     demoUrl: 'https://mern-rental-parking-system-frontend.onrender.com/home',
//     githubUrl: 'https://github.com/Gokulakumar2005/MERN-location-Tracker'
//   },
//   {
//     title: 'Location Tracker',
//     desc: 'A full-stack e-commerce platform featuring product browsing, shopping cart functionality, secure checkout, and user authentication.',
//     tech: ['React', 'Express.js', 'MongoDB'],
//     image: 'bg-gradient-to-br from-purple-500 to-pink-500',
//     icon: <Code2 className="w-12 h-12 text-white/50" />,
//     demoUrl: '#',
//     githubUrl: 'https://github.com/Gokulakumar2005/MERN-location-Tracker'
//   },
//   {
//     title: 'Expense Tracker',
//     desc: 'An interactive real-time chat application allowing users to create rooms, send direct messages, and see online statuses.',
//     tech: [ 'React', 'Express.js', 'Express'],
//     image: 'bg-gradient-to-br from-emerald-500 to-teal-500',
//     icon: <Code2 className="w-12 h-12 text-white/50" />,
//     demoUrl: '#',
//     githubUrl: 'https://github.com/Gokulakumar2005/MERN-Expenses-App'
//   }
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="py-24 px-6 md:px-12 relative z-10">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
//             Featured <span className="text-gradient">Projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full"></div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="group perspective"
//             >
//               <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 hover:border-white/20">
//                 {/* Project Image Placeholder */}
//                 <div className={`h-48 w-full ${project.image} relative overflow-hidden flex items-center justify-center`}>
//                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
//                   {project.icon}
//                   {/* Hover Overlay */}
//                   <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
//                     <a href={project.demoUrl} className="p-3 bg-white/10 hover:bg-[#38bdf8] rounded-full text-white transition-colors transform hover:scale-110">
//                       <ExternalLink className="w-6 h-6" />
//                     </a>
//                     <a href={project.githubUrl} className="p-3 bg-white/10 hover:bg-[#c084fc] rounded-full text-white transition-colors transform hover:scale-110">
//                       <FaGithub className="w-6 h-6" />
//                     </a>
//                   </div>
//                 </div>

//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38bdf8] group-hover:to-[#c084fc] transition-all">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
//                     {project.desc}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.tech.map((t, i) => (
//                       <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
//                         {t}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Rental Parking System",
    desc: "A comprehensive parking management solution with JWT authentication, real-time slot booking, secure payment integration, and live chat functionality between users.",
    tech: ["React","Redux", "Node.js", "Express.js", "MongoDB"],
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
    icon: <Code2 className="w-12 h-12 text-white/50" />,
    demoUrl:
      "https://mern-rental-parking-system-frontend.onrender.com/home",
    githubUrl:
      "https://github.com/Gokulakumar2005/MERN-Rental-Parking-System",
  },
  {
    title: "Location Tracker",
    desc: "A real-time location tracking application that enables users to track and share locations seamlessly using geolocation technologies.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "bg-gradient-to-br from-purple-500 to-pink-500",
    icon: <Code2 className="w-12 h-12 text-white/50" />,
    demoUrl: null,
    githubUrl:
      "https://github.com/Gokulakumar2005/MERN-location-Tracker",
  },
  {
    title: "Expense Tracker",
    desc: "A full-stack expense management application that helps users monitor income, expenses, and financial activities efficiently.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "bg-gradient-to-br from-emerald-500 to-teal-500",
    icon: <Code2 className="w-12 h-12 text-white/50" />,
    demoUrl: null,
    githubUrl:
      "https://github.com/Gokulakumar2005/MERN-Expenses-App",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 relative z-10"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full"></div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/10 hover:border-white/20">
                {/* Project Banner */}
                <div
                  className={`h-48 w-full ${project.image} relative overflow-hidden flex items-center justify-center`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>

                  {project.icon}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0f172a]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 hover:bg-[#38bdf8] rounded-full text-white transition-all duration-300 hover:scale-110"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 hover:bg-[#c084fc] rounded-full text-white transition-all duration-300 hover:scale-110"
                      aria-label="View Source Code"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38bdf8] group-hover:to-[#c084fc] transition-all duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-6">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

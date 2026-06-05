import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code className="w-8 h-8 text-[#38bdf8]" />,
      title: 'Frontend Development',
      desc: 'Creating pixel-perfect, responsive, and accessible user interfaces using React and modern CSS frameworks.'
    },
    {
      icon: <Terminal className="w-8 h-8 text-[#c084fc]" />,
      title: 'Backend Development',
      desc: 'Building robust, scalable RESTful APIs and server-side logic using Node.js and Express.'
    },
    {
      icon: <Database className="w-8 h-8 text-[#e879f9]" />,
      title: 'Database Management',
      desc: 'Designing efficient database schemas and managing data flow with MongoDB and Mongoose.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 relative z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#38bdf8] rounded-full blur-[80px] opacity-20"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#c084fc] rounded-full blur-[80px] opacity-20"></div>

            {/* <h3 className="text-2xl font-display font-bold mb-4 text-white">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I am a passionate Full Stack Developer with a strong foundation in the MERN stack. As a recent graduate, I've dedicated myself to mastering modern web technologies and building applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              My journey in tech is driven by an insatiable curiosity and a deep love for problem-solving. Whether it's architecting a complex database schema or fine-tuning a CSS animation, I approach every challenge with enthusiasm and a commitment to continuous learning.
            </p> */}
            <h3 className="text-2xl font-display font-bold mb-4 text-white">
              Professional Summary
            </h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              MERN Stack Developer and Computer Science graduate with experience in developing full-stack web applications using MongoDB, Express.js, React, and Node.js. Skilled in creating responsive frontend interfaces, building RESTful APIs, database management, authentication, and deploying applications. Passionate about writing clean, maintainable code and delivering efficient solutions to real-world problems.
            </p>

            <p className="text-gray-300 leading-relaxed mb-6">
              Strong foundation in JavaScript, React, Node.js, and MongoDB, with hands-on experience through academic and personal projects. Seeking opportunities to contribute to dynamic development teams while continuously expanding my technical expertise and building scalable web applications.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {['Problem Solver', 'Continuous Learner', 'Team Player', 'Detail Oriented'].map((trait, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-[#c084fc]">
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-all group flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

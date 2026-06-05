import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 90, color: 'from-orange-400 to-red-500' },
  { name: 'CSS3', level: 85, color: 'from-blue-400 to-blue-600' },
  { name: 'JavaScript', level: 85, color: 'from-yellow-300 to-yellow-500' },
  { name: 'React.js', level: 80, color: 'from-cyan-400 to-blue-500' },
  { name: 'Redux Toolkit', level: 75, color: 'from-purple-400 to-purple-600' },
  { name: 'Node.js', level: 75, color: 'from-green-400 to-green-600' },
  { name: 'Express.js', level: 80, color: 'from-gray-400 to-gray-600' },
  { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-700' },
  { name: 'Mongoose', level: 80, color: 'from-red-400 to-red-600' },
  { name: 'Git & GitHub', level: 85, color: 'from-gray-600 to-gray-800' },
  { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
  { name: 'Postman', level: 85, color: 'from-orange-500 to-red-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-white/5 transition-all group"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

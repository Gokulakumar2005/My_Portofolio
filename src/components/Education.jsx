import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-[#38bdf8]" /> Education
            </h3>
            <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
              
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[#38bdf8] border-4 border-[#0f172a] shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                <div className="glass p-6 rounded-2xl border border-white/5 hover:border-[#38bdf8]/30 transition-colors">
                  <div className="flex items-center gap-2 text-[#38bdf8] text-sm font-bold mb-2">
                    <Calendar className="w-4 h-4" /> 2022-2025
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">Bachelor of Computer Science</h4>
                  <p className="text-gray-400 font-medium mb-3">National College (Autonomous), Trichy , TamilNadu</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Graduated with a strong foundation in software engineering, algorithms, data structures, and database management. Active participant in coding clubs and hackathons.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-gray-500 border-4 border-[#0f172a]"></div>
                <div className="glass p-6 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-gray-400 text-sm font-bold mb-2">
                    <Calendar className="w-4 h-4" /> 2020-2022
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">Higher Secondary Education</h4>
                  <p className="text-gray-400 font-medium mb-3">Municipal Higher Secondary School, Karur</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Focused on computer science and mathematics. Developed an early interest in programming.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-8 h-8 text-[#c084fc]" /> Certifications
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Mern Full Stack Development', issuer: "Dct Academy,Bangalore", date: 'may-2026' },
                // { title: 'React - The Complete Guide', issuer: 'Maximilian Schwarzmüller', date: 'Nov 2023' },
                // { title: 'MongoDB Developer Certification', issuer: 'MongoDB University', date: 'Jan 2024' }
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-5 hover:bg-white/5 transition-all group"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c084fc] to-[#e879f9] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(192,132,252,0.3)]">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-[#c084fc] transition-colors">{cert.title}</h4>
                    <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import { motion } from 'framer-motion';
import { GitPullRequest, GitCommit, Star } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const GitHubStats = () => {
  return (
    <section id="github" className="py-24 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 flex items-center justify-center gap-4">
            <FaGithub className="w-10 h-10 text-white" /> <span className="text-gradient">GitHub</span> Activity
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: <GitCommit className="text-[#38bdf8]" />, label: 'Total Commits', value: '500+' },
            { icon: <GitPullRequest className="text-[#c084fc]" />, label: 'Pull Requests', value: '50+' },
            { icon: <Star className="text-[#e879f9]" />, label: 'Stars Earned', value: '20+' },
            { icon: <FaGithub className="text-white" />, label: 'Repositories', value: '30+' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 rounded-2xl text-center border border-white/5 hover:bg-white/5 transition-colors"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 rounded-2xl border border-white/10 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8]/5 to-[#c084fc]/5"></div>
          <h3 className="text-xl font-bold text-white mb-6 relative z-10">Contributions in the last year</h3>
          
          <div className="flex justify-center overflow-x-auto pb-4 relative z-10">
            {/* Fake Contribution Graph Grid */}
            <div className="flex gap-1">
              {Array.from({ length: 52 }).map((_, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-1">
                  {Array.from({ length: 7 }).map((_, rowIndex) => {
                    const randomIntensity = Math.random();
                    let bgClass = "bg-[#1e293b]"; // default empty
                    if (randomIntensity > 0.8) bgClass = "bg-[#38bdf8]"; // high
                    else if (randomIntensity > 0.6) bgClass = "bg-[#38bdf8]/70"; // medium
                    else if (randomIntensity > 0.4) bgClass = "bg-[#38bdf8]/40"; // low
                    else if (randomIntensity > 0.2) bgClass = "bg-[#38bdf8]/20"; // very low

                    return (
                      <div
                        key={rowIndex}
                        className={`w-3 h-3 rounded-sm ${bgClass} hover:ring-2 hover:ring-white transition-all`}
                        title="Contribution placeholder"
                      ></div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end items-center gap-2 mt-4 text-xs text-gray-400 relative z-10">
            <span>Less</span>
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-sm bg-[#1e293b]"></div>
              <div className="w-3 h-3 rounded-sm bg-[#38bdf8]/20"></div>
              <div className="w-3 h-3 rounded-sm bg-[#38bdf8]/40"></div>
              <div className="w-3 h-3 rounded-sm bg-[#38bdf8]/70"></div>
              <div className="w-3 h-3 rounded-sm bg-[#38bdf8]"></div>
            </div>
            <span>More</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default GitHubStats;

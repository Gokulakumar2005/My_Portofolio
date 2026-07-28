import { motion } from 'framer-motion';
import { Cpu, Layers, Sparkles } from 'lucide-react';
import { FaReact, FaNodeJs, FaEnvira, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiTailwindcss, SiRedux, SiPostman, SiVercel } from 'react-icons/si';

const skillItems = [
  { name: 'React', level: 'Frontend Library', icon: <FaReact className="h-6 w-6 text-[#61dafb]" />, desc: 'JSX, Custom Hooks, Context, Virtual DOM' },
  { name: 'Node.js', level: 'Runtime Environment', icon: <FaNodeJs className="h-6 w-6 text-[#68a063]" />, desc: 'Event Loop, Non-blocking I/O, Modules' },
  { name: 'Express.js', level: 'Backend Framework', icon: <SiExpress className="h-6 w-6 text-slate-200" />, desc: 'Routing, Middleware, REST APIs, Auth' },
  { name: 'MongoDB', level: 'NoSQL Database', icon: <FaEnvira className="h-6 w-6 text-[#47a248]" />, desc: 'Document Schema, Mongoose, Aggregations' },
  { name: 'JavaScript ES6+', level: 'Core Language', icon: <FaJs className="h-6 w-6 text-[#f7df1e]" />, desc: 'Promises, Async/Await, ES Modules, Arrays' },
  { name: 'Tailwind CSS', level: 'Styling Engine', icon: <SiTailwindcss className="h-6 w-6 text-[#38bdf8]" />, desc: 'Utility First, Flex/Grid, Custom Themes' },
  { name: 'Redux Toolkit', level: 'State Management', icon: <SiRedux className="h-6 w-6 text-[#764abc]" />, desc: 'Slices, Global State, Async Thunks' },
  { name: 'Git & GitHub', level: 'Version Control', icon: <FaGitAlt className="h-6 w-6 text-[#f05032]" />, desc: 'Branching, Pull Requests, Versioning' },
  { name: 'Postman & Vercel', level: 'DevOps & Testing', icon: <SiPostman className="h-6 w-6 text-[#ff6c37]" />, desc: 'API Testing, Serverless Deployments' },
];

const techMarqueeList = [
  'React 19', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript ES6+',
  'Tailwind CSS', 'Redux Toolkit', 'REST APIs', 'JWT Auth', 'Git', 'Vite'
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 px-6 py-28 md:px-12 lg:px-16 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-accent-400">
            <Layers className="h-3.5 w-3.5" /> Tech Stack & Tools
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Core technologies powering my <span className="text-gradient">builds</span>.
          </h2>
        </motion.div>

        {/* Marquee Strip */}
        <div className="mb-14 overflow-hidden rounded-2xl border border-slate-200/60 bg-white/40 py-4 shadow-sm backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-900/40">
          <div className="flex animate-marquee space-x-8 whitespace-nowrap">
            {[...techMarqueeList, ...techMarqueeList].map((item, idx) => (
              <span key={idx} className="flex items-center gap-2 font-mono text-sm font-semibold text-slate-700 dark:text-slate-300">
                <Sparkles className="h-3.5 w-3.5 text-accent-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillItems.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="glass-card group relative rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-500/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 dark:bg-white/5 border border-slate-200/50 dark:border-slate-800/80">
                  {skill.icon}
                </div>
                <span className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-accent-400">
                  {skill.level}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">{skill.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-mono leading-relaxed">{skill.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

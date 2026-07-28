import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, CheckCircle2, Code, Terminal, Cpu } from 'lucide-react';

const capabilityGroups = [
  {
    title: 'Frontend Development',
    icon: <Layout className="h-6 w-6 text-accent-400" />,
    description: 'Crafting responsive, high-performance user interfaces with modern React paradigms and component libraries.',
    items: ['React 19 & Hooks', 'Tailwind CSS & Modern CSS', 'Redux Toolkit & Context', 'Responsive Layouts & Motion'],
  },
  {
    title: 'Backend Engineering',
    icon: <Server className="h-6 w-6 text-accent-400" />,
    description: 'Architecting robust RESTful API endpoints, authentication mechanisms, and server side logic.',
    items: ['Node.js Runtime', 'Express.js Framework', 'REST API Architecture', 'JWT Auth & Middleware'],
  },
  {
    title: 'Database & Data Systems',
    icon: <Database className="h-6 w-6 text-accent-400" />,
    description: 'Designing structured document database schemas, aggregation pipelines, and data management flows.',
    items: ['MongoDB Atlas', 'Mongoose ODM', 'Data Modeling & Indexes', 'CRUD Operations'],
  },
  {
    title: 'Tooling & Deployment',
    icon: <Wrench className="h-6 w-6 text-accent-400" />,
    description: 'Maintaining smooth development workflows, continuous deployment, and performance monitoring.',
    items: ['Vite Build Tool', 'Vercel & Render Hosting', 'Git & GitHub Workflows', 'Postman API Testing'],
  },
];

const About = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-accent-400">
            <Code className="h-3.5 w-3.5" /> About & Expertise
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Engineering products with <span className="text-gradient">precision & purpose</span>.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-stretch">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="glass-card flex flex-col justify-between rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800/80"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500/10 text-accent-400">
                  <Terminal className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Full-Stack MERN Developer</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Based in Bangalore, India</p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                I specialize in building full-stack web applications using the MERN stack (<strong className="text-slate-900 dark:text-white font-semibold">MongoDB, Express.js, React, Node.js</strong>). My approach blends technical rigour with clean UI design to build products that are fast, intuitive, and reliable.
              </p>

              <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                Whether implementing real-time tracking platforms, multi-tenant parking rental systems, or expense management dashboards, I focus on clean component architectures, robust API services, and smooth user interactions.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 pt-6 border-t border-slate-200/70 dark:border-slate-800">
              {[
                { title: 'Clean Code Standard', desc: 'Maintainable & modular' },
                { title: 'API Integration', desc: 'Secure & efficient REST' },
                { title: 'User Experience', desc: 'Polished & intuitive UI' },
                { title: 'Problem Solver', desc: 'Analytical & fast learner' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-accent-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilityGroups.map((group, index) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="glass-card group flex flex-col justify-between rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent-500/40"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-2xl bg-accent-500/10 p-3 text-accent-400">
                      {group.icon}
                    </div>
                    <Cpu className="h-4 w-4 text-slate-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">{group.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{group.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/50 dark:border-slate-800/50">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-100/80 px-2.5 py-1 text-xs font-mono font-medium text-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

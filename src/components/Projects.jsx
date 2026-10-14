import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Rental Parking System',
    category: 'Full-Stack MERN Platform',
    summary: 'A comprehensive parking space rental platform enabling seamless slot discovery, online reservations, user role management, and direct booking flows.',
    problem: 'Drivers wasted time looking for available parking while slot owners lacked a simple platform to monetize empty spaces.',
    solution: 'Engineered a role-based marketplace with real-time reservation states, user chat integration, and responsive administrative controls.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    demoUrl: 'https://mern-rental-parking-system-frontend.onrender.com/home',
    githubUrl: 'https://github.com/Gokulakumar2005/MERN-Rental-Parking-System',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    coverGradient: 'from-emerald-950/80 via-slate-900 to-obsidian-950',
    accentBorder: 'hover:border-emerald-500/50',
  },
  {
    title: 'Expenses Tracker',
    category: 'Financial Management App',
    summary: 'An intuitive personal finance application designed for tracking daily income, expenses, category breakdowns, and financial movement.',
    problem: 'Traditional financial tools were overly complex or lacked clean visual summaries for quick daily expense logging.',
    solution: 'Designed an elegant dashboard with fast transaction entry, dynamic category grouping, and cash flow visualizations.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart UI', 'REST API'],
    demoUrl: 'https://mern-expenses-app-frontend.onrender.com',
    githubUrl: 'https://github.com/Gokulakumar2005/MERN-Expenses-App',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    coverGradient: 'from-cyan-950/80 via-slate-900 to-obsidian-950',
    accentBorder: 'hover:border-cyan-500/50',
  },
  {
    title: 'Location Tracker',
    category: 'Real-Time Web Application',
    summary: 'A real-time location tracking tool built for sharing current geolocation coordinates, tracking markers, and dynamic map updates.',
    problem: 'Need for a lightweight, low-latency location update interface without requiring complex native apps.',
    solution: 'Built a web-first tracking interface using HTML5 Geolocation APIs and responsive client-server syncing.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Geolocation API'],
    demoUrl: 'https://mern-location-tracker-1.onrender.com',
    githubUrl: 'https://github.com/Gokulakumar2005/MERN-location-Tracker',
    badgeColor: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
    coverGradient: 'from-teal-950/80 via-slate-900 to-obsidian-950',
    accentBorder: 'hover:border-teal-500/50',
  },  {
    title: 'Laptop Configuration Quotation System',
    category: 'Full-Stack Web Application',
    summary: 'A web app for configuring laptop specs and generating instant price quotations, with secure user authentication.',
    problem: 'Need for an easy way for users to build a custom laptop configuration and get a quotation without manual back-and-forth.',
    solution: 'Built a full-stack app with a React frontend and an Express/MongoDB backend, using JWT-based authentication to manage user sessions and a configurator flow to calculate quotations in real time.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    demoUrl: 'https://assignment-1-1-7vjp.onrender.com/login',
    githubUrl: 'https://github.com/Gokulakumar2005/Assignment_1',
    badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
    coverGradient: 'from-indigo-950/80 via-slate-900 to-obsidian-950',
    accentBorder: 'hover:border-indigo-500/50',
  },
  {
    title: 'PocketTrack — Expense Tracker Mobile App',
    category: 'Full-Stack Mobile App',
    summary: 'A cross-platform personal finance mobile app enabling real-time expense tracking, category-wise monthly budgets, financial analytics, and secure JWT session persistence.',
    problem: 'Users needed a fast, offline-ready mobile tool to monitor personal expenses and enforce category budgets without cumbersome spreadsheets.',
    solution: 'Built a React Native (Expo 52) mobile app styled with NativeWind and powered by an Express.js & PostgreSQL backend, utilizing Redux Toolkit and JWT auth with auto-refresh tokens.',
    tech: ['React Native', 'Expo', 'Redux Toolkit', 'NativeWind', 'Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    demoUrl: '',
    githubUrl: 'https://github.com/Gokulakumar2005/Expense_Tracker_Mobile_App',
    badgeColor: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    coverGradient: 'from-violet-950/80 via-slate-900 to-obsidian-950',
    accentBorder: 'hover:border-violet-500/50',
  },
  {
    title: 'Thamizha Constructions — Business Website',
    category: 'Interactive 3D Business Platform',
    summary: 'A commercial 3D website built for an architectural and turnkey construction engineering firm in Tamil Nadu, featuring interactive 3D floor models, bilingual support, and live cost estimation.',
    problem: 'Traditional static construction websites lacked visual engagement to demonstrate structural design and failed to capture instant client quotation requests.',
    solution: 'Engineered an interactive 3D web experience with React Three Fiber, Lenis smooth scrolling, real-time construction cost calculator, English/Tamil localization, and direct WhatsApp quote dispatch.',
    tech: ['React', 'Vite', 'Three.js', 'React Three Fiber', 'Tailwind CSS', 'Framer Motion', 'i18next'],
    demoUrl: 'https://prasanth-website-steel.vercel.app/',
    githubUrl: 'https://github.com/Gokulakumar2005/prasanth_website',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    coverGradient: 'from-amber-950/80 via-slate-900 to-obsidian-950',
    accentBorder: 'hover:border-amber-500/50',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-accent-400">
            <FolderGit2 className="h-3.5 w-3.5" /> Featured Work
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Case studies & <span className="text-gradient">recent builds</span>.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card group flex flex-col justify-between overflow-hidden rounded-3xl transition duration-500 hover:-translate-y-1.5 ${project.accentBorder}`}
            >
              <div>
                {/* Visual Cover Banner with Mockup Motif */}
                <div className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${project.coverGradient} p-6 border-b border-slate-200/50 dark:border-slate-800/80`}>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full border px-3 py-1 text-[11px] font-mono font-semibold uppercase tracking-wider ${project.badgeColor}`}>
                      {project.category}
                    </span>
                    <Sparkles className="h-4 w-4 text-white/60 group-hover:text-accent-400 transition-colors" />
                  </div>

                  <div className="mt-8">
                    <h3 className="font-display text-2xl font-bold text-white transition duration-300 group-hover:text-accent-400">
                      {project.title}
                    </h3>
                  </div>

                  {/* Decorative Terminal Line in Cover */}
                  <div className="absolute bottom-3 left-6 right-6 flex items-center gap-2 rounded-xl bg-slate-900/60 px-3 py-1.5 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 space-y-5">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.summary}
                  </p>

                  {/* Problem & Solution Blocks */}
                  <div className="space-y-3">
                    <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3.5 dark:border-slate-800/80 dark:bg-slate-900/60">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-rose-500 dark:text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5" /> PROBLEM
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.problem}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3.5 dark:border-slate-800/80 dark:bg-slate-900/60">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold text-accent-400">
                        <CheckCircle className="h-3.5 w-3.5" /> SOLUTION
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-slate-100/80 px-2.5 py-1 text-[11px] font-mono font-medium text-slate-700 dark:bg-slate-800/70 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="flex items-center gap-3 p-6 pt-0 border-t border-transparent">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent-500 px-4 py-2.5 text-xs font-bold text-slate-950 transition duration-300 hover:bg-accent-400 shadow-glow"
                  >
                    Live Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="flex flex-1 items-center justify-center gap-1 rounded-xl border border-slate-200/50 bg-slate-100/50 px-4 py-2.5 text-xs font-mono text-slate-400 dark:border-slate-800 dark:bg-slate-900/40">
                    Source Available
                  </span>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-300/80 bg-white/70 px-4 py-2.5 text-xs font-semibold text-slate-800 backdrop-blur-md transition duration-300 hover:border-accent-400 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
                >
                  <FaGithub className="h-4 w-4" /> Code
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

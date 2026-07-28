import { Suspense, lazy } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
import Resume from '../assets/Gokulakumar_Resume1.pdf';

const Hero3DCanvas = lazy(() => import('./Hero3DCanvas'));

const Hero = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 md:px-12 lg:px-16 bg-noise">
      {/* Background ambient glowing gradient meshes */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-accent-500/15 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />
      </div>

      <div className="container relative z-10 mx-auto grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          {/* Status Badge */}
          <div className="w-fit flex items-center gap-2.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent-400 backdrop-blur-md shadow-glow">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500"></span>
            </span>
            Full-Stack MERN Developer
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white">
              Transforming code into <span className="text-gradient">high-impact</span> web apps.
            </h1>

            <div className="flex items-center gap-3 min-h-[40px] text-lg font-mono font-medium text-slate-700 sm:text-xl dark:text-slate-300">
              <Terminal className="h-5 w-5 text-accent-400 shrink-0" />
              <TypeAnimation
                sequence={[
                  'Specializing in React & Node.js',
                  1800,
                  'Building RESTful APIs with Express',
                  1800,
                  'Designing MongoDB Schema Architecture',
                  1800,
                  'Crafting Seamless UI & User Journeys',
                  1800,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Hi, I’m <strong className="text-slate-900 dark:text-white font-semibold">Gokulakumar</strong>. I engineer responsive, scalable web applications from scratch — turning complex backend logic into elegant, human-centric user experiences.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="projects"
              smooth
              duration={500}
              className="group flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-accent-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Case Studies
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <a
              href={Resume}
              download="Gokulakumar_Resume.pdf"
              className="flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              Resume <Download className="h-4 w-4" />
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              className="flex cursor-pointer items-center gap-2 rounded-full border border-slate-300/80 bg-transparent px-6 py-3.5 text-sm font-semibold text-slate-800 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:border-slate-800 dark:text-slate-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              Contact <Mail className="h-4 w-4" />
            </Link>
          </div>

          {/* Micro Stack Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 text-xs font-mono text-slate-600 dark:text-slate-400">
            {['React 19', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/80 bg-white/60 px-3 py-1.5 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <Sparkles className="h-3 w-3 text-accent-400" />
                {tech}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://github.com/Gokulakumar2005"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="rounded-full border border-slate-200/80 bg-white/70 p-3 text-slate-700 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="rounded-full border border-slate-200/80 bg-white/70 p-3 text-slate-700 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:gokulakumar2005@gmail.com"
              aria-label="Send Email"
              className="rounded-full border border-slate-200/80 bg-white/70 p-3 text-slate-700 transition hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        {/* 3D Focal Canvas (Replaces Headshot Image) */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex items-center justify-center"
        >
          <div className="glass-card relative w-full rounded-3xl p-2 sm:p-4 shadow-soft">
            <Suspense
              fallback={
                <div className="flex h-[380px] w-full items-center justify-center rounded-2xl bg-slate-900/50 text-slate-400 font-mono text-sm sm:h-[460px] lg:h-[520px]">
                  <Code2 className="mr-2 h-6 w-6 animate-spin text-accent-400" /> Loading 3D Dev Scene...
                </div>
              }
            >
              <Hero3DCanvas />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

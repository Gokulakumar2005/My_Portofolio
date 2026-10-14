import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { ArrowDown, ArrowUpRight, Download, Terminal, Sparkles, Code2, ShieldCheck, Film, Eye, EyeOff } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, codeSnippet } from '../data/content';
import BackgroundVideoMedia from '../assets/Background_video.mp4';

export const Hero = () => {
  const videoRef = useRef(null);
  const [isRightSideVisible, setIsRightSideVisible] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Background Video — ONLY FOR HOME PAGE / DASHBOARD */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          defaultMuted
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        >
          <source src={BackgroundVideoMedia} type="video/mp4" />
          <source src="/videos/Background_video.mp4" type="video/mp4" />
        </video>
        {/* Soft contrast overlay so headline and code text remain crisp */}
        <div className="absolute inset-0 bg-[#070b22]/45 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b22] via-transparent to-[#070b22]/50" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Core Identity & Headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6 lg:col-span-7"
          >
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="w-fit flex items-center gap-2.5 rounded-full border border-neon-cyan/40 bg-neon-cyan/15 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.2em] text-neon-cyan shadow-glow-cyan backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green"></span>
                </span>
                <span>{personalInfo.status} • {personalInfo.location}</span>
              </div>

              <div className="w-fit hidden sm:flex items-center gap-2 rounded-full border border-neon-purple/40 bg-neon-purple/15 px-3.5 py-1.5 text-xs font-mono font-bold text-neon-purple backdrop-blur-md shadow-glow-purple">
                <Film className="h-3.5 w-3.5 animate-pulse text-neon-pink" />
                <span>4K MOTION CINEMATIC ENVIRONMENT</span>
              </div>
            </div>

            {/* Huge Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl">
                <span className="block text-slate-100">ENGINEERING THE</span>
                <span className="text-gradient-rainbow block">DIGITAL MACHINE.</span>
              </h1>

              {/* Typing Animation Bar */}
              <div className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface-strong/85 px-4 py-3.5 font-mono text-base font-semibold text-slate-200 backdrop-blur-2xl sm:text-xl border-l-4 border-l-neon-cyan shadow-terminal">
                <Terminal className="h-5 w-5 text-neon-cyan shrink-0" />
                <TypeAnimation
                  sequence={personalInfo.roles}
                  wrapper="span"
                  speed={45}
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Hi, I’m <strong className="text-white font-semibold">{personalInfo.name}</strong>. {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-60}
                className="group flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink px-7 py-3.5 text-sm font-bold text-void shadow-glow-cyan transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_#00f0ff]"
              >
                <span>View Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <a
                href={personalInfo.resumeUrl}
                download="Gokulakumar_Resume.pdf"
                className="flex items-center gap-2 rounded-full border border-surface-border bg-surface-strong/80 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-neon-cyan/60 hover:bg-neon-cyan/15 hover:text-neon-cyan hover:shadow-glow-cyan"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </a>

              <Link
                to="contact"
                smooth
                duration={500}
                offset={-60}
                className="cursor-pointer text-xs font-mono font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 transition-colors hover:text-neon-cyan"
              >
                Contact Me →
              </Link>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Links:</span>
              <a
                href="https://github.com/Gokulakumar2005"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="rounded-full border border-surface-border bg-surface p-2.5 text-slate-300 transition-all hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-cyan"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="rounded-full border border-surface-border bg-surface p-2.5 text-slate-300 transition-all hover:border-neon-purple hover:text-neon-purple hover:shadow-glow-purple"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Floating Blended / Disappearing Code Editor Snippet */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {isRightSideVisible ? (
                <motion.div
                  key="code-terminal"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88, y: 20 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="w-full"
                >
                  {/* Blended Glassmorphism Container with Soft Holographic Transparency */}
                  <div className="group relative rounded-3xl border border-neon-cyan/25 bg-[#070b22]/30 p-5 font-mono text-xs shadow-terminal backdrop-blur-[2px] transition-all duration-300 hover:border-neon-cyan/50 hover:bg-[#070b22]/50">
                    {/* Window Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-neon-rose/80 shadow-[0_0_8px_#f43f5e]" />
                        <span className="h-3 w-3 rounded-full bg-neon-amber/80 shadow-[0_0_8px_#f59e0b]" />
                        <span className="h-3 w-3 rounded-full bg-neon-green/80 shadow-[0_0_8px_#10b981]" />
                      </div>

                      <div className="flex items-center gap-1.5 text-[11px] text-neon-cyan font-semibold">
                        <Code2 className="h-3.5 w-3.5" />
                        <span>{codeSnippet.fileName}</span>
                      </div>

                      {/* Interactive Disappear / Blend Toggle */}
                      <button
                        type="button"
                        onClick={() => setIsRightSideVisible(false)}
                        title="Disappear code card to view full 4K background video"
                        className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-slate-300 transition-all hover:border-neon-cyan/40 hover:bg-neon-cyan/15 hover:text-neon-cyan"
                      >
                        <EyeOff className="h-3 w-3" />
                        <span>Disappear</span>
                      </button>
                    </div>

                    {/* Code Lines with Smooth Bottom Gradient Blend */}
                    <div className="relative pt-4 space-y-1.5 overflow-x-auto text-slate-300 [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]">
                      {codeSnippet.lines.map((line, i) => (
                        <div key={i} className="flex gap-4">
                          <span className="w-5 select-none text-right text-slate-500 font-mono text-[11px]">
                            {i + 1}
                          </span>
                          <span className="font-mono text-[11px] leading-relaxed">
                            {line.startsWith('//') ? (
                              <span className="text-slate-400 italic">{line}</span>
                            ) : line.includes('jwt.verify') || line.includes('authenticateSession') ? (
                              <span className="text-neon-cyan font-semibold">{line}</span>
                            ) : line.includes('User.findById') || line.includes('process.env') ? (
                              <span className="text-neon-purple">{line}</span>
                            ) : line.includes('return') || line.includes('const') || line.includes('try') ? (
                              <span className="text-neon-green">{line}</span>
                            ) : (
                              line
                            )}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Status Footer Pill */}
                    <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] text-slate-400">
                      <div className="flex items-center gap-2 text-neon-green">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        <span>BLENDED GLASS</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-neon-cyan">
                        <Sparkles className="h-3 w-3" />
                        <span>LATENCY: 4ms</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="code-disappeared"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center p-8 text-center"
                >
                  <button
                    type="button"
                    onClick={() => setIsRightSideVisible(true)}
                    className="group flex items-center gap-2.5 rounded-full border border-neon-cyan/40 bg-surface-strong/80 px-5 py-2.5 text-xs font-mono font-semibold text-neon-cyan shadow-glow-cyan backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-neon-cyan/20 hover:border-neon-cyan"
                  >
                    <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
                    <span>Show Developer Code Snippet</span>
                  </button>
                  <p className="mt-2 text-[11px] font-mono text-slate-400 tracking-wide">
                    Right side cleared • Full 4K developer motion picture visible
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex flex-col items-center justify-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-slate-400"
        >
          <span>Scroll to Explore 3D Architecture</span>
          <ArrowDown className="h-4 w-4 animate-bounce text-neon-cyan" />
        </motion.div>
      </div>
    </section>
  );
};

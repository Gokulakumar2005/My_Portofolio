import { motion } from 'framer-motion';
import { User, Compass, Terminal, Cpu, Server, Database, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo } from '../data/content';

export const About = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            <User className="h-3.5 w-3.5" />
            <span>01 // ABOUT THE DEVELOPER</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Building software with <span className="text-gradient-rainbow">precision, creativity</span> & clean architecture.
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Developer Architecture Holo-Deck (NO PHOTO, 100% DEVELOPER THEMED & COLORFUL) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              {/* Vibrant Ambient Glow Backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink opacity-50 blur-xl transition-all duration-500 group-hover:opacity-80" />

              <div className="relative rounded-3xl border border-neon-cyan/40 bg-void/90 p-6 sm:p-7 backdrop-blur-2xl shadow-terminal space-y-6">
                {/* Console Header */}
                <div className="flex items-center justify-between border-b border-surface-border pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-neon-rose shadow-[0_0_8px_#f43f5e]" />
                    <span className="h-3 w-3 rounded-full bg-neon-amber shadow-[0_0_8px_#f59e0b]" />
                    <span className="h-3 w-3 rounded-full bg-neon-green shadow-[0_0_8px_#10b981]" />
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-neon-cyan">
                    <Terminal className="h-3.5 w-3.5 animate-pulse" />
                    <span>system_architecture.sys</span>
                  </div>
                </div>

                {/* Developer Pillars Grid */}
                <div className="grid grid-cols-2 gap-3 font-mono">
                  {/* Frontend */}
                  <div className="rounded-2xl border border-neon-cyan/30 bg-neon-cyan/10 p-3.5 space-y-1.5 transition-all hover:border-neon-cyan hover:shadow-glow-cyan">
                    <Cpu className="h-5 w-5 text-neon-cyan" />
                    <div className="text-xs font-bold text-white">Frontend Core</div>
                    <div className="text-[10px] text-neon-cyan">React 19 • Redux • Tailwind</div>
                  </div>

                  {/* Backend */}
                  <div className="rounded-2xl border border-neon-green/30 bg-neon-green/10 p-3.5 space-y-1.5 transition-all hover:border-neon-green hover:shadow-glow-green">
                    <Server className="h-5 w-5 text-neon-green" />
                    <div className="text-xs font-bold text-white">Backend Engine</div>
                    <div className="text-[10px] text-neon-green">Node.js • Express • REST</div>
                  </div>

                  {/* Database */}
                  <div className="rounded-2xl border border-neon-purple/30 bg-neon-purple/10 p-3.5 space-y-1.5 transition-all hover:border-neon-purple hover:shadow-glow-purple">
                    <Database className="h-5 w-5 text-neon-purple" />
                    <div className="text-xs font-bold text-white">Data Systems</div>
                    <div className="text-[10px] text-neon-purple">MongoDB • Mongoose • Aggregation</div>
                  </div>

                  {/* Security */}
                  <div className="rounded-2xl border border-neon-pink/30 bg-neon-pink/10 p-3.5 space-y-1.5 transition-all hover:border-neon-pink hover:shadow-glow-pink">
                    <ShieldCheck className="h-5 w-5 text-neon-pink" />
                    <div className="text-xs font-bold text-white">Auth & Security</div>
                    <div className="text-[10px] text-neon-pink">JWT • Bcrypt • Middleware</div>
                  </div>
                </div>

                {/* Live Diagnostic Stream */}
                <div className="rounded-2xl border border-surface-border bg-surface p-4 font-mono text-xs space-y-2 text-slate-300">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-surface-border pb-1.5">
                    <span>LIVE TELEMETRY STREAM</span>
                    <span className="text-neon-green font-bold flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-ping" />
                      100% ONLINE
                    </span>
                  </div>
                  <div className="text-neon-cyan flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-neon-amber" />
                    <span>MERN Cluster: Active in Bangalore, IN</span>
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    &gt; RESTful APIs: 40+ endpoints deployed
                  </div>
                  <div className="text-slate-400 text-[11px]">
                    &gt; Authentication: Encrypted JWT Session Guard
                  </div>
                </div>

                {/* Base Status */}
                <div className="flex items-center justify-between rounded-xl border border-neon-cyan/20 bg-neon-cyan/5 px-4 py-2.5 font-mono text-xs text-neon-cyan">
                  <span>ENVIRONMENT: PRODUCTION</span>
                  <span>VERSION: 2.5.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Animated Stat Counters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              {personalInfo.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Currently Exploring Line in Vibrant Fuchsia/Purple */}
            <div className="flex items-center gap-3.5 rounded-2xl border border-neon-purple/40 bg-gradient-to-r from-neon-purple/15 to-neon-pink/15 p-4 font-mono text-xs text-slate-200 backdrop-blur-xl sm:text-sm shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <Compass className="h-5 w-5 text-neon-pink shrink-0 animate-spin-slow" />
              <div>
                <span className="font-semibold text-neon-pink uppercase tracking-wider block text-[11px]">
                  CURRENTLY EXPLORING:
                </span>
                <span className="text-slate-200">{personalInfo.currentlyExploring}</span>
              </div>
            </div>

            {/* Colorful Stat Counters Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
              {personalInfo.stats.map((stat, i) => {
                const colors = [
                  { border: 'hover:border-neon-cyan', text: 'text-neon-cyan', shadow: 'hover:shadow-glow-cyan' },
                  { border: 'hover:border-neon-green', text: 'text-neon-green', shadow: 'hover:shadow-glow-green' },
                  { border: 'hover:border-neon-purple', text: 'text-neon-purple', shadow: 'hover:shadow-glow-purple' },
                  { border: 'hover:border-neon-amber', text: 'text-neon-amber', shadow: 'hover:shadow-glow-amber' },
                ];
                const col = colors[i % colors.length];

                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`rounded-2xl border border-surface-border bg-surface-strong/80 p-4 text-center backdrop-blur-xl transition-all duration-300 ${col.border} ${col.shadow}`}
                  >
                    <div className={`font-display text-3xl font-extrabold ${col.text} sm:text-4xl`}>
                      {stat.value}
                    </div>
                    <div className="mt-1 font-mono text-xs text-slate-300 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Sparkles, AlertCircle, CheckCircle, Code2, Award, Zap, Download } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { TiltCard } from '../components/TiltCard';
import { projectsData } from '../data/content';

export const Projects = () => {
  const flagship = projectsData.find((p) => p.featured) || projectsData[0];
  const others = projectsData.filter((p) => p.id !== flagship.id);

  return (
    <section id="projects" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>03 // FEATURED BUILDS</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Selected case studies & <span className="text-gradient-rainbow">production systems</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Real-world full-stack architectures powered by clean data models, resilient REST endpoints, and reactive interfaces.
          </p>
        </motion.div>

        {/* FLAGSHIP SHOWCASE: Rental Parking System with Dynamic Pricing */}
        {flagship && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65 }}
            className="mb-14"
          >
            <TiltCard className="border border-neon-cyan/40 bg-surface-strong/95 shadow-terminal backdrop-blur-2xl group overflow-hidden">
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2.5 rounded-full border border-neon-cyan/50 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-neon-cyan shadow-glow-cyan">
                    <Award className="h-4 w-4" />
                    <span>{flagship.badge}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-neon-green">
                    <span className="h-2 w-2 rounded-full bg-neon-green animate-pulse" />
                    LIVE PRODUCTION DEPLOYMENT
                  </div>
                </div>

                <div className="grid gap-8 lg:grid-cols-12 items-center">
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                        {flagship.title}
                      </h3>
                      <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                        {flagship.summary}
                      </p>
                    </div>

                    {/* Problem & Solution Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="rounded-2xl border border-neon-rose/30 bg-neon-rose/10 p-4">
                        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neon-rose">
                          <AlertCircle className="h-4 w-4" /> THE CHALLENGE
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">
                          {flagship.problem}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-neon-cyan/30 bg-neon-cyan/10 p-4">
                        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neon-cyan">
                          <CheckCircle className="h-4 w-4" /> THE SOLUTION
                        </div>
                        <p className="mt-2 text-xs leading-relaxed text-slate-300">
                          {flagship.solution}
                        </p>
                      </div>
                    </div>

                    {/* Architecture Highlights */}
                    <div className="space-y-2 pt-1 font-mono text-xs">
                      {flagship.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-slate-300">
                          <Zap className="h-3.5 w-3.5 text-neon-cyan shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {flagship.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-neon-cyan/30 bg-neon-cyan/15 px-3 py-1 font-mono text-xs font-semibold text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <a
                        href={flagship.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-bold text-void shadow-glow-cyan transition-all hover:scale-105"
                      >
                        Open Live Platform <ExternalLink className="h-4 w-4" />
                      </a>
                      <a
                        href={flagship.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-neon-cyan hover:text-neon-cyan"
                      >
                        <FaGithub className="h-4 w-4" /> Source Code
                      </a>
                    </div>
                  </div>

                  {/* Architecture Console Mock */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-neon-green/30 bg-void/90 p-5 font-mono text-xs shadow-terminal backdrop-blur-md">
                      <div className="flex items-center justify-between border-b border-surface-border pb-3 text-slate-400">
                        <span className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-neon-rose shadow-[0_0_6px_#f43f5e]" />
                          <span className="h-3 w-3 rounded-full bg-neon-amber shadow-[0_0_6px_#f59e0b]" />
                          <span className="h-3 w-3 rounded-full bg-neon-green shadow-[0_0_6px_#10b981]" />
                        </span>
                        <span className="text-[11px] text-neon-cyan">pricing-engine.controller.js</span>
                      </div>
                      <div className="pt-4 space-y-2 text-slate-300">
                        <p className="text-slate-500">// Dynamic tariff calculation</p>
                        <p><span className="text-neon-cyan">const</span> calcRate = (slot, occupancy) =&gt; {'{'}</p>
                        <p className="pl-4">const surge = occupancy &gt; 0.85 ? 1.45 : 1.0;</p>
                        <p className="pl-4">const peak = isPeakHour() ? 1.25 : 1.0;</p>
                        <p className="pl-4 text-neon-green">return slot.baseRate * surge * peak;</p>
                        <p>{'}'};</p>
                      </div>
                      <div className="mt-4 rounded-xl border border-neon-green/40 bg-neon-green/10 p-3 text-[11px] text-neon-green flex items-center justify-between">
                        <span>PRICING ENGINE: ACTIVE</span>
                        <span>LATENCY: 8ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        )}

        {/* OTHER PROJECTS 3D TILT GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project, index) => {
            const cardAccents = [
              { border: 'hover:border-neon-cyan', shadow: 'hover:shadow-glow-cyan', text: 'group-hover:text-neon-cyan', badge: 'border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan' },
              { border: 'hover:border-neon-green', shadow: 'hover:shadow-glow-green', text: 'group-hover:text-neon-green', badge: 'border-neon-green/40 bg-neon-green/10 text-neon-green' },
              { border: 'hover:border-neon-purple', shadow: 'hover:shadow-glow-purple', text: 'group-hover:text-neon-purple', badge: 'border-neon-purple/40 bg-neon-purple/10 text-neon-purple' },
              { border: 'hover:border-neon-pink', shadow: 'hover:shadow-glow-pink', text: 'group-hover:text-neon-pink', badge: 'border-neon-pink/40 bg-neon-pink/10 text-neon-pink' },
              { border: 'hover:border-neon-amber', shadow: 'hover:shadow-glow-amber', text: 'group-hover:text-neon-amber', badge: 'border-neon-amber/40 bg-neon-amber/10 text-neon-amber' },
            ];
            const acc = cardAccents[index % cardAccents.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <TiltCard className={`glass-card flex flex-col justify-between h-full p-6 sm:p-7 ${acc.border} ${acc.shadow} transition-all`}>
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 border-b border-surface-border">
                      <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase font-bold tracking-wider ${acc.badge}`}>
                        {project.category}
                      </span>
                      <Sparkles className="h-4 w-4 text-neon-cyan/70" />
                    </div>

                    <h3 className={`mt-5 font-display text-2xl font-bold text-white transition-colors ${acc.text}`}>
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {project.summary}
                    </p>

                    {/* Problem & Solution Mini Cards */}
                    <div className="mt-4 space-y-2 text-xs">
                      <div className="rounded-xl border border-surface-border bg-surface p-2.5">
                        <span className="font-mono text-neon-rose font-semibold block mb-0.5">PROBLEM:</span>
                        <span className="text-slate-300 text-[11px]">{project.problem}</span>
                      </div>
                      <div className="rounded-xl border border-neon-cyan/20 bg-neon-cyan/5 p-2.5">
                        <span className="font-mono text-neon-cyan font-semibold block mb-0.5">SOLUTION:</span>
                        <span className="text-slate-300 text-[11px]">{project.solution}</span>
                      </div>
                    </div>

                    {/* Tech stack pills */}
                    <div className="flex flex-wrap gap-1.5 pt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-surface-border bg-surface px-2.5 py-1 font-mono text-[11px] text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-surface-border">
                    {project.apkUrl || project.downloadUrl ? (
                      <a
                        href={project.apkUrl || project.downloadUrl}
                        download={project.downloadFileName || "Expense_Tracker _mobile_App.apk"}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neon-pink/20 border border-neon-pink/50 px-4 py-2.5 text-xs font-bold text-neon-pink transition-all hover:bg-neon-pink hover:text-white shadow-glow-pink"
                      >
                        Download APK <Download className="h-3.5 w-3.5" />
                      </a>
                    ) : project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neon-cyan/20 border border-neon-cyan/50 px-4 py-2.5 text-xs font-bold text-neon-cyan transition-all hover:bg-neon-cyan hover:text-void shadow-glow-cyan"
                      >
                        Live Demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-xs font-mono text-slate-400">
                        <Code2 className="h-3.5 w-3.5 text-slate-500" /> Source Available
                      </span>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub code for ${project.title}`}
                      className="flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-surface px-4 py-2.5 text-xs font-semibold text-slate-300 transition-all hover:border-neon-purple hover:text-neon-purple"
                    >
                      <FaGithub className="h-4 w-4" /> Code
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

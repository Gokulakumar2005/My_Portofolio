import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { timelineData } from '../data/content';

export const Experience = () => {
  return (
    <section id="timeline" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>04 // MILESTONES & EDUCATION</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Academic foundations & <span className="text-gradient-rainbow">specialized training</span>.
          </h2>
        </motion.div>

        {/* Vertical Timeline with Vibrant Accents */}
        <div className="relative border-l-2 border-surface-border ml-4 sm:ml-32 space-y-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative pl-8 group"
            >
              {/* Glowing Timeline Node */}
              <div
                className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 bg-void transition-all duration-300 group-hover:scale-125"
                style={{
                  borderColor: item.accent,
                  boxShadow: `0 0 16px ${item.accent}`,
                }}
              />

              {/* Date Badge */}
              <div className="sm:absolute sm:-left-36 sm:top-1 font-mono text-xs font-bold text-slate-400 mb-2 sm:mb-0">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-neon-cyan" />
                  {item.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 hover:border-neon-cyan/50 hover:shadow-glow-cyan transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className="rounded-full border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
                    style={{
                      borderColor: `${item.accent}60`,
                      backgroundColor: `${item.accent}20`,
                      color: item.accent,
                      boxShadow: `0 0 10px ${item.accent}30`,
                    }}
                  >
                    {item.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {item.institution}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

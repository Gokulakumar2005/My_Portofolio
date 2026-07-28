import { motion } from 'framer-motion';
import { Award, GraduationCap, Calendar, MapPin, Briefcase } from 'lucide-react';

const timelineEvents = [
  {
    type: 'certification',
    title: 'MERN Full Stack Development',
    institution: 'DCT Academy',
    location: 'Bangalore, India',
    period: '2026',
    description: 'Intensive full-stack engineering program covering React, Node.js, Express, MongoDB, RESTful APIs, Redux, state management, and real-world project deployments.',
    icon: <Award className="h-5 w-5 text-accent-400" />,
    badge: 'Certification',
  },
  {
    type: 'education',
    title: 'Bachelor of Computer Science (B.Sc)',
    institution: 'National College (Autonomous)',
    location: 'Trichy, Tamil Nadu',
    period: '2022 — 2025',
    description: 'Built a strong foundation in computer science fundamentals, data structures, relational databases, web algorithms, and software engineering methodologies.',
    icon: <GraduationCap className="h-5 w-5 text-accent-400" />,
    badge: 'Degree',
  },
  {
    type: 'education',
    title: 'Higher Secondary Education (HSC)',
    institution: 'Municipal Higher Secondary School',
    location: 'Karur, Tamil Nadu',
    period: '2020 — 2022',
    description: 'Specialized in Mathematics and Computer Science, building logic foundation and initial programming skills.',
    icon: <GraduationCap className="h-5 w-5 text-accent-400" />,
    badge: 'High School',
  },
];

const Experience = () => {
  return (
    <section id="education" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-accent-400">
            <Briefcase className="h-3.5 w-3.5" /> Background & Timeline
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Education & <span className="text-gradient">certifications</span>.
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-slate-200/80 dark:border-slate-800/80 ml-4 sm:ml-32 space-y-10">
          {timelineEvents.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Marker Point */}
              <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent-500 bg-obsidian-950 text-accent-400 shadow-glow">
                {item.icon}
              </div>

              {/* Date Badge on Desktop Left Side */}
              <div className="hidden sm:block absolute -left-36 top-2 w-28 text-right font-mono text-xs font-semibold text-accent-400">
                {item.period}
              </div>

              {/* Event Card */}
              <div className="glass-card rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800/80 transition duration-300 hover:border-accent-500/40">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 sm:hidden font-mono text-xs font-semibold text-accent-400">
                    <Calendar className="h-3.5 w-3.5" /> {item.period}
                  </div>
                  <span className="rounded-full bg-accent-500/10 px-3 py-1 font-mono text-[11px] font-semibold text-accent-400">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">{item.institution}</p>

                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-3.5 w-3.5 text-accent-400" />
                  <span>{item.location}</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
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

export default Experience;

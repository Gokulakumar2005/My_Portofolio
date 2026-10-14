import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layout, Server, Database, Wrench, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/content';

const CATEGORY_ICONS = {
  frontend: Layout,
  backend: Server,
  database: Database,
  devops: Wrench,
  tools: Wrench,
};

const CATEGORY_THEMES = {
  frontend: {
    color: 'text-neon-cyan',
    border: 'border-neon-cyan/40',
    bg: 'bg-neon-cyan/10',
    bar: 'from-neon-cyan to-neon-blue',
    shadow: 'hover:border-neon-cyan/50 hover:shadow-glow-cyan',
  },
  backend: {
    color: 'text-neon-green',
    border: 'border-neon-green/40',
    bg: 'bg-neon-green/10',
    bar: 'from-neon-green to-neon-cyan',
    shadow: 'hover:border-neon-green/50 hover:shadow-glow-green',
  },
  database: {
    color: 'text-neon-purple',
    border: 'border-neon-purple/40',
    bg: 'bg-neon-purple/10',
    bar: 'from-neon-purple to-neon-pink',
    shadow: 'hover:border-neon-purple/50 hover:shadow-glow-purple',
  },
  devops: {
    color: 'text-neon-amber',
    border: 'border-neon-amber/40',
    bg: 'bg-neon-amber/10',
    bar: 'from-neon-amber to-neon-rose',
    shadow: 'hover:border-neon-amber/50 hover:shadow-glow-amber',
  },
  tools: {
    color: 'text-neon-amber',
    border: 'border-neon-amber/40',
    bg: 'bg-neon-amber/10',
    bar: 'from-neon-amber to-neon-rose',
    shadow: 'hover:border-neon-amber/50 hover:shadow-glow-amber',
  },
};

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories =
    activeTab === 'all'
      ? skillsData.categories
      : skillsData.categories.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            <Cpu className="h-3.5 w-3.5" />
            <span>02 // SYSTEM CAPABILITIES</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Architectural stack & <span className="text-gradient-rainbow">engineering toolbelt</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Engineered across the full application lifecycle: from reactive user interfaces to scalable REST endpoints and resilient database schemas.
          </p>
        </motion.div>

        {/* Category Filter Tabs with Vivid Colors */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`rounded-full px-5 py-2 font-mono text-xs font-bold tracking-wider transition-all duration-300 ${
              activeTab === 'all'
                ? 'border border-neon-cyan bg-neon-cyan/25 text-neon-cyan shadow-glow-cyan'
                : 'border border-surface-border bg-surface text-slate-400 hover:text-white'
            }`}
          >
            ALL CAPABILITIES
          </button>
          {skillsData.categories.map((cat) => {
            const theme = CATEGORY_THEMES[cat.id] || CATEGORY_THEMES.frontend;
            const isSelected = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-5 py-2 font-mono text-xs font-bold tracking-wider transition-all duration-300 ${
                  isSelected
                    ? `border ${theme.border} ${theme.bg} ${theme.color} shadow-lg`
                    : 'border border-surface-border bg-surface text-slate-400 hover:text-white'
                }`}
              >
                {cat.name.toUpperCase()}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filteredCategories.map((category, catIdx) => {
            const Icon = CATEGORY_ICONS[category.id] || Cpu;
            const theme = CATEGORY_THEMES[category.id] || CATEGORY_THEMES.frontend;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className={`glass-card group rounded-3xl p-6 sm:p-8 transition-all ${theme.shadow}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${theme.border} ${theme.bg} ${theme.color} shadow-md`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {category.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Item Rows */}
                <div className="mt-6 space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className={`h-3.5 w-3.5 ${theme.color}`} />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md border border-surface-border bg-surface px-2 py-0.5 text-[10px] text-slate-300">
                            {skill.tag}
                          </span>
                          <span className={`${theme.color} font-bold`}>{skill.level}%</span>
                        </div>
                      </div>

                      {/* Animated Progress Bar with Gradient */}
                      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-strong border border-surface-border">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${theme.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

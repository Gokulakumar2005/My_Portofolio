import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { personalInfo } from '../data/content';

const NAV_ITEMS = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'Contact', to: 'contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section detection
      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4 md:px-8">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center justify-between gap-6 rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'glass-panel border-neon-cyan/40 shadow-glow-cyan/25 w-full max-w-4xl'
              : 'border border-surface-border bg-surface-strong/70 backdrop-blur-md w-full max-w-5xl'
          }`}
        >
          {/* Brand Monogram with Gradient */}
          <Link
            to="home"
            smooth
            duration={500}
            className="group flex cursor-pointer items-center gap-2.5 font-mono text-sm font-bold tracking-tight text-white transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-neon-cyan/50 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 text-neon-cyan transition-transform group-hover:scale-110 shadow-glow-cyan">
              <Terminal className="h-4 w-4" />
            </span>
            <span className="text-base font-bold text-gradient-rainbow">
              {personalInfo.monogram}
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-60}
                  className={`relative cursor-pointer px-4 py-1.5 text-xs font-mono font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-neon-cyan font-bold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-neon-cyan/50 bg-neon-cyan/15 shadow-[0_0_15px_rgba(0,240,255,0.35)]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.resumeUrl}
              download="Gokulakumar_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-neon-cyan/50 bg-gradient-to-r from-neon-cyan/15 to-neon-purple/15 px-4 py-1.5 text-xs font-mono font-bold text-neon-cyan backdrop-blur-md transition-all duration-300 hover:border-neon-cyan hover:bg-neon-cyan hover:text-void hover:shadow-glow-cyan"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface text-slate-300 md:hidden hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Full-screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-void/95 p-8 backdrop-blur-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-surface-border pb-6">
              <span className="font-mono text-lg font-bold text-gradient-rainbow">
                {personalInfo.monogram}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close mobile navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border bg-surface text-slate-300"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-col gap-6 py-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-60}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl font-bold text-slate-200 transition-colors hover:text-neon-cyan"
                >
                  <span className="mr-3 font-mono text-sm text-neon-cyan/70">#</span>
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="pt-6 border-t border-surface-border">
              <a
                href={personalInfo.resumeUrl}
                download="Gokulakumar_Resume.pdf"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple py-3 font-mono text-sm font-bold text-void shadow-glow-cyan"
              >
                <FileDown className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

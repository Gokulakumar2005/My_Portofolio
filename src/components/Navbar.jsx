import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, MoonStar, SunMedium, X, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Timeline', to: 'education' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = ({ isDark, setIsDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'glass py-3 shadow-soft' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="home" smooth duration={500} className="group flex cursor-pointer items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent-500/30 bg-accent-500/10 text-accent-400 group-hover:scale-105 transition-transform">
            <Code2 className="h-5 w-5" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Gokula<span className="text-accent-400">kumar</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              duration={500}
              spy={true}
              activeClass="text-accent-400 font-semibold"
              className="cursor-pointer text-sm font-medium text-slate-600 transition-colors hover:text-accent-500 dark:text-slate-300 dark:hover:text-accent-400"
            >
              {link.name}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 transition duration-300 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {isDark ? <SunMedium className="h-4 w-4 text-amber-400" /> : <MoonStar className="h-4 w-4 text-slate-700" />}
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsDark((prev) => !prev)}
            aria-label="Toggle Theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {isDark ? <SunMedium className="h-4 w-4 text-amber-400" /> : <MoonStar className="h-4 w-4 text-slate-700" />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/80 bg-white/70 text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute left-0 top-full w-full border-t border-slate-200/50 py-6 shadow-soft dark:border-slate-800/80 md:hidden"
          >
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-accent-400 dark:text-slate-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

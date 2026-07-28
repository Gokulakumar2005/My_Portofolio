import { useEffect, useState, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ThreeBackground from './components/ThreeBackground';
import MouseGlow from './components/MouseGlow';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Terminal, Sparkles } from 'lucide-react';

const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorActive, setCursorActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('theme-dark', isDark);
    document.documentElement.classList.toggle('theme-light', !isDark);
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    window.localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handlePointerMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    const handlePointerDown = () => setCursorActive(true);
    const handlePointerUp = () => setCursorActive(false);

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mouseup', handlePointerUp);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mouseup', handlePointerUp);
    };
  }, [prefersReducedMotion]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-obsidian-950 text-slate-100"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-5 rounded-2xl border border-accent-500/30 bg-accent-500/10 p-4 text-accent-400 shadow-glow"
            >
              <Terminal className="h-10 w-10" />
            </motion.div>
            <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
              <Sparkles className="h-4 w-4 text-accent-400 animate-pulse" />
              Initialising Portfolio...
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative min-h-screen overflow-x-hidden font-sans text-slate-900 transition-colors duration-500 dark:text-slate-100 ${isDark ? 'theme-dark bg-obsidian-950' : 'theme-light bg-slate-50'}`}>
        {!prefersReducedMotion && (
          <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
            <motion.div
              animate={{ x: cursorPosition.x - 14, y: cursorPosition.y - 14, scale: cursorActive ? 0.75 : 1 }}
              transition={{ duration: 0.15, ease: 'circOut' }}
              className="absolute h-7 w-7 rounded-full border border-accent-400/60 bg-accent-400/10 backdrop-blur-xs"
            />
          </div>
        )}

        <ThreeBackground />
        <MouseGlow />

        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Suspense fallback={null}>
            <Education />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import GitHubStats from './components/GitHubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import MouseGlow from './components/MouseGlow';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the loading screen animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#0f172a] flex flex-col items-center justify-center"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-[#38bdf8] mb-4"
            >
              <Code2 className="w-16 h-16" />
            </motion.div>
            <h1 className="text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#c084fc] animate-pulse">
              Loading Portfolio...
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative w-full min-h-screen font-sans selection:bg-[#c084fc]/30 selection:text-white">
        <ThreeBackground />
        <MouseGlow />
        
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          {/* <GitHubStats /> */}
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;

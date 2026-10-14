import { useState, Suspense, lazy } from 'react';
import { useLenis } from './hooks/useLenis';
import { TerminalLoader } from './components/TerminalLoader';
import { MotionPictureBackground } from './components/MotionPictureBackground';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

// Lazy-load the 3D Developer World Canvas with Suspense
const BackgroundCanvas = lazy(() => import('./three/BackgroundCanvas'));

function App() {
  const [loading, setLoading] = useState(true);

  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      {/* Terminal Boot Sequence Loader */}
      {loading && <TerminalLoader onComplete={() => setLoading(false)} />}

      {/* 4K Cinematic Software Developer Motion Picture Background */}
      <MotionPictureBackground />

      {/* Futuristic 3D Developer Universe Floating in Front of Motion Picture */}
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>

      {/* Global Interactive Overlays */}
      <CustomCursor />
      <ScrollProgress />
      <div className="grain-overlay" />

      {/* Main Page Layout */}
      <div className="relative min-h-screen text-slate-100 font-sans selection:bg-neon-cyan/20 selection:text-neon-cyan">
        <Navbar />

        <main className="relative z-10 space-y-12 sm:space-y-20">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;

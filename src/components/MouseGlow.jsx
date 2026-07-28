import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-0 h-96 w-96 rounded-full opacity-60 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 75%)',
        filter: 'blur(50px)',
      }}
      animate={{
        x: mousePosition.x - 192,
        y: mousePosition.y - 192,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  );
};

export default MouseGlow;

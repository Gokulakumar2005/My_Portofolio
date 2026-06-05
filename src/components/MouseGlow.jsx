import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(14, 165, 233, 0) 70%)',
        filter: 'blur(40px)',
      }}
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
    />
  );
};

export default MouseGlow;

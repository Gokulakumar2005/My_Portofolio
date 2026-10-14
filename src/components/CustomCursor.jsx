import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Initialize isTouch with lazy initializer (zero synchronous setState in effect)
  const [isTouch] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(pointer: coarse)').matches;
  });

  useEffect(() => {
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      }
    };

    const handleInteractiveOut = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseover', handleInteractiveOver);
    document.addEventListener('mouseout', handleInteractiveOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleInteractiveOver);
      document.removeEventListener('mouseout', handleInteractiveOut);
    };
  }, [isVisible, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Outer Multi-color Glow Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-neon-cyan/60 backdrop-blur-[1px] shadow-[0_0_20px_rgba(0,240,255,0.3)]"
        animate={{
          x: pos.x - (isHovered ? 24 : 16),
          y: pos.y - (isHovered ? 24 : 16),
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
          borderColor: isHovered ? '#ec4899' : '#00f0ff',
          backgroundColor: isHovered ? 'rgba(236, 72, 153, 0.15)' : 'rgba(0, 240, 255, 0.08)',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 260, mass: 0.5 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_12px_#00f0ff]"
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.2 }}
      />
    </>
  );
};

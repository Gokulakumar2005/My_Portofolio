import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-neon-cyan via-electric-violet to-terminal-green origin-left shadow-[0_0_12px_#00e5ff]"
        style={{ scaleX }}
      />
    </div>
  );
};

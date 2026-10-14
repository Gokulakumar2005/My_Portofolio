import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, CheckCircle2, ShieldCheck, Cpu } from 'lucide-react';

const BOOT_LOGS = [
  { text: '> initializing developer universe...', delay: 150 },
  { text: '> mounting WebGL 3D canvas...', delay: 350 },
  { text: '> loading neural MERN clusters: React 19, Node.js, MongoDB...', delay: 600 },
  { text: '> verifying JWT auth & REST endpoints: 200 OK', delay: 850 },
  { text: '> compiling shaders... ready.', delay: 1100 },
];

export const TerminalLoader = ({ onComplete }) => {
  const [logs, setLogs] = useState([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timers = BOOT_LOGS.map((item, idx) => {
      return setTimeout(() => {
        setLogs((prev) => [...prev, item.text]);
        if (idx === BOOT_LOGS.length - 1) {
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 450);
          }, 350);
        }
      }, item.delay);
    });

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-void text-slate-100 p-6"
        >
          {/* Cyber Terminal Window */}
          <div className="w-full max-w-lg rounded-2xl border border-neon-cyan/30 bg-surface-strong p-6 shadow-terminal backdrop-blur-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-surface-border pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-warm-amber/80" />
                <span className="h-3 w-3 rounded-full bg-terminal-green/80" />
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-neon-cyan">
                <Terminal className="h-3.5 w-3.5 animate-pulse" />
                <span>boot_sequence.sh</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="space-y-2.5 font-mono text-xs sm:text-sm">
              {logs.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={`flex items-center gap-2 ${
                    log.includes('ready')
                      ? 'text-terminal-green font-bold'
                      : log.includes('200 OK')
                      ? 'text-neon-cyan'
                      : 'text-slate-300'
                  }`}
                >
                  {log.includes('ready') ? (
                    <CheckCircle2 className="h-4 w-4 text-terminal-green shrink-0" />
                  ) : log.includes('200 OK') ? (
                    <ShieldCheck className="h-4 w-4 text-neon-cyan shrink-0" />
                  ) : (
                    <Cpu className="h-4 w-4 text-slate-500 shrink-0" />
                  )}
                  <span>{log}</span>
                </motion.div>
              ))}

              <div className="flex items-center gap-2 pt-2 text-neon-cyan">
                <span className="h-2 w-2 rounded-full bg-neon-cyan animate-ping" />
                <span className="h-4 w-2 bg-neon-cyan animate-pulse inline-block" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

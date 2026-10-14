import { Terminal, Rocket } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/content';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-surface-border bg-void/90 px-6 py-12 md:px-12 backdrop-blur-xl">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        {/* Monogram Brand */}
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-neon-cyan/50 bg-neon-cyan/15 text-neon-cyan shadow-glow-cyan">
            <Terminal className="h-4 w-4" />
          </span>
          <div>
            <div className="font-mono text-sm font-bold text-gradient-cyan">
              {personalInfo.monogram}
            </div>
            <div className="text-[11px] font-mono text-slate-400">
              © {new Date().getFullYear()} Gokulakumar S. All systems nominal.
            </div>
          </div>
        </div>

        {/* Built With Notice */}
        <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
          <span className="text-neon-cyan font-bold">React 19</span>
          <span>•</span>
          <span className="text-neon-purple font-bold">Three.js</span>
          <span>•</span>
          <span className="text-neon-green font-bold">Node.js</span>
          <span>•</span>
          <span className="text-neon-amber font-bold">Tailwind</span>
        </div>

        {/* Social Nodes & Rocket Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Gokulakumar2005"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full border border-surface-border bg-surface p-2 text-slate-400 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-glow-cyan transition-all"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-full border border-surface-border bg-surface p-2 text-slate-400 hover:border-neon-purple hover:text-neon-purple hover:shadow-glow-purple transition-all"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="group flex h-9 w-9 items-center justify-center rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 text-neon-cyan transition-all hover:bg-neon-cyan hover:text-void hover:shadow-glow-cyan"
          >
            <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" />
          </button>
        </div>
      </div>
    </footer>
  );
};

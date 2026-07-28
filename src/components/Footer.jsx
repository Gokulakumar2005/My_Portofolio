import { ArrowUp, Mail, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200/80 bg-white/60 px-6 py-12 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/60 md:px-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Code2 className="h-5 w-5 text-accent-400" />
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">Gokulakumar</h2>
          </div>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Full-Stack MERN Developer building high-conviction digital products.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Gokulakumar2005/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:gokulakumar2005@gmail.com"
            aria-label="Email Me"
            className="rounded-full border border-slate-200/80 bg-white/70 p-2.5 text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        {/* Back to top button */}
        <div className="flex flex-col items-center gap-2 md:items-end">
          <Link
            to="home"
            smooth
            duration={500}
            aria-label="Back to top"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-accent-500 text-slate-950 transition duration-300 hover:-translate-y-0.5 shadow-glow"
          >
            <ArrowUp className="h-4 w-4" />
          </Link>
          <p className="text-center font-mono text-[11px] text-slate-500 dark:text-slate-400 md:text-right">
            © {new Date().getFullYear()} Gokulakumar. Crafted with React & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

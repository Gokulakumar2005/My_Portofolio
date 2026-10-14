import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, Terminal, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/content';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Formspree endpoint submission
      const response = await fetch('https://formspree.io/f/mqaejvyb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback open mail client
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `From: ${formData.name} (${formData.email})\n\n${formData.message}`
        )}`;
        setStatus('success');
      }
    } catch {
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      setStatus('success');
    }
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto flex w-fit items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
            <Terminal className="h-3.5 w-3.5" />
            <span>05 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Let’s architect something <span className="text-gradient-cyan">remarkable</span> together.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-400">
            Open for full-time engineering roles, high-impact MERN projects, and technical collaborations.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Coordinates & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Direct Coordinates
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Feel free to dispatch an email or connect through LinkedIn.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 font-mono text-xs">
                {/* Email with copy button */}
                <div className="flex items-center justify-between rounded-2xl border border-surface-border bg-surface p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-neon-cyan" />
                    <div>
                      <span className="text-slate-400 block text-[10px]">EMAIL ADDRESS</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-slate-200 hover:text-neon-cyan transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-surface-border bg-surface-strong text-slate-300 hover:border-neon-cyan hover:text-neon-cyan"
                  >
                    {copied ? <Check className="h-4 w-4 text-terminal-green" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface p-4">
                  <MapPin className="h-5 w-5 text-electric-violet" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">LOCATION</span>
                    <span className="text-slate-200">{personalInfo.location}</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface p-4">
                  <Phone className="h-5 w-5 text-terminal-green" />
                  <div>
                    <span className="text-slate-400 block text-[10px]">PHONE / WHATSAPP</span>
                    <span className="text-slate-200">{personalInfo.phone}</span>
                  </div>
                </div>
              </div>

              {/* Availability Status */}
              <div className="flex items-center gap-2.5 rounded-xl border border-terminal-green/30 bg-terminal-green/10 p-3.5 font-mono text-xs text-terminal-green">
                <span className="h-2 w-2 rounded-full bg-terminal-green animate-pulse" />
                <span>Status: Currently Available for Full-Stack Opportunities</span>
              </div>

              {/* Social Profiles */}
              <div className="pt-2">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-500 block mb-3">
                  NETWORK NODES
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Gokulakumar2005"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    className="flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-4 py-2.5 font-mono text-xs text-slate-300 transition-all hover:border-neon-cyan hover:text-neon-cyan"
                  >
                    <FaGithub className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    className="flex items-center gap-2 rounded-xl border border-surface-border bg-surface px-4 py-2.5 font-mono text-xs text-slate-300 transition-all hover:border-electric-violet hover:text-electric-violet"
                  >
                    <FaLinkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Glass Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7"
          >
            <div className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-4"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-terminal-green/40 bg-terminal-green/15 text-terminal-green shadow-glow-green">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Transmission Received!
                    </h3>
                    <p className="max-w-md text-sm text-slate-400">
                      Thank you for reaching out. I have received your message and will review it promptly within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 rounded-xl border border-neon-cyan/40 bg-neon-cyan/15 px-6 py-2.5 font-mono text-xs font-semibold text-neon-cyan hover:bg-neon-cyan/25"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Alan Turing"
                          className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alan@domain.com"
                          className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Subject / Project Scope
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="MERN Stack Engineering Opportunity"
                        className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Your Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Hello Gokul, we'd love to discuss an engineering role / project with you..."
                        className="w-full rounded-xl border border-surface-border bg-surface px-4 py-3 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus:border-neon-cyan focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-cyan to-electric-violet py-4 text-sm font-bold text-void shadow-glow-cyan transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_25px_#00e5ff] disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Sparkles className="h-4 w-4 animate-spin text-void" />
                          <span>Dispatching Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          <span>Dispatch Transmission</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

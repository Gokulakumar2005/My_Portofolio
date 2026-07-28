import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, CheckCircle, AlertTriangle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const endpoint = import.meta.env.VITE_FORMSPREE_ID
      ? `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`
      : null;

    if (!endpoint) {
      const mailtoLink = `mailto:gokulakumar2005@gmail.com?subject=${encodeURIComponent('Portfolio Inquiry from ' + formData.get('name'))}&body=${encodeURIComponent(`Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`)}`;
      window.location.href = mailtoLink;
      setStatus('fallback');
      form.reset();
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-28 md:px-12 lg:px-16">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-3 flex w-fit items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-4 py-1.5 text-xs font-mono font-semibold uppercase tracking-[0.25em] text-accent-400">
            <MessageSquare className="h-3.5 w-3.5" /> Contact & Collaborate
          </div>
          <h2 className="font-display text-3xl font-extrabold text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
            Let’s build something <span className="text-gradient">remarkable</span>.
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="glass-card flex flex-col justify-between rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80"
          >
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Get in Touch</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                I’m open to full-time engineering roles, freelance software projects, or technical collaborations. Feel free to reach out anytime!
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:gokulakumar2005@gmail.com"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition duration-300 hover:border-accent-500/50 dark:border-slate-800/80 dark:bg-slate-900/60"
                >
                  <div className="rounded-xl bg-accent-500/10 p-3 text-accent-400 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Email Address</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-accent-400 transition-colors">gokulakumar2005@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919944351752"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-4 transition duration-300 hover:border-accent-500/50 dark:border-slate-800/80 dark:bg-slate-900/60"
                >
                  <div className="rounded-xl bg-accent-500/10 p-3 text-accent-400 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Phone</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-accent-400 transition-colors">+91 9944351752</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-slate-800/80 dark:bg-slate-900/60">
                  <div className="rounded-xl bg-accent-500/10 p-3 text-accent-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Location</p>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-slate-800/80">
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-3">Connect on Social</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Gokulakumar2005"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-3.5 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/gokulakumar-s-4b76a2341"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-3.5 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                >
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:gokulakumar2005@gmail.com"
                  aria-label="Send Direct Email"
                  className="rounded-2xl border border-slate-200/80 bg-white/70 p-3.5 text-slate-700 transition duration-300 hover:-translate-y-1 hover:border-accent-500 hover:text-accent-400 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80"
          >
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Fill out the form below and I’ll get back to you within 24 hours.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Gokulakumar"
                  className="w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project, timeline, or open role..."
                  className="w-full rounded-2xl border border-slate-300/80 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition duration-300 focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-slate-800 dark:bg-slate-900/80 dark:text-white"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-accent-500 px-6 py-3.5 text-sm font-bold text-slate-950 transition duration-300 hover:bg-accent-400 shadow-glow disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending Message...' : 'Send Message'} <Send className="h-4 w-4" />
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 p-3 text-xs font-medium text-emerald-400">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  Message sent successfully! I will reply shortly.
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 rounded-2xl bg-rose-500/10 border border-rose-500/30 p-3 text-xs font-medium text-rose-400">
                  <AlertTriangle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try emailing me directly.
                </div>
              )}

              {status === 'fallback' && (
                <div className="flex items-center gap-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 p-3 text-xs font-medium text-amber-400">
                  <Mail className="h-4 w-4 shrink-0" />
                  Opened your default email client to send message.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

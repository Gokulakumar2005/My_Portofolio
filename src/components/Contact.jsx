import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  // Removed form state and submit handler as per user request

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#38bdf8] to-[#c084fc] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 bg-gradient-border p-1 md:p-[2px] rounded-3xl">
          <div className="md:col-span-2 glass-card p-8 rounded-3xl h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#c084fc]/10 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-display font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 text-[#38bdf8]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Email</h4>
                    <a href="mailto:gokulakumar2005@gmail.com" className="text-gray-400 hover:text-[#38bdf8] transition-colors">
                      gokulakumar2005@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 text-[#c084fc]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Phone</h4>
                    <a href="tel:+919944351752" className="text-gray-400 hover:text-[#c084fc] transition-colors">
                      +91 9944351752
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-full bg-white/5 border border-white/10 text-[#e879f9]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">Location</h4>
                    <p className="text-gray-400">
                      Basavangudi,Bangalore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 glass-card p-8 md:p-12 rounded-3xl h-full border border-transparent flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-gradient-to-tr from-[#38bdf8] to-[#c084fc] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#c084fc]/20">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Ready to start a project?
            </h3>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm always open to discussing product design work or partnership opportunities. Let's create something amazing together!
            </p>
            <a
              href="mailto:gokulakumar2005@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#38bdf8] to-[#c084fc] text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(192,132,252,0.6)] hover:scale-105 transition-all duration-300"
            >
              Send Message <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

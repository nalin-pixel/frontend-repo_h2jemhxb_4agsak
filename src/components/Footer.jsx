import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#0A0A12] py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <p className="text-sm text-white/60">© {new Date().getFullYear()} films.blue AI — Build the frontier.</p>
        </motion.div>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a href="#career" className="hover:text-white">Career Pathfinder</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

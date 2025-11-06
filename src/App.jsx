import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Pathfinder from './components/Pathfinder';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#07070C] text-white">
      {/* Subtle starry background */}
      <div className="pointer-events-none fixed inset-0 opacity-40" aria-hidden>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="2" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.025" />
        </svg>
      </div>

      <Hero />
      <Pathfinder />
      <FeatureGrid />
      <Footer />

      {/* Floating gradient accents */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.35, y: 0 }}
        transition={{ duration: 1 }}
        className="pointer-events-none fixed -right-24 top-24 h-64 w-64 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(168,85,247,0.5), transparent)' }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none fixed -left-24 bottom-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'radial-gradient(closest-side, rgba(34,211,238,0.5), transparent)' }}
      />
    </div>
  );
}

export default App;

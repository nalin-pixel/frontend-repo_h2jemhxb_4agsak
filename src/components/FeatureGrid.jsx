import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Satellite, Brain, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Cpu,
    title: 'Systems + Scale',
    desc: 'From on-device inference to distributed pipelines, we design for performance, reliability, and flow.'
  },
  {
    icon: Brain,
    title: 'Model-native UX',
    desc: 'Interfaces shaped around the grain of LLMs, vision, and robotics stacks—fast and delightful.'
  },
  {
    icon: Satellite,
    title: 'Frontier Domains',
    desc: 'Space, biotech, autonomy, simulation. We love the hard problems that move the world forward.'
  },
  {
    icon: Sparkles,
    title: 'Creative Engine',
    desc: 'Micro-animations, motion, and rich art direction make complexity feel effortless.'
  }
];

const Feature = ({ icon: Icon, title, desc, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
  >
    <div className="absolute -inset-px opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100">
      <div className="h-full w-full bg-gradient-to-r from-fuchsia-500/30 via-violet-500/30 to-cyan-400/30" />
    </div>
    <div className="relative z-10">
      <Icon className="h-6 w-6 text-violet-300" />
      <h4 className="mt-3 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-1 text-white/70">{desc}</p>
    </div>
  </motion.div>
);

const FeatureGrid = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-violet-200 via-white to-cyan-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Why films.blue AI
        </h2>
        <p className="mt-3 text-white/70">A studio-grade engine for building the future—beautifully.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <Feature key={it.title} {...it} i={i} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;

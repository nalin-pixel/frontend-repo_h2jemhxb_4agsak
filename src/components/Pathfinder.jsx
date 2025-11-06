import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Loader2, Wand2, FileText, CheckCircle2 } from 'lucide-react';

const fancyGradient = 'bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400';

const sampleMatches = [
  {
    id: 1,
    title: 'AI Systems Engineer',
    company: 'Helios Robotics',
    tags: ['C++', 'CUDA', 'ROS2', 'Realtime'],
    score: 96,
  },
  {
    id: 2,
    title: 'Frontier ML Researcher',
    company: 'Lumen Labs',
    tags: ['PyTorch', 'RL', 'Diffusion', 'Eval'],
    score: 92,
  },
  {
    id: 3,
    title: 'Space Autonomy Engineer',
    company: 'Orbital Minds',
    tags: ['SLAM', 'Guidance', 'Onboard AI'],
    score: 89,
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">{children}</span>
);

const MatchCard = ({ match, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16, scale: 0.98 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
  >
    <div className="absolute -inset-px opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100">
      <div className={`h-full w-full ${fancyGradient} opacity-40`} />
    </div>
    <div className="relative z-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-white">{match.title}</h4>
          <p className="text-sm text-white/70">{match.company}</p>
        </div>
        <div className="rounded-lg bg-white/10 px-2 py-1 text-sm font-semibold text-white">{match.score}%</div>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {match.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white/90 transition-colors hover:bg-white/20">
        View details
      </button>
    </div>
  </motion.div>
);

const Pathfinder = () => {
  const inputRef = useRef(null);
  const [stage, setStage] = useState('upload'); // 'upload' | 'processing' | 'results'
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const triggerUpload = () => inputRef.current?.click();

  const handleFile = (file) => {
    if (!file) return;
    setFileName(file.name);
    setStage('processing');
    setProgress(0);

    // Playful fake processing sequence to simulate creative animation timeline
    let p = 0;
    const steps = [8, 22, 35, 51, 68, 83, 92, 100];
    const interval = setInterval(() => {
      p = steps.shift() ?? 100;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => setStage('results'), 600);
      }
    }, 600);
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    handleFile(file);
  };

  return (
    <section id="career" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-violet-200 via-white to-cyan-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
          Career Pathfinder
        </h2>
        <p className="mt-4 text-white/70">
          Drop in your resume (PDF) and let films.blue AI surface roles where you’ll thrive across frontier tech.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Upload / Processing panel */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/10 p-6 backdrop-blur">
          <AnimatePresence mode="wait">
            {stage === 'upload' && (
              <motion.div
                key="upload"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  onDrop={onDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="group relative flex cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-white/20 p-10 text-center transition-colors hover:border-white/40"
                  onClick={triggerUpload}
                >
                  <div className="absolute inset-0 -z-0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100">
                    <div className={`h-full w-full ${fancyGradient} opacity-30`} />
                  </div>
                  <Upload className="h-10 w-10 text-violet-300" />
                  <div>
                    <p className="font-semibold text-white">Upload your resume</p>
                    <p className="text-sm text-white/70">Drag & drop a PDF, or click to browse</p>
                  </div>
                  <input
                    ref={inputRef}
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => handleFile(e.target.files?.[0])}
                    className="hidden"
                  />
                </div>
                <div className="mt-4 text-center text-xs text-white/60">We respect your privacy. Files are processed transiently.</div>
              </motion.div>
            )}

            {stage === 'processing' && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Creative processing animation */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-8">
                  <div className="pointer-events-none absolute -inset-1 animate-pulse rounded-xl opacity-60 blur-2xl" style={{ background: 'conic-gradient(from 180deg at 50% 50%, #a78bfa, #22d3ee, #f0abfc, #a78bfa)' }} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-sm text-white/80">
                        <FileText className="h-4 w-4" />
                        {fileName || 'resume.pdf'}
                      </div>
                      <div className="inline-flex items-center gap-2 text-white/70">
                        <Wand2 className="h-4 w-4" /> AI analyzing
                      </div>
                    </div>

                    <div className="mt-8">
                      {/* Orbital nodes */}
                      <div className="relative mx-auto h-48 w-48">
                        <motion.div
                          className="absolute inset-0 rounded-full border border-violet-400/30"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                        />
                        <motion.div
                          className="absolute inset-4 rounded-full border border-cyan-400/30"
                          animate={{ rotate: -360 }}
                          transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
                        />
                        <motion.div
                          className={`absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${fancyGradient}`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                        />
                        {/* orbiting dots */}
                        {[0, 120, 240].map((deg, i) => (
                          <motion.div
                            key={i}
                            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
                            style={{ transformOrigin: '0 72px' }}
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4 + i, ease: 'linear' }}
                          />
                        ))}
                      </div>

                      {/* Progress bar */}
                      <div className="mt-8">
                        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: 'easeInOut' }}
                            className={`h-full ${fancyGradient}`}
                          />
                        </div>
                        <div className="mt-2 flex items-center justify-between text-xs text-white/70">
                          <span>Parsing</span>
                          <span>{progress}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {stage === 'results' && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Processed: {fileName || 'resume.pdf'}
                  </div>
                  <button
                    onClick={() => setStage('upload')}
                    className="rounded-lg border border-white/10 bg-white/10 px-3 py-1 text-sm text-white/90 transition-colors hover:bg-white/20"
                  >
                    Upload another
                  </button>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-1">
                  {sampleMatches.map((m, idx) => (
                    <MatchCard key={m.id} match={m} delay={idx * 0.08} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic context panel */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0B0B13] to-[#0F0F1A] p-6">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-8 -translate-y-8 rounded-full opacity-30 blur-3xl" style={{ background: 'radial-gradient(closest-side, #a78bfa, transparent)' }} />
          <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 -translate-x-8 translate-y-8 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(closest-side, #22d3ee, transparent)' }} />

          <div className="relative z-10">
            <h3 className="text-xl font-semibold text-white">How it works</h3>
            <p className="mt-2 text-sm text-white/70">
              We parse your resume locally, identify skill clusters, and match them to real opportunities across AI, robotics, and space. The experience is designed to be playful and privacy-first.
            </p>

            <div className="mt-6 grid gap-4">
              {[{
                title: 'Upload',
                desc: 'Drop a PDF. No sign-up needed. Instant feedback.',
              }, {
                title: 'Transform',
                desc: 'Our model maps your experience to frontier skill graphs.',
              }, {
                title: 'Match',
                desc: 'Get ranked roles with skill gaps and impact metrics.',
              }].map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <div className={`h-full w-full ${fancyGradient} opacity-20`} />
                  </div>
                  <div className="relative z-10">
                    <p className="text-sm font-semibold text-white">{String(i + 1).padStart(2, '0')} — {s.title}</p>
                    <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathfinder;

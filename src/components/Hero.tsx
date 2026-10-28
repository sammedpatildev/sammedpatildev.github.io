import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DeveloperDesk3D from './3d/DeveloperDesk3D'
import Hero3DScene from './3d/Hero3DScene'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaTerminal, FaDownload, FaRocket, FaDesktop, FaAtom } from 'react-icons/fa'

const stats = [
  { value: '4+ Years', label: 'Backend Experience', sub: 'Django • DRF • FastAPI' },
  { value: '<180ms', label: 'p99 Latency', sub: 'Tuned from 1.2s' },
  { value: '99.9%', label: 'Production Uptime', sub: 'AWS & Docker SLA' },
  { value: 'AWS SAA', label: 'Solutions Architect', sub: 'Certified (SAA-C03)' },
]

export default function Hero() {
  const [showCode, setShowCode] = useState(false)
  const [active3DScene, setActive3DScene] = useState<'desk' | 'neural'>('desk')

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* Dynamic Ambient Neon Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-purple-600/15 top-[-250px] right-[5%] absolute rounded-full blur-[160px] animate-[float_22s_ease-in-out_infinite]" />
        <div className="w-[500px] h-[500px] bg-cyan-500/15 bottom-[-200px] left-[5%] absolute rounded-full blur-[150px] animate-[float_20s_ease-in-out_infinite_-6s]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(167,139,250,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text & Information (Span 7) */}
          <div className="lg:col-span-7">
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-emerald-500/10 border border-purple-500/30 rounded-full text-xs font-mono mb-8 backdrop-blur-xl shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-zinc-200">AVAILABLE FOR FULL-TIME HIRE</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-cyan-400 hidden sm:inline">BANGALORE / REMOTE</span>
            </motion.div>

            {/* Heading with Modern Gradient Shimmer */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-[-0.03em] mb-6 font-sans"
            >
              <span className="block text-white">Sammed Patil</span>
              <span className="block text-gradient">Senior Python / Backend</span>
              <span className="block text-zinc-300 font-bold">& AI Engineer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-8"
            >
              Backend Engineer with <strong className="text-white">4+ years</strong> of experience designing,
              scaling, and deploying resilient web architectures and microservices using{' '}
              <strong className="text-white font-mono">Python, Django, DRF, PostgreSQL, and AWS</strong>.
              Proven end-to-end ownership in dropping p99 latency from <strong className="text-emerald-400 font-mono">1.2s to &lt;180ms</strong> and orchestrating autonomous <strong className="text-cyan-400 font-mono">LangGraph AI Agents & RAG</strong>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10 items-center"
            >
              <a
                href="/resumes/Python_Backend_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-custom text-zinc-950 rounded-xl font-bold hover:shadow-[0_20px_40px_rgba(167,139,250,0.35)] hover:-translate-y-0.5 transition-all text-sm sm:text-base font-mono shadow-lg"
              >
                <FaDownload className="text-sm" />
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900/90 text-white rounded-xl font-semibold border border-white/10 hover:border-purple-400/80 hover:bg-purple-950/20 transition-all text-sm sm:text-base font-mono backdrop-blur-md shadow-lg"
              >
                <FaRocket className="text-sm text-cyan-400" />
                View Production Systems
              </a>
              <button
                onClick={() => setShowCode(!showCode)}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-black/40 text-zinc-400 hover:text-white rounded-xl font-mono text-xs border border-white/5 hover:border-white/20 transition-all cursor-pointer"
              >
                <FaTerminal className="text-xs text-purple-400" />
                {showCode ? 'Hide Class' : 'Engineer Schema'}
              </button>
            </motion.div>

            {/* Collapsible Python Class */}
            <AnimatePresence>
              {showCode && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8"
                >
                  <Tilt3DCard maxTilt={6} className="bg-[#12131b]/95 border border-white/10 rounded-2xl p-5 font-mono text-xs leading-relaxed text-zinc-400 shadow-2xl backdrop-blur-xl max-w-xl">
                    <div><span className="text-zinc-600 select-none">1</span> <span className="text-purple-400">class</span> <span className="text-cyan-400">SeniorBackendEngineer</span>:</div>
                    <div><span className="text-zinc-600 select-none">2</span> &nbsp;&nbsp;name: str = <span className="text-emerald-400">"Sammed Patil"</span></div>
                    <div><span className="text-zinc-600 select-none">3</span> &nbsp;&nbsp;role: str = <span className="text-emerald-400">"Senior Python / Backend Engineer"</span></div>
                    <div><span className="text-zinc-600 select-none">4</span> &nbsp;&nbsp;location: str = <span className="text-emerald-400">"Bangalore, Karnataka, India"</span></div>
                    <div><span className="text-zinc-600 select-none">5</span> &nbsp;&nbsp;certifications = [<span className="text-emerald-400">"AWS SAA-C03"</span>, <span className="text-emerald-400">"AWS CLF-C02"</span>, <span className="text-emerald-400">"LangGraph Agents"</span>]</div>
                    <div><span className="text-zinc-600 select-none">6</span> &nbsp;&nbsp;core_stack = [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Django/DRF"</span>, <span className="text-emerald-400">"FastAPI"</span>, <span className="text-emerald-400">"PostgreSQL"</span>, <span className="text-emerald-400">"Celery"</span>, <span className="text-emerald-400">"AWS"</span>]</div>
                    <div><span className="text-zinc-600 select-none">7</span> &nbsp;&nbsp;metrics = &#123;<span className="text-emerald-400">"p99_latency"</span>: <span className="text-cyan-400">"&lt;180ms"</span>, <span className="text-emerald-400">"uptime"</span>: <span className="text-cyan-400">"99.9%"</span>, <span className="text-emerald-400">"main_thread_reduction"</span>: <span className="text-cyan-400">"40%"</span>&#125;</div>
                  </Tilt3DCard>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Verified Metrics Telemetry Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-3.5 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-md">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gradient font-mono">{stat.value}</div>
                  <div className="text-xs font-bold text-white mt-1 font-mono">{stat.label}</div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-0.5 truncate">{stat.sub}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D World (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex flex-col items-center justify-center"
          >
            {/* 3D Scene View Switcher Pill */}
            <div className="z-30 mb-3 flex items-center gap-1 p-1 bg-[#12131b]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
              <button
                onClick={() => setActive3DScene('desk')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  active3DScene === 'desk'
                    ? 'bg-gradient-custom text-zinc-950 font-bold shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <FaDesktop className="text-xs" />
                <span>3D Workstation</span>
              </button>
              <button
                onClick={() => setActive3DScene('neural')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all flex items-center gap-2 ${
                  active3DScene === 'neural'
                    ? 'bg-gradient-custom text-zinc-950 font-bold shadow-lg'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <FaAtom className="text-xs" />
                <span>3D Neural Core</span>
              </button>
            </div>

            {/* Active 3D Canvas */}
            <div className="w-full">
              {active3DScene === 'desk' ? <DeveloperDesk3D /> : <Hero3DScene />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero3DScene from './3d/Hero3DScene'
import Tilt3DCard from './3d/Tilt3DCard'

const stats = [
  { value: '4+ Years', label: 'Backend Experience' },
  { value: '<180ms', label: 'p99 Response Time' },
  { value: '99.9%', label: 'Production Uptime' },
  { value: 'AWS SAA', label: 'Solutions Architect' },
]

export default function Hero() {
  const [showCode, setShowCode] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#a78bfa] top-[-200px] right-[10%] absolute rounded-full blur-[140px] opacity-25 animate-[float_20s_ease-in-out_infinite]" />
        <div className="w-[400px] h-[400px] bg-[#38bdf8] bottom-[-150px] left-[10%] absolute rounded-full blur-[140px] opacity-25 animate-[float_20s_ease-in-out_infinite_-5s]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#a78bfa1a] border border-[#a78bfa33] rounded-full text-xs sm:text-sm text-[#a78bfa] font-mono mb-8 backdrop-blur-md shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
              Senior Python / Backend Engineer • AWS Certified Solutions Architect
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.08] tracking-[-2px] mb-6"
            >
              <span className="block text-white">Sammed Patil</span>
              <span className="block text-gradient">Senior Python / Backend</span>
              <span className="block text-zinc-300">& AI Engineer</span>
            </motion.h1>

            {/* Subtitle grounded in actual resume */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-2xl mb-8"
            >
              Backend Engineer with <strong className="text-white">4+ years</strong> of experience designing,
              scaling, and deploying resilient web architectures and microservices using{' '}
              <strong className="text-white">Python, Django, DRF, PostgreSQL, and AWS</strong>.
              Specialized in Celery asynchronous task queues, ORM query optimization (dropping p99 from 1.2s to &lt;180ms),
              and GenAI / RAG / LangGraph pipeline integration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="/resumes/Python_Backend_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-custom text-[#09090b] rounded-xl font-semibold hover:shadow-[0_20px_40px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 transition-all text-sm sm:text-base font-mono"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-900/80 text-[#fafafa] rounded-xl font-semibold border border-[#27272a] hover:border-[#a78bfa] hover:bg-[#a78bfa1a] transition-all text-sm sm:text-base font-mono backdrop-blur-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                View Production Systems
              </a>
              <button
                onClick={() => setShowCode(!showCode)}
                className="inline-flex items-center gap-2.5 px-4 py-3.5 bg-zinc-900/60 text-zinc-400 hover:text-white rounded-xl font-mono text-xs border border-white/5 hover:border-white/20 transition-all"
              >
                {showCode ? 'Hide Class' : 'View Engineer Schema'}
              </button>
            </motion.div>

            {/* Collapsible Python Class */}
            {showCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-8"
              >
                <Tilt3DCard maxTilt={6} className="bg-[#18181b]/95 border border-white/10 rounded-2xl p-5 font-mono text-xs leading-relaxed text-[#a1a1aa] shadow-2xl backdrop-blur-md max-w-xl">
                  <div><span className="text-[#27272a] select-none">1</span> <span className="text-[#a78bfa]">class</span> <span className="text-[#38bdf8]">SeniorBackendEngineer</span>:</div>
                  <div><span className="text-[#27272a] select-none">2</span> &nbsp;&nbsp;name: str = <span className="text-[#34d399]">"Sammed Patil"</span></div>
                  <div><span className="text-[#27272a] select-none">3</span> &nbsp;&nbsp;role: str = <span className="text-[#34d399]">"Senior Python / Backend Engineer"</span></div>
                  <div><span className="text-[#27272a] select-none">4</span> &nbsp;&nbsp;location: str = <span className="text-[#34d399]">"Bangalore, Karnataka, India"</span></div>
                  <div><span className="text-[#27272a] select-none">5</span> &nbsp;&nbsp;certifications = [<span className="text-[#34d399]">"AWS SAA-C03"</span>, <span className="text-[#34d399]">"AWS CLF-C02"</span>, <span className="text-[#34d399]">"LangGraph AI Agents"</span>]</div>
                  <div><span className="text-[#27272a] select-none">6</span> &nbsp;&nbsp;core_stack = [<span className="text-[#34d399]">"Python"</span>, <span className="text-[#34d399]">"Django/DRF"</span>, <span className="text-[#34d399]">"FastAPI"</span>, <span className="text-[#34d399]">"PostgreSQL"</span>, <span className="text-[#34d399]">"Celery"</span>, <span className="text-[#34d399]">"AWS"</span>, <span className="text-[#34d399]">"LangGraph"</span>]</div>
                  <div><span className="text-[#27272a] select-none">7</span> &nbsp;&nbsp;metrics = &#123;<span className="text-[#34d399]">"p99_latency"</span>: <span className="text-[#38bdf8]">"&lt;180ms"</span>, <span className="text-[#34d399]">"uptime"</span>: <span className="text-[#38bdf8]">"99.9%"</span>, <span className="text-[#34d399]">"main_thread_reduction"</span>: <span className="text-[#38bdf8]">"40%"</span>&#125;</div>
                </Tilt3DCard>
              </motion.div>
            )}

            {/* Verified Metrics Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="relative">
                  {i < stats.length - 1 && (
                    <span className="hidden sm:block absolute right-[-12px] top-1/2 -translate-y-1/2 w-px h-10 bg-[#27272a]" />
                  )}
                  <div className="text-2xl sm:text-3xl font-bold text-gradient font-mono">{stat.value}</div>
                  <div className="text-xs text-[#a1a1aa] mt-1 font-mono">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive WebGL Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <Hero3DScene />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

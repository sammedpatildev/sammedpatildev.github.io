import {
  FaDownload,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from 'react-icons/fa'

export default function ProfessionalHero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for Senior Backend & AI Engineering Roles</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
          Sammed Patil
        </h1>
        <p className="text-xl sm:text-2xl font-mono text-zinc-300 font-medium mb-6">
          Senior Python / Backend & AI Engineer
        </p>

        {/* Value Proposition */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed mb-8">
          Software Engineer with <strong className="text-white font-semibold">4+ years</strong> of hands-on production experience designing, scaling, and deploying resilient backend microservices and autonomous AI agents using <strong className="text-zinc-200">Python, Django, FastAPI, Celery, PostgreSQL, and AWS</strong>. Primary backend owner for high-traffic platforms, with proven records dropping p99 database response times from <strong className="text-emerald-400 font-mono">1.2s to &lt;180ms</strong> and cutting main-thread latency by <strong className="text-emerald-400 font-mono">40%</strong>.
        </p>

        {/* Location & Contact Meta */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-zinc-400 mb-8 pb-8 border-b border-zinc-800/50">
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-zinc-500" />
            Bangalore, Karnataka, India (Open to Remote / Relocation)
          </span>
          <span className="flex items-center gap-1.5">
            <FaEnvelope className="text-zinc-500" />
            <a href="mailto:patilsammed022@gmail.com" className="hover:text-white transition-colors">
              patilsammed022@gmail.com
            </a>
          </span>
          <span className="flex items-center gap-1.5 text-zinc-300">
            <FaCheckCircle className="text-emerald-500" />
            AWS Certified Solutions Architect (SAA-C03)
          </span>
        </div>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="/resumes/Python_Backend_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold font-mono text-xs sm:text-sm transition-all shadow-sm"
          >
            <FaDownload className="text-xs" />
            <span>Download Master Resume</span>
          </a>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-all"
          >
            <span>View Experience & Systems</span>
            <FaArrowRight className="text-xs text-zinc-400" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-mono text-xs sm:text-sm transition-all"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Verified Technical Benchmarks (Clean 4-Card Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">4+ Years</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">Backend Engineering</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Django • FastAPI • Python</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">&lt;180ms</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">p99 Database Latency</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Tuned down from 1.2s</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">-40%</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">Main-Thread Load</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Celery & Redis offloading</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-400">99.9%</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">Production Uptime</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">AWS EC2, Docker, Nginx</div>
          </div>
        </div>
      </div>
    </section>
  )
}

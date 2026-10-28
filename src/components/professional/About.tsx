import { FaCheckCircle, FaGraduationCap, FaAward, FaServer } from 'react-icons/fa'

export default function ProfessionalAbout() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">01. Profile</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineering reliable backend systems, scalable APIs, and autonomous AI agents.
            </h2>

            <p>
              I am a <strong className="text-white">Senior Python / Backend Engineer</strong> with over 4 years of hands-on experience building, scaling, and maintaining distributed microservices and asynchronous task pipelines across production environments.
            </p>

            <p>
              Throughout my work at <strong className="text-zinc-100">AimedAt Solutions</strong> and <strong className="text-zinc-100">KMA Labs</strong>, I have held end-to-end responsibility as Primary Backend Owner for core platforms—engineering high-volume sports management systems (RoninFC), clinical maternal healthcare engines (MHealth), and automated cloud domain provisioning infrastructures (CMDC).
            </p>

            <p>
              My technical focus centers on backend efficiency and database performance: diagnosing query bottlenecks with <strong className="text-zinc-100">EXPLAIN ANALYZE</strong>, eliminating N+1 database patterns, applying composite B-Tree indexing in PostgreSQL to drop p99 response times from <strong className="text-emerald-400 font-mono">1.2s to &lt;180ms</strong>, and offloading heavy compute tasks to <strong className="text-cyan-400 font-mono">Celery & Redis</strong> to reduce main-thread latency by 40%.
            </p>

            <p>
              In the AI space, I design production-grade <strong className="text-white">LangGraph multi-agent workflows</strong>, hybrid RAG document retrieval using <strong className="text-zinc-100">pgvector</strong> and OpenAI embeddings, and deterministic tool-calling servers using the <strong className="text-zinc-100">Model Context Protocol (MCP)</strong>.
            </p>

            {/* Quick Principles */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Zero-downtime database migrations</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Decoupled async worker architectures</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Idempotent payment & webhook pipelines</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Stateful multi-agent AI orchestrations</span>
              </div>
            </div>
          </div>

          {/* At-A-Glance Info Card (Span 5) */}
          <div className="lg:col-span-5 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-7 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
              <FaServer className="text-zinc-400" />
              <span>Fast Profile Facts</span>
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex justify-between items-start pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-500 font-mono">Current Title</span>
                <span className="text-white font-semibold text-right">Senior Python / Backend Engineer</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-500 font-mono">Experience</span>
                <span className="text-emerald-400 font-mono font-bold">4+ Years (2021 - Present)</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-500 font-mono">Location</span>
                <span className="text-zinc-200 text-right">Bangalore, Karnataka, India</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-500 font-mono">Availability</span>
                <span className="text-zinc-200 text-right">Immediate / Full-time (Remote / Relocation)</span>
              </div>

              <div className="flex justify-between items-start pb-3 border-b border-zinc-800/60">
                <span className="text-zinc-500 font-mono">Certifications</span>
                <span className="text-amber-400 font-mono text-right flex items-center gap-1">
                  <FaAward /> AWS SAA-C03 & CLF-C02
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-zinc-500 font-mono">Education</span>
                <span className="text-zinc-200 text-right flex items-center gap-1">
                  <FaGraduationCap /> MCA (2021), BCA (2019)
                </span>
              </div>
            </div>

            {/* Core Tech Stack Summary */}
            <div className="pt-2 border-t border-zinc-800">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
                Core Production Stack
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Python', 'Django / DRF', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'AWS (EC2/S3)', 'Docker', 'LangGraph', 'RAG'].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

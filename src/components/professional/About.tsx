import { FaCheckCircle, FaGraduationCap, FaAward, FaServer, FaGlobe } from 'react-icons/fa'

export default function ProfessionalAbout() {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">01. Profile & Principles</span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Narrative Bento Card (Span 7) */}
          <div className="lg:col-span-7 linear-card p-6 sm:p-8 rounded-3xl space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>Backend Architecture & Systems</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4 font-sans">
                Designing, scaling, and deploying resilient web architectures & autonomous AI pipelines.
              </h2>

              <p className="mb-3">
                I am a <strong className="text-white">Senior Python / Backend Engineer</strong> with over <strong className="text-white">4+ years of production experience</strong> designing, scaling, and deploying high-availability microservices using <strong className="text-white font-mono">Python, Django, DRF, PostgreSQL, and AWS</strong>.
              </p>

              <p className="mb-3 text-zinc-400">
                As an <strong className="text-zinc-200">AWS Certified Solutions Architect</strong> with proven end-to-end platform ownership at <strong className="text-zinc-200">AimedAt Solutions PVT LTD</strong>, I lead system architecture from initial requirements to production deployment across mission-critical platforms: <strong className="text-white">RoninFC</strong> (combat sports & athlete management), <strong className="text-white">MHealth</strong> (maternal healthcare platform), <strong className="text-white">CMDC</strong> (cloud domain reseller platform), and the <strong className="text-white">Indina E-Commerce Platform</strong>.
              </p>

              <p className="text-zinc-400">
                My backend performance engineering has consistently delivered measurable results: tuning PostgreSQL queries and ORM relationships to slash <strong className="text-emerald-400 font-mono">p99 response times from 1.2s to &lt;180ms</strong> across high-traffic endpoints, and offloading heavy background workloads to <strong className="text-cyan-400 font-mono">Celery & Redis</strong> to reduce main-thread latency by <strong className="text-emerald-400 font-mono">40%</strong>.
              </p>
            </div>

            {/* Core Competency Highlights Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300 border-t border-white/[0.08]">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>REST API Architecture (DRF/FastAPI)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>PostgreSQL ORM & Index Tuning</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>Async Task Queues (Celery/Redis)</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
                <span>AWS Cloud & Docker CI/CD (99.9%)</span>
              </div>
            </div>
          </div>

          {/* At-A-Glance Info Card (Span 5) */}
          <div className="lg:col-span-5 linear-card p-6 sm:p-7 rounded-3xl space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2 mb-4">
                <FaServer className="text-purple-400" />
                <span>Resume Fast Facts</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-start pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500 font-mono">Role</span>
                  <span className="text-white font-semibold text-right">Senior Python / Backend Engineer</span>
                </div>

                <div className="flex justify-between items-start pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500 font-mono">Experience</span>
                  <span className="text-emerald-400 font-mono font-bold">4+ Years (03/2022 - Present)</span>
                </div>

                <div className="flex justify-between items-start pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500 font-mono">Location</span>
                  <span className="text-zinc-200 text-right">Bangalore, Karnataka, India</span>
                </div>

                <div className="flex justify-between items-start pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500 font-mono">Phone</span>
                  <span className="text-zinc-200 font-mono text-right">+91 8296257820</span>
                </div>

                <div className="flex justify-between items-start pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500 font-mono">Certifications</span>
                  <span className="text-amber-400 font-mono text-right flex items-center gap-1">
                    <FaAward /> AWS SAA-C03 & CLF-C02
                  </span>
                </div>

                <div className="flex justify-between items-start pb-2.5 border-b border-white/[0.06]">
                  <span className="text-zinc-500 font-mono">Education</span>
                  <span className="text-zinc-200 text-right flex items-center gap-1">
                    <FaGraduationCap /> MCA (2021) • BCA (2019)
                  </span>
                </div>

                <div className="flex justify-between items-start">
                  <span className="text-zinc-500 font-mono">Languages</span>
                  <span className="text-zinc-300 text-right flex items-center gap-1 font-mono text-xs">
                    <FaGlobe className="text-emerald-400 text-xs" /> English, Kannada, Hindi, Marathi
                  </span>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Summary */}
            <div className="pt-3 border-t border-white/[0.08]">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2.5">
                Core Production Technologies
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'AWS (EC2, S3)', 'Docker', 'LangGraph', 'RAG', 'JWT/RBAC'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
                  >
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

import {
  FaDownload,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
} from 'react-icons/fa'

export default function ProfessionalHero() {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block with Profile Image */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 mb-6">
          <div className="flex-1">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior Python & Backend Engineering Roles</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-2">
              Sammed Patil
            </h1>
            <p className="text-xl sm:text-2xl font-mono text-zinc-300 font-medium">
              Senior Python / Backend Engineer
            </p>
          </div>

          {/* Profile Photo Card */}
          <div className="relative flex-shrink-0 self-start md:self-center">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-zinc-700/80 bg-zinc-900 shadow-xl relative group">
              <img
                src="/profile.jpg"
                alt="Sammed Patil"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget
                  if (!target.dataset.triedPng) {
                    target.dataset.triedPng = 'true'
                    target.src = '/profile.png'
                  } else {
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }
                }}
              />
              <div
                style={{ display: 'none' }}
                className="w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-700 text-white font-mono font-bold text-2xl sm:text-3xl items-center justify-center select-none"
              >
                SP
              </div>
            </div>
            {/* Active Status Beacon */}
            <span
              className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#09090b] shadow-sm"
              title="Available for hire"
            />
          </div>
        </div>

        {/* Profile Summary directly from Updated Resume */}
        <p className="text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed mb-8">
          Backend Engineer with <strong className="text-white font-semibold">4+ years of experience</strong> designing, scaling, and deploying resilient web architectures and microservices using <strong className="text-white font-mono">Python, Django, DRF, PostgreSQL, and AWS</strong>. AWS Certified Solutions Architect with proven end-to-end ownership in API design, asynchronous processing (<strong className="text-cyan-400 font-mono">Celery/Redis</strong>), ORM query optimization (dropping p99 latency from <strong className="text-emerald-400 font-mono">1.2s to &lt;180ms</strong>), secure authentication (<strong className="text-zinc-200">JWT/RBAC</strong>), and containerized CI/CD deployments. Experienced in integrating <strong className="text-purple-300">GenAI/RAG pipelines</strong>, OpenAI APIs, and payment gateways into high-availability production environments.
        </p>

        {/* Contact Coordinates Meta */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-zinc-400 mb-8 pb-8 border-b border-zinc-800/50">
          <span className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="text-zinc-500" />
            Bangalore, Karnataka, India
          </span>
          <span className="flex items-center gap-1.5">
            <FaPhoneAlt className="text-zinc-500" />
            <a href="tel:+918296257820" className="hover:text-white transition-colors">
              +91 8296257820
            </a>
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

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          <a
            href="/Sammed_Patil_Resume.pdf"
            download="Sammed_Patil_Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold font-mono text-xs sm:text-sm transition-all shadow-sm"
          >
            <FaDownload className="text-xs" />
            <span>Download Official Resume (PDF)</span>
          </a>

          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-all"
          >
            <span>View Experience & Deliverables</span>
            <FaArrowRight className="text-xs text-zinc-400" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-mono text-xs sm:text-sm transition-all"
          >
            <span>Contact Directly</span>
          </a>
        </div>

        {/* Key Engineering Benchmarks from Resume */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white">4+ Years</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">Backend Experience</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Python • Django • DRF • AWS</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400">&lt;180ms</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">p99 Response Time</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Tuned from 1.2s via ORM/Indexes</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-400">-40%</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">Main-Thread Latency</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">Celery/Redis queue offloading</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
            <div className="text-2xl sm:text-3xl font-extrabold font-mono text-purple-400">99.9%</div>
            <div className="text-xs font-semibold text-zinc-300 mt-1">Production Uptime</div>
            <div className="text-[11px] text-zinc-500 font-mono mt-0.5">AWS EC2/S3 • Docker • CI/CD</div>
          </div>
        </div>
      </div>
    </section>
  )
}

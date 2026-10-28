import {
  FaDownload,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaAward,
} from 'react-icons/fa'

export default function ProfessionalHero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Text & Executive Information (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Senior Python & Backend Roles</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-2 font-sans">
                Sammed Patil
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-zinc-300 font-medium">
                Senior Python / Backend Engineer
              </p>
            </div>

            {/* Profile Summary directly from Updated Resume */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Backend Engineer with <strong className="text-white font-semibold">4+ years of experience</strong> designing, scaling, and deploying resilient web architectures and microservices using <strong className="text-white font-mono">Python, Django, DRF, PostgreSQL, and AWS</strong>. AWS Certified Solutions Architect with proven end-to-end ownership in API design, asynchronous processing (<strong className="text-cyan-400 font-mono">Celery/Redis</strong>), ORM query optimization (dropping p99 latency from <strong className="text-emerald-400 font-mono">1.2s to &lt;180ms</strong>), secure authentication (<strong className="text-zinc-200">JWT/RBAC</strong>), and containerized CI/CD deployments. Experienced in integrating <strong className="text-purple-300">GenAI/RAG pipelines</strong>, OpenAI APIs, and payment gateways into high-availability production environments.
            </p>

            {/* Contact Coordinates Meta */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-zinc-400 pt-2 pb-4 border-b border-zinc-800/60">
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
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="/Sammed_Patil_Resume.pdf"
                download="Sammed_Patil_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold font-mono text-xs sm:text-sm transition-all shadow-md"
              >
                <FaDownload className="text-xs text-zinc-700" />
                <span>Download Official Resume (PDF)</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-all"
              >
                <span>View Experience</span>
                <FaArrowRight className="text-xs text-zinc-400" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white font-mono text-xs sm:text-sm transition-all"
              >
                <span>Contact Directly</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Portfolio Portrait (Span 5) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer Glow Backlight */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-purple-600/20 via-zinc-700/20 to-emerald-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl border border-zinc-700/80 bg-zinc-900 shadow-2xl overflow-hidden group">
                {/* Large Profile Image */}
                <div className="aspect-[4/5] w-full overflow-hidden bg-zinc-950 relative">
                  <img
                    src="/profile.jpg"
                    alt="Sammed Patil - Senior Python / Backend Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
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
                    className="w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-700 text-white font-mono font-bold text-4xl items-center justify-center select-none"
                  >
                    SP
                  </div>

                  {/* Gradient Vignette at bottom for seamless text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  {/* Floating Bio Card on the Photo */}
                  <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-bold text-white font-sans">Sammed Patil</div>
                        <div className="text-[11px] font-mono text-zinc-300">
                          Senior Backend & AI Engineer
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10 text-[10px] font-mono text-zinc-400">
                      <FaAward className="text-amber-400 text-xs" />
                      <span>AWS Certified Solutions Architect (SAA-C03)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Engineering Benchmarks from Resume */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-zinc-800/60">
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

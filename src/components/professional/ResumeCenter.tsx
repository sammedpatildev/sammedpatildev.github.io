import { FaFilePdf, FaDownload, FaExternalLinkAlt, FaAward, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

export default function ProfessionalResumeCenter() {
  return (
    <section id="resume" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            06. Official Resume
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (Span 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified Official Resume (PDF)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Sammed Patil — Senior Python / Backend Engineer
              </h2>

              <p className="text-sm text-zinc-300 leading-relaxed">
                Download the complete, official 2-page curriculum vitae covering 4+ years of backend microservices, AWS cloud architecture, asynchronous Celery task queues, database tuning benchmarks, and generative AI agent pipelines.
              </p>

              {/* Verified Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-purple-400 flex-shrink-0" />
                  <span>AimedAt Solutions (03/2022 – Present)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-cyan-400 flex-shrink-0" />
                  <span>KMA Labs (11/2024 – 03/2025)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaAward className="text-amber-400 flex-shrink-0" />
                  <span>AWS Certified Solutions Architect (SAA-C03)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGraduationCap className="text-emerald-400 flex-shrink-0" />
                  <span>MCA (10/2021) • BCA (05/2019)</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/Sammed_Patil_Resume.pdf"
                  download="Sammed_Patil_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs sm:text-sm font-bold transition-all shadow-md"
                >
                  <FaDownload className="text-xs text-zinc-700" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="/Sammed_Patil_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-mono text-xs sm:text-sm transition-colors border border-zinc-700"
                >
                  <span>Open in Browser</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>
            </div>

            {/* Right Card: Document Snapshot Preview (Span 5) */}
            <div className="lg:col-span-5 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-white">
                  <FaFilePdf className="text-red-400 text-base" />
                  <span>Sammed_Patil_Resume.pdf</span>
                </div>
                <span className="text-[10px] font-mono text-zinc-500">2-Page Document</span>
              </div>

              <div className="space-y-2 text-xs font-mono text-zinc-400">
                <div className="flex justify-between">
                  <span>Author:</span>
                  <span className="text-white">Sammed Patil</span>
                </div>
                <div className="flex justify-between">
                  <span>Phone:</span>
                  <span className="text-zinc-200">+91 8296257820</span>
                </div>
                <div className="flex justify-between">
                  <span>Email:</span>
                  <span className="text-zinc-200">patilsammed022@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-zinc-200">Bangalore, Karnataka, India</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="text-emerald-400">Standard ATS PDF</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 text-[11px] text-zinc-400 leading-snug">
                Verified candidate document matching current production deliverables, client recommendations, and AWS certifications.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

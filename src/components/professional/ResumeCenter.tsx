import { FaFilePdf, FaDownload, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

const RESUME_VARIANTS = [
  {
    id: 'backend',
    title: 'Senior Python / Backend Engineer Resume',
    badge: 'Recommended for Backend Roles',
    badgeColor: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    path: '/resumes/Python_Backend_Resume.pdf',
    filename: 'Sammed_Patil_Python_Backend_Resume.pdf',
    target: 'Senior Backend Engineer • Distributed Systems • Microservices Lead',
    summary:
      'Highlights 4+ years architecting Python/Django/FastAPI microservices, PostgreSQL query optimization (p99 <180ms), Celery/Redis task queues, and AWS production infrastructure.',
  },
  {
    id: 'ai',
    title: 'AI Engineer & RAG Architect Resume',
    badge: 'Recommended for AI / ML Roles',
    badgeColor: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
    path: '/resumes/AI_Engineer_Resume.pdf',
    filename: 'Sammed_Patil_AI_Engineer_Resume.pdf',
    target: 'AI Engineer • LangGraph Multi-Agent • RAG Systems Architect',
    summary:
      'Focuses on autonomous LangGraph multi-agent workflows, pgvector hybrid semantic search, OpenAI API integrations, Model Context Protocol (MCP) tool servers, and automated pipelines.',
  },
  {
    id: 'ats',
    title: 'Master ATS Standard Resume',
    badge: 'ATS Scanner Optimized',
    badgeColor: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    path: '/resumes/ATS_Resume.pdf',
    filename: 'Sammed_Patil_ATS_Resume.pdf',
    target: 'Full Profile • Recruiter / ATS Ingestion • Comprehensive History',
    summary:
      'Standard 2-page clean format designed for automated Applicant Tracking Systems, detailing complete work chronology at AimedAt Solutions and KMA Labs, AWS certifications, and education.',
  },
]

export default function ProfessionalResumeCenter() {
  return (
    <section id="resume" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">06. Resume Documents</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Verified Resume Downloads
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl">
            Select and download the resume tailored to your team's role requirements. All resumes are up to date and verified against production deliverables.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESUME_VARIANTS.map((res) => (
            <div
              key={res.id}
              className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800">
                  <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded border ${res.badgeColor}`}>
                    {res.badge}
                  </span>
                  <FaFilePdf className="text-red-400 text-sm" />
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">{res.title}</h3>
                <div className="text-[11px] font-mono text-zinc-400 mt-1 mb-3">
                  Focus: {res.target}
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed mb-6">
                  {res.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-2">
                <a
                  href={res.path}
                  download={res.filename}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs font-semibold transition-all shadow-sm"
                >
                  <FaDownload className="text-xs text-zinc-700" />
                  <span>Download</span>
                </a>

                <a
                  href={res.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-mono text-xs transition-colors"
                  title="View PDF in New Tab"
                >
                  <span>Preview</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Guarantee */}
        <div className="mt-8 p-4 rounded-xl bg-zinc-900/20 border border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-emerald-400 flex-shrink-0" />
            <span>Contains verified employment history, AWS certifications (SAA-C03), and academic degrees.</span>
          </div>
          <div className="text-zinc-500">
            Last Updated: 2026
          </div>
        </div>
      </div>
    </section>
  )
}

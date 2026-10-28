import { useState } from 'react'
import {
  FaDownload,
  FaFilePdf,
  FaGraduationCap,
  FaAward,
  FaBriefcase,
  FaExternalLinkAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from 'react-icons/fa'

const RESUMES = [
  {
    id: 'backend',
    title: 'Python Backend Engineer Resume',
    subtitle: 'Tailored for Senior Backend, Distributed Systems & Microservices roles',
    file: '/resumes/Python_Backend_Resume.pdf',
    filename: 'Sammed_Patil_Python_Backend_Resume.pdf',
    badge: 'Recommended for Backend',
    focus: 'Python, Django REST Framework, FastAPI, PostgreSQL, Celery, Redis, AWS',
  },
  {
    id: 'ai',
    title: 'AI Engineer & RAG Resume',
    subtitle: 'Tailored for Generative AI, LangGraph Multi-Agent & RAG Architect roles',
    file: '/resumes/AI_Engineer_Resume.pdf',
    filename: 'Sammed_Patil_AI_Engineer_Resume.pdf',
    badge: 'Recommended for GenAI / ML',
    focus: 'LangGraph, OpenAI APIs, Vector DBs, pgvector, MCP, FastAPI, AI Agents',
  },
  {
    id: 'ats',
    title: 'Master ATS Standard Resume',
    subtitle: 'Clean, ATS-optimized 2-page master resume with comprehensive history',
    file: '/resumes/ATS_Resume.pdf',
    filename: 'Sammed_Patil_ATS_Resume.pdf',
    badge: '100% ATS Verified',
    focus: 'Full 4+ Years Experience, AWS SAA-C03, Projects, Education & System Design',
  },
]

export default function ResumeViewerApp() {
  const [selectedResume, setSelectedResume] = useState(RESUMES[0])

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Top Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {RESUMES.map((res) => {
          const isSelected = res.id === selectedResume.id
          return (
            <button
              key={res.id}
              onClick={() => setSelectedResume(res)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'border-purple-500/60 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-500/20">
                  {res.badge}
                </span>
                <FaFilePdf className="text-red-400 text-sm" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-2 truncate">{res.title}</div>
              <div className="text-[11px] text-zinc-400 mt-1 line-clamp-2">{res.subtitle}</div>
            </button>
          )
        })}
      </div>

      {/* Main Resume Content Area */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 space-y-6">
        {/* Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <h2 className="text-lg sm:text-xl font-black text-white">{selectedResume.title}</h2>
            <p className="text-xs text-zinc-400 mt-0.5 font-mono">Focus: {selectedResume.focus}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={selectedResume.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/10"
            >
              <span>View Full PDF</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
            <a
              href={selectedResume.file}
              download={selectedResume.filename}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white text-xs font-bold transition-all shadow-lg shadow-purple-600/30"
            >
              <FaDownload className="text-xs" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Profile Snapshot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              <FaBriefcase className="text-purple-400" />
              <span>Profile Snapshot</span>
            </div>
            <div className="space-y-1.5 text-xs text-zinc-300">
              <div className="flex justify-between">
                <span className="text-zinc-500">Name:</span>
                <span className="font-bold text-white">Sammed Patil</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Role:</span>
                <span className="font-semibold text-purple-300">Senior Python / Backend & AI Engineer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Experience:</span>
                <span className="text-emerald-400 font-bold">4+ Years (2021 - Present)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Key Achievement:</span>
                <span className="text-zinc-300 font-mono">p99 latency 1.2s → &lt;180ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Work Type:</span>
                <span className="text-zinc-300">Full-time • Hybrid / Remote / On-site</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              <FaGraduationCap className="text-cyan-400" />
              <span>Education & Certifications</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                <div className="font-bold text-white">Master of Computer Applications (MCA)</div>
                <div className="text-[11px] text-zinc-400">Bangalore City University • Completed 10/2021</div>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                <div className="font-bold text-white">Bachelor of Computer Applications (BCA)</div>
                <div className="text-[11px] text-zinc-400">RCU University • Completed 05/2019</div>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <FaAward className="text-amber-400 text-sm" />
                <span className="text-[11px] font-mono text-amber-300 font-bold">AWS Certified Solutions Architect (SAA-C03)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Contact Coordinates */}
        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
            Contact & Verification Channels
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
            <a
              href="mailto:patilsammed022@gmail.com"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-purple-400" />
              <span className="truncate">patilsammed022@gmail.com</span>
            </a>
            <a
              href="tel:+918217030162"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <FaPhoneAlt className="text-emerald-400" />
              <span>+91 8217030162</span>
            </a>
            <a
              href="https://linkedin.com/in/sammed-patil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-blue-400" />
              <span className="truncate">sammed-patil-dev</span>
            </a>
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/5 text-zinc-400">
              <FaMapMarkerAlt className="text-rose-400" />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

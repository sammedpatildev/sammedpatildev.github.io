import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaFilePdf, FaDownload, FaServer, FaRobot, FaLayerGroup, FaCheckCircle } from 'react-icons/fa'

const resumes = [
  {
    title: 'Senior Python / Backend Engineer',
    icon: <FaServer className="w-6 h-6 text-purple-400" />,
    badgeColor: '#a78bfa',
    file: '/resumes/Python_Backend_Resume.pdf',
    desc: 'Primary resume highlighting 4+ years of backend microservices, Django, DRF, FastAPI, Celery/Redis, PostgreSQL query optimization (p99 <180ms), and AWS architecture.',
    badge: 'Recommended',
  },
  {
    title: 'AI & GenAI Engineer',
    icon: <FaRobot className="w-6 h-6 text-cyan-400" />,
    badgeColor: '#38bdf8',
    file: '/resumes/AI_Engineer_Resume.pdf',
    desc: 'Focused on autonomous AI Agents, LangGraph workflows, RAG pipelines, OpenAI APIs, Model Context Protocol (MCP), and n8n orchestration.',
    badge: 'GenAI & Agents',
  },
  {
    title: 'Full-Stack & Cloud Architecture',
    icon: <FaLayerGroup className="w-6 h-6 text-emerald-400" />,
    badgeColor: '#34d399',
    file: '/resumes/Python_Backend_Resume.pdf',
    desc: 'Covers end-to-end web architectures, combining Python backend microservices with React.js frontend development and AWS cloud deployments.',
    badge: 'Full-Stack & AWS',
  },
  {
    title: 'ATS-Optimized Technical Resume',
    icon: <FaFilePdf className="w-6 h-6 text-amber-400" />,
    badgeColor: '#f59e0b',
    file: '/resumes/ATS_Resume.pdf',
    desc: 'Single/dual page format optimized for corporate Applicant Tracking Systems (ATS) with standard parsing keywords and certified credentials.',
    badge: 'ATS Compliant',
  },
]

export default function ResumeSection() {
  return (
    <section id="resume" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Official Documentation" />
        <SectionTitle highlight="Downloads">Resume &</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {resumes.map((resume, idx) => (
            <Tilt3DCard
              key={resume.title}
              maxTilt={8}
              glareColor={`${resume.badgeColor}20`}
              className="rounded-3xl"
            >
              <motion.a
                href={resume.file}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-full bg-[#111219]/90 border border-white/10 rounded-3xl p-6 sm:p-7 transition-all duration-300 block backdrop-blur-xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      style={{ background: `${resume.badgeColor}15` }}
                    >
                      {resume.icon}
                    </div>
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                      style={{
                        background: `${resume.badgeColor}10`,
                        borderColor: `${resume.badgeColor}30`,
                        color: resume.badgeColor,
                      }}
                    >
                      {resume.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                    {resume.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-mono">{resume.desc}</p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono font-semibold" style={{ color: resume.badgeColor }}>
                  <span className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-xs" /> PDF Format
                  </span>
                  <span className="inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    <FaDownload className="text-xs" /> Download
                  </span>
                </div>
              </motion.a>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

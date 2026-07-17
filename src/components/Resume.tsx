import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

const resumes = [
  {
    title: 'Python Backend Resume',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    file: '/resumes/Python_Backend_Resume.pdf',
    desc: 'Focus on Django, DRF, FastAPI, PostgreSQL, AWS, and REST API development.',
  },
  {
    title: 'AI Engineer Resume',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    file: '/resumes/AI_Engineer_Resume.pdf',
    desc: 'Focus on LLMs, RAG, AI Agents, LangChain, Prompt Engineering, and n8n automation.',
  },
  {
    title: 'Full Stack Resume',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    file: '/resumes/Full_Stack_Resume.pdf',
    desc: 'Covers both backend expertise and frontend experience with React and modern web technologies.',
  },
  {
    title: 'ATS Resume',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    file: '/resumes/ATS_Resume.pdf',
    desc: 'Optimized for ATS parsing with clean formatting, keyword-rich content, and standard sections.',
  },
]

export default function ResumeSection() {
  return (
    <section id="resume" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Resumes" />
        <SectionTitle highlight="You Need">The Resume</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resumes.map((resume, idx) => (
            <motion.a
              key={resume.title}
              href={resume.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#18181b] border border-white/5 rounded-2xl p-6 hover:border-[#a78bfa4d] hover:-translate-y-2 transition-all duration-300 block"
            >
              <div className="w-12 h-12 bg-[#a78bfa1a] rounded-xl flex items-center justify-center text-[#a78bfa] group-hover:bg-gradient-custom group-hover:text-[#09090b] transition-all mb-5">
                {resume.icon}
              </div>
              <h3 className="text-base font-semibold mb-2 group-hover:text-[#a78bfa] transition-colors">{resume.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">{resume.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-[#a78bfa] font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download PDF
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

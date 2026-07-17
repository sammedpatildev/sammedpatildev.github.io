import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

const experiences = [
  {
    period: '03/2022 – Present',
    title: 'Associate Software Engineer',
    company: 'AimedAt Solutions PVT LTD',
    location: 'Bengaluru, India',
    icon: 'building',
    highlights: [
      'Backend API Development — Designed and built 50+ production-grade REST APIs for healthcare, e-commerce, and enterprise applications using Python, Django, and DRF.',
      'Authentication & Authorization — Implemented JWT-based authentication, RBAC, OTP login, and multi-factor authentication across multiple platforms.',
      'Database Design & Optimization — Architected PostgreSQL schemas for complex business domains; optimized queries improving performance by 90%+.',
      'Cloud Deployment — Managed AWS infrastructure (EC2, RDS, S3, Lambda, CloudFront, ECS) with Docker containerization and CI/CD pipelines.',
      'Async Processing — Built Celery-based task queues for email, SMS, notifications, report generation, and payment reconciliation.',
      'AI Integrations — Developing RAG-based AI features, LLM-powered document analysis, and intelligent automation workflows.',
      'Production Support — Maintained 99.9% uptime for production systems serving 10K+ daily active users.',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS', 'Docker', 'REST APIs', 'GenAI', 'RAG'],
  },
  {
    period: '11/2024 – 03/2025',
    title: 'Freelance Frontend Developer',
    company: 'KMA Labs',
    location: 'Virginia, USA (Remote)',
    icon: 'globe',
    highlights: [
      'Developed responsive service marketplace platform with React.js and modern CSS.',
      'Built reusable, mobile-first UI components with cross-browser compatibility.',
      'Integrated REST APIs for dynamic content rendering and real-time updates.',
      'Optimized performance achieving 95+ Lighthouse scores.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
  },
]

const iconMap: Record<string, React.ReactNode> = {
  building: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  globe: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
}

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Career" />
        <SectionTitle highlight="Experience">Work</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#a78bfa4d] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-gradient-custom rounded-xl flex items-center justify-center text-[#09090b] shrink-0">
                  {iconMap[exp.icon]}
                </div>
                <span className="px-3 py-1.5 bg-[#09090b] rounded-lg font-mono text-xs text-[#a78bfa] shrink-0">
                  {exp.period}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
              <p className="text-[#a78bfa] font-medium text-sm mb-1">{exp.company}</p>
              <p className="text-[#a1a1aa] text-sm mb-5">
                <svg className="w-3.5 h-3.5 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                {exp.location}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-6">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#a1a1aa] leading-relaxed">
                    <span className="text-[#a78bfa] mt-0.5 shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-[#09090b] rounded-md font-mono text-[11px] text-[#38bdf8]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

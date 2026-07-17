import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

const projects = [
  {
    tag: 'Backend Development',
    title: 'Health Management Platform',
    icon: 'heart',
    description:
      'A comprehensive healthcare management platform with patient appointment scheduling, diet/nutrition planning, health monitoring, and automated reminders. Built with Django, DRF, PostgreSQL, and Celery for async task processing. Features JWT-based RBAC, HIPAA-aware workflows, and comprehensive API documentation.',
    features: [
      'Patient & Doctor Management',
      'Appointment Scheduling',
      'Diet & Nutrition Planning',
      'Health Monitoring & Reports',
      'Automated SMS/Email Reminders',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS'],
    role: 'Backend Developer — architected DB schemas, built all REST APIs, implemented auth & RBAC, managed deployment.',
    challenges: 'Designed efficient time-series data schemas for health metrics; optimized notification delivery for 10K+ patients.',
  },
  {
    tag: 'Production System',
    title: 'RoninFC — Combat Sports Platform',
    icon: 'fist',
    description:
      'A production-grade athlete management platform serving real users. Features comprehensive athlete management, event management, payment processing with Razorpay, and automated notifications. Primary backend owner responsible for the entire backend architecture.',
    features: [
      'Athlete Profiles & Management',
      'Event & Competition Management',
      'Razorpay Payment Integration',
      'Email & SMS Notifications',
      'Docker Container Deployment',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS', 'Docker', 'Razorpay'],
    role: 'Primary Backend Owner — designed architecture, built all APIs, integrated payments, managed AWS deployment.',
    challenges: 'Handled payment reconciliation at scale (₹10Cr+ annually); designed fault-tolerant async notification pipeline.',
  },
  {
    tag: 'AI & Automation',
    title: 'Sam Assistant — AI Agent',
    icon: 'robot',
    description:
      'An intelligent AI assistant leveraging LLMs for task automation, document analysis, and intelligent responses. Built with FastAPI and LangChain, featuring RAG-based knowledge retrieval and multi-step agentic workflows.',
    features: [
      'LLM-Powered Conversations',
      'Document Analysis & Q&A',
      'RAG-Based Knowledge Retrieval',
      'Multi-Step Agent Workflows',
      'FastAPI Backend Services',
    ],
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI', 'RAG', 'Pinecone', 'Docker'],
    role: 'AI Engineer — designed agent architecture, implemented RAG pipeline, built FastAPI serving layer.',
    challenges: 'Optimized retrieval accuracy with hybrid search; reduced hallucination with structured output validation.',
    roadmap: 'Planned: Multi-agent orchestration, MCP server integration, advanced tool-using capabilities.',
  },
  {
    tag: 'Workflow Automation',
    title: 'AI Automation Suite',
    icon: 'zap',
    description:
      'An intelligent automation platform leveraging n8n and AI for job search automation, resume generation, email automation, and content creation workflows. Connects multiple services with AI-powered decision making.',
    features: [
      'Job Search Automation',
      'AI Resume Generator',
      'Email Campaign Automation',
      'Content Generation Workflows',
      'Multi-Service Integration',
    ],
    tech: ['n8n', 'OpenAI', 'Python', 'FastAPI', 'Webhooks', 'REST APIs'],
    role: 'Automation Engineer — designed and built automation workflows, custom n8n nodes, and API integrations.',
    challenges: 'Built fault-tolerant multi-step workflows with retry logic; integrated 5+ external services reliably.',
  },
]

const projectIcons: Record<string, React.ReactNode> = {
  heart: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  fist: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  robot: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  zap: (
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Portfolio" />
        <SectionTitle highlight="Projects">Featured</SectionTitle>

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-[#18181b] border border-white/5 rounded-2xl overflow-hidden hover:border-[#a78bfa4d] transition-all duration-300"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Visual Side */}
                <div className="lg:col-span-2 bg-[#09090b] p-8 sm:p-10 flex items-center justify-center relative min-h-[250px] overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.08]">
                    <div className="absolute inset-0 bg-gradient-custom" />
                  </div>
                  <div className="relative z-10 text-[#a78bfa] group-hover:scale-110 transition-transform duration-500">
                    {projectIcons[project.icon]}
                  </div>
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-[#a78bfa1a] rounded-lg font-mono text-[10px] text-[#a78bfa]">
                    {project.tag}
                  </span>
                </div>

                {/* Content Side */}
                <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Features */}
                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-[#a78bfa] uppercase tracking-wider mb-2">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-1.5">
                      {project.features.map((f) => (
                        <span key={f} className="flex items-center gap-2 text-sm text-[#a1a1aa]">
                          <svg className="w-3.5 h-3.5 text-[#34d399] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role & Challenges */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    <div className="p-3 bg-[#09090b] rounded-lg">
                      <div className="text-[10px] text-[#a78bfa] uppercase tracking-wider mb-1">My Role</div>
                      <div className="text-xs text-[#a1a1aa] leading-relaxed">{project.role}</div>
                    </div>
                    {project.challenges && (
                      <div className="p-3 bg-[#09090b] rounded-lg">
                        <div className="text-[10px] text-[#38bdf8] uppercase tracking-wider mb-1">Challenges & Solutions</div>
                        <div className="text-xs text-[#a1a1aa] leading-relaxed">{project.challenges}</div>
                      </div>
                    )}
                    {project.roadmap && (
                      <div className="p-3 bg-[#09090b] rounded-lg sm:col-span-2">
                        <div className="text-[10px] text-[#34d399] uppercase tracking-wider mb-1">Future Roadmap</div>
                        <div className="text-xs text-[#a1a1aa] leading-relaxed">{project.roadmap}</div>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-[#09090b] rounded-md font-mono text-[11px] text-[#38bdf8] border border-[#38bdf81a]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

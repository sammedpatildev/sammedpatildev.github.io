import { FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa'

interface ProjectItem {
  title: string
  category: string
  company: string
  highlights: string[]
  stack: string[]
  githubUrl: string
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: 'AI Agent & RAG Pipeline Suite',
    category: 'GenAI & Autonomous Agent Automation',
    company: 'Independent AI Project',
    highlights: [
      'Engineered custom Retrieval-Augmented Generation (RAG) pipelines using OpenAI APIs to query unstructured documents and return contextualized answers.',
      'Built autonomous AI Agents using LangGraph and Model Context Protocol (MCP) concepts to perform multi-step decision workflows and automated actions.',
      'Integrated n8n workflow automation to connect custom backend APIs with LLM processing queues.',
    ],
    stack: ['Python', 'OpenAI API', 'LangGraph', 'RAG', 'Vector Databases', 'FastAPI / Django', 'n8n', 'MCP'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'RoninFC Combat Sports Platform',
    category: 'Athlete Management & Tournament Systems',
    company: 'AimedAt Solutions PVT LTD',
    highlights: [
      'Served as Primary Backend Owner leading platform design from initial requirements to production deployment.',
      'Engineered REST APIs for athlete onboarding, coach management, event registration, and automated tournament scheduling.',
      'Integrated Razorpay payment gateway with webhook handlers for subscriptions and media management using AWS S3.',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'AWS S3', 'Razorpay'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'MHealth Maternal Platform',
    category: 'Healthcare & Clinical Nutrition Recommendations',
    company: 'AimedAt Solutions PVT LTD',
    highlights: [
      'Designed healthcare APIs for doctor-patient scheduling, medical metric tracking, and lab report processing.',
      'Developed custom algorithm workflows for personalized dynamic diet recommendations.',
      'Built automated reminder task queues using Celery & Redis to alert patients and doctors.',
    ],
    stack: ['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Twilio'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'CMDC Cloud Hosting & Domain Reseller Platform',
    category: 'Cloud Services & Provisioning Queues',
    company: 'AimedAt Solutions PVT LTD',
    highlights: [
      'Developed domain management and cloud hosting backend services.',
      'Refactored Django serializers and optimized ORM relationships to improve API throughput.',
      'Built background job queues using Celery for automated domain DNS provisioning.',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'Indina E-Commerce Platform',
    category: 'Storefront Microservices & Checkout Workflows',
    company: 'AimedAt Solutions PVT LTD',
    highlights: [
      'Built backend microservices for product catalogs, user carts, order execution, and checkout flows.',
      'Configured secure authentication APIs (JWT, OTP, RBAC) and third-party payment gateways.',
      'Ensured ACID compliance and prevented inventory race conditions during concurrent checkouts.',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'JWT', 'RBAC', 'Razorpay'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'Service Marketplace Web Application',
    category: 'Mobile-First Frontend Platform',
    company: 'KMA Labs',
    highlights: [
      'Developed a mobile-first, responsive service marketplace web application using React.js, HTML5, and CSS3, increasing mobile user engagement by 25%.',
      'Built reusable UI components and integrated state management with backend RESTful APIs for dynamic data fetching.',
      'Optimized cross-browser compatibility, bundle sizes, and performance metrics to achieve top-tier Lighthouse audit scores.',
    ],
    stack: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
]

export default function ProfessionalProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            03. Systems & Engineering Projects
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.title}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800/70">
                  <div className="text-xs font-mono text-zinc-400">
                    <span className="text-emerald-400 font-semibold">{proj.company}</span>
                  </div>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors p-1"
                    title="View GitHub Repository"
                  >
                    <FaGithub className="text-base" />
                  </a>
                </div>

                {/* Title & Category */}
                <h3 className="text-xl font-bold text-white tracking-tight">{proj.title}</h3>
                <p className="text-xs font-mono text-purple-400 mt-0.5 mb-4">{proj.category}</p>

                {/* Bullets */}
                <div className="space-y-2 mb-5">
                  {proj.highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs">
                        <FaCheck />
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills & Link */}
              <div className="pt-4 border-t border-zinc-800/70">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Source</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

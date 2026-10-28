import { useState } from 'react'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaHeartbeat, FaFistRaised, FaRobot, FaServer, FaCheck, FaExternalLinkAlt, FaGithub, FaLayerGroup } from 'react-icons/fa'

type ProjectCategory = 'all' | 'production' | 'ai' | 'cloud'

const projects = [
  {
    id: 'roninfc',
    category: 'production',
    tag: 'Production System • Primary Backend Owner',
    title: 'RoninFC — Combat Sports & Athlete Management Platform',
    icon: <FaFistRaised className="text-4xl text-purple-400" />,
    badgeColor: '#a78bfa',
    description:
      'A production-grade sports management platform serving athletes, coaches, and event organizers. Primary backend owner leading architecture from technical requirements to cloud deployment.',
    metrics: [
      { label: 'Role', value: 'Primary Backend Owner' },
      { label: 'Payments', value: 'Razorpay + Webhooks' },
      { label: 'Media Assets', value: 'AWS S3 Automated' },
      { label: 'Scheduling', value: 'Automated Brackets' },
    ],
    features: [
      'Engineered REST APIs for athlete onboarding, coach profiles, event registration, and automated tournament scheduling.',
      'Integrated Razorpay payment gateway with idempotent webhook handlers for recurring subscriptions and transaction audits.',
      'Configured AWS S3 pre-signed URLs and pipelines for athlete media verification and document storage.',
      'Designed PostgreSQL normalized relational schemas and Celery task queues for event notification dispatches.',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS S3', 'Docker', 'Razorpay'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    id: 'mhealth',
    category: 'production',
    tag: 'Healthcare Production System',
    title: 'MHealth — Healthcare Platform for Pregnant Women',
    icon: <FaHeartbeat className="text-4xl text-rose-400" />,
    badgeColor: '#f43f5e',
    description:
      'A specialized digital healthcare platform facilitating doctor-patient consultation, medical metric tracking, and personalized diet algorithms.',
    metrics: [
      { label: 'Workflows', value: 'Doctor-Patient Scheduling' },
      { label: 'Algorithms', value: 'Dynamic Diet Logic' },
      { label: 'Queues', value: 'Celery & Redis Reminders' },
      { label: 'Compliance', value: 'Secure Patient Records' },
    ],
    features: [
      'Designed healthcare APIs for appointment scheduling, pregnancy milestone tracking, and diagnostic lab report processing.',
      'Developed custom dynamic algorithm workflows providing personalized nutritional and diet recommendations based on biometric markers.',
      'Built automated asynchronous reminder queues with Celery and Redis for timely medication and checkup alerts.',
      'Implemented robust RBAC security ensuring strict access boundaries between patients, doctors, and clinic admins.',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS', 'REST APIs', 'RBAC'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    id: 'ai-suite',
    category: 'ai',
    tag: 'Generative AI & Agentic Systems',
    title: 'AI Agent & RAG Pipeline Suite',
    icon: <FaRobot className="text-4xl text-cyan-400" />,
    badgeColor: '#38bdf8',
    description:
      'Autonomous AI agent ecosystem and contextualized Retrieval-Augmented Generation (RAG) pipelines built with LangGraph, Model Context Protocol (MCP), and OpenAI APIs.',
    metrics: [
      { label: 'Architecture', value: 'LangGraph Multi-Step' },
      { label: 'Protocol', value: 'Model Context Protocol (MCP)' },
      { label: 'Automation', value: 'n8n Workflow Queues' },
      { label: 'Retrieval', value: 'Vector DBs + RAG' },
    ],
    features: [
      'Engineered custom Retrieval-Augmented Generation (RAG) pipelines utilizing OpenAI embeddings and vector databases to query unstructured documents with zero hallucination.',
      'Built autonomous AI Agents using LangGraph and Model Context Protocol (MCP) concepts to execute multi-step decision loops, tool calls, and data extraction.',
      'Integrated n8n workflow automation to connect custom FastAPI / Django backend services with asynchronous LLM processing queues.',
      'Implemented structured output validation (Pydantic / Instructor) for deterministic enterprise API responses.',
    ],
    tech: ['Python', 'OpenAI API', 'LangGraph', 'RAG', 'Vector Databases', 'FastAPI', 'Django', 'n8n', 'MCP'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    id: 'cmdc-indina',
    category: 'cloud',
    tag: 'Cloud Services & E-Commerce',
    title: 'CMDC Cloud Hosting & Indina E-Commerce Platform',
    icon: <FaServer className="text-4xl text-emerald-400" />,
    badgeColor: '#34d399',
    description:
      'High-throughput microservices powering automated domain provisioning, cloud reseller hosting, and high-volume e-commerce order execution.',
    metrics: [
      { label: 'Optimization', value: 'p99 1.2s → <180ms' },
      { label: 'Uptime', value: '99.9% Production SLA' },
      { label: 'Auth', value: 'JWT + OTP + RBAC' },
      { label: 'Jobs', value: 'Celery Provisioning' },
    ],
    features: [
      'Engineered cloud hosting and domain reseller backend microservices with automated domain provisioning queues in Celery.',
      'Refactored Django serializers and optimized ORM query relationships, drastically boosting endpoint throughput and database concurrency.',
      'Constructed e-commerce product catalogs, cart microservices, checkout flows, and third-party payment integrations.',
      'Configured enterprise authentication pipelines with JWT token rotation, OTP verification, and role-based permissions.',
    ],
    tech: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'AWS EC2', 'Docker', 'Nginx', 'Gunicorn'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all')

  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  )

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Enterprise Engineering" />
        <SectionTitle highlight="Projects">Production Systems &</SectionTitle>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-12">
          {[
            { id: 'all', label: 'All Platforms' },
            { id: 'production', label: 'Production Systems (RoninFC & MHealth)' },
            { id: 'ai', label: 'AI & LangGraph Agents' },
            { id: 'cloud', label: 'Cloud Hosting & E-Commerce' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id as ProjectCategory)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-gradient-custom text-zinc-950 font-bold shadow-lg shadow-purple-500/20'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-10">
          {filteredProjects.map((project) => (
            <Tilt3DCard
              key={project.title}
              maxTilt={4}
              scale={1.01}
              glareColor={`${project.badgeColor}20`}
              className="rounded-3xl"
            >
              <div className="bg-[#101118]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Icon & Architecture Overview (Span 5) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl border border-white/10"
                          style={{ background: `${project.badgeColor}15` }}
                        >
                          {project.icon}
                        </div>
                        <span
                          className="text-xs font-mono px-3 py-1 rounded-full border"
                          style={{
                            background: `${project.badgeColor}10`,
                            borderColor: `${project.badgeColor}30`,
                            color: project.badgeColor,
                          }}
                        >
                          {project.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{project.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">{project.description}</p>
                    </div>

                    {/* Architectural Metrics 2x2 Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="p-3.5 rounded-2xl bg-black/50 border border-white/5 font-mono">
                          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{m.label}</div>
                          <div className="text-xs font-bold text-white mt-0.5 truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* GitHub Link */}
                    <div className="pt-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-white px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                      >
                        <FaGithub /> View Source on GitHub <FaExternalLinkAlt className="text-[10px] opacity-70" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Key Engineering Highlights & Stack (Span 7) */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/5">
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-4 flex items-center gap-2">
                        <FaLayerGroup />
                        <span>ENGINEERING HIGHLIGHTS & ARCHITECTURE</span>
                      </h4>

                      <ul className="space-y-3.5 mb-8">
                        {project.features.map((feat, fIdx) => (
                          <li key={fIdx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-3 leading-relaxed">
                            <span className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 text-[10px]">
                              <FaCheck />
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mb-2">Technologies Used</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 font-mono text-xs text-cyan-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

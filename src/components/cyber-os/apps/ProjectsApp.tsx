import { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaServer, FaShieldAlt, FaBolt, FaLayerGroup } from 'react-icons/fa'
import { TbBrandOpenai } from 'react-icons/tb'

interface ProjectData {
  id: string
  title: string
  subtitle: string
  role: string
  period: string
  summary: string
  metrics: string[]
  stack: string[]
  architectureHighlights: string[]
  githubUrl: string
  demoUrl?: string
  accentColor: string
}

const PROJECTS: ProjectData[] = [
  {
    id: 'roninfc',
    title: 'RoninFC Combat Platform',
    subtitle: 'High-Throughput Athlete & Tournament Management System',
    role: 'Primary Backend Owner',
    period: 'AimedAt Solutions • 2023 - Present',
    summary:
      'Engineered core backend microservices for sports events, fighter rosters, tournament bracket algorithms, and real-time weigh-in scoring. Integrated secure multi-currency payments and AWS media pipelines.',
    metrics: [
      'Engineered 30+ production RESTful endpoints with DRF & PostgreSQL',
      'Integrated Razorpay webhook listener with idempotent transaction logging',
      'AWS S3 presigned URLs for fighter ID/medical media verification',
      'Cut query latency by 45% using composite b-tree database indexes',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'AWS S3', 'Razorpay'],
    architectureHighlights: [
      'Async tournament progression calculation via Celery workers',
      'Redis cache-aside pattern for fighter leaderboards & rankings',
      'Role-Based Access Control (Admin, Referee, Coach, Athlete)',
    ],
    githubUrl: 'https://github.com/sammedpatildev',
    accentColor: 'from-amber-500 to-orange-600',
  },
  {
    id: 'mhealth',
    title: 'MHealth Maternal Platform',
    subtitle: 'Dynamic Nutrition & Trimester Clinical Pipeline',
    role: 'Senior Backend Engineer',
    period: 'AimedAt Solutions • 2023 - Present',
    summary:
      'Architected medical backend for pregnant women care, powering automated nutritional diet generation based on clinical blood panels, gestational age, and maternal health indicators.',
    metrics: [
      'Automated personalized diet prescription algorithms across 3 trimesters',
      'Offloaded SMS/WhatsApp reminders to Celery/Redis queue, cutting main-thread latency by 40%',
      'Multi-tenant RBAC securing electronic health records for doctors & patients',
      'Optimized PostgreSQL ORM queries, achieving p99 response times <180ms',
    ],
    stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'AWS EC2', 'Twilio'],
    architectureHighlights: [
      'Algorithmic macronutrient engine matching maternal biometric markers',
      'Zero-downtime database migrations with Django ORM and PostgreSQL',
      'Encrypted patient health records meeting strict privacy standards',
    ],
    githubUrl: 'https://github.com/sammedpatildev',
    accentColor: 'from-rose-500 to-pink-600',
  },
  {
    id: 'ai-agents',
    title: 'AI Agent & RAG Pipeline Suite',
    subtitle: 'Autonomous Multi-Agent Systems & Vector Document Retrieval',
    role: 'AI / Backend Architect',
    period: '2024 - Present',
    summary:
      'Production-grade GenAI pipelines combining LangGraph multi-agent orchestrations, hybrid semantic search, and Model Context Protocol (MCP) integrations with FastAPI.',
    metrics: [
      'LangGraph multi-agent state machines with dynamic branching & memory',
      'Hybrid RAG using OpenAI text-embedding-3-small and pgvector cosine similarity',
      'Automated webhook triggers & external API sync via n8n workflows',
      'Implemented MCP tool-calling servers for live database query generation',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'OpenAI API', 'pgvector', 'ChromaDB', 'n8n', 'Docker'],
    architectureHighlights: [
      'Self-correcting query decomposition & dynamic context reranking',
      'Strict JSON schema validation with Pydantic v2',
      'Streaming responses with SSE (Server-Sent Events) to web clients',
    ],
    githubUrl: 'https://github.com/sammedpatildev',
    accentColor: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'cmdc',
    title: 'CMDC Cloud Hosting & Indina',
    subtitle: 'Automated Domain Provisioning Queues & E-Commerce Core',
    role: 'Backend Developer',
    period: 'KMA Labs • 2021 - 2023',
    summary:
      'Built automated backend services for domain registration, DNS record provisioning, and transactional e-commerce checkout with atomic inventory reservation.',
    metrics: [
      'Designed asynchronous domain provisioning worker pipeline with Celery',
      'Constructed secure JWT authentication & session invalidation system',
      'Prevented race conditions in inventory checkout using atomic database transactions',
      'Maintained 99.9% uptime across production Linux/Nginx deployments',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Nginx'],
    architectureHighlights: [
      'Worker queue retries with exponential backoff for third-party DNS APIs',
      'Nginx reverse proxy with SSL termination and rate limiting',
      'Automated database backups and failover replication',
    ],
    githubUrl: 'https://github.com/sammedpatildev',
    accentColor: 'from-cyan-500 to-blue-600',
  },
]

export default function ProjectsApp() {
  const [activeId, setActiveId] = useState(PROJECTS[0].id)
  const activeProject = PROJECTS.find((p) => p.id === activeId) || PROJECTS[0]

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Top Project Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {PROJECTS.map((proj) => {
          const isSelected = proj.id === activeId
          return (
            <button
              key={proj.id}
              onClick={() => setActiveId(proj.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'border-purple-500/50 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] text-zinc-400'
              }`}
            >
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider truncate">
                {proj.role}
              </div>
              <div className={`text-xs sm:text-sm font-bold truncate mt-0.5 ${isSelected ? 'text-white' : 'text-zinc-300'}`}>
                {proj.title}
              </div>
            </button>
          )
        })}
      </div>

      {/* Main Project Detail View */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 space-y-6">
        {/* Header Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-purple-300 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {activeProject.period}
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white">{activeProject.title}</h2>
            <p className="text-sm text-zinc-400 mt-1">{activeProject.subtitle}</p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all border border-white/10"
            >
              <FaGithub className="text-sm" />
              <span>Source Repository</span>
              <FaExternalLinkAlt className="text-[10px] opacity-70" />
            </a>
          </div>
        </div>

        {/* Summary */}
        <div className="text-sm text-zinc-300 leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/5">
          {activeProject.summary}
        </div>

        {/* Key Production Metrics */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
            <FaBolt className="text-amber-400" />
            <span>Engineering Achievements & Benchmarks</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {activeProject.metrics.map((metric, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300"
              >
                <span className="text-emerald-400 font-bold mt-0.5">✔</span>
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Highlights */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
            <FaLayerGroup className="text-purple-400" />
            <span>Architecture & Microservice Design</span>
          </div>
          <div className="space-y-2">
            {activeProject.architectureHighlights.map((arch, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/[0.03] border border-purple-500/10 text-xs text-zinc-300"
              >
                <FaServer className="text-purple-400 text-sm flex-shrink-0" />
                <span>{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
            <FaShieldAlt className="text-cyan-400" />
            <span>Production Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {activeProject.stack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-200 transition-colors"
              >
                {tech.toLowerCase().includes('ai') || tech.toLowerCase().includes('lang') ? (
                  <TbBrandOpenai className="text-purple-400" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                )}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

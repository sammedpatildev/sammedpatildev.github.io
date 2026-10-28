import { useState } from 'react'
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaAward,
} from 'react-icons/fa'

interface ExperienceRole {
  id: string
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

const EXPERIENCES: ExperienceRole[] = [
  {
    id: 'aimedat',
    company: 'AimedAt Solutions',
    role: 'Senior Python / Backend Engineer',
    period: '09/2023 - Present (Bangalore, India)',
    location: 'Bangalore, Karnataka, India',
    summary:
      'Leading backend system design and high-throughput microservices. Primary backend owner for RoninFC athlete management and MHealth clinical nutrition platforms.',
    highlights: [
      'Primary backend owner for RoninFC, engineering 30+ production endpoints with Django REST Framework, PostgreSQL, and Razorpay payment integration.',
      'Architected medical backend for pregnant women care (MHealth), powering automated nutritional diet generation across all trimesters.',
      'Cut p99 database response times from 1.2s to <180ms by refactoring complex Django ORM queries and introducing composite PostgreSQL B-Tree indexes.',
      'Engineered asynchronous Celery & Redis task queues for transactional emails, reports, and WhatsApp alerts, cutting main-thread latency by 40%.',
      'Deployed containerized microservices to AWS EC2 with Docker and automated GitHub Actions CI/CD pipelines, sustaining 99.9% uptime SLA.',
      'Integrated LangGraph multi-agent workflows and hybrid RAG pipelines using OpenAI embeddings and pgvector for automated document intelligence.',
    ],
    stack: [
      'Python',
      'Django',
      'DRF',
      'FastAPI',
      'PostgreSQL',
      'Celery',
      'Redis',
      'AWS EC2 / S3',
      'Docker',
      'LangGraph',
    ],
  },
  {
    id: 'kma',
    company: 'KMA Labs',
    role: 'Python Backend Developer',
    period: '06/2021 - 08/2023 (Bangalore, India)',
    location: 'Bangalore, Karnataka, India',
    summary:
      'Designed and developed scalable RESTful APIs, background task worker pipelines, and database architectures for domain provisioning and high-volume e-commerce storefronts.',
    highlights: [
      'Developed scalable REST APIs using Django and DRF for cloud hosting domain registration and e-commerce platforms.',
      'Engineered asynchronous background worker pipelines with Celery and Redis to handle automated domain DNS provisioning and order fulfillment queues.',
      'Implemented secure JWT authentication, role-based access control (RBAC), and session invalidation across distributed client applications.',
      'Managed PostgreSQL and MySQL database schemas, writing complex SQL migrations and preventing race conditions with atomic transactions.',
      'Configured and deployed production web servers on Linux (Ubuntu), Nginx reverse proxy, and Gunicorn application servers.',
    ],
    stack: [
      'Python',
      'Django',
      'DRF',
      'PostgreSQL',
      'MySQL',
      'Celery',
      'Redis',
      'Linux',
      'Nginx',
      'Gunicorn',
    ],
  },
]

export default function ExperienceApp() {
  const [selectedId, setSelectedId] = useState(EXPERIENCES[0].id)
  const activeExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0]

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Company Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {EXPERIENCES.map((exp) => {
          const isSelected = exp.id === selectedId
          return (
            <button
              key={exp.id}
              onClick={() => setSelectedId(exp.id)}
              className={`p-3.5 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'border-purple-500/60 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-400">{exp.company}</span>
                <span className="text-[10px] text-zinc-500 font-mono">{exp.period.split(' ')[0]}</span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mt-1">{exp.role}</div>
            </button>
          )
        })}
      </div>

      {/* Experience Details */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 space-y-5">
        {/* Header */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono mb-2">
            <span className="flex items-center gap-1.5 text-purple-300">
              <FaBriefcase className="text-purple-400" />
              {activeExp.company}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="text-zinc-500" />
              {activeExp.period}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="text-rose-400" />
              {activeExp.location}
            </span>
          </div>

          <h2 className="text-xl font-bold text-white">{activeExp.role}</h2>
          <p className="text-xs text-zinc-300 mt-2 bg-white/[0.02] p-3 rounded-lg border border-white/5 leading-relaxed">
            {activeExp.summary}
          </p>
        </div>

        {/* Bullet Points */}
        <div>
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <FaAward className="text-amber-400" />
            <span>Key Contributions & Production Deliverables</span>
          </div>
          <div className="space-y-2.5">
            {activeExp.highlights.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-zinc-300 leading-relaxed"
              >
                <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0 text-sm" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
            Technologies Utilized
          </div>
          <div className="flex flex-wrap gap-1.5">
            {activeExp.stack.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

import { FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa'

interface JobExperience {
  company: string
  role: string
  period: string
  location: string
  description: string
  achievements: string[]
  stack: string[]
}

const EXPERIENCES: JobExperience[] = [
  {
    company: 'AimedAt Solutions',
    role: 'Senior Python / Backend Engineer',
    period: '09/2023 – Present',
    location: 'Bangalore, Karnataka, India',
    description:
      'Leading backend system design, microservice APIs, distributed async queues, and database performance optimization for enterprise health, sports, and AI platforms.',
    achievements: [
      'Primary Backend Owner for RoninFC, a combat sports & athlete tournament management platform. Engineered 30+ production RESTful endpoints with Django REST Framework, PostgreSQL, and Razorpay payment gateway integration.',
      'Architected medical backend for pregnant women care (MHealth), creating automated trimester-specific nutrition and diet prescription algorithms based on patient clinical biomarkers.',
      'Slashed p99 database response times from 1.2s to <180ms by diagnosing slow queries, refactoring complex Django ORM queries, and creating composite PostgreSQL B-Tree indexes.',
      'Engineered asynchronous Celery & Redis task queues for transactional email generation, background reports, and SMS/WhatsApp notifications, reducing main-thread latency by 40%.',
      'Deployed containerized microservices to AWS EC2 using Docker and automated GitHub Actions CI/CD pipelines, sustaining 99.9% uptime SLA.',
      'Integrated LangGraph multi-agent workflows and hybrid RAG pipelines using OpenAI text embeddings and pgvector for automated document intelligence.',
    ],
    stack: [
      'Python',
      'Django',
      'DRF',
      'FastAPI',
      'PostgreSQL',
      'Celery',
      'Redis',
      'AWS EC2',
      'AWS S3',
      'Docker',
      'GitHub Actions',
      'LangGraph',
      'pgvector',
      'Razorpay',
    ],
  },
  {
    company: 'KMA Labs',
    role: 'Python Backend Developer',
    period: '06/2021 – 08/2023',
    location: 'Bangalore, Karnataka, India',
    description:
      'Designed and developed scalable RESTful APIs, background task worker pipelines, and database architectures for domain provisioning and high-volume e-commerce storefronts.',
    achievements: [
      'Developed scalable REST APIs using Django and Django REST Framework for cloud hosting domain registration and high-volume e-commerce platforms.',
      'Engineered asynchronous background worker pipelines with Celery and Redis to handle automated domain DNS provisioning and order fulfillment queues.',
      'Implemented secure JWT authentication, role-based access control (RBAC), and session invalidation across distributed client applications.',
      'Managed PostgreSQL and MySQL database schemas, writing complex SQL migrations, database seeders, and maintaining transaction integrity under concurrent checkout requests.',
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
      'Linux (Ubuntu)',
      'Nginx',
      'Gunicorn',
      'Docker',
      'JWT',
    ],
  },
]

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">02. Work History</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((job) => (
            <div
              key={job.company}
              className="relative pl-0 md:pl-8 border-l-0 md:border-l md:border-zinc-800 space-y-4"
            >
              {/* Bullet Node Indicator (Desktop) */}
              <div className="hidden md:block absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-400 border-2 border-[#09090b]" />

              {/* Job Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <span>{job.role}</span>
                    <span className="text-zinc-500 font-normal">@</span>
                    <span className="text-zinc-200">{job.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-zinc-400 mt-1">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-zinc-500" />
                      {job.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-zinc-500" />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Role Overview */}
              <p className="text-sm text-zinc-400 leading-relaxed bg-zinc-900/30 p-3.5 rounded-xl border border-zinc-800/60">
                {job.description}
              </p>

              {/* Quantifiable Deliverables */}
              <div className="space-y-2.5 pt-1">
                {job.achievements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-zinc-300 leading-relaxed">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs">
                      <FaCheck />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-3">
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

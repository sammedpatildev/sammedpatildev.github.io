import { FaServer, FaBolt, FaDatabase, FaCloud, FaShieldAlt } from 'react-icons/fa'
import { TbBrandOpenai } from 'react-icons/tb'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  description: string
  skills: { name: string; detail?: string }[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages & Core',
    icon: <FaServer className="text-zinc-400" />,
    description: 'Core programming languages and runtime execution',
    skills: [
      { name: 'Python', detail: '4+ Years • Advanced OOP & Asyncio' },
      { name: 'SQL', detail: 'PostgreSQL & MySQL Query Tuning' },
      { name: 'JavaScript', detail: 'ES6+ & Browser Web APIs' },
      { name: 'Bash / Linux Shell', detail: 'Server Automation & Scripting' },
    ],
  },
  {
    title: 'Backend Frameworks & APIs',
    icon: <FaServer className="text-zinc-400" />,
    description: 'High-throughput microservices and RESTful API standards',
    skills: [
      { name: 'Django & DRF', detail: 'Primary Framework • 30+ Endpoints' },
      { name: 'FastAPI', detail: 'Async APIs • Pydantic v2 Validation' },
      { name: 'RESTful API Design', detail: 'Idempotency, Pagination, Filtering' },
      { name: 'Microservices Design', detail: 'Decoupled, Event-Driven Architecture' },
    ],
  },
  {
    title: 'Async Queues & Brokers',
    icon: <FaBolt className="text-amber-400" />,
    description: 'Background workers, asynchronous scheduling, and message passing',
    skills: [
      { name: 'Celery', detail: 'Worker Prefetch, Retries, Celery Beat' },
      { name: 'Redis', detail: 'Message Broker, Cache-Aside, Locks' },
      { name: 'Task Queuing', detail: '40% Main-Thread Latency Reduction' },
      { name: 'Webhook Pipelines', detail: 'Reliable Event-Driven Webhooks' },
    ],
  },
  {
    title: 'Databases & Performance',
    icon: <FaDatabase className="text-blue-400" />,
    description: 'Relational data modeling, index optimization, and storage',
    skills: [
      { name: 'PostgreSQL', detail: 'EXPLAIN ANALYZE, B-Tree Indexes' },
      { name: 'MySQL / SQLite', detail: 'Schema Design & Migrations' },
      { name: 'pgvector', detail: 'Vector Cosine Similarity & Dense Indexing' },
      { name: 'ORM Tuning', detail: 'Eliminated N+1, p99 <180ms Latency' },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <FaCloud className="text-cyan-400" />,
    description: 'Cloud hosting, containerization, and continuous delivery',
    skills: [
      { name: 'AWS Cloud', detail: 'Certified SAA-C03 • EC2, S3, IAM' },
      { name: 'Docker', detail: 'Multi-stage Dockerfiles & Compose' },
      { name: 'GitHub Actions', detail: 'Automated CI/CD Testing & Deployments' },
      { name: 'Nginx & Gunicorn', detail: 'Reverse Proxy, SSL, Rate Limiting' },
    ],
  },
  {
    title: 'AI Agents & RAG Architecture',
    icon: <TbBrandOpenai className="text-pink-400" />,
    description: 'Stateful multi-agent workflows and generative document intelligence',
    skills: [
      { name: 'LangGraph', detail: 'Multi-Agent State Machines & Memory' },
      { name: 'RAG Retrieval', detail: 'Hybrid Dense + Sparse Semantic Search' },
      { name: 'Model Context Protocol (MCP)', detail: 'Deterministic Database Tools' },
      { name: 'OpenAI API & Vector DBs', detail: 'ChromaDB, pgvector, n8n' },
    ],
  },
  {
    title: 'Security & Integrations',
    icon: <FaShieldAlt className="text-emerald-400" />,
    description: 'Identity management, authorization, and third-party gateways',
    skills: [
      { name: 'JWT Authentication', detail: 'Stateless Tokens & Session Invalidation' },
      { name: 'Role-Based Access Control (RBAC)', detail: 'Healthcare Patient/Doctor Roles' },
      { name: 'Razorpay Gateway', detail: 'Multi-currency Payments & Webhooks' },
      { name: 'Twilio SMS / WhatsApp', detail: 'Automated Clinical Notifications' },
    ],
  },
]

export default function ProfessionalSkills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">04. Technical Capabilities</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-zinc-800/70">
                <div className="text-lg">{category.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-white font-mono">{category.title}</h3>
                  <div className="text-[11px] text-zinc-500">{category.description}</div>
                </div>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col">
                    <span className="text-xs font-mono font-semibold text-zinc-200">{skill.name}</span>
                    {skill.detail && (
                      <span className="text-[11px] text-zinc-400 font-sans mt-0.5">{skill.detail}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

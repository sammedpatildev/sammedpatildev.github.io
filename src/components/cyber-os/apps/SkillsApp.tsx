import { useState } from 'react'
import {
  FaPython,
  FaAws,
  FaDocker,
  FaDatabase,
  FaServer,
  FaBolt,
  FaShieldAlt,
} from 'react-icons/fa'
import {
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiCelery,
  SiNginx,
  SiGithubactions,
} from 'react-icons/si'
import { TbBrandOpenai } from 'react-icons/tb'

interface SkillItem {
  name: string
  level: number
  experience: string
  productionImpact: string
  icon: React.ReactNode
}

interface SkillCategory {
  id: string
  label: string
  skills: SkillItem[]
}

const CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    label: 'Backend & Frameworks',
    skills: [
      {
        name: 'Python',
        level: 96,
        experience: '4+ Years',
        productionImpact: 'Primary core language for microservices, async pipelines, and AI systems',
        icon: <FaPython className="text-yellow-400" />,
      },
      {
        name: 'Django & DRF',
        level: 94,
        experience: '4+ Years',
        productionImpact: 'Engineered 30+ production endpoints, ORM optimization, and custom middleware',
        icon: <SiDjango className="text-emerald-500" />,
      },
      {
        name: 'FastAPI',
        level: 90,
        experience: '3 Years',
        productionImpact: 'High-performance async APIs with Pydantic v2 validation and OpenAPI auto-docs',
        icon: <SiFastapi className="text-teal-400" />,
      },
      {
        name: 'System Design',
        level: 88,
        experience: '4 Years',
        productionImpact: 'Scalable distributed architectures, decoupled services, and failover design',
        icon: <FaServer className="text-purple-400" />,
      },
    ],
  },
  {
    id: 'async',
    label: 'Async & Message Queues',
    skills: [
      {
        name: 'Celery',
        level: 92,
        experience: '3+ Years',
        productionImpact: 'Offloaded heavy notification and report jobs, slashing main-thread latency by 40%',
        icon: <SiCelery className="text-emerald-400" />,
      },
      {
        name: 'Redis',
        level: 90,
        experience: '3+ Years',
        productionImpact: 'Used as message broker, distributed lock manager, and 94%+ hit rate cache',
        icon: <SiRedis className="text-red-500" />,
      },
      {
        name: 'Asynchronous Task Queues',
        level: 90,
        experience: '3+ Years',
        productionImpact: 'Worker prefetch tuning, exponential backoff retries, and dead-letter queues',
        icon: <FaBolt className="text-amber-400" />,
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Multi-Agents',
    skills: [
      {
        name: 'LangGraph & Multi-Agents',
        level: 88,
        experience: '2 Years',
        productionImpact: 'Stateful multi-agent graphs with conditional branching and persistent memory',
        icon: <TbBrandOpenai className="text-pink-400" />,
      },
      {
        name: 'RAG & Vector Databases',
        level: 88,
        experience: '2 Years',
        productionImpact: 'Hybrid retrieval with pgvector and OpenAI text-embedding-3-small',
        icon: <FaDatabase className="text-cyan-400" />,
      },
      {
        name: 'MCP & Tool Calling',
        level: 86,
        experience: '1+ Years',
        productionImpact: 'Built Model Context Protocol servers to grant LLMs structured database tools',
        icon: <FaBolt className="text-purple-400" />,
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    skills: [
      {
        name: 'AWS (EC2, S3, IAM)',
        level: 88,
        experience: 'AWS Certified SAA-C03',
        productionImpact: 'Architected secure cloud infrastructures with 99.9% uptime SLA',
        icon: <FaAws className="text-amber-500" />,
      },
      {
        name: 'Docker & Containers',
        level: 86,
        experience: '3+ Years',
        productionImpact: 'Multi-stage Dockerfiles for Python/Django services with lean production images',
        icon: <FaDocker className="text-blue-400" />,
      },
      {
        name: 'Nginx & Linux',
        level: 88,
        experience: '4+ Years',
        productionImpact: 'Configured reverse proxies, SSL certificates, gzip compression, and rate limits',
        icon: <SiNginx className="text-emerald-400" />,
      },
      {
        name: 'GitHub Actions CI/CD',
        level: 85,
        experience: '3+ Years',
        productionImpact: 'Automated test suites, linting, Docker image build and deploy workflows',
        icon: <SiGithubactions className="text-purple-400" />,
      },
    ],
  },
  {
    id: 'data',
    label: 'Databases & Security',
    skills: [
      {
        name: 'PostgreSQL',
        level: 94,
        experience: '4+ Years',
        productionImpact: 'Optimized complex SQL queries, dropping p99 response times from 1.2s to <180ms',
        icon: <SiPostgresql className="text-blue-400" />,
      },
      {
        name: 'JWT & Security (RBAC)',
        level: 90,
        experience: '4+ Years',
        productionImpact: 'Role-Based Access Control and tamper-proof authentication across healthcare apps',
        icon: <FaShieldAlt className="text-purple-400" />,
      },
    ],
  },
]

export default function SkillsApp() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id)
  const currentCategory = CATEGORIES.find((c) => c.id === activeTab) || CATEGORIES[0]

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-white/10">
        {CATEGORIES.map((cat) => {
          const isSelected = cat.id === activeTab
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                isSelected
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Skills List in Active Category */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1">
        {currentCategory.skills.map((skill) => (
          <div
            key={skill.name}
            className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all space-y-2.5"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xl">
                  {skill.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{skill.name}</div>
                  <div className="text-[11px] font-mono text-purple-400">{skill.experience}</div>
                </div>
              </div>

              <div className="text-right">
                <span className="text-sm font-mono font-bold text-white">{skill.level}%</span>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-mono">Proficiency</div>
              </div>
            </div>

            {/* Proficiency Bar */}
            <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Real World Impact Note */}
            <div className="text-xs text-zinc-400 bg-black/40 p-2.5 rounded-lg border border-white/5">
              <span className="text-purple-300 font-semibold font-mono">Impact: </span>
              {skill.productionImpact}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

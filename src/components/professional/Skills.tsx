import {
  FaServer,
  FaBolt,
  FaDatabase,
  FaCloud,
  FaCogs,
  FaUserShield,
  FaUsersCog,
} from 'react-icons/fa'
import { TbBrandOpenai } from 'react-icons/tb'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  items: string[]
}

const RESUME_SKILLS: SkillCategory[] = [
  {
    title: 'Languages & Core',
    icon: <FaServer className="text-zinc-400" />,
    items: ['Python', 'JavaScript', 'SQL (PostgreSQL, MySQL, SQLite)'],
  },
  {
    title: 'Backend Frameworks',
    icon: <FaServer className="text-emerald-400" />,
    items: [
      'Django',
      'Django REST Framework (DRF)',
      'FastAPI',
      'RESTful APIs',
      'System Design',
      'Microservices',
    ],
  },
  {
    title: 'Distributed Systems & Async',
    icon: <FaBolt className="text-amber-400" />,
    items: [
      'Celery',
      'Redis',
      'Asynchronous Task Queues',
      'Message Brokers',
      'Webhooks',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaCloud className="text-cyan-400" />,
    items: [
      'AWS (EC2, S3, IAM)',
      'Docker',
      'GitHub Actions CI/CD',
      'Nginx',
      'Gunicorn',
      'Linux',
      'Git',
      'Jenkins',
      'GitLab CI',
      'DigitalOcean',
      'Lambda',
      'CloudWatch',
      'Boto3',
      'Kubernetes',
      'Amazon EKS',
      'Terraform',
      'AWS CloudFormation',
    ],
  },
  {
    title: 'Databases & Security',
    icon: <FaDatabase className="text-blue-400" />,
    items: [
      'PostgreSQL',
      'Schema Design',
      'Query Optimization / Indexing',
      'JWT',
      'RBAC',
      'OTP',
      'Swagger / OpenAPI',
    ],
  },
  {
    title: 'AI & Automation',
    icon: <TbBrandOpenai className="text-pink-400" />,
    items: [
      'Generative AI',
      'OpenAI API',
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents',
      'LangGraph',
      'Model Context Protocol (MCP)',
      'Prompt Engineering',
      'n8n Workflows',
    ],
  },
  {
    title: 'Third-Party Integrations',
    icon: <FaCogs className="text-purple-400" />,
    items: ['Razorpay', 'Payment Gateways', 'Webhooks', 'Third-Party REST APIs'],
  },
  {
    title: 'Identity & Access Management (IAM)',
    icon: <FaUserShield className="text-rose-400" />,
    items: [
      'Authentication',
      'Authorization',
      'Role-Based Access Control (RBAC)',
      'JWT',
      'OAuth 2.0',
      'OpenID Connect (OIDC)',
      'SAML',
      'Single Sign-On (SSO)',
    ],
  },
  {
    title: 'Architecture & Leadership',
    icon: <FaUsersCog className="text-zinc-300" />,
    items: [
      'System Design',
      'Microservices',
      'Technical Documentation',
      'Code Reviews',
      'Developer Mentoring',
      'Agile / Scrum',
    ],
  },
]

export default function ProfessionalSkills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            04. Skills & Technical Stack
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME_SKILLS.map((cat) => (
            <div
              key={cat.title}
              className="p-5 sm:p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-3 border-b border-zinc-800/70">
                  <span className="text-lg">{cat.icon}</span>
                  <h3 className="text-sm font-bold text-white font-mono">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800/80 text-xs font-mono"
                    >
                      {skill}
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

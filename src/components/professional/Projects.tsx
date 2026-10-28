import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  title: string
  subtitle: string
  role: string
  period: string
  problem: string
  architecture: string[]
  metrics: string[]
  stack: string[]
  githubUrl: string
}

const PROJECTS: Project[] = [
  {
    title: 'RoninFC Combat Platform',
    subtitle: 'High-Throughput Athlete & Tournament Management System',
    role: 'Primary Backend Owner',
    period: 'AimedAt Solutions • 2023 - Present',
    problem:
      'High-traffic athlete weigh-ins and tournament bracket calculations were creating database contention, latency spikes, and double-charge vulnerabilities during concurrent registration checkouts.',
    architecture: [
      'Engineered 30+ production RESTful endpoints using Django REST Framework and PostgreSQL.',
      'Constructed an idempotent Razorpay webhook listener with atomic database logging to prevent duplicate registrations.',
      'Implemented secure AWS S3 presigned URLs for large athlete medical documents and weigh-in footage uploads.',
      'Offloaded tournament progression algorithms to Celery asynchronous workers with Redis caching.',
    ],
    metrics: [
      'p99 query latency cut by 45% using composite PostgreSQL B-Tree indexes',
      '100% idempotent transaction reliability during peak tournament weigh-in events',
      'Zero user-facing upload latency using direct AWS S3 presigned client uploads',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'Celery', 'Redis', 'AWS S3', 'Razorpay'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'MHealth Maternal Platform',
    subtitle: 'Trimester-Specific Clinical Nutrition & Care Engine',
    role: 'Senior Backend Engineer',
    period: 'AimedAt Solutions • 2023 - Present',
    problem:
      'Generating dynamic nutritional diet algorithms across changing gestational ages and patient blood markers was blocking HTTP web threads, causing slow page loads (>1.2s) and request timeouts.',
    architecture: [
      'Architected algorithmic nutrition generator calculating macronutrient goals based on trimester biometrics.',
      'Decoupled automated patient WhatsApp and SMS medication reminders into Celery & Redis task queues.',
      'Engineered multi-role Role-Based Access Control (RBAC) securing patient health records across doctors and patients.',
      'Diagnosed and eliminated N+1 database queries through Django ORM select_related / prefetch_related refactoring.',
    ],
    metrics: [
      'Slashed p99 database response times from 1.2s to <180ms',
      'Reduced main-thread server latency by 40% via Celery asynchronous task offload',
      'Maintained 99.9% uptime SLA across production AWS EC2 deployments',
    ],
    stack: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'AWS EC2', 'Twilio'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'AI Agent & RAG Pipeline Suite',
    subtitle: 'Autonomous Multi-Agent Workflows & Vector Document Retrieval',
    role: 'AI / Backend Architect',
    period: '2024 - Present',
    problem:
      'Standard LLM retrieval failed on complex multi-hop domain documents, returning hallucinations and lacking deterministic tool-calling validation for structured database queries.',
    architecture: [
      'Constructed stateful LangGraph multi-agent systems with dynamic router nodes and persistent PostgreSQL memory.',
      'Implemented hybrid semantic search combining pgvector cosine similarity with OpenAI text-embedding-3-small.',
      'Built Model Context Protocol (MCP) tool servers for deterministic SQL query execution and external API sync.',
      'Enforced strict Pydantic v2 schemas and streaming Server-Sent Events (SSE) for low-latency responses.',
    ],
    metrics: [
      '94.8% retrieval accuracy over multi-hop technical documentation',
      '100% type-safe tool validation preventing malformed database executions',
      'Sub-2 second streaming time-to-first-token using FastAPI and SSE',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'OpenAI API', 'pgvector', 'ChromaDB', 'n8n', 'Docker'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
  {
    title: 'CMDC Cloud Hosting & Indina E-Commerce',
    subtitle: 'Asynchronous Domain Provisioning & Transactional Core',
    role: 'Python Backend Developer',
    period: 'KMA Labs • 2021 - 2023',
    problem:
      'Synchronous DNS provisioning calls to external domain registrars took up to 8 seconds, locking database rows and failing under concurrent storefront checkout bursts.',
    architecture: [
      'Engineered decoupled background worker queues in Celery and Redis to handle domain registration and DNS propagation.',
      'Implemented exponential backoff retries and dead-letter handling for third-party registrar API failures.',
      'Applied atomic SQL transactions and row-level locks, preventing inventory race conditions during high-volume sales.',
      'Configured production web servers on Linux (Ubuntu), Nginx reverse proxy, and Gunicorn application servers.',
    ],
    metrics: [
      'Zero over-sell inventory discrepancies during concurrent flash checkouts',
      '99.9% availability across production Linux/Nginx infrastructure',
      'Sub-5ms stateless JWT token verification across client sessions',
    ],
    stack: ['Python', 'Django', 'DRF', 'PostgreSQL', 'MySQL', 'Celery', 'Redis', 'Docker', 'Nginx'],
    githubUrl: 'https://github.com/sammedp-aat',
  },
]

export default function ProfessionalProjects() {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">03. Systems & Case Studies</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-zinc-800/70">
                  <div className="text-xs font-mono text-zinc-400">
                    <span className="text-emerald-400 font-semibold">{proj.role}</span>
                    <span className="text-zinc-600 mx-2">•</span>
                    <span>{proj.period.split('•')[0]}</span>
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

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white tracking-tight">{proj.title}</h3>
                <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-4">{proj.subtitle}</p>

                {/* Challenge Summary */}
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs text-zinc-300 leading-relaxed mb-4">
                  <span className="text-zinc-500 font-mono uppercase text-[10px] block mb-1">Challenge & Context:</span>
                  {proj.problem}
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-4">
                  <span className="text-zinc-500 font-mono uppercase text-[10px] block">Architectural Deliverables:</span>
                  {proj.architecture.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
                      <span className="text-zinc-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Key Benchmarks */}
                <div className="space-y-1.5 p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 mb-5">
                  <span className="text-emerald-400 font-mono uppercase text-[10px] font-bold block">
                    Verified Production Metrics:
                  </span>
                  {proj.metrics.map((metric, idx) => (
                    <div key={idx} className="text-xs font-mono text-emerald-300 flex items-start gap-2">
                      <span className="text-emerald-500">✔</span>
                      <span>{metric}</span>
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
                        className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
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

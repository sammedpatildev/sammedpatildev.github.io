import { useState } from 'react'
import {
  FaServer,
  FaDatabase,
  FaBolt,
  FaShieldAlt,
  FaNetworkWired,
  FaCheckCircle,
} from 'react-icons/fa'
import { TbBrandOpenai } from 'react-icons/tb'

interface ArchitectureSystem {
  id: string
  name: string
  category: string
  badge: string
  problem: string
  solution: string
  metrics: { label: string; value: string; change: string }[]
  nodes: {
    id: string
    title: string
    tech: string
    role: string
    icon: React.ReactNode
    color: string
  }[]
  flow: string[]
}

const SYSTEMS: ArchitectureSystem[] = [
  {
    id: 'roninfc',
    name: 'RoninFC Combat Platform',
    category: 'Athlete Management & Concurrency',
    badge: 'Primary Backend Owner',
    problem:
      'High-traffic athlete weigh-ins and tournament bracket calculations were creating database contention, latency spikes, and double-charge vulnerabilities during concurrent checkouts.',
    solution:
      'Architected event-driven microservices using Django REST Framework, Celery task workers, and Redis cache. Built idempotent Razorpay webhook handling and moved tournament bracket progression to background queues.',
    metrics: [
      { label: 'Query Latency', value: '<180ms', change: '-45% via B-Tree Indexes' },
      { label: 'Payment Reliability', value: '100%', change: 'Idempotent Webhooks' },
      { label: 'Media Throughput', value: '200+ MB/s', change: 'AWS S3 Presigned URLs' },
      { label: 'Endpoints Built', value: '30+', change: 'RESTful with DRF' },
    ],
    nodes: [
      {
        id: 'client',
        title: 'Client Web/Mobile',
        tech: 'React / Next.js',
        role: 'Fighter registrations, event tickets, weigh-in portal',
        icon: <FaNetworkWired />,
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      },
      {
        id: 'gateway',
        title: 'API Gateway & Nginx',
        tech: 'Nginx + SSL',
        role: 'Rate limiting, reverse proxy, gzip compression',
        icon: <FaShieldAlt />,
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      },
      {
        id: 'core',
        title: 'Django REST API',
        tech: 'Python 3.11 / DRF',
        role: 'Business rules, tournament state machine, JWT auth',
        icon: <FaServer />,
        color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      },
      {
        id: 'broker',
        title: 'Redis & Celery',
        tech: 'Celery / Redis 7',
        role: 'Async bracket calculations, notification workers',
        icon: <FaBolt />,
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      },
      {
        id: 'db',
        title: 'PostgreSQL & AWS S3',
        tech: 'Postgres 15 / S3',
        role: 'Composite indexes, ACID transactions, fighter media',
        icon: <FaDatabase />,
        color: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      },
    ],
    flow: ['Client Gateway', 'Nginx Reverse Proxy', 'Django REST Core', 'Celery Background Queue', 'PostgreSQL & AWS S3'],
  },
  {
    id: 'mhealth',
    name: 'MHealth Maternal Platform',
    category: 'Maternal Care & Dynamic Diet Algorithms',
    badge: 'Associate Software Engineer',
    problem:
      'Calculating trimester-specific caloric and macronutrient needs across hundreds of clinical biomarker combinations was blocking HTTP request threads, resulting in slow page loads (>1.2s) and timeouts.',
    solution:
      'Engineered an algorithmic diet prescription generator decoupled from web threads. Offloaded calculation jobs and patient medication alerts to Celery/Redis workers, and refactored Django ORM queries with B-Tree indexes.',
    metrics: [
      { label: 'p99 Response Time', value: '<180ms', change: 'Cut down from 1.2s' },
      { label: 'Thread Latency', value: '-40%', change: 'Async Task Offload' },
      { label: 'Data Security', value: 'HIPAA RBAC', change: 'Doctor/Patient Roles' },
      { label: 'Availability', value: '99.9%', change: 'AWS EC2 SLA' },
    ],
    nodes: [
      {
        id: 'client',
        title: 'Doctor & Patient App',
        tech: 'Mobile & Web',
        role: 'Biometric input, meal trackers, lab report uploads',
        icon: <FaNetworkWired />,
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      },
      {
        id: 'api',
        title: 'FastAPI / Django API',
        tech: 'Python / DRF',
        role: 'Validates lab markers, triggers nutrition algorithms',
        icon: <FaServer />,
        color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      },
      {
        id: 'queue',
        title: 'Celery Worker Pool',
        tech: 'Celery + Redis',
        role: 'Async meal plan compilation, automated SMS/WhatsApp alerts',
        icon: <FaBolt />,
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      },
      {
        id: 'db',
        title: 'PostgreSQL Relational DB',
        tech: 'Postgres / B-Tree',
        role: 'Optimized ORM queries with zero N+1 database hits',
        icon: <FaDatabase />,
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      },
    ],
    flow: ['Patient Biometrics', 'FastAPI Ingestion', 'Diet Generation Engine', 'Celery Task Worker', 'PostgreSQL Records'],
  },
  {
    id: 'ai-agents',
    name: 'AI Agent & RAG Pipeline Suite',
    category: 'Generative AI & Enterprise Document Intelligence',
    badge: 'AI Project',
    problem:
      'Standard LLM retrieval failed on complex multi-hop domain documents, returning hallucinations and lacking deterministic tool-calling validation for structured database queries.',
    solution:
      'Constructed stateful LangGraph multi-agent workflows with dynamic router nodes, hybrid semantic search over pgvector using OpenAI text embeddings, and Model Context Protocol (MCP) tool integration.',
    metrics: [
      { label: 'Retrieval Accuracy', value: '94.8%', change: 'Hybrid Dense+Sparse RAG' },
      { label: 'Inference Latency', value: '1.4s', change: 'Streaming SSE Response' },
      { label: 'Tool Validation', value: '100%', change: 'Pydantic v2 Type Safe' },
      { label: 'Agent Memory', value: 'Stateful', change: 'Postgres Checkpointing' },
    ],
    nodes: [
      {
        id: 'query',
        title: 'User Prompt / Webhook',
        tech: 'FastAPI / SSE',
        role: 'Streams user queries and incoming document payloads',
        icon: <FaNetworkWired />,
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      },
      {
        id: 'graph',
        title: 'LangGraph Supervisor',
        tech: 'LangGraph / Python',
        role: 'Decomposes intent, coordinates specialized worker agents',
        icon: <TbBrandOpenai />,
        color: 'text-pink-400 border-pink-500/30 bg-pink-500/10',
      },
      {
        id: 'retriever',
        title: 'pgvector & Embeddings',
        tech: 'pgvector / OpenAI',
        role: 'Cosine distance semantic retrieval over chunked data',
        icon: <FaDatabase />,
        color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      },
      {
        id: 'mcp',
        title: 'MCP Tool Servers',
        tech: 'FastAPI / JSON-RPC',
        role: 'Deterministic live SQL execution and system commands',
        icon: <FaBolt />,
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      },
    ],
    flow: ['User Intent', 'Supervisor Agent', 'pgvector Retrieval', 'MCP Tool Calling', 'Synthesized Response'],
  },
  {
    id: 'cmdc',
    name: 'CMDC Cloud Hosting Platform',
    category: 'Cloud Services & Provisioning Queues',
    badge: 'AimedAt Solutions',
    problem:
      'Synchronous DNS provisioning calls to external domain registrars took up to 8 seconds, locking database rows and failing under concurrent storefront checkout bursts.',
    solution:
      'Engineered decoupled background worker queues with exponential backoff retries in Celery and Redis. Implemented atomic database transactions preventing inventory race conditions.',
    metrics: [
      { label: 'Checkout Concurrency', value: 'Zero Over-sell', change: 'Atomic SQL Transactions' },
      { label: 'Provisioning Uptime', value: '99.9%', change: 'Linux Nginx Hosting' },
      { label: 'Task Retries', value: 'Self-Healing', change: 'Exponential Backoff' },
      { label: 'Auth Token Speed', value: '<5ms', change: 'Stateless JWT Verification' },
    ],
    nodes: [
      {
        id: 'client',
        title: 'Hosting Portal',
        tech: 'Next.js Frontend',
        role: 'Domain search, DNS record management',
        icon: <FaNetworkWired />,
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      },
      {
        id: 'api',
        title: 'Django REST Backend',
        tech: 'Python / DRF',
        role: 'JWT authentication, domain registration orchestration',
        icon: <FaServer />,
        color: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      },
      {
        id: 'workers',
        title: 'Celery DNS Provisioner',
        tech: 'Celery / Redis',
        role: 'Async domain registration and DNS record propagation',
        icon: <FaBolt />,
        color: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      },
      {
        id: 'db',
        title: 'PostgreSQL Cluster',
        tech: 'Postgres / Redis',
        role: 'Atomic order transactions and inventory row-level locks',
        icon: <FaDatabase />,
        color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      },
    ],
    flow: ['Domain Order', 'Django Serializer Validation', 'Redis Task Broker', 'Celery DNS Worker', 'PostgreSQL DB'],
  },
]

export default function ProfessionalArchitectureVisualizer() {
  const [activeSystemId, setActiveSystemId] = useState(SYSTEMS[0].id)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const activeSystem = SYSTEMS.find((s) => s.id === activeSystemId) || SYSTEMS[0]

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-white/[0.06] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            02. Systems Architecture
          </span>
          <div className="h-[1px] flex-1 bg-white/[0.08]" />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Production Microservice Architectures
          </h2>
          <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Interactive breakdown of high-throughput architectures engineered by Sammed Patil. Inspect data flows, asynchronous decoupling, and real latency benchmarks.
          </p>
        </div>

        {/* System Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {SYSTEMS.map((sys) => {
            const isSelected = sys.id === activeSystemId
            return (
              <button
                key={sys.id}
                onClick={() => {
                  setActiveSystemId(sys.id)
                  setSelectedNode(null)
                }}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'border-purple-500/50 bg-purple-500/10 shadow-[0_4px_20px_rgba(168,85,247,0.15)] text-white'
                    : 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-purple-400 mb-1">
                  {sys.badge}
                </div>
                <div className="text-sm font-bold truncate">{sys.name}</div>
                <div className="text-[11px] text-zinc-500 truncate mt-0.5">{sys.category}</div>
              </button>
            )
          })}
        </div>

        {/* Active System Architecture Workbench Card */}
        <div className="linear-card rounded-3xl p-6 sm:p-8 space-y-6">
          {/* Header Info */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-1">
                {activeSystem.category}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{activeSystem.name}</h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <FaCheckCircle />
              <span>Production Deployed & Verified</span>
            </div>
          </div>

          {/* Problem vs Solution Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold block">
                [Engineering Bottleneck]
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{activeSystem.problem}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                [Architectural Solution]
              </span>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{activeSystem.solution}</p>
            </div>
          </div>

          {/* Pipeline Execution Stepper */}
          <div>
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
              Data & Execution Pipeline
            </div>
            <div className="flex flex-wrap items-center gap-2 p-3.5 rounded-2xl bg-black/40 border border-white/5">
              {activeSystem.flow.map((step, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs font-semibold">
                    <span className="text-zinc-500 mr-1.5">{idx + 1}.</span>
                    {step}
                  </span>
                  {idx < activeSystem.flow.length - 1 && (
                    <span className="text-zinc-600 font-bold select-none">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Microservice Topology Nodes */}
          <div>
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Microservice Topology</span>
              <span className="text-[11px] text-zinc-500">Click node to inspect</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {activeSystem.nodes.map((node) => {
                const isSelected = selectedNode === node.id
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(isSelected ? null : node.id)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-purple-400/80 bg-purple-500/15 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                        : 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-xl border text-base ${node.color}`}>
                        {node.icon}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-white/5 px-2 py-0.5 rounded-full">
                        {node.tech}
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">{node.title}</div>
                    <div className="text-xs text-zinc-400 mt-1 leading-snug">{node.role}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Production Benchmarks Strip */}
          <div className="pt-4 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-3">
            {activeSystem.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xl sm:text-2xl font-black font-mono text-white">{metric.value}</div>
                <div className="text-xs font-bold text-zinc-300 font-mono mt-0.5">{metric.label}</div>
                <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{metric.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
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
    name: 'RoninFC High-Throughput Combat Platform',
    category: 'High-Concurrency Event Processing & Payments',
    badge: 'Primary Backend Owner',
    problem:
      'High-traffic fighter weigh-in events and tournament bracket calculations caused peak latency spikes, database contention, and double-charge risks during concurrent registration checkouts.',
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
    name: 'MHealth Clinical Platform for Pregnant Women',
    category: 'Maternal Healthcare & Dynamic Diet Algorithms',
    badge: 'Senior Backend Engineer',
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
    name: 'Autonomous Multi-Agent RAG Pipeline',
    category: 'Generative AI & Enterprise Document Intelligence',
    badge: 'AI / Backend Architect',
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
    name: 'CMDC Cloud Domain & E-Commerce Core',
    category: 'Distributed Task Queues & Atomic Transactions',
    badge: 'Python Backend Developer',
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
        title: 'Storefront & Hosting Portal',
        tech: 'Next.js Frontend',
        role: 'Shopping cart, domain search, DNS management',
        icon: <FaNetworkWired />,
        color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      },
      {
        id: 'api',
        title: 'Django REST Backend',
        tech: 'Python / DRF',
        role: 'JWT authentication, order validation, inventory reservations',
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
    flow: ['Domain Checkout', 'Django Order Validation', 'Redis Task Broker', 'Celery DNS Worker', 'PostgreSQL DB'],
  },
]

export default function ArchitectureVisualizer() {
  const [activeSystemId, setActiveSystemId] = useState(SYSTEMS[0].id)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const activeSystem = SYSTEMS.find((s) => s.id === activeSystemId) || SYSTEMS[0]

  return (
    <section id="architecture" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTag text="Interactive Systems Architecture" />
        <SectionTitle highlight="Microservices">Production Scale &</SectionTitle>

        <p className="text-zinc-400 max-w-3xl text-sm sm:text-base mt-4 leading-relaxed">
          Deep dive into real-world distributed architectures engineered by Sammed Patil. Select a production platform below to inspect its data flow, decoupling strategy, and verified engineering benchmarks.
        </p>

        {/* System Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
          {SYSTEMS.map((sys) => {
            const isSelected = sys.id === activeSystemId
            return (
              <button
                key={sys.id}
                onClick={() => {
                  setActiveSystemId(sys.id)
                  setSelectedNode(null)
                }}
                className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'border-purple-500/60 bg-gradient-to-br from-purple-950/40 via-purple-900/20 to-black/60 shadow-[0_10px_30px_rgba(168,85,247,0.25)]'
                    : 'border-white/10 bg-black/40 hover:bg-white/[0.04] text-zinc-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-wider text-purple-400 mb-1">
                  {sys.badge}
                </div>
                <div className={`text-sm sm:text-base font-bold truncate ${isSelected ? 'text-white' : 'text-zinc-200'}`}>
                  {sys.name.split(' ')[0]} {sys.name.split(' ')[1]}
                </div>
                <div className="text-[11px] text-zinc-500 truncate mt-0.5">{sys.category}</div>

                {isSelected && (
                  <motion.div
                    layoutId="activeTabGlow"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Active System Interactive Workbench */}
        <div className="mt-8">
          <Tilt3DCard maxTilt={4} glareColor="rgba(168, 85, 247, 0.15)">
            <div className="rounded-3xl border border-white/10 bg-[#0d0e16]/90 backdrop-blur-2xl p-6 sm:p-10 shadow-2xl relative">
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-purple-300 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {activeSystem.category}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">{activeSystem.name}</h3>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                  <FaCheckCircle />
                  <span>Production Deployed & Verified</span>
                </div>
              </div>

              {/* Problem vs Solution Split */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-bold">
                    [Challenge / Bottleneck]
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{activeSystem.problem}</p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/5 space-y-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                    [Architectural Solution]
                  </span>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{activeSystem.solution}</p>
                </div>
              </div>

              {/* Pipeline Flow Stepper */}
              <div className="mt-8">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Data & Execution Pipeline</span>
                  <span className="text-[11px] text-zinc-500 hidden sm:inline">Left to Right Execution</span>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-4 rounded-2xl bg-black/60 border border-white/5">
                  {activeSystem.flow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3">
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

              {/* Interactive Architecture Nodes */}
              <div className="mt-8">
                <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                  <span>Microservice Architecture Topology</span>
                  <span className="text-[11px] text-purple-400 font-mono">Click node to inspect implementation</span>
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
                            ? 'border-purple-400/80 bg-purple-500/15 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                            : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`p-2.5 rounded-xl border text-lg ${node.color}`}>
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

              {/* Verified Metrics Strip */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeSystem.metrics.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-black/40 border border-white/5">
                    <div className="text-xl sm:text-2xl font-black font-mono text-gradient">{metric.value}</div>
                    <div className="text-xs font-bold text-white font-mono mt-0.5">{metric.label}</div>
                    <div className="text-[10px] text-emerald-400 font-mono mt-0.5">{metric.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  )
}

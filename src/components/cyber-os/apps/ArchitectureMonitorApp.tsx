import { useState, useEffect } from 'react'
import {
  FaServer,
  FaDatabase,
  FaMemory,
  FaBolt,
  FaCheckCircle,
  FaShieldAlt,
  FaCloud,
} from 'react-icons/fa'
import { TbBrandOpenai } from 'react-icons/tb'

export default function ArchitectureMonitorApp() {
  const [rps, setRps] = useState(342)
  const [activeTasks, setActiveTasks] = useState(18)
  const [cacheHitRate, setCacheHitRate] = useState(94.6)
  const [selectedNode, setSelectedNode] = useState<string | null>('django')

  useEffect(() => {
    const interval = setInterval(() => {
      setRps((prev) => Math.max(280, Math.min(420, Math.floor(prev + (Math.random() * 20 - 10)))))
      setActiveTasks((prev) => Math.max(10, Math.min(32, Math.floor(prev + (Math.random() * 6 - 3)))))
      setCacheHitRate((prev) => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(1))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const architectureNodes = [
    {
      id: 'nginx',
      title: 'Nginx Gateway',
      role: 'Reverse Proxy & SSL Termination',
      metrics: 'Rate limiting • Gzip compression • 99.9% Uptime',
      icon: <FaShieldAlt className="text-emerald-400 text-lg" />,
    },
    {
      id: 'django',
      title: 'Django / FastAPI Core',
      role: 'High-Throughput RESTful APIs',
      metrics: 'p99 latency <180ms (down from 1.2s) • 30+ endpoints',
      icon: <FaServer className="text-purple-400 text-lg" />,
    },
    {
      id: 'celery',
      title: 'Celery Distributed Workers',
      role: 'Async Job & Notification Queue',
      metrics: '40% main-thread latency cut • Automatic retries',
      icon: <FaBolt className="text-amber-400 text-lg" />,
    },
    {
      id: 'redis',
      title: 'Redis In-Memory Cache',
      role: 'Message Broker & Session Store',
      metrics: `${cacheHitRate}% Cache Hit Ratio • Sub-millisecond reads`,
      icon: <FaMemory className="text-rose-400 text-lg" />,
    },
    {
      id: 'postgres',
      title: 'PostgreSQL Database',
      role: 'Relational Primary + Indexing',
      metrics: '45% query speedup via B-Tree composite indexes',
      icon: <FaDatabase className="text-blue-400 text-lg" />,
    },
    {
      id: 'cloud',
      title: 'AWS Infrastructure',
      role: 'EC2, S3 Media Storage & IAM',
      metrics: 'AWS SAA-C03 Certified • Presigned upload URLs',
      icon: <FaCloud className="text-cyan-400 text-lg" />,
    },
    {
      id: 'ai',
      title: 'LangGraph & AI Agents',
      role: 'Multi-Agent RAG Orchestration',
      metrics: 'OpenAI Embeddings • pgvector • MCP tool servers',
      icon: <TbBrandOpenai className="text-pink-400 text-lg" />,
    },
  ]

  return (
    <div className="flex flex-col h-full gap-4">
      {/* Top Telemetry KPI Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">p99 Latency</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-emerald-400 mt-1 flex items-baseline gap-1">
            <span>&lt;180ms</span>
            <span className="text-[10px] text-zinc-500 font-normal line-through">1,200ms</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-0.5">85% latency reduction</div>
        </div>

        <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Async Offload</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-amber-400 mt-1 flex items-baseline gap-1">
            <span>-40%</span>
            <span className="text-[10px] text-zinc-400 font-normal">Thread Load</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-0.5">Celery & Redis workers</div>
        </div>

        <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Production SLA</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-purple-400 mt-1 flex items-baseline gap-1">
            <span>99.9%</span>
            <span className="text-[10px] text-zinc-400 font-normal">Uptime</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-0.5">AWS EC2, S3, Docker</div>
        </div>

        <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02]">
          <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">Simulated Traffic</div>
          <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400 mt-1 flex items-baseline gap-1">
            <span>{rps}</span>
            <span className="text-[10px] text-zinc-400 font-normal">req/s</span>
          </div>
          <div className="text-[10px] text-zinc-500 mt-0.5">{activeTasks} async tasks active</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto rounded-xl border border-white/10 bg-black/40 p-4 sm:p-6 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-mono font-bold text-zinc-200 uppercase tracking-wider flex items-center gap-2">
              <FaServer className="text-purple-400" />
              <span>Interactive Microservice Topology</span>
            </h3>
            <span className="text-[11px] font-mono text-zinc-500">Click a node to inspect</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {architectureNodes.map((node) => {
              const isSelected = selectedNode === node.id
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all relative overflow-hidden ${
                    isSelected
                      ? 'border-purple-500/60 bg-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,0.25)]'
                      : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">{node.icon}</div>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      HEALTHY
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white">{node.title}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">{node.role}</div>
                  <div className="text-[10px] font-mono text-purple-300/80 mt-2 pt-2 border-t border-white/5">
                    {node.metrics}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Node Deep Dive */}
        {selectedNode && (
          <div className="p-4 rounded-xl border border-purple-500/20 bg-purple-500/[0.03]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-300 uppercase tracking-wider mb-2">
              <FaCheckCircle className="text-emerald-400" />
              <span>Architectural Implementation Note: {architectureNodes.find((n) => n.id === selectedNode)?.title}</span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Designed and maintained by Sammed Patil across high-throughput production deployments at AimedAt Solutions and KMA Labs. Configured with automated health checks, non-blocking asynchronous event handling, and resilient fallbacks under peak loads.
            </p>
          </div>
        )}

        {/* Live System Diagnostics */}
        <div className="rounded-xl border border-white/10 bg-black/60 p-4 font-mono text-xs space-y-2">
          <div className="text-[11px] text-zinc-500 font-bold uppercase tracking-wider pb-1 border-b border-white/10">
            Live Diagnostics Log
          </div>
          <div className="text-zinc-400 flex items-center justify-between">
            <span>[SYS] AWS Region</span>
            <span className="text-purple-400 font-bold">ap-south-1 (Mumbai / Bangalore)</span>
          </div>
          <div className="text-zinc-400 flex items-center justify-between">
            <span>[ORM] PostgreSQL Query Planner</span>
            <span className="text-emerald-400 font-bold">INDEX SCAN (Cost &lt; 0.42)</span>
          </div>
          <div className="text-zinc-400 flex items-center justify-between">
            <span>[QUEUE] Celery Concurrency</span>
            <span className="text-amber-400 font-bold">8 Prefetch Workers Active</span>
          </div>
          <div className="text-zinc-400 flex items-center justify-between">
            <span>[CACHE] Redis Hit Ratio</span>
            <span className="text-cyan-400 font-bold">{cacheHitRate}% Verified</span>
          </div>
          <div className="text-zinc-400 flex items-center justify-between">
            <span>[SECURITY] JWT & RBAC Engine</span>
            <span className="text-emerald-400 font-bold">Enforced (HS256 / RS256)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

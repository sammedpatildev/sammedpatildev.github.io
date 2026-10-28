import { useState } from 'react'
import Tilt3DCard from './Tilt3DCard'

interface SimulationScenario {
  id: string
  title: string
  badge: string
  command: string
  status: string
  latency: string
  output: string[]
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'rag',
    title: 'RAG Pipeline Query',
    badge: 'AI & OpenAI API',
    command: 'sammed.rag_pipeline.query("Retrieve medical guidelines for gestational diabetes")',
    status: '200 OK • Vector Similarity 0.96',
    latency: '38ms',
    output: [
      '[VECTORIZE] Generated OpenAI text-embedding-3-small vector (1536 dims).',
      '[RETRIEVE] Searched vector database index using HNSW cosine metric; found 4 chunks.',
      '[RERANK] Applied cross-encoder reranking to prioritize clinical nutritional protocols.',
      '[INFERENCE] Injected context into LLM; streamed verified medical response with 0 hallucination.',
    ],
  },
  {
    id: 'celery',
    title: 'Celery Distributed Queue',
    badge: 'Async Microservices',
    command: 'mhealth.tasks.dispatch_diet_schedule.delay(patient_id="MH-8921", async_sms=True)',
    status: 'Task Dispatched • Worker ACK',
    latency: '7ms',
    output: [
      '[REDIS] Enqueued task ID d482-99a1 to queue: "high_priority_reminders"...',
      '[WORKER-03] Celery worker claimed task with concurrency prefetch multiplier=4.',
      '[ALGORITHM] Executed personalized dynamic diet recommendation algorithm in 18ms.',
      '[NOTIFICATION] Automated SMS reminder dispatched via Twilio webhook; logged to PostgreSQL.',
    ],
  },
  {
    id: 'query_opt',
    title: 'PostgreSQL p99 Optimization',
    badge: 'Database Performance',
    command: 'EXPLAIN ANALYZE SELECT * FROM roninfc_tournaments JOIN athlete_bouts USING (id)',
    status: 'Execution: 12ms (Was 1,240ms)',
    latency: '<180ms p99',
    output: [
      '[BEFORE] Full sequential scan on 500K+ records with nested loop: 1,240ms latency.',
      '[INDEXING] Created composite B-Tree index on (event_id, athlete_id, status).',
      '[ORM REFACTOR] Rewrote Django queryset with select_related() & prefetch_related().',
      '[BENCHMARK] Dropped p99 response times from 1.2s to <180ms across high-traffic endpoints.',
    ],
  },
  {
    id: 'agent',
    title: 'LangGraph & MCP Agent',
    badge: 'Autonomous AI Agent',
    command: 'langgraph_agent.invoke("Analyze tournament registration roster and flag fee discrepancies")',
    status: 'Multi-Step Goal Achieved',
    latency: '94ms',
    output: [
      '[GRAPH NODE 1] Agent invoked MCP SQL tool: inspected RoninFC active athlete roster.',
      '[GRAPH NODE 2] Queried Razorpay webhook reconciliation ledger: detected 2 pending transactions.',
      '[GRAPH NODE 3] Agent executed automated notification tool alerting tournament coordinator.',
      '[STATE] Checkpoint saved in Redis; LangSmith execution trace verified successfully.',
    ],
  },
]

export default function InteractiveConsole3D() {
  const [activeScenario, setActiveScenario] = useState<SimulationScenario>(SCENARIOS[0])
  const [isRunning, setIsRunning] = useState(false)
  const [displayedLogs, setDisplayedLogs] = useState<string[]>(SCENARIOS[0].output)

  const handleSelectScenario = (scenario: SimulationScenario) => {
    setActiveScenario(scenario)
    setIsRunning(true)
    setDisplayedLogs([])

    scenario.output.forEach((line, index) => {
      setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, line])
        if (index === scenario.output.length - 1) {
          setIsRunning(false)
        }
      }, (index + 1) * 160)
    })
  }

  return (
    <div className="w-full my-12">
      <Tilt3DCard
        maxTilt={6}
        scale={1.01}
        glareColor="rgba(56, 189, 248, 0.2)"
        className="rounded-3xl overflow-hidden border border-white/10 bg-[#0d0e14]/95 backdrop-blur-2xl shadow-2xl"
      >
        {/* Terminal Title Bar */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="font-mono text-xs text-zinc-400 pl-2 border-l border-white/10 hidden sm:inline">
              sammed@production-cluster: ~ /benchmarks
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              SLA: 99.9% UPTIME
            </span>
            <span className="text-zinc-500 hidden sm:inline">|</span>
            <span className="text-cyan-400 hidden sm:inline">AWS EC2 • DOCKER • CELERY</span>
          </div>
        </div>

        {/* Interactive Scenario Buttons */}
        <div className="p-4 sm:p-6 border-b border-white/5 bg-white/[0.01]">
          <div className="text-xs font-mono text-zinc-400 mb-3 flex items-center justify-between">
            <span>DISPATCH LIVE ARCHITECTURAL BENCHMARK:</span>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">Click scenario to execute simulated pipeline</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {SCENARIOS.map((sc) => {
              const isSelected = activeScenario.id === sc.id
              return (
                <button
                  key={sc.id}
                  onClick={() => handleSelectScenario(sc)}
                  className={`text-left p-3.5 rounded-2xl border transition-all font-mono text-xs ${
                    isSelected
                      ? 'bg-purple-950/40 border-purple-400/80 text-white shadow-[0_0_15px_rgba(167,139,250,0.25)]'
                      : 'bg-zinc-900/50 border-white/5 text-zinc-400 hover:text-zinc-200 hover:border-white/20 hover:bg-zinc-800/40'
                  }`}
                >
                  <div className="text-[10px] text-cyan-400 font-semibold mb-1">{sc.badge}</div>
                  <div className="font-bold text-zinc-200 truncate">{sc.title}</div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-6 font-mono text-xs sm:text-sm leading-relaxed space-y-4 min-h-[250px] max-h-[350px] overflow-y-auto">
          <div className="flex items-start gap-2 text-purple-300">
            <span className="text-emerald-400 select-none font-bold">❯</span>
            <span className="font-semibold text-white break-all">{activeScenario.command}</span>
          </div>

          <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-white/10 text-xs">
            <span className="text-emerald-400 font-semibold">{activeScenario.status}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-cyan-400 font-semibold">Latency: {activeScenario.latency}</span>
            {isRunning && (
              <>
                <span className="text-zinc-600">•</span>
                <span className="text-amber-400 animate-pulse">Processing trace...</span>
              </>
            )}
          </div>

          <div className="space-y-2 pt-2 border-t border-white/5">
            {displayedLogs.map((log, i) => (
              <div key={i} className="flex items-start gap-2 text-zinc-300">
                <span className="text-cyan-500 select-none">→</span>
                <span className="text-zinc-300">{log}</span>
              </div>
            ))}
            {isRunning && (
              <div className="inline-block w-2 h-4 bg-purple-400 animate-pulse ml-4" />
            )}
          </div>
        </div>

        <div className="px-6 py-3 bg-black/40 border-t border-white/5 flex flex-wrap items-center justify-between text-[11px] font-mono text-zinc-500">
          <div>Interactive WebGL & 3D Simulation Console</div>
          <div>Sammed Patil • Senior Python / Backend Engineer</div>
        </div>
      </Tilt3DCard>
    </div>
  )
}

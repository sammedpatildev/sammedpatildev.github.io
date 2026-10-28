import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import InteractiveConsole3D from './3d/InteractiveConsole3D'
import { FaRobot, FaBrain, FaSearch, FaCogs, FaBolt } from 'react-icons/fa'

const cards = [
  {
    title: 'Autonomous AI Agents',
    icon: <FaRobot className="w-8 h-8" />,
    desc: 'Building stateful, multi-actor autonomous agents using LangGraph and LangChain. Implemented tool-calling capabilities, self-correcting loops, and state persistence in Redis.',
    color: '#a78bfa',
    badge: 'LangGraph Certified',
  },
  {
    title: 'RAG Pipeline Architecture',
    icon: <FaSearch className="w-8 h-8" />,
    desc: 'Engineering production Retrieval-Augmented Generation (RAG) with vector databases (Pinecone, Chroma), hybrid search, semantic chunking, and cross-encoder reranking to ensure 0% hallucination.',
    color: '#38bdf8',
    badge: 'Vector Search',
  },
  {
    title: 'Model Context Protocol (MCP)',
    icon: <FaCogs className="w-8 h-8" />,
    desc: 'Leveraging open standard Model Context Protocol (MCP) servers and clients to connect LLM agent workflows seamlessly with internal databases, APIs, and microservices.',
    color: '#34d399',
    badge: 'Standard Protocol',
  },
  {
    title: 'n8n Workflow Automation',
    icon: <FaBolt className="w-8 h-8" />,
    desc: 'Orchestrating complex multi-step automated workflows with n8n and Python webhooks, connecting backend APIs with LLM processing queues for event-driven automation.',
    color: '#f59e0b',
    badge: 'Workflow Queues',
  },
  {
    title: 'Intelligent Serving APIs',
    icon: <FaBrain className="w-8 h-8" />,
    desc: 'Creating high-throughput, asynchronous inference APIs using FastAPI and Pydantic/Instructor for strict JSON schema output validation and real-time streaming.',
    color: '#f472b6',
    badge: 'FastAPI Serving',
  },
]

export default function AIInnovation() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Agentic Architecture" />
        <SectionTitle highlight="Automation">Generative AI &</SectionTitle>

        {/* 3D Interactive Telemetry & Console Playground */}
        <InteractiveConsole3D />

        {/* 3D Tilt Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cards.map((card, idx) => (
            <Tilt3DCard
              key={card.title}
              maxTilt={8}
              glareColor={`${card.color}25`}
              className="rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group h-full bg-[#111219]/90 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden backdrop-blur-xl flex flex-col justify-between"
                style={{ borderColor: `${card.color}25` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg"
                      style={{ background: `${card.color}15`, color: card.color }}
                    >
                      {card.icon}
                    </div>
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                      style={{
                        background: `${card.color}10`,
                        borderColor: `${card.color}30`,
                        color: card.color,
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-3 text-white font-mono">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

const cards = [
  {
    title: 'AI Agents',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    desc: 'Building intelligent autonomous agents using LangChain, LangGraph, and CrewAI for multi-step task orchestration and tool-using capabilities.',
    color: '#a78bfa',
  },
  {
    title: 'LLM Applications',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    desc: 'Integrating OpenAI, Anthropic Claude, and local LLMs for document analysis, content generation, and intelligent decision-making systems.',
    color: '#38bdf8',
  },
  {
    title: 'RAG Systems',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    desc: 'Implementing retrieval-augmented generation with hybrid search, chunking strategies, vector databases (Pinecone, Weaviate), and reranking.',
    color: '#34d399',
  },
  {
    title: 'Workflow Automation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    desc: 'Building intelligent automation with n8n, connecting AI models with external services for resume generation, job search, and content workflows.',
    color: '#f59e0b',
  },
  {
    title: 'Intelligent APIs',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    desc: 'Creating AI-powered API endpoints with FastAPI, integrating LLM inference, structured output validation, and scalable serving with monitoring.',
    color: '#f472b6',
  },
]

export default function AIInnovation() {
  return (
    <section id="ai" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Innovation" />
        <SectionTitle highlight="Automation">AI &</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-8 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              style={{ borderColor: `${card.color}1a` }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${card.color}, transparent)` }}
              />
              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${card.color}1a`, color: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                <p className="text-sm text-[#a1a1aa] leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

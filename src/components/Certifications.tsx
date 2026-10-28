import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaAws, FaRobot, FaBrain, FaCheckCircle } from 'react-icons/fa'

const certs = [
  {
    title: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
    issuer: 'Amazon Web Services',
    year: 'Official Certification',
    badge: 'AWS SAA-C03',
    icon: <FaAws className="text-3xl text-amber-400" />,
    color: '#f59e0b',
    description: 'Validates comprehensive expertise in designing resilient, high-performing, secure, and cost-optimized distributed systems on AWS.',
  },
  {
    title: 'AWS Certified Cloud Practitioner (CLF-C02)',
    issuer: 'Amazon Web Services',
    year: 'Official Certification',
    badge: 'AWS CLF-C02',
    icon: <FaAws className="text-3xl text-amber-400" />,
    color: '#f59e0b',
    description: 'Demonstrates foundational cloud fluency and mastery of core AWS security, compute, storage, networking, and governance concepts.',
  },
  {
    title: 'Building AI Agents & Chatbots with LangGraph',
    issuer: 'LangChain / Industry Certification',
    year: 'Advanced AI',
    badge: 'LangGraph Certified',
    icon: <FaRobot className="text-3xl text-purple-400" />,
    color: '#a78bfa',
    description: 'Specialized in stateful multi-actor agent orchestration, cyclic graphs, human-in-the-loop workflows, and tool calling with LLMs.',
  },
  {
    title: 'Prompt Engineering for Generative AI',
    issuer: 'Industry Certification',
    year: 'GenAI / LLMs',
    badge: 'Prompt Engineering',
    icon: <FaBrain className="text-3xl text-cyan-400" />,
    color: '#38bdf8',
    description: 'Mastery of advanced contextual prompting, zero/few-shot reasoning, chain-of-thought, and structured JSON outputs with OpenAI & Claude.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Verified Credentials" />
        <SectionTitle highlight="Credentials">Certifications &</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {certs.map((cert, idx) => (
            <Tilt3DCard
              key={cert.title}
              maxTilt={6}
              glareColor={`${cert.color}25`}
              className="rounded-3xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group h-full bg-[#111219]/90 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between"
                style={{ borderColor: `${cert.color}25` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      style={{ background: `${cert.color}15` }}
                    >
                      {cert.icon}
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                      style={{
                        background: `${cert.color}10`,
                        borderColor: `${cert.color}30`,
                        color: cert.color,
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 leading-snug">{cert.title}</h3>
                  <div className="text-xs font-mono text-zinc-400 mb-4">{cert.issuer}</div>
                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">{cert.year}</span>
                  <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-400">
                    <FaCheckCircle className="text-emerald-400" /> Verified Credential
                  </span>
                </div>
              </motion.div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

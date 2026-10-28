import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import SkillsSphere3D from './3d/SkillsSphere3D'
import Tilt3DCard from './3d/Tilt3DCard'
import {
  SiPython, SiDjango, SiFastapi, SiPostgresql, SiMysql, SiSqlite,
  SiDocker, SiLinux, SiNginx, SiGunicorn, SiGit, SiDigitalocean,
  SiJavascript, SiSwagger,
} from 'react-icons/si'
import { FaAws, FaRobot, FaBrain, FaCreditCard, FaTasks, FaShieldAlt } from 'react-icons/fa'
import { DiRedis } from 'react-icons/di'
import { TbBrandCSharp, TbBrandOpenai } from 'react-icons/tb'

const categories = [
  {
    title: 'Languages & Core',
    icon: <SiPython className="w-6 h-6" />,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'SQL', icon: SiPostgresql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiSqlite },
    ],
  },
  {
    title: 'Backend Frameworks',
    icon: <SiDjango className="w-6 h-6" />,
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'DRF', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'RESTful APIs', icon: SiFastapi },
      { name: 'System Design', icon: SiDjango },
      { name: 'Microservices', icon: SiDjango },
    ],
  },
  {
    title: 'Distributed Systems & Async',
    icon: <FaTasks className="w-6 h-6" />,
    skills: [
      { name: 'Celery', icon: FaTasks },
      { name: 'Redis', icon: DiRedis },
      { name: 'Task Queues', icon: FaTasks },
      { name: 'Message Brokers', icon: DiRedis },
      { name: 'Webhooks', icon: FaTasks },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <FaAws className="w-6 h-6" />,
    skills: [
      { name: 'AWS (EC2, S3, IAM)', icon: FaAws },
      { name: 'Docker', icon: SiDocker },
      { name: 'GitHub Actions CI/CD', icon: SiGit },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Gunicorn', icon: SiGunicorn },
      { name: 'Linux', icon: SiLinux },
      { name: 'DigitalOcean', icon: SiDigitalocean },
    ],
  },
  {
    title: 'Databases & Security',
    icon: <FaShieldAlt className="w-6 h-6" />,
    skills: [
      { name: 'Schema Design', icon: SiPostgresql },
      { name: 'Query Optimization', icon: SiPostgresql },
      { name: 'JWT', icon: FaShieldAlt },
      { name: 'RBAC', icon: FaShieldAlt },
      { name: 'OTP', icon: FaShieldAlt },
      { name: 'Swagger / OpenAPI', icon: SiSwagger },
    ],
  },
  {
    title: 'AI & Automation',
    icon: <FaBrain className="w-6 h-6" />,
    skills: [
      { name: 'Generative AI', icon: FaBrain },
      { name: 'OpenAI API', icon: TbBrandOpenai },
      { name: 'RAG', icon: FaRobot },
      { name: 'AI Agents', icon: FaRobot },
      { name: 'LangGraph', icon: TbBrandCSharp },
      { name: 'MCP (Model Context)', icon: FaRobot },
      { name: 'Prompt Engineering', icon: FaBrain },
      { name: 'n8n Workflows', icon: FaRobot },
    ],
  },
  {
    title: 'Third-Party Integrations',
    icon: <FaCreditCard className="w-6 h-6" />,
    skills: [
      { name: 'Razorpay Gateway', icon: FaCreditCard },
      { name: 'Payment Gateways', icon: FaCreditCard },
      { name: 'Webhook Handlers', icon: FaTasks },
      { name: 'Third-Party REST APIs', icon: SiFastapi },
    ],
  },
]

export default function Skills() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="3D Interactive Stack" />
        <SectionTitle highlight="Technologies">Verified Skills &</SectionTitle>

        {/* 3D Skills Interactive Globe Sphere */}
        <SkillsSphere3D />

        {/* Dynamic Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden py-6 my-10 border-y border-white/10"
        >
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_28s_linear_infinite]">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-10">
                {[
                  'Python 3.12', 'Django & DRF', 'FastAPI', 'PostgreSQL (p99 <180ms)',
                  'Celery & Redis', 'AWS Cloud Architect', 'LangGraph Agents', 'RAG Pipelines',
                  'Docker Containers', 'Razorpay Webhooks', 'Model Context Protocol (MCP)',
                ].map((item) => (
                  <span key={item} className="text-xl sm:text-2xl font-bold text-zinc-600 hover:text-white transition-colors font-mono">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Categorized Skills Grid with 3D Tilt */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <Tilt3DCard
              key={cat.title}
              maxTilt={8}
              glareColor="rgba(167, 139, 250, 0.15)"
              className="rounded-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group h-full bg-[#111219]/90 border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden backdrop-blur-xl shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-purple-400 group-hover:bg-gradient-custom group-hover:text-zinc-950 transition-all mb-5 shadow-md">
                    {cat.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold mb-4 text-white font-mono">{cat.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs text-zinc-300 group-hover:border-white/20 transition-all font-mono"
                      >
                        <skill.icon className="w-3.5 h-3.5 text-purple-400" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Tilt3DCard>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import {
  SiPython, SiDjango, SiFastapi, SiFlask, SiPostgresql, SiMysql, SiMongodb,
  SiDocker, SiLinux, SiNginx, SiGunicorn, SiReact,
  SiHtml5, SiCss, SiJavascript,
} from 'react-icons/si'
import { FaAws, FaRobot } from 'react-icons/fa'
import { DiRedis } from 'react-icons/di'
import { TbBrandCSharp } from 'react-icons/tb'

const categories = [
  {
    title: 'Backend',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
      { name: 'DRF', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
    ],
  },
  {
    title: 'Database',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/></svg>,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiMysql },
      { name: 'Redis', icon: DiRedis },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>,
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Linux', icon: SiLinux },
      { name: 'Nginx', icon: SiNginx },
      { name: 'Gunicorn', icon: SiGunicorn },
      { name: 'CI/CD', icon: SiDocker },
    ],
  },
  {
    title: 'AI & LLMs',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    skills: [
      { name: 'OpenAI', icon: FaRobot },
      { name: 'LangChain', icon: TbBrandCSharp },
      { name: 'LangGraph', icon: TbBrandCSharp },
      { name: 'RAG', icon: FaRobot },
      { name: 'Prompt Eng', icon: FaRobot },
      { name: 'AI Agents', icon: FaRobot },
      { name: 'n8n', icon: FaRobot },
    ],
  },
  {
    title: 'Frontend',
    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
    skills: [
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Tech Stack" />
        <SectionTitle highlight="Technologies">Skills &</SectionTitle>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overflow-hidden py-8 mb-12 border-y border-[#27272a]"
        >
          <div className="flex gap-10 whitespace-nowrap animate-[marquee_30s_linear_infinite]">
            {[...Array(2)].map((_, idx) => (
              <div key={idx} className="flex gap-10">
                {['Python', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'Redis', 'GenAI', 'RAG', 'FastAPI', 'LangChain', 'AI Agents', 'n8n'].map((item) => (
                  <span key={item} className="text-2xl font-bold text-[#27272a] hover:text-[#fafafa] transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-[#a78bfa4d] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-custom opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#a78bfa1a] rounded-xl flex items-center justify-center text-[#a78bfa] group-hover:bg-gradient-custom group-hover:text-[#09090b] transition-all mb-5">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#09090b] rounded-lg text-xs text-[#a1a1aa] group-hover:bg-[#a78bfa] group-hover:text-[#09090b] transition-all"
                    >
                      <skill.icon className="w-3.5 h-3.5" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
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

import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

const tags = [
  'Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL',
  'Docker', 'AWS', 'REST APIs', 'AI Integration',
  'LLM Applications', 'Automation', 'Problem Solving',
]

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="About Me" />
        <SectionTitle highlight="I Am">Who</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
              Passionate about building{' '}
              <span className="text-[#a78bfa]">scalable systems</span> that make a difference
            </h3>
            <p className="text-[#a1a1aa] leading-relaxed mb-4 text-base sm:text-lg">
              I'm a <strong className="text-[#fafafa]">Python Backend Developer</strong> with{' '}
              <strong className="text-[#fafafa]">4+ years</strong> of hands-on experience designing,
              developing, and deploying production-grade applications. My journey spans healthcare,
              e-commerce, sports management, and cloud infrastructure.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed mb-4 text-base sm:text-lg">
              I specialize in <strong className="text-[#fafafa]">Django, Django REST Framework,
              FastAPI, PostgreSQL, and AWS</strong>. I've delivered 50+ production APIs and served as
              the primary backend owner for multiple platforms. Currently, I'm deeply exploring
              <strong className="text-[#fafafa]"> Generative AI</strong> — building RAG systems,
              AI agents, and intelligent automation.
            </p>
            <p className="text-[#a1a1aa] leading-relaxed text-base sm:text-lg">
              I believe in writing clean, maintainable code and building systems that scale.
              I thrive on solving complex problems and turning requirements into reliable,
              production-ready solutions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-[#18181b] border border-[#27272a] rounded-lg text-sm text-[#a1a1aa] hover:border-[#a78bfa] hover:text-[#fafafa] hover:-translate-y-0.5 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -top-4 -right-4 z-10 items-center gap-2.5 px-4 py-3 bg-[#18181b] border border-white/10 rounded-xl text-sm shadow-2xl"
            >
              <svg className="w-5 h-5 text-[#a78bfa]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              AWS Certified
            </motion.div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="hidden sm:flex absolute -bottom-4 -left-4 z-10 items-center gap-2.5 px-4 py-3 bg-[#18181b] border border-white/10 rounded-xl text-sm shadow-2xl"
            >
              <svg className="w-5 h-5 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              GenAI Explorer
            </motion.div>

            {/* Card */}
            <div className="bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-custom" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-gradient-custom rounded-xl flex items-center justify-center text-xl font-bold text-[#09090b] shrink-0">
                  SP
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sammed Patil</h3>
                  <p className="text-sm text-[#a1a1aa]">Python Backend Engineer</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Experience', value: '4+ Years' },
                  { label: 'Location', value: 'Bangalore, India' },
                  { label: 'Education', value: 'MCA' },
                  { label: 'Focus', value: 'Backend + GenAI' },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-[#09090b] rounded-xl">
                    <div className="text-[10px] text-[#a1a1aa] uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: 'Bangalore', label: 'Location' },
  { value: 'Open', label: 'For Full-Time' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb w-[500px] h-[500px] bg-[#a78bfa] top-[-200px] right-[10%] absolute rounded-full blur-[120px] opacity-40 animate-[float_20s_ease-in-out_infinite]" />
        <div className="orb w-[400px] h-[400px] bg-[#38bdf8] bottom-[-150px] left-[10%] absolute rounded-full blur-[120px] opacity-40 animate-[float_20s_ease-in-out_infinite_-5s]" />
        <div className="orb w-[300px] h-[300px] bg-[#34d399] top-[50%] left-[50%] absolute rounded-full blur-[120px] opacity-30 animate-[float_20s_ease-in-out_infinite_-10s]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(167,139,250,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#a78bfa1a] border border-[#a78bfa33] rounded-full text-sm text-[#a78bfa] font-mono mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse" />
            Python Backend Developer | AI Engineer
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-[-2px] mb-6"
          >
            <span className="block">Sammed Patil</span>
            <span className="block text-gradient">Python Backend</span>
            <span className="block">Developer & AI Engineer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#a1a1aa] leading-relaxed max-w-xl mb-8"
          >
            Building scalable backend systems, AI-powered applications, REST APIs,
            cloud solutions, and intelligent automation using Python.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="/resumes/Python_Backend_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-custom text-[#09090b] rounded-xl font-semibold hover:shadow-[0_20px_40px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent text-[#fafafa] rounded-xl font-semibold border border-[#27272a] hover:border-[#a78bfa] hover:bg-[#a78bfa1a] transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent text-[#fafafa] rounded-xl font-semibold border border-[#27272a] hover:border-[#a78bfa] hover:bg-[#a78bfa1a] transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-8 sm:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="relative">
                {i < stats.length - 1 && (
                  <span className="hidden sm:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-px h-10 bg-[#27272a]" />
                )}
                <div className="text-3xl sm:text-4xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-[#a1a1aa] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Code block visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2"
        >
          <div className="bg-[#18181b] border border-white/5 rounded-2xl p-6 font-mono text-xs leading-relaxed text-[#a1a1aa] w-[380px] rotate-2 shadow-2xl">
            <div><span className="text-[#27272a] select-none">1</span> <span className="text-[#a78bfa]">class</span> <span className="text-[#38bdf8]">SammedPatil</span>:</div>
            <div><span className="text-[#27272a] select-none">2</span> &nbsp;&nbsp;<span className="text-[#a78bfa]">def</span> <span className="text-[#38bdf8]">__init__</span>(self):</div>
            <div><span className="text-[#27272a] select-none">3</span> &nbsp;&nbsp;&nbsp;&nbsp;self.name = <span className="text-[#34d399]">"Sammed Patil"</span></div>
            <div><span className="text-[#27272a] select-none">4</span> &nbsp;&nbsp;&nbsp;&nbsp;self.role = <span className="text-[#34d399]">"Backend Engineer"</span></div>
            <div><span className="text-[#27272a] select-none">5</span> &nbsp;&nbsp;&nbsp;&nbsp;self.location = <span className="text-[#34d399]">"Bangalore"</span></div>
            <div><span className="text-[#27272a] select-none">6</span> &nbsp;&nbsp;&nbsp;&nbsp;self.exp = <span className="text-[#34d399]">"4+ Years"</span></div>
            <div><span className="text-[#27272a] select-none">7</span> &nbsp;&nbsp;&nbsp;&nbsp;self.certs = [<span className="text-[#34d399]">"AWS SAA"</span>, <span className="text-[#34d399]">"AWS CP"</span>]</div>
            <div><span className="text-[#27272a] select-none">8</span></div>
            <div><span className="text-[#27272a] select-none">9</span> &nbsp;&nbsp;<span className="text-[#a78bfa]">def</span> <span className="text-[#38bdf8]">skills</span>(self):</div>
            <div><span className="text-[#27272a] select-none">10</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a78bfa]">return</span> [</div>
            <div><span className="text-[#27272a] select-none">11</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">"Django"</span>, <span className="text-[#34d399]">"DRF"</span>, <span className="text-[#34d399]">"PostgreSQL"</span>,</div>
            <div><span className="text-[#27272a] select-none">12</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">"AWS"</span>, <span className="text-[#34d399]">"Docker"</span>, <span className="text-[#34d399]">"GenAI"</span>,</div>
            <div><span className="text-[#27272a] select-none">13</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">"RAG"</span>, <span className="text-[#34d399]">"AI Agents"</span></div>
            <div><span className="text-[#27272a] select-none">14</span> &nbsp;&nbsp;&nbsp;&nbsp;]</div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 10px) scale(1.02); }
        }
      `}</style>
    </section>
  )
}

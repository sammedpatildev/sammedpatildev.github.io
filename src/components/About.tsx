import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaAws, FaGraduationCap, FaGlobeAsia, FaServer } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Engineering Profile" />
        <SectionTitle highlight="Architecture">Philosophy &</SectionTitle>

        {/* Modern 3D Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12">
          {/* Main Bio Card (Span 7) */}
          <div className="md:col-span-7">
            <Tilt3DCard
              maxTilt={5}
              glareColor="rgba(167, 139, 250, 0.2)"
              className="h-full rounded-3xl"
            >
              <div className="h-full bg-gradient-to-br from-[#13141c]/90 via-[#101118]/80 to-[#0c0d14]/90 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 mb-6">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    SENIOR BACKEND & AI ENGINEER
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-snug">
                    Architecting <span className="text-gradient">high-throughput microservices</span>, async distributed queues, and resilient cloud systems.
                  </h3>

                  <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                    With over <strong className="text-white">4+ years of production experience</strong>, I specialize in designing and scaling mission-critical web architectures using <strong className="text-white">Python, Django, Django REST Framework, FastAPI, PostgreSQL, and AWS</strong>.
                  </p>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4">
                    My engineering work ranges from acting as <strong className="text-zinc-200">Primary Backend Owner</strong> for enterprise sports and health platforms to tuning high-traffic PostgreSQL queries—slashing <strong className="text-emerald-400 font-mono">p99 latency from 1.2s to &lt;180ms</strong> and offloading asynchronous workloads to <strong className="text-cyan-400 font-mono">Celery & Redis</strong>.
                  </p>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    At the frontier, I engineer autonomous <strong className="text-white">AI Agents, LangGraph multi-step workflows, and RAG pipelines</strong> integrating OpenAI and Model Context Protocol (MCP) standards.
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-white/5 font-mono text-xs">
                  {['Distributed Systems', 'PostgreSQL Optimization', 'AWS Cloud Architect', 'Celery & Redis', 'RAG & LangGraph'].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Key Metric & Status Card (Span 5) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* AWS Certified Solutions Architect Card */}
            <Tilt3DCard maxTilt={8} glareColor="rgba(245, 158, 11, 0.2)" className="rounded-3xl">
              <div className="bg-[#12131b]/90 border border-amber-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shadow-lg">
                    <FaAws />
                  </div>
                  <span className="font-mono text-xs text-amber-400 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full">
                    SAA-C03 & CLF-C02
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1">AWS Certified Solutions Architect</h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  EC2 • S3 • IAM • RDS • Lambda • CloudFront • Docker • Nginx • Production 99.9% Uptime
                </p>
              </div>
            </Tilt3DCard>

            {/* Performance Impact Card */}
            <Tilt3DCard maxTilt={8} glareColor="rgba(52, 211, 153, 0.2)" className="rounded-3xl">
              <div className="bg-[#12131b]/90 border border-emerald-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-xl shadow-lg">
                    <FaServer />
                  </div>
                  <span className="font-mono text-xs text-emerald-400 font-bold">OPTIMIZED BENCHMARK</span>
                </div>
                <div className="text-3xl font-extrabold text-white font-mono mb-1">
                  1.2s <span className="text-emerald-400 text-xl">→</span> &lt;180ms
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  p99 query latency reduction via PostgreSQL indexing, ORM optimization, and Celery async queues.
                </p>
              </div>
            </Tilt3DCard>
          </div>

          {/* Education & Academic Foundation (Span 6) */}
          <div className="md:col-span-6">
            <Tilt3DCard maxTilt={6} glareColor="rgba(56, 189, 248, 0.2)" className="h-full rounded-3xl">
              <div className="h-full bg-[#12131b]/90 border border-cyan-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg">
                      <FaGraduationCap />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Education & Degrees</h4>
                      <p className="text-xs text-zinc-400 font-mono">Computer Applications</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-white">Master of Computer Application (MCA)</span>
                        <span className="text-xs font-mono text-cyan-400">10/2021</span>
                      </div>
                      <p className="text-xs text-zinc-400">Sambhram Academy of Management Studies, Bangalore City University</p>
                      <p className="text-[11px] text-zinc-500 font-mono mt-1">Bangalore, Karnataka</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm text-white">Bachelor of Computer Application (BCA)</span>
                        <span className="text-xs font-mono text-cyan-400">05/2019</span>
                      </div>
                      <p className="text-xs text-zinc-400">SJPNTrust's BCA College Nidasoshi, RCU University</p>
                      <p className="text-[11px] text-zinc-500 font-mono mt-1">Belagavi, Karnataka</p>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* Multilingual & Location Card (Span 6) */}
          <div className="md:col-span-6">
            <Tilt3DCard maxTilt={6} glareColor="rgba(167, 139, 250, 0.2)" className="h-full rounded-3xl">
              <div className="h-full bg-[#12131b]/90 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg">
                      <FaGlobeAsia />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Location & Languages</h4>
                      <p className="text-xs text-zinc-400 font-mono">Bangalore, Karnataka, India • Open for Relocation / Remote</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      { lang: 'English', level: 'Professional Working' },
                      { lang: 'Hindi', level: 'Native / Bilingual' },
                      { lang: 'Kannada', level: 'Native / Bilingual' },
                      { lang: 'Marathi', level: 'Fluent' },
                    ].map((item) => (
                      <div key={item.lang} className="p-3.5 rounded-2xl bg-black/40 border border-white/5 font-mono">
                        <div className="font-semibold text-sm text-white">{item.lang}</div>
                        <div className="text-[11px] text-purple-300 mt-0.5">{item.level}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-200 flex items-center justify-between">
                  <span>Primary Timezone: IST (UTC +5:30)</span>
                  <span className="text-emerald-400 font-bold">● Active for Opportunities</span>
                </div>
              </div>
            </Tilt3DCard>
          </div>
        </div>
      </div>
    </section>
  )
}

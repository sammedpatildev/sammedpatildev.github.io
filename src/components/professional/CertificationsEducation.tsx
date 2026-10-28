import { FaAward, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaGlobe, FaCheck } from 'react-icons/fa'

export default function ProfessionalCertificationsEducation() {
  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            05. Certifications & Education
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 font-mono">
              <FaAward className="text-amber-400" />
              <span>Certificates & Credentials</span>
            </h3>

            {/* AWS SAA-C03 */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  AWS CLOUD CERTIFICATION
                </span>
                <span className="text-xs font-mono text-zinc-400">SAA-C03</span>
              </div>
              <h4 className="text-base font-bold text-white">
                AWS Certified Solutions Architect Associate (SAA-C03)
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Validation of cloud system architecture, high availability, decoupling with message queues, secure IAM, and cost-effective distributed systems design on AWS.
              </p>
            </div>

            {/* AWS CLF-C02 */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                  AWS CLOUD CERTIFICATION
                </span>
                <span className="text-xs font-mono text-zinc-400">CLF-C02</span>
              </div>
              <h4 className="text-base font-bold text-white">
                AWS Certified Cloud Practitioner (CLF-C02)
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Foundational verification of AWS cloud infrastructure, security compliance, shared responsibility, and architectural best practices.
              </p>
            </div>

            {/* Building AI Agents & Chatbots with LangGraph */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  AI & AGENT ENGINEERING
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                Building AI Agents & Chatbots with LangGraph
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Stateful multi-agent workflows, branching state machines, human-in-the-loop, tool calling, and autonomous decision pipelines with LangGraph and Python.
              </p>
            </div>

            {/* Prompt Engineering for Generative AI */}
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                  GENERATIVE AI
                </span>
              </div>
              <h4 className="text-base font-bold text-white">
                Prompt Engineering for Generative AI
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Techniques in structured output generation, few-shot prompting, schema-constrained LLM inference, and RAG context optimization.
              </p>
            </div>
          </div>

          {/* Right Column: Education & Languages */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 font-mono">
                <FaGraduationCap className="text-cyan-400" />
                <span>Education</span>
              </h3>

              {/* MCA */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    POSTGRADUATE DEGREE
                  </span>
                  <span className="text-xs font-mono text-zinc-400">10/2021</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Master Of Computer Application (MCA)
                </h4>
                <div className="text-xs text-zinc-300">
                  Sambhram Academy of Management Studies, Bangalore City University
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt /> Completed: October 2021
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt /> Bangalore
                  </span>
                </div>
              </div>

              {/* BCA */}
              <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
                    UNDERGRADUATE DEGREE
                  </span>
                  <span className="text-xs font-mono text-zinc-400">05/2019</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Bachelor Of Computer Application (BCA)
                </h4>
                <div className="text-xs text-zinc-300">
                  SJPNTrust's BCA College Nidasoshi, RCU University
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 pt-1">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt /> Completed: May 2019
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaMapMarkerAlt /> Belagavi
                  </span>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800 space-y-3">
              <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                <FaGlobe className="text-emerald-400" />
                <span>Languages</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {['English', 'Kannada', 'Hindi', 'Marathi'].map((lang) => (
                  <div
                    key={lang}
                    className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200 text-center flex items-center justify-center gap-1.5"
                  >
                    <FaCheck className="text-emerald-400 text-[10px]" />
                    <span>{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

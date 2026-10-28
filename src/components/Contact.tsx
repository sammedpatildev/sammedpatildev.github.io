import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'

const methods = [
  {
    label: 'Email',
    value: 'patilsammed022@gmail.com',
    href: 'mailto:patilsammed022@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sammed-patil-dev',
    href: 'https://linkedin.com/in/sammed-patil-dev',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/sammedp-aat',
    href: 'https://github.com/sammedp-aat',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 8217030162 / +91 8296257820',
    href: 'tel:+918217030162',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Bangalore, Karnataka, India (Open to Relocation / Remote)',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Connect" />
        <SectionTitle highlight="Touch">Get In</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-12">
          {/* Left - Contact Info in 3D Card */}
          <Tilt3DCard maxTilt={5} glareColor="rgba(167, 139, 250, 0.2)" className="h-full rounded-3xl">
            <div className="h-full bg-[#111219]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  Let's engineer something <span className="text-gradient">extraordinary</span> together.
                </h3>
                <p className="text-[#a1a1aa] leading-relaxed mb-8 text-sm sm:text-base">
                  I'm actively interviewing for <strong className="text-white">Senior Python / Backend Engineer</strong> and <strong className="text-white">AI Engineer</strong> positions. Whether you are scaling distributed cloud services, architecting microservices, or building agentic AI pipelines, let's talk.
                </p>

                <div className="flex flex-col gap-3">
                  {methods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-black/40 border border-white/5 rounded-2xl hover:border-[#a78bfa] hover:translate-x-1 transition-all group"
                    >
                      <div className="w-11 h-11 bg-[#a78bfa1a] rounded-xl flex items-center justify-center text-[#a78bfa] shrink-0 group-hover:scale-110 transition-transform">
                        {method.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider mb-0.5">{method.label}</div>
                        <div className="text-sm font-medium text-white truncate font-mono">{method.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Response Time: &lt; 12 Hours</span>
                <span className="text-emerald-400 font-bold">● Fast Response</span>
              </div>
            </div>
          </Tilt3DCard>

          {/* Right - Contact Form in 3D Card */}
          <Tilt3DCard maxTilt={5} glareColor="rgba(56, 189, 248, 0.2)" className="h-full rounded-3xl">
            <div className="h-full bg-[#111219]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              <h4 className="text-lg font-bold text-white mb-2 font-mono">Direct Transmission</h4>
              <p className="text-xs text-zinc-400 font-mono mb-6">Send an instant dispatch directly to my inbox.</p>

              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const data = new FormData(form)
                  window.location.href = `mailto:patilsammed022@gmail.com?subject=Opportunity via Portfolio - ${data.get('name')}&body=${encodeURIComponent(
                    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`
                  )}`
                }}
              >
                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Engineering Leader / Recruiter"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-2">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="recruiter@company.com"
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-[#a1a1aa] mb-2">Project / Opportunity Details</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Discussing senior backend, microservices, or AI role requirements..."
                    className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all resize-none font-mono text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-custom text-zinc-950 font-mono font-bold rounded-xl hover:shadow-[0_20px_40px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer text-sm"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  Send Transmission
                </button>
              </form>
            </div>
          </Tilt3DCard>
        </div>
      </div>
    </section>
  )
}

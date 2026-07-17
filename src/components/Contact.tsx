import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

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
    value: 'linkedin.com/in/sammed-patil-68517515a',
    href: 'https://linkedin.com/in/sammed-patil-68517515a',
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
    value: 'Bangalore, India',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Bangalore, India (Open to Relocation / Remote)',
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
    <section id="contact" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Contact" />
        <SectionTitle highlight="Touch">Get In</SectionTitle>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
              Let's build something <span className="text-gradient">amazing</span> together
            </h3>
            <p className="text-[#a1a1aa] leading-relaxed mb-8 text-base">
              I'm currently open to full-time opportunities as a Python Backend Developer or AI Engineer.
              Whether you have a role that matches my skills or just want to connect, feel free to reach out.
            </p>

            <div className="flex flex-col gap-3">
              {methods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#18181b] border border-white/5 rounded-xl hover:border-[#a78bfa] hover:translate-x-1 transition-all group"
                >
                  <div className="w-11 h-11 bg-[#a78bfa1a] rounded-lg flex items-center justify-center text-[#a78bfa] shrink-0">
                    {method.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[#a1a1aa] mb-0.5">{method.label}</div>
                    <div className="text-sm font-medium truncate">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form
              className="bg-[#18181b] border border-white/5 rounded-2xl p-6 sm:p-8"
              action="https://formspree.io/f/your-form-id"
              method="POST"
            >
              <div className="mb-5">
                <label className="block text-sm text-[#a1a1aa] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-[#09090b] border border-[#27272a] rounded-xl text-[#fafafa] placeholder:text-[#52525b] focus:outline-none focus:border-[#a78bfa] focus:shadow-[0_0_0_3px_rgba(167,139,250,0.1)] transition-all font-sans"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm text-[#a1a1aa] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-[#09090b] border border-[#27272a] rounded-xl text-[#fafafa] placeholder:text-[#52525b] focus:outline-none focus:border-[#a78bfa] focus:shadow-[0_0_0_3px_rgba(167,139,250,0.1)] transition-all font-sans"
                />
              </div>
              <div className="mb-5">
                <label className="block text-sm text-[#a1a1aa] mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity..."
                  className="w-full px-4 py-3 bg-[#09090b] border border-[#27272a] rounded-xl text-[#fafafa] placeholder:text-[#52525b] focus:outline-none focus:border-[#a78bfa] focus:shadow-[0_0_0_3px_rgba(167,139,250,0.1)] transition-all resize-none font-sans"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-custom text-[#09090b] rounded-xl font-semibold hover:shadow-[0_20px_40px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

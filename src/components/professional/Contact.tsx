import { useState } from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from 'react-icons/fa'

export default function ProfessionalContact() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setSent(true)

    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} regarding Senior Backend / AI Role`
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    setTimeout(() => {
      window.location.href = `mailto:patilsammed022@gmail.com?subject=${subject}&body=${body}`
    }, 600)
  }

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">07. Direct Contact</span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Coordinates (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Get In Touch
              </h2>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                I am actively considering Senior Python, Backend, and AI Engineering roles. Whether you have an open position, an architecture problem, or an engineering inquiry, feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-zinc-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email Address</div>
                    <div className="text-sm font-bold text-white select-all">patilsammed022@gmail.com</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('patilsammed022@gmail.com', 'email')}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-zinc-800 text-emerald-400">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Phone / WhatsApp</div>
                    <div className="text-sm font-bold text-white select-all">+91 8296257820</div>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy('+918296257820', 'phone')}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-800 text-rose-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Location</div>
                  <div className="text-sm font-bold text-white">Bangalore, Karnataka, India</div>
                  <div className="text-xs text-zinc-400">Open to On-site, Hybrid, and Remote</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/sammed-patil-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all flex items-center justify-center gap-2 text-xs font-mono font-semibold text-zinc-200 hover:text-white"
              >
                <FaLinkedin className="text-blue-400 text-base" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/sammedp-aat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80 transition-all flex items-center justify-center gap-2 text-xs font-mono font-semibold text-zinc-200 hover:text-white"
              >
                <FaGithub className="text-base" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Message Form (Span 7) */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 sm:p-8">
            <h3 className="text-base font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill in your details below to dispatch an inquiry directly to my inbox.
            </p>

            {sent ? (
              <div className="p-8 text-center bg-zinc-900/60 border border-emerald-500/30 rounded-xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl mx-auto">
                  <FaCheck />
                </div>
                <h4 className="text-base font-bold text-white">Inquiry Prepared</h4>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Opening your default mail client to dispatch your message to <strong>patilsammed022@gmail.com</strong>...
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Your Name / Organization <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Hiring Manager / Tech Lead"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Senior Backend Engineer Opportunity"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Sammed, we are looking for a Senior Python / Backend Engineer..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold font-mono text-xs sm:text-sm transition-all cursor-pointer shadow-sm"
                >
                  <FaPaperPlane className="text-xs text-zinc-700" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

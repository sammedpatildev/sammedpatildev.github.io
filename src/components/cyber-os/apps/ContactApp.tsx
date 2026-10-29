import { useState } from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
} from 'react-icons/fa'

export default function ContactApp() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSent, setIsSent] = useState(false)

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return
    setIsSent(true)
    setTimeout(() => {
      window.location.href = `mailto:patilsammed022@gmail.com?subject=Transmission from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`
    }, 800)
  }

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 overflow-y-auto">
        {/* Left Column: Direct Coordinates */}
        <div className="space-y-3">
          <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-3">
            <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider">
              Direct Contact Lines
            </div>

            {/* Email Card */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-mono">Email Address</div>
                  <div className="text-xs font-bold text-white select-all">patilsammed022@gmail.com</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('patilsammed022@gmail.com', 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-mono">Mobile / WhatsApp</div>
                  <div className="text-xs font-bold text-white select-all">+91 8217030162</div>
                  <div className="text-[10px] text-zinc-400">+91 8296257820</div>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard('+918217030162', 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-3 rounded-lg bg-black/40 border border-white/5 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-500/10 text-rose-400">
                <FaMapMarkerAlt />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase font-mono">Base of Operations</div>
                <div className="text-xs font-bold text-white">Bangalore, Karnataka, India</div>
                <div className="text-[10px] text-purple-400 font-mono">Open to On-site / Hybrid / Remote</div>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://linkedin.com/in/sammed-patil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] flex items-center gap-2.5 transition-all text-xs font-bold text-zinc-200 hover:text-white"
            >
              <FaLinkedin className="text-blue-400 text-base" />
              <div className="truncate">
                <div>LinkedIn</div>
                <div className="text-[10px] text-zinc-500 font-normal">sammed-patil-dev</div>
              </div>
            </a>
            <a
              href="https://github.com/sammedpatildev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] flex items-center gap-2.5 transition-all text-xs font-bold text-zinc-200 hover:text-white"
            >
              <FaGithub className="text-zinc-200 text-base" />
              <div className="truncate">
                <div>GitHub</div>
                <div className="text-[10px] text-zinc-500 font-normal">sammedpatildev</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col">
          <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
            Direct Transmission Console
          </div>

          {isSent ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-3 bg-black/40 rounded-xl border border-emerald-500/20">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl animate-bounce">
                <FaCheck />
              </div>
              <div className="text-sm font-bold text-white">Transmission Initiated</div>
              <div className="text-xs text-zinc-400">Opening your default mail client to dispatch to patilsammed022@gmail.com...</div>
            </div>
          ) : (
            <form onSubmit={handleSend} className="space-y-3 flex-1 flex flex-col">
              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Name / Organization</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Hiring Manager / Tech Lead"
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Your Contact Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex-1 flex flex-col">
                <label className="block text-[11px] font-mono text-zinc-400 mb-1">Message / Project Inquiry</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Sammed, we are looking for a Senior Python / Backend Engineer..."
                  className="w-full flex-1 px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-600/30"
              >
                <FaPaperPlane className="text-xs" />
                <span>Transmit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function ProfessionalFooter() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-black text-zinc-400 text-xs font-mono">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div>
            <div className="font-bold text-white text-sm">Sammed Patil</div>
            <div className="text-zinc-500 text-[11px] mt-0.5">Senior Python / Backend & AI Engineer</div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/sammedp-aat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sammed-patil-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:patilsammed022@gmail.com"
              className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-[10px]" />
          </button>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-600 text-[11px]">
          <div>
            © {new Date().getFullYear()} Sammed Patil. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Bangalore, IN: <strong className="text-zinc-400">{currentTime} IST</strong></span>
            <span>•</span>
            <span>Python • Django • FastAPI • AWS</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

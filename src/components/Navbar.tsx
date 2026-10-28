import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFileDownload, FaCommentDots, FaTerminal } from 'react-icons/fa'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI & RAG', href: '#ai' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

interface NavbarProps {
  onSwitchToOS?: () => void
}

export default function Navbar({ onSwitchToOS }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navItems.map((i) => i.href.slice(1))
    const onScroll = () => {
      let current = ''
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 180) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-12 pt-4 transition-all duration-300"
    >
      <div
        className={`max-w-7xl mx-auto px-5 sm:px-7 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0b0c13]/90 backdrop-blur-2xl border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.5)]'
            : 'bg-[#101118]/70 backdrop-blur-xl border border-white/5'
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-custom flex items-center justify-center font-bold text-zinc-950 font-mono text-sm shadow-md group-hover:scale-105 transition-transform">
            SP
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-base text-white tracking-tight font-sans">
              Sammed Patil
            </span>
            <span className="text-[10px] font-mono text-purple-400 -mt-1 hidden sm:block">
              Senior Backend & AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-black/40 px-2 py-1.5 rounded-xl border border-white/5 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = active === item.href.slice(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-bold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onSwitchToOS && (
            <button
              onClick={onSwitchToOS}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white text-xs font-mono font-semibold transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)] cursor-pointer"
              title="Switch to 3D Cyber OS Desktop"
            >
              <FaTerminal className="text-purple-400 text-xs" />
              <span className="hidden sm:inline">Cyber OS</span>
            </button>
          )}

          <a
            href="/resumes/Python_Backend_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all"
          >
            <FaFileDownload className="text-purple-400" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-custom text-zinc-950 rounded-xl font-bold font-mono text-xs hover:shadow-[0_10px_25px_rgba(167,139,250,0.3)] hover:-translate-y-0.5 transition-all shadow-md"
          >
            <FaCommentDots />
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg bg-white/5 text-white"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-white block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-5 h-0.5 bg-white block"
            />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-2 max-w-7xl mx-auto bg-[#0d0e14]/95 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1 font-mono text-xs">
              {onSwitchToOS && (
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    onSwitchToOS()
                  }}
                  className="w-full text-left px-4 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold mb-1 flex items-center gap-2"
                >
                  <FaTerminal />
                  <span>Launch 3D Cyber OS Desktop</span>
                </button>
              )}

              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/5 flex gap-2">
                <a
                  href="/resumes/Python_Backend_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 rounded-xl bg-white/5 text-white font-mono text-xs border border-white/10"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

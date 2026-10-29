import { useState, useEffect } from 'react'
import { FaFileDownload, FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function ProfessionalNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = NAV_LINKS.map((link) => link.href.substring(1))
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Avatar & Identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-white/15 bg-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <img
              src="/profile.jpg"
              alt="Sammed Patil"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fb = e.currentTarget.nextElementSibling as HTMLElement
                if (fb) fb.style.display = 'flex'
              }}
            />
            <div
              style={{ display: 'none' }}
              className="w-full h-full bg-zinc-200 text-zinc-950 font-bold font-mono text-xs items-center justify-center"
            >
              SP
            </div>
          </div>
          <div>
            <span className="font-semibold text-sm tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Sammed Patil
            </span>
            <span className="text-[11px] font-mono text-zinc-400 hidden sm:block">
              Senior Python / Backend Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-white/10 font-semibold shadow-inner'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Action Buttons & Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/sammedpatildev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors p-2 text-sm"
            title="GitHub: github.com/sammedpatildev"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/sammed-patil-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-400 transition-colors p-2 text-sm"
            title="LinkedIn: linkedin.com/in/sammed-patil-dev/"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:patilsammed022@gmail.com"
            className="text-zinc-400 hover:text-emerald-400 transition-colors p-2 text-sm"
            title="Email: patilsammed022@gmail.com"
          >
            <FaEnvelope />
          </a>

          <a
            href="/Sammed_Patil_Resume.pdf"
            download="Sammed_Patil_Resume.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-semibold font-mono transition-all ml-1 shadow-sm hover:shadow-md"
          >
            <FaFileDownload className="text-zinc-700 text-xs" />
            <span>Resume (PDF)</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0e14]/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/[0.04] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/sammedpatildev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white text-base"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/sammed-patil-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-blue-400 text-base"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:patilsammed022@gmail.com"
                className="text-zinc-400 hover:text-emerald-400 text-base"
              >
                <FaEnvelope />
              </a>
            </div>
            <a
              href="/Sammed_Patil_Resume.pdf"
              download="Sammed_Patil_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white text-zinc-950 text-xs font-mono font-semibold"
            >
              <FaFileDownload className="text-xs" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

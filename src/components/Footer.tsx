import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socials = [
  {
    href: 'https://github.com/sammedpatildev',
    label: 'GitHub',
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    href: 'https://linkedin.com/in/sammed-patil-dev',
    label: 'LinkedIn',
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    href: 'mailto:patilsammed022@gmail.com',
    label: 'Email',
    icon: <FaEnvelope className="w-5 h-5" />,
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] py-10 px-4 sm:px-8 lg:px-16 bg-[#08090d]/80 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div className="font-bold text-white text-base font-mono mb-1">Sammed Patil</div>
          <p className="text-xs text-[#a1a1aa] font-mono">
            Senior Python / Backend Engineer • AWS Certified Solutions Architect • AI Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="w-11 h-11 bg-[#18181b] rounded-xl flex items-center justify-center text-[#a1a1aa] border border-white/5 hover:bg-gradient-custom hover:text-[#09090b] hover:border-transparent hover:-translate-y-1 transition-all shadow-md"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 text-center text-xs text-zinc-600 font-mono">
        © {new Date().getFullYear()} Sammed Patil. Built with React 19, Three.js 3D WebGL, and Tailwind CSS.
      </div>
    </footer>
  )
}

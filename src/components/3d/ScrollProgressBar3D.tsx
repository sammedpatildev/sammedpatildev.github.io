import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgressBar3D() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const [scrollPercent, setScrollPercent] = useState(0)
  const [activeSectionName, setActiveSectionName] = useState('HERO')

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollPercent(Math.round(latest * 100))

      // Identify active section
      const sections = ['about', 'experience', 'projects', 'ai', 'skills', 'certifications', 'resume', 'contact']
      let current = 'HERO'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            current = id.toUpperCase()
          }
        }
      }
      setActiveSectionName(current)
    })
  }, [scrollYProgress])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* 3D Laser Progress Bar */}
      <div className="relative h-[3px] w-full bg-black/40 overflow-hidden backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-[#a78bfa] via-[#38bdf8] to-[#34d399] origin-left shadow-[0_0_15px_rgba(56,189,248,0.8)]"
          style={{ scaleX }}
        />
      </div>

      {/* Floating 3D Scroll Telemetry HUD (hidden on mobile, visible on lg) */}
      <div className="hidden xl:flex fixed right-6 bottom-8 z-40 items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#0e1017]/90 border border-white/10 backdrop-blur-xl shadow-2xl font-mono text-[11px] text-zinc-400 select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white font-bold">{scrollPercent}%</span>
        </div>
        <span className="text-zinc-600">|</span>
        <span className="text-purple-300">SECT: {activeSectionName}</span>
        <span className="text-zinc-600">|</span>
        <span className="text-emerald-400">DEPTH: -{(scrollPercent * 12).toFixed(0)}m</span>
      </div>
    </div>
  )
}

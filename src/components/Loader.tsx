import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setVisible(false), 250)
          return 100
        }
        return prev + Math.floor(Math.random() * 25) + 10
      })
    }, 70)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-[#090a10] flex flex-col items-center justify-center gap-6 select-none"
        >
          {/* Logo Pulse */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-custom flex items-center justify-center font-bold text-zinc-950 font-mono text-xl shadow-[0_0_25px_rgba(167,139,250,0.5)]">
              SP
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-2xl text-white tracking-tight font-sans">
                Sammed Patil
              </span>
              <span className="text-xs font-mono text-purple-400">
                Senior Python / Backend & AI
              </span>
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="w-64 flex flex-col gap-2">
            <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
              <motion.div
                className="h-full bg-gradient-custom shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                style={{ width: `${Math.min(100, progress)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500">
              <span>INITIALIZING 3D WORKSPACE</span>
              <span className="text-cyan-400 font-bold">{Math.min(100, progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

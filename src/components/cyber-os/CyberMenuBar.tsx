import { useState, useEffect } from 'react'
import {
  FaTerminal,
  FaWifi,
  FaVolumeUp,
  FaArrowRight,
  FaExchangeAlt,
} from 'react-icons/fa'

interface CyberMenuBarProps {
  activeAppTitle: string
  onSwitchToClassic: () => void
}

export default function CyberMenuBar({ activeAppTitle, onSwitchToClassic }: CyberMenuBarProps) {
  const [time, setTime] = useState('')
  const [dateStr, setDateStr] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
      setDateStr(
        now.toLocaleDateString([], {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        })
      )
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 h-10 z-50 bg-[#0c0e15]/90 backdrop-blur-xl border-b border-white/10 px-3 sm:px-5 flex items-center justify-between text-xs select-none">
      {/* Left side: System Identity & Active App */}
      <div className="flex items-center gap-3 sm:gap-4">
        {/* OS Brand */}
        <div className="flex items-center gap-2 font-mono font-bold text-white">
          <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-[10px] shadow-[0_0_10px_rgba(168,85,247,0.4)]">
            <FaTerminal />
          </div>
          <span className="hidden sm:inline tracking-tight">SammedOS</span>
          <span className="text-[10px] text-purple-400 font-normal">v4.2</span>
        </div>

        <div className="h-3 w-[1px] bg-white/20 hidden sm:block" />

        {/* Active Application */}
        <div className="flex items-center gap-2 font-mono text-zinc-300">
          <span className="text-zinc-500 hidden md:inline">App:</span>
          <span className="font-semibold text-purple-300 truncate max-w-[140px] sm:max-w-[220px]">
            {activeAppTitle || 'Desktop'}
          </span>
        </div>

        {/* Cloud Status Telemetry */}
        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>AWS: AP-SOUTH-1 • 99.9% SLA</span>
        </div>
      </div>

      {/* Right side: Switch Mode Button & Real-time Clock */}
      <div className="flex items-center gap-3 sm:gap-4 font-mono">
        {/* Switch to Classic Web Scroll View */}
        <button
          onClick={onSwitchToClassic}
          className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 hover:from-purple-500/30 hover:to-indigo-500/30 border border-purple-500/40 text-purple-300 hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.25)] text-[11px] font-semibold cursor-pointer"
          title="Switch to Classic Continuous Scroll Mode"
        >
          <FaExchangeAlt className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
          <span>Classic Web View</span>
          <FaArrowRight className="text-[9px] opacity-70 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Status Icons */}
        <div className="hidden sm:flex items-center gap-2.5 text-zinc-400 text-xs">
          <FaWifi title="High-Speed Cloud Connection" />
          <FaVolumeUp title="System Audio" />
        </div>

        {/* Time & Date */}
        <div className="flex items-center gap-2 text-zinc-300 text-[11px]">
          <span className="hidden md:inline text-zinc-500">{dateStr}</span>
          <span className="font-bold text-white tracking-wider">{time}</span>
        </div>
      </div>
    </header>
  )
}

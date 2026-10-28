import React, { useState } from 'react'
import {
  FaTerminal,
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaBriefcase,
  FaFilePdf,
  FaEnvelope,
  FaCompass,
} from 'react-icons/fa'

export interface DockAppItem {
  id: string
  title: string
  icon: React.ReactNode
  color: string
}

export const DOCK_APPS: DockAppItem[] = [
  {
    id: 'terminal',
    title: 'Terminal CLI',
    icon: <FaTerminal />,
    color: 'from-emerald-500 to-green-600',
  },
  {
    id: 'projects',
    title: 'Projects & Products',
    icon: <FaLaptopCode />,
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'monitor',
    title: 'Architecture Telemetry',
    icon: <FaServer />,
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 'skills',
    title: 'Skills Matrix',
    icon: <FaLayerGroup />,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'experience',
    title: 'Experience Timeline',
    icon: <FaBriefcase />,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: 'resume',
    title: 'Resume Center (PDFs)',
    icon: <FaFilePdf />,
    color: 'from-red-500 to-rose-700',
  },
  {
    id: 'contact',
    title: 'Direct Transmission',
    icon: <FaEnvelope />,
    color: 'from-teal-500 to-emerald-600',
  },
]

interface CyberDockProps {
  openAppIds: string[]
  activeAppId: string | null
  onLaunchApp: (id: string) => void
  onSwitchToClassic: () => void
}

export default function CyberDock({
  openAppIds,
  activeAppId,
  onLaunchApp,
  onSwitchToClassic,
}: CyberDockProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 select-none">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-2xl bg-[#0c0e15]/85 backdrop-blur-2xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {DOCK_APPS.map((app) => {
          const isOpen = openAppIds.includes(app.id)
          const isActive = activeAppId === app.id
          const isHovered = hoveredId === app.id

          return (
            <div key={app.id} className="relative group">
              {/* Tooltip */}
              {isHovered && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/15 text-[11px] font-mono font-bold text-white whitespace-nowrap shadow-xl pointer-events-none z-50">
                  {app.title}
                </div>
              )}

              {/* App Icon Button */}
              <button
                onClick={() => onLaunchApp(app.id)}
                onMouseEnter={() => setHoveredId(app.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-200 transform hover:-translate-y-2 hover:scale-110 active:scale-95 ${
                  isActive
                    ? 'ring-2 ring-purple-400/80 shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                    : 'hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                }`}
              >
                <div
                  className={`w-full h-full rounded-xl bg-gradient-to-br ${app.color} p-[1px] flex items-center justify-center`}
                >
                  <div className="w-full h-full rounded-[11px] bg-[#12141f] flex items-center justify-center text-white text-base sm:text-lg">
                    {app.icon}
                  </div>
                </div>

                {/* Open Indicator Dot */}
                {isOpen && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_6px_rgba(168,85,247,1)]" />
                )}
              </button>
            </div>
          )
        })}

        {/* Separator */}
        <div className="h-7 w-[1px] bg-white/20 mx-1" />

        {/* Switch to Classic Web View Button */}
        <div className="relative group">
          {hoveredId === 'classic' && (
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-purple-950/90 border border-purple-500/40 text-[11px] font-mono font-bold text-purple-200 whitespace-nowrap shadow-xl pointer-events-none z-50">
              Classic Web Scroll View
            </div>
          )}

          <button
            onClick={onSwitchToClassic}
            onMouseEnter={() => setHoveredId('classic')}
            onMouseLeave={() => setHoveredId(null)}
            className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all duration-200 transform hover:-translate-y-2 hover:scale-110 active:scale-95 bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 p-[1px] shadow-[0_0_20px_rgba(168,85,247,0.4)]"
            title="Switch to Classic Web View"
          >
            <div className="w-full h-full rounded-[11px] bg-[#151226] flex items-center justify-center text-purple-200 text-base sm:text-lg">
              <FaCompass />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

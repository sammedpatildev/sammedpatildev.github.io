import { useState } from 'react'
import {
  FaTerminal,
  FaLaptopCode,
  FaServer,
  FaLayerGroup,
  FaBriefcase,
  FaFilePdf,
  FaEnvelope,
  FaAws,
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaCompass,
} from 'react-icons/fa'
import CyberMenuBar from './CyberMenuBar'
import CyberDock from './CyberDock'
import CyberWindow from './CyberWindow'
import TerminalApp from './apps/TerminalApp'
import ProjectsApp from './apps/ProjectsApp'
import ArchitectureMonitorApp from './apps/ArchitectureMonitorApp'
import ResumeViewerApp from './apps/ResumeViewerApp'
import SkillsApp from './apps/SkillsApp'
import ExperienceApp from './apps/ExperienceApp'
import ContactApp from './apps/ContactApp'
import BackgroundCanvas3D from '../3d/BackgroundCanvas3D'

interface CyberOSProps {
  onSwitchToClassic: () => void
}

interface WindowConfig {
  id: string
  title: string
  icon: React.ReactNode
  initialPosition: { x: number; y: number }
  initialSize: { width: number; height: number }
  component: React.ReactNode
}

export default function CyberOS({ onSwitchToClassic }: CyberOSProps) {
  const [openWindows, setOpenWindows] = useState<string[]>(['terminal', 'projects'])
  const [minimizedWindows, setMinimizedWindows] = useState<string[]>([])
  const [activeWindowId, setActiveWindowId] = useState<string>('terminal')
  const [zIndices, setZIndices] = useState<Record<string, number>>({
    terminal: 20,
    projects: 21,
  })

  const bringToFront = (id: string) => {
    setActiveWindowId(id)
    setZIndices((prev) => {
      const currentHighest = Math.max(20, ...Object.values(prev))
      return { ...prev, [id]: currentHighest + 1 }
    })
  }

  const launchApp = (id: string) => {
    if (!openWindows.includes(id)) {
      setOpenWindows((prev) => [...prev, id])
    }
    if (minimizedWindows.includes(id)) {
      setMinimizedWindows((prev) => prev.filter((item) => item !== id))
    }
    bringToFront(id)
  }

  const closeWindow = (id: string) => {
    setOpenWindows((prev) => prev.filter((wId) => wId !== id))
  }

  const minimizeWindow = (id: string) => {
    setMinimizedWindows((prev) => [...prev, id])
  }

  const WINDOW_CONFIGS: Record<string, WindowConfig> = {
    terminal: {
      id: 'terminal',
      title: 'Terminal CLI (SammedOS v4.2)',
      icon: <FaTerminal />,
      initialPosition: { x: 70, y: 70 },
      initialSize: { width: 740, height: 490 },
      component: <TerminalApp />,
    },
    projects: {
      id: 'projects',
      title: 'Production Architectures & Projects',
      icon: <FaLaptopCode />,
      initialPosition: { x: 140, y: 100 },
      initialSize: { width: 840, height: 530 },
      component: <ProjectsApp />,
    },
    monitor: {
      id: 'monitor',
      title: 'Architecture & System Telemetry',
      icon: <FaServer />,
      initialPosition: { x: 190, y: 80 },
      initialSize: { width: 820, height: 520 },
      component: <ArchitectureMonitorApp />,
    },
    skills: {
      id: 'skills',
      title: 'Core Skills & Production Competencies',
      icon: <FaLayerGroup />,
      initialPosition: { x: 230, y: 90 },
      initialSize: { width: 760, height: 500 },
      component: <SkillsApp />,
    },
    experience: {
      id: 'experience',
      title: 'Professional Experience & Career Timeline',
      icon: <FaBriefcase />,
      initialPosition: { x: 160, y: 120 },
      initialSize: { width: 820, height: 520 },
      component: <ExperienceApp />,
    },
    resume: {
      id: 'resume',
      title: 'Resume Center & PDF Verifications',
      icon: <FaFilePdf />,
      initialPosition: { x: 200, y: 90 },
      initialSize: { width: 800, height: 510 },
      component: <ResumeViewerApp />,
    },
    contact: {
      id: 'contact',
      title: 'Direct Transmission & Communications',
      icon: <FaEnvelope />,
      initialPosition: { x: 250, y: 110 },
      initialSize: { width: 750, height: 490 },
      component: <ContactApp />,
    },
  }

  const activeConfig = activeWindowId ? WINDOW_CONFIGS[activeWindowId] : null

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#07080d] select-none text-white font-sans">
      {/* 3D Background Canvas */}
      <BackgroundCanvas3D />

      {/* Cyber Grid Lines & Vignette Wallpaper Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080d] via-transparent to-[#07080d]/60 pointer-events-none z-0" />

      {/* Top Menu Bar */}
      <CyberMenuBar
        activeAppTitle={activeConfig ? activeConfig.title : 'Desktop'}
        onSwitchToClassic={onSwitchToClassic}
      />

      {/* Desktop Workspace */}
      <div className="relative w-full h-full pt-12 pb-20 px-6 z-10 flex">
        {/* Left Side: Desktop Shortcuts */}
        <div className="flex flex-col gap-4 py-4 z-10">
          {[
            { id: 'terminal', label: 'Terminal', icon: <FaTerminal className="text-emerald-400" /> },
            { id: 'projects', label: 'Projects', icon: <FaLaptopCode className="text-amber-400" /> },
            { id: 'monitor', label: 'Telemetry', icon: <FaServer className="text-rose-400" /> },
            { id: 'skills', label: 'Skills', icon: <FaLayerGroup className="text-purple-400" /> },
            { id: 'experience', label: 'Experience', icon: <FaBriefcase className="text-blue-400" /> },
            { id: 'resume', label: 'Resume PDFs', icon: <FaFilePdf className="text-red-400" /> },
            { id: 'contact', label: 'Contact', icon: <FaEnvelope className="text-teal-400" /> },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => launchApp(item.id)}
              className="group flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-white/10 active:bg-white/15 transition-all w-20 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-purple-400/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center justify-center text-xl transition-all">
                {item.icon}
              </div>
              <span className="text-[11px] font-mono font-semibold text-zinc-300 group-hover:text-white drop-shadow truncate max-w-full">
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Right Side: Desktop Widget (Candidate Telemetry Card) */}
        <div className="hidden lg:flex flex-col gap-4 ml-auto max-w-xs py-4 pointer-events-auto z-10">
          <div className="p-4 rounded-2xl border border-white/10 bg-[#0c0e15]/80 backdrop-blur-xl shadow-2xl space-y-3">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center text-lg font-black text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  SP
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0c0e15]" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Sammed Patil</h3>
                <p className="text-[11px] text-purple-300 font-mono">Senior Backend Engineer</p>
                <div className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                  <FaAws className="text-amber-400" />
                  <span>AWS SAA-C03 Certified</span>
                </div>
              </div>
            </div>

            <div className="text-xs text-zinc-300 leading-relaxed bg-white/[0.03] p-2.5 rounded-xl border border-white/5 font-sans">
              4+ years building high-throughput Python / Django / FastAPI microservices, Celery/Redis queues, and LangGraph AI agents.
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-2 text-center font-mono">
              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[10px] text-zinc-400">p99 Latency</div>
                <div className="text-xs font-bold text-emerald-400">&lt;180ms</div>
              </div>
              <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[10px] text-zinc-400">Thread Load</div>
                <div className="text-xs font-bold text-amber-400">-40%</div>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="/resumes/Python_Backend_Resume.pdf"
                download="Sammed_Patil_Resume.pdf"
                className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold font-mono transition-all"
              >
                <FaDownload className="text-[10px]" />
                <span>Resume</span>
              </a>
              <a
                href="https://linkedin.com/in/sammed-patil-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-blue-400 transition-colors"
                title="LinkedIn Profile"
              >
                <FaLinkedin className="text-sm" />
              </a>
              <a
                href="https://github.com/sammedp-aat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Floating Banner to Classic Web Mode */}
          <div className="p-3.5 rounded-2xl border border-purple-500/30 bg-purple-950/40 backdrop-blur-xl space-y-2 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-purple-200">
              <FaCompass className="text-purple-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span>Prefer Classic Web View?</span>
            </div>
            <p className="text-[11px] text-zinc-400 leading-snug">
              Explore the full continuous scroll experience with 3D developer desk, rotating tech sphere, and interactive cards.
            </p>
            <button
              onClick={onSwitchToClassic}
              className="w-full py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-200 hover:text-white text-xs font-bold font-mono transition-all"
            >
              Switch to Scroll Mode →
            </button>
          </div>
        </div>
      </div>

      {/* Render Active Windows */}
      {openWindows.map((appId) => {
        const config = WINDOW_CONFIGS[appId]
        if (!config) return null

        return (
          <CyberWindow
            key={config.id}
            id={config.id}
            title={config.title}
            icon={config.icon}
            isOpen={openWindows.includes(config.id)}
            isMinimized={minimizedWindows.includes(config.id)}
            zIndex={zIndices[config.id] || 20}
            initialPosition={config.initialPosition}
            initialSize={config.initialSize}
            onClose={closeWindow}
            onMinimize={minimizeWindow}
            onFocus={bringToFront}
          >
            {config.component}
          </CyberWindow>
        )
      })}

      {/* Floating Dock */}
      <CyberDock
        openAppIds={openWindows.filter((id) => !minimizedWindows.includes(id))}
        activeAppId={activeWindowId}
        onLaunchApp={launchApp}
        onSwitchToClassic={onSwitchToClassic}
      />
    </div>
  )
}

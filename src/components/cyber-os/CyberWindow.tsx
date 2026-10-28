import React, { useState, useRef } from 'react'

interface CyberWindowProps {
  id: string
  title: string
  icon: React.ReactNode
  isOpen: boolean
  isMinimized: boolean
  zIndex: number
  initialPosition?: { x: number; y: number }
  initialSize?: { width: number; height: number }
  onClose: (id: string) => void
  onMinimize: (id: string) => void
  onFocus: (id: string) => void
  children: React.ReactNode
}

export default function CyberWindow({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  zIndex,
  initialPosition = { x: 80, y: 70 },
  initialSize = { width: 780, height: 520 },
  onClose,
  onMinimize,
  onFocus,
  children,
}: CyberWindowProps) {
  const [position, setPosition] = useState(initialPosition)
  const [size] = useState(initialSize)
  const [isMaximized, setIsMaximized] = useState(false)
  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  if (!isOpen || isMinimized) return null

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(id)
    if ((e.target as HTMLElement).closest('.window-control-btn')) return

    isDragging.current = true
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDragging.current || isMaximized) return
      const newX = Math.max(10, Math.min(window.innerWidth - 120, moveEvent.clientX - dragOffset.current.x))
      const newY = Math.max(45, Math.min(window.innerHeight - 100, moveEvent.clientY - dragOffset.current.y))
      setPosition({ x: newX, y: newY })
    }

    const onMouseUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }

  return (
    <div
      onMouseDown={() => onFocus(id)}
      style={{
        zIndex,
        ...(isMaximized
          ? { top: 44, left: 12, right: 12, bottom: 84, width: 'auto', height: 'auto' }
          : { top: position.y, left: position.x, width: `min(${size.width}px, 94vw)`, height: `min(${size.height}px, 80vh)` }),
      }}
      className="fixed flex flex-col rounded-2xl border border-white/15 bg-[#0c0e15]/95 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden select-none animate-fadeIn"
    >
      {/* Title Bar */}
      <div
        onMouseDown={handleMouseDown}
        className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 cursor-grab active:cursor-grabbing"
      >
        {/* Left macOS style dots */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onClose(id)}
            className="window-control-btn group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f56] hover:brightness-110"
            aria-label="Close"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">×</span>
          </button>
          <button
            onClick={() => onMinimize(id)}
            className="window-control-btn group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#ffbd2e] hover:brightness-110"
            aria-label="Minimize"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[8px] text-black font-bold">−</span>
          </button>
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="window-control-btn group relative flex h-3 w-3 items-center justify-center rounded-full bg-[#27c93f] hover:brightness-110"
            aria-label="Maximize"
          >
            <span className="opacity-0 group-hover:opacity-100 text-[7px] text-black font-bold">+</span>
          </button>
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-zinc-300">
          <span className="text-purple-400 text-sm">{icon}</span>
          <span>{title}</span>
        </div>

        {/* Right Info */}
        <div className="text-[10px] font-mono text-zinc-500 hidden sm:block">
          PID: {id.slice(0, 4)}0
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 font-sans text-white select-text">
        {children}
      </div>
    </div>
  )
}

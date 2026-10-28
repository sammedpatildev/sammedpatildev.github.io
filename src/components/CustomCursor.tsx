import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)

  useEffect(() => {
    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Dot moves instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`
      }

      // Check if hovering over clickable element
      const target = e.target as HTMLElement | null
      const isClickable = Boolean(
        target?.closest('a') ||
        target?.closest('button') ||
        target?.closest('input') ||
        target?.closest('textarea') ||
        target?.closest('[role="button"]') ||
        target?.classList.contains('cursor-pointer')
      )
      setIsHoveringClickable(isClickable)
    }

    // Smooth lerp for outer ring
    let animId: number
    const loop = () => {
      cursorX += (mouseX - cursorX) * 0.18
      cursorY += (mouseY - cursorY) * 0.18

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 18}px, ${cursorY - 18}px, 0)`
      }
      animId = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    animId = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* Outer Smooth Follower Ring */}
      <div
        ref={cursorRef}
        className={`hidden lg:block fixed pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out will-change-transform ${
          isHoveringClickable
            ? 'w-12 h-12 -mt-1.5 -ml-1.5 border-2 border-cyan-400 bg-cyan-400/10 shadow-[0_0_15px_rgba(56,189,248,0.5)]'
            : 'w-9 h-9 border border-purple-400/60 shadow-[0_0_10px_rgba(167,139,250,0.3)]'
        }`}
      />
      {/* Inner Precision Center Dot */}
      <div
        ref={dotRef}
        className={`hidden lg:block fixed pointer-events-none z-[9999] rounded-full will-change-transform ${
          isHoveringClickable
            ? 'w-2 h-2 bg-cyan-300 shadow-[0_0_8px_#38bdf8]'
            : 'w-1.5 h-1.5 bg-white'
        }`}
      />
    </>
  )
}

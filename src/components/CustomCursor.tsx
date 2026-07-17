import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="hidden lg:block fixed w-[30px] h-[30px] border border-[#a78bfa] rounded-full pointer-events-none z-[9999] transition-[width,height] duration-150 mix-blend-difference"
      />
      <div
        ref={dotRef}
        className="hidden lg:block fixed w-1.5 h-1.5 bg-[#38bdf8] rounded-full pointer-events-none z-[9999]"
      />
    </>
  )
}

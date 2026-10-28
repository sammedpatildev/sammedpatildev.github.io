import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

interface Scroll3DSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  tiltIntensity?: number
}

export default function Scroll3DSection({
  children,
  className = '',
  id,
  tiltIntensity = 10,
}: Scroll3DSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Smooth out scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001,
  })

  // 3D Rotations and Perspective Transforms based on Scroll
  const rotateX = useTransform(smoothProgress, [0, 0.45, 0.55, 1], [tiltIntensity, 0, 0, -tiltIntensity])
  const scale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.93, 1, 1, 0.95])
  const opacity = useTransform(smoothProgress, [0, 0.25, 0.85, 1], [0.35, 1, 1, 0.4])
  const y = useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40])

  return (
    <div
      ref={containerRef}
      id={id}
      className={`relative will-change-transform ${className}`}
      style={{
        perspective: '1200px',
      }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          y,
          transformStyle: 'preserve-3d',
        }}
        className="w-full transition-shadow duration-300"
      >
        {children}
      </motion.div>
    </div>
  )
}

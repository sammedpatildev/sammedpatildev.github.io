import React, { useRef, useState, useCallback } from 'react'

interface Tilt3DCardProps {
  children: React.ReactNode
  className?: string
  glareColor?: string
  maxTilt?: number
  scale?: number
  perspective?: number
}

export default function Tilt3DCard({
  children,
  className = '',
  glareColor = 'rgba(167, 139, 250, 0.25)',
  maxTilt = 12,
  scale = 1.02,
  perspective = 1000,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -maxTilt
      const rotateY = ((x - centerX) / centerX) * maxTilt

      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      )
      setGlareStyle({
        opacity: 0.8,
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      })
    },
    [maxTilt, scale, perspective]
  )

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`)
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out preserve-3d will-change-transform ${className}`}
      style={{
        transform: transform,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Glare spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-20 transition-opacity duration-300"
        style={{
          opacity: isHovered ? glareStyle.opacity : 0,
          background: `radial-gradient(circle 300px at ${glareStyle.x}% ${glareStyle.y}%, ${glareColor}, transparent 70%)`,
        }}
      />
      {children}
    </div>
  )
}

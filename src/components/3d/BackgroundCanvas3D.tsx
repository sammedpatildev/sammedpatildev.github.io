import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function BackgroundCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 2000)
    camera.position.z = 450

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    // 3D Deep Space Particle Matrix
    const particleCount = 180
    const maxDistance = 120
    const bounds = { x: 420, y: 350, z: 800 }

    const positions = new Float32Array(particleCount * 3)
    const basePositions = new Float32Array(particleCount * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * bounds.x * 2
      const y = (Math.random() - 0.5) * bounds.y * 2
      const z = (Math.random() - 0.5) * bounds.z * 2

      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      basePositions[i * 3] = x
      basePositions[i * 3 + 1] = y
      basePositions[i * 3 + 2] = z

      velocities.push({
        x: (Math.random() - 0.5) * 0.3,
        y: (Math.random() - 0.5) * 0.3,
        z: (Math.random() - 0.5) * 0.4,
      })
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Circular Glowing Texture
    const dotCanvas = document.createElement('canvas')
    dotCanvas.width = 64
    dotCanvas.height = 64
    const dotCtx = dotCanvas.getContext('2d')
    if (dotCtx) {
      const grad = dotCtx.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)')
      grad.addColorStop(0.3, 'rgba(167, 139, 250, 0.9)')
      grad.addColorStop(0.6, 'rgba(56, 189, 248, 0.4)')
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
      dotCtx.fillStyle = grad
      dotCtx.fillRect(0, 0, 64, 64)
    }
    const dotTexture = new THREE.CanvasTexture(dotCanvas)

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 6.0,
      map: dotTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const pointCloud = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(pointCloud)

    // Dynamic Neural Lines
    const maxLines = 600
    const linePositions = new Float32Array(maxLines * 6)
    const lineColors = new Float32Array(maxLines * 6)

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage))

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(linesMesh)

    // Scroll & Velocity Tracking
    let targetScrollY = 0
    let currentScrollY = 0
    let scrollVelocity = 0
    let lastScrollY = 0
    let mouseX = 0
    let mouseY = 0

    const onScroll = () => {
      targetScrollY = window.scrollY
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.2
      mouseY = (e.clientY - window.innerHeight / 2) * 0.2
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop with Scroll Flight
    let animationId: number
    let clock = new THREE.Clock()

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      clock.getDelta()

      // Calculate smooth scroll & momentum velocity
      scrollVelocity = (targetScrollY - lastScrollY)
      lastScrollY = targetScrollY
      currentScrollY += (targetScrollY - currentScrollY) * 0.08

      // 3D Camera Flight based on Scroll
      // Camera smoothly tracks scroll with 3D roll and pitch
      camera.position.x += (mouseX - camera.position.x) * 0.04
      camera.position.y += (-mouseY - (currentScrollY * 0.2) - camera.position.y) * 0.04

      // Camera Z tunnel flight
      const scrollDepth = (currentScrollY * 0.5) % bounds.z
      camera.position.z = 450 - scrollDepth * 0.5

      // Subtle 3D camera roll with scroll speed
      camera.rotation.z = Math.sin(currentScrollY * 0.0015) * 0.05
      camera.rotation.x = -scrollVelocity * 0.0003

      // Move and wrap particles through 3D tunnel
      let lineVertexIndex = 0
      let colorIndex = 0
      let linesDrawn = 0

      const warpSpeedFactor = 1.0 + Math.min(Math.abs(scrollVelocity) * 0.05, 4.0)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3

        positions[i3] += velocities[i].x
        positions[i3 + 1] += velocities[i].y
        // Warp through space on scroll
        positions[i3 + 2] += (velocities[i].z - scrollVelocity * 0.15) * warpSpeedFactor

        // Wrap around 3D boundary limits
        if (positions[i3] > bounds.x) positions[i3] = -bounds.x
        if (positions[i3] < -bounds.x) positions[i3] = bounds.x
        if (positions[i3 + 1] > bounds.y) positions[i3 + 1] = -bounds.y
        if (positions[i3 + 1] < -bounds.y) positions[i3 + 1] = bounds.y
        if (positions[i3 + 2] > bounds.z) positions[i3 + 2] = -bounds.z
        if (positions[i3 + 2] < -bounds.z) positions[i3 + 2] = bounds.z

        // Proximity lines
        if (linesDrawn < maxLines) {
          for (let j = i + 1; j < Math.min(i + 15, particleCount); j++) {
            const j3 = j * 3
            const dx = positions[i3] - positions[j3]
            const dy = positions[i3 + 1] - positions[j3 + 1]
            const dz = positions[i3 + 2] - positions[j3 + 2]
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

            if (dist < maxDistance && linesDrawn < maxLines) {
              const alpha = (1.0 - dist / maxDistance) * 0.7

              linePositions[lineVertexIndex++] = positions[i3]
              linePositions[lineVertexIndex++] = positions[i3 + 1]
              linePositions[lineVertexIndex++] = positions[i3 + 2]

              linePositions[lineVertexIndex++] = positions[j3]
              linePositions[lineVertexIndex++] = positions[j3 + 1]
              linePositions[lineVertexIndex++] = positions[j3 + 2]

              const r = 0.65 * alpha
              const g = 0.55 * alpha
              const b = 0.98 * alpha

              lineColors[colorIndex++] = r
              lineColors[colorIndex++] = g
              lineColors[colorIndex++] = b

              lineColors[colorIndex++] = r
              lineColors[colorIndex++] = g
              lineColors[colorIndex++] = b

              linesDrawn++
            }
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true
      lineGeometry.setDrawRange(0, linesDrawn * 2)
      lineGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.color.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)

      particleGeometry.dispose()
      particleMaterial.dispose()
      dotTexture.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-45 transition-opacity duration-1000"
    />
  )
}

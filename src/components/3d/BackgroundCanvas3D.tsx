import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function BackgroundCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.z = 400

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

    // Particle Constellation Network
    const particleCount = 120
    const maxDistance = 110
    const positions = new Float32Array(particleCount * 3)
    const velocities: { x: number; y: number; z: number }[] = []

    const bounds = {
      x: 350,
      y: 250,
      z: 200,
    }

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2
      positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2
      positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2

      velocities.push({
        x: (Math.random() - 0.5) * 0.35,
        y: (Math.random() - 0.5) * 0.35,
        z: (Math.random() - 0.5) * 0.25,
      })
    }

    // Node Points
    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    // Soft circular texture
    const dotCanvas = document.createElement('canvas')
    dotCanvas.width = 32
    dotCanvas.height = 32
    const dotCtx = dotCanvas.getContext('2d')
    if (dotCtx) {
      const g = dotCtx.createRadialGradient(16, 16, 0, 16, 16, 16)
      g.addColorStop(0, 'rgba(167, 139, 250, 1)')
      g.addColorStop(0.4, 'rgba(56, 189, 248, 0.6)')
      g.addColorStop(1, 'rgba(0, 0, 0, 0)')
      dotCtx.fillStyle = g
      dotCtx.fillRect(0, 0, 32, 32)
    }
    const dotTexture = new THREE.CanvasTexture(dotCanvas)

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 4.5,
      map: dotTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const pointCloud = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(pointCloud)

    // Dynamic Lines Geometry
    const maxLines = (particleCount * (particleCount - 1)) / 2
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

    // Mouse and Scroll tracking
    let mouseX = 0
    let mouseY = 0
    let scrollY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.15
      mouseY = (e.clientY - window.innerHeight / 2) * 0.15
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Smooth camera drift based on mouse and scroll
      camera.position.x += (mouseX - camera.position.x) * 0.03
      camera.position.y += (-mouseY - (scrollY * 0.1) - camera.position.y) * 0.03
      camera.lookAt(0, -scrollY * 0.1, 0)

      let lineVertexIndex = 0
      let colorIndex = 0
      let linesDrawn = 0

      // Update particle positions
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        positions[i3] += velocities[i].x
        positions[i3 + 1] += velocities[i].y
        positions[i3 + 2] += velocities[i].z

        // Bounce back within bounds
        if (Math.abs(positions[i3]) > bounds.x) velocities[i].x *= -1
        if (Math.abs(positions[i3 + 1]) > bounds.y) velocities[i].y *= -1
        if (Math.abs(positions[i3 + 2]) > bounds.z) velocities[i].z *= -1

        // Check proximity with other particles to draw lines
        for (let j = i + 1; j < particleCount; j++) {
          const j3 = j * 3
          const dx = positions[i3] - positions[j3]
          const dy = positions[i3 + 1] - positions[j3 + 1]
          const dz = positions[i3 + 2] - positions[j3 + 2]
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (dist < maxDistance) {
            const alpha = 1.0 - dist / maxDistance

            linePositions[lineVertexIndex++] = positions[i3]
            linePositions[lineVertexIndex++] = positions[i3 + 1]
            linePositions[lineVertexIndex++] = positions[i3 + 2]

            linePositions[lineVertexIndex++] = positions[j3]
            linePositions[lineVertexIndex++] = positions[j3 + 1]
            linePositions[lineVertexIndex++] = positions[j3 + 2]

            // Dynamic cyber gradient: purple (0.65, 0.54, 0.98) to cyan (0.22, 0.74, 0.97)
            const r = 0.65 * alpha
            const g = (0.54 + 0.2 * Math.sin(i)) * alpha
            const b = 0.97 * alpha

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

      particleGeometry.attributes.position.needsUpdate = true

      lineGeometry.setDrawRange(0, linesDrawn * 2)
      lineGeometry.attributes.position.needsUpdate = true
      lineGeometry.attributes.color.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
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
      className="fixed inset-0 pointer-events-none z-0 opacity-40 transition-opacity duration-1000"
    />
  )
}

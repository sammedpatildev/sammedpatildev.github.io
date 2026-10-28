import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type CoreMode = 'neural' | 'backend' | 'quantum'

const MODE_CONFIGS = {
  neural: {
    primary: 0xa78bfa, // purple
    secondary: 0x38bdf8, // cyan
    accent: 0x34d399, // emerald
    label: 'AI Neural Core',
    desc: 'LangChain • RAG • Autonomous Agents',
    speed: 1.0,
  },
  backend: {
    primary: 0x38bdf8, // cyan
    secondary: 0x818cf8, // indigo
    accent: 0xf59e0b, // amber
    label: 'Distributed Backend',
    desc: 'Python • Django • Celery • PostgreSQL',
    speed: 1.2,
  },
  quantum: {
    primary: 0x34d399, // emerald
    secondary: 0xa78bfa, // purple
    accent: 0x38bdf8, // cyan
    label: 'Cloud Infrastructure',
    desc: 'AWS Cloud • Docker • Microservices',
    speed: 0.8,
  },
}

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeMode, setActiveMode] = useState<CoreMode>('neural')
  const [isInteracting, setIsInteracting] = useState(false)
  const modeRef = useRef<CoreMode>('neural')
  modeRef.current = activeMode

  // References for Three.js state
  const sceneStateRef = useRef<{
    pulseTime: number
    targetColorPrimary: THREE.Color
    targetColorSecondary: THREE.Color
    targetColorAccent: THREE.Color
    outerWireMesh?: THREE.LineSegments
    innerCoreMesh?: THREE.Mesh
    innerGlowMesh?: THREE.Mesh
    particlesPoints?: THREE.Points
    ring1?: THREE.Group
    ring2?: THREE.Group
    ring3?: THREE.Group
    packet1?: THREE.Mesh
    packet2?: THREE.Mesh
    packet3?: THREE.Mesh
    pointLights?: THREE.PointLight[]
  }>({
    pulseTime: 0,
    targetColorPrimary: new THREE.Color(0xa78bfa),
    targetColorSecondary: new THREE.Color(0x38bdf8),
    targetColorAccent: new THREE.Color(0x34d399),
  })

  const triggerPulse = (mode: CoreMode) => {
    setActiveMode(mode)
    const cfg = MODE_CONFIGS[mode]
    sceneStateRef.current.targetColorPrimary.setHex(cfg.primary)
    sceneStateRef.current.targetColorSecondary.setHex(cfg.secondary)
    sceneStateRef.current.targetColorAccent.setHex(cfg.accent)
    sceneStateRef.current.pulseTime = 1.0
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Setup Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const width = container.clientWidth
    const height = container.clientHeight

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 7.5

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const light1 = new THREE.PointLight(MODE_CONFIGS.neural.primary, 4, 20)
    light1.position.set(4, 4, 4)
    scene.add(light1)

    const light2 = new THREE.PointLight(MODE_CONFIGS.neural.secondary, 4, 20)
    light2.position.set(-4, -4, 4)
    scene.add(light2)

    sceneStateRef.current.pointLights = [light1, light2]

    // Master Group for 3D Core
    const coreGroup = new THREE.Group()
    scene.add(coreGroup)

    // 1. Inner Faceted Crystal Core
    const innerGeom = new THREE.OctahedronGeometry(1.2, 0)
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: MODE_CONFIGS.neural.primary,
      emissive: MODE_CONFIGS.neural.primary,
      emissiveIntensity: 0.4,
      metalness: 0.3,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    })
    const innerCoreMesh = new THREE.Mesh(innerGeom, innerMat)
    coreGroup.add(innerCoreMesh)
    sceneStateRef.current.innerCoreMesh = innerCoreMesh

    // Inner Wireframe Accent
    const innerWireGeom = new THREE.WireframeGeometry(innerGeom)
    const innerWireMat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
    })
    const innerWireMesh = new THREE.LineSegments(innerWireGeom, innerWireMat)
    innerCoreMesh.add(innerWireMesh)

    // 2. Outer Geodesic Icosahedron Wireframe
    const outerGeom = new THREE.IcosahedronGeometry(2.0, 1)
    const outerWireGeom = new THREE.WireframeGeometry(outerGeom)
    const outerWireMat = new THREE.LineBasicMaterial({
      color: MODE_CONFIGS.neural.secondary,
      transparent: true,
      opacity: 0.5,
    })
    const outerWireMesh = new THREE.LineSegments(outerWireGeom, outerWireMat)
    coreGroup.add(outerWireMesh)
    sceneStateRef.current.outerWireMesh = outerWireMesh

    // Vertices Nodes on Outer Cage (Neural Points)
    const posAttr = outerGeom.attributes.position
    const nodeGeom = new THREE.SphereGeometry(0.045, 8, 8)
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
    const nodeInstanced = new THREE.InstancedMesh(nodeGeom, nodeMat, posAttr.count)
    const dummy = new THREE.Object3D()

    for (let i = 0; i < posAttr.count; i++) {
      dummy.position.set(posAttr.getX(i), posAttr.getY(i), posAttr.getZ(i))
      dummy.updateMatrix()
      nodeInstanced.setMatrixAt(i, dummy.matrix)
    }
    nodeInstanced.instanceMatrix.needsUpdate = true
    coreGroup.add(nodeInstanced)

    // 3. Orbital Data Rings
    const createRing = (radius: number, tiltX: number, tiltY: number, color: number) => {
      const ringGroup = new THREE.Group()
      ringGroup.rotation.x = tiltX
      ringGroup.rotation.y = tiltY

      // Tube Ring
      const ringGeom = new THREE.TorusGeometry(radius, 0.012, 16, 100)
      const ringMat = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.45,
      })
      const ringMesh = new THREE.Mesh(ringGeom, ringMat)
      ringGroup.add(ringMesh)

      // Traveling Data Packet
      const packetGeom = new THREE.SphereGeometry(0.09, 12, 12)
      const packetMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: color,
        emissiveIntensity: 2.0,
      })
      const packet = new THREE.Mesh(packetGeom, packetMat)
      ringGroup.add(packet)

      coreGroup.add(ringGroup)
      return { ringGroup, packet, radius }
    }

    const ring1Data = createRing(2.6, Math.PI / 4, 0, MODE_CONFIGS.neural.primary)
    const ring2Data = createRing(3.1, -Math.PI / 3, Math.PI / 6, MODE_CONFIGS.neural.secondary)
    const ring3Data = createRing(2.8, Math.PI / 6, Math.PI / 3, MODE_CONFIGS.neural.accent)

    sceneStateRef.current.ring1 = ring1Data.ringGroup
    sceneStateRef.current.ring2 = ring2Data.ringGroup
    sceneStateRef.current.ring3 = ring3Data.ringGroup
    sceneStateRef.current.packet1 = ring1Data.packet
    sceneStateRef.current.packet2 = ring2Data.packet
    sceneStateRef.current.packet3 = ring3Data.packet

    // 4. Ambient Floating Particles / Cyber Dust
    const particleCount = 200
    const particlePositions = new Float32Array(particleCount * 3)
    const particleScales = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.5 + Math.random() * 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      particlePositions[i * 3 + 2] = radius * Math.cos(phi)
      particleScales[i] = Math.random() * 0.04 + 0.02
    }

    const particleGeom = new THREE.BufferGeometry()
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    // Canvas circular particle texture
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 64
    const ctx = canvas.getContext('2d')
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
      grad.addColorStop(0, 'rgba(255,255,255,1)')
      grad.addColorStop(0.3, 'rgba(167,139,250,0.8)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, 64, 64)
    }
    const particleTexture = new THREE.CanvasTexture(canvas)

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      map: particleTexture,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    const particlesPoints = new THREE.Points(particleGeom, particleMat)
    coreGroup.add(particlesPoints)
    sceneStateRef.current.particlesPoints = particlesPoints

    // Interaction State
    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1)

      if (isDragging) {
        const deltaX = e.clientX - prevMouseX
        const deltaY = e.clientY - prevMouseY
        targetRotationY += deltaX * 0.01
        targetRotationX += deltaY * 0.01
        prevMouseX = e.clientX
        prevMouseY = e.clientY
      }
    }

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true
      setIsInteracting(true)
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onPointerUp = () => {
      isDragging = false
      setIsInteracting(false)
    }

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        const rect = container.getBoundingClientRect()
        mouseX = ((touch.clientX - rect.left) / rect.width) * 2 - 1
        mouseY = -(((touch.clientY - rect.top) / rect.height) * 2 - 1)
      }
    }

    container.addEventListener('mousemove', onPointerMove)
    container.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mouseup', onPointerUp)
    container.addEventListener('touchmove', onTouchMove, { passive: true })

    // Resize Handler
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // Animation Loop
    let clock = new THREE.Clock()
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      const elapsedTime = clock.getElapsedTime()
      const cfg = MODE_CONFIGS[modeRef.current]
      const currentSpeed = cfg.speed

      // Interpolate colors towards target mode
      const state = sceneStateRef.current
      if (innerMat && state.targetColorPrimary) {
        innerMat.color.lerp(state.targetColorPrimary, 0.05)
        innerMat.emissive.lerp(state.targetColorPrimary, 0.05)
      }
      if (outerWireMat && state.targetColorSecondary) {
        outerWireMat.color.lerp(state.targetColorSecondary, 0.05)
      }
      if (state.pointLights) {
        state.pointLights[0].color.lerp(state.targetColorPrimary, 0.05)
        state.pointLights[1].color.lerp(state.targetColorSecondary, 0.05)
      }

      // Pulse wave decay
      if (state.pulseTime > 0) {
        state.pulseTime -= 0.02
        const pulseFactor = 1 + Math.sin(state.pulseTime * Math.PI) * 0.25
        innerCoreMesh.scale.set(pulseFactor, pulseFactor, pulseFactor)
        outerWireMesh.scale.set(pulseFactor * 1.05, pulseFactor * 1.05, pulseFactor * 1.05)
      } else {
        // Natural pulsing respiration
        const naturalPulse = 1 + Math.sin(elapsedTime * 2.0) * 0.04
        innerCoreMesh.scale.set(naturalPulse, naturalPulse, naturalPulse)
        outerWireMesh.scale.set(1, 1, 1)
      }

      // Rotations
      if (!isDragging) {
        targetRotationY += 0.005 * currentSpeed
        targetRotationX = Math.sin(elapsedTime * 0.5) * 0.2
      }

      // Smooth dampening / lerp core rotation
      coreGroup.rotation.y += (targetRotationY + mouseX * 0.4 - coreGroup.rotation.y) * 0.05
      coreGroup.rotation.x += (targetRotationX - mouseY * 0.4 - coreGroup.rotation.x) * 0.05

      // Orbiting packets around rings
      const t1 = elapsedTime * 1.8 * currentSpeed
      const t2 = elapsedTime * 1.4 * currentSpeed
      const t3 = elapsedTime * 2.2 * currentSpeed

      if (ring1Data.packet) {
        ring1Data.packet.position.set(Math.cos(t1) * ring1Data.radius, Math.sin(t1) * ring1Data.radius, 0)
      }
      if (ring2Data.packet) {
        ring2Data.packet.position.set(Math.cos(t2) * ring2Data.radius, Math.sin(t2) * ring2Data.radius, 0)
      }
      if (ring3Data.packet) {
        ring3Data.packet.position.set(Math.cos(t3) * ring3Data.radius, Math.sin(t3) * ring3Data.radius, 0)
      }

      // Rotate particles slowly in opposite direction
      if (particlesPoints) {
        particlesPoints.rotation.y = -elapsedTime * 0.05
        particlesPoints.rotation.x = Math.sin(elapsedTime * 0.1) * 0.1
      }

      // Sub-rotation for inner core
      innerCoreMesh.rotation.y = elapsedTime * 0.3
      innerCoreMesh.rotation.z = elapsedTime * 0.2

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', onPointerMove)
      container.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mouseup', onPointerUp)
      container.removeEventListener('touchmove', onTouchMove)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      // Dispose Geometries and Materials
      innerGeom.dispose()
      innerMat.dispose()
      innerWireGeom.dispose()
      innerWireMat.dispose()
      outerGeom.dispose()
      outerWireGeom.dispose()
      outerWireMat.dispose()
      nodeGeom.dispose()
      nodeMat.dispose()
      particleGeom.dispose()
      particleMat.dispose()
      particleTexture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[520px] lg:h-[600px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-300 ${
          isInteracting ? 'scale-[1.01]' : 'scale-100'
        }`}
      />

      {/* Interactive Mode Switches */}
      <div className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 p-1.5 bg-[#18181b]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl">
        {(Object.keys(MODE_CONFIGS) as CoreMode[]).map((mode) => {
          const cfg = MODE_CONFIGS[mode]
          const isSelected = activeMode === mode
          return (
            <button
              key={mode}
              onClick={() => triggerPulse(mode)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-white/15 text-white shadow-lg border border-white/20'
                  : 'text-[#a1a1aa] hover:text-white hover:bg-white/5'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: `#${cfg.primary.toString(16).padStart(6, '0')}`,
                  boxShadow: isSelected
                    ? `0 0 10px #${cfg.primary.toString(16).padStart(6, '0')}`
                    : 'none',
                }}
              />
              <span className="hidden sm:inline">{cfg.label}</span>
              <span className="sm:hidden">{mode.toUpperCase()}</span>
            </button>
          )
        })}
      </div>

      {/* Floating 3D Info Badges */}
      <div className="hidden md:block absolute top-6 -left-6 z-10 pointer-events-none animate-[float_6s_ease-in-out_infinite]">
        <div className="bg-[#18181b]/80 backdrop-blur-md border border-[#a78bfa]/30 px-3.5 py-2 rounded-xl text-xs font-mono text-[#a78bfa] shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] animate-ping" />
          <span>Python 3.12 • Django 5</span>
        </div>
      </div>

      <div className="hidden md:block absolute top-12 -right-4 z-10 pointer-events-none animate-[float_7s_ease-in-out_infinite_-2s]">
        <div className="bg-[#18181b]/80 backdrop-blur-md border border-[#38bdf8]/30 px-3.5 py-2 rounded-xl text-xs font-mono text-[#38bdf8] shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-ping" />
          <span>FastAPI • LangChain • RAG</span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-20 -left-2 z-10 pointer-events-none animate-[float_8s_ease-in-out_infinite_-4s]">
        <div className="bg-[#18181b]/80 backdrop-blur-md border border-[#34d399]/30 px-3.5 py-2 rounded-xl text-xs font-mono text-[#34d399] shadow-lg flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
          <span>AWS • Docker • 99.9% Uptime</span>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-[11px] font-mono text-zinc-500 bg-black/40 px-2.5 py-1 rounded-full border border-white/5 pointer-events-none backdrop-blur-sm">
        3D Core • Drag to Rotate
      </div>
    </div>
  )
}

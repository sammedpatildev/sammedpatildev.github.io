import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

type DeskLightingTheme = 'cyber' | 'warm' | 'matrix'

const THEMES = {
  cyber: {
    primaryLight: 0xa78bfa, // Purple
    secondaryLight: 0x38bdf8, // Electric Cyan
    ambientIntensity: 0.8,
    deskPadGlow: '#a78bfa',
    label: 'Cyber Neon',
    accentColor: '#38bdf8',
  },
  warm: {
    primaryLight: 0xfbbf24, // Warm Amber
    secondaryLight: 0xf97316, // Orange glow
    ambientIntensity: 0.9,
    deskPadGlow: '#f59e0b',
    label: 'Studio Warm',
    accentColor: '#f59e0b',
  },
  matrix: {
    primaryLight: 0x34d399, // Emerald
    secondaryLight: 0x06b6d4, // Cyan
    ambientIntensity: 0.7,
    deskPadGlow: '#34d399',
    label: 'Matrix Terminal',
    accentColor: '#34d399',
  },
}

export default function DeveloperDesk3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTheme, setActiveTheme] = useState<DeskLightingTheme>('cyber')
  const themeRef = useRef<DeskLightingTheme>('cyber')
  themeRef.current = activeTheme

  const themeLightsRef = useRef<{
    lampLight?: THREE.PointLight
    screenLight?: THREE.PointLight
    underglowLight?: THREE.PointLight
    targetPrimary: THREE.Color
    targetSecondary: THREE.Color
  }>({
    targetPrimary: new THREE.Color(THEMES.cyber.primaryLight),
    targetSecondary: new THREE.Color(THEMES.cyber.secondaryLight),
  })

  const switchTheme = (t: DeskLightingTheme) => {
    setActiveTheme(t)
    themeLightsRef.current.targetPrimary.setHex(THEMES[t].primaryLight)
    themeLightsRef.current.targetSecondary.setHex(THEMES[t].secondaryLight)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000)
    camera.position.set(0, 3.8, 6.2)
    camera.lookAt(0, 0.3, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.3
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    // Master Desk Group
    const workstation = new THREE.Group()
    scene.add(workstation)

    // 1. Ambient & Directional Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
    dirLight.position.set(4, 8, 5)
    dirLight.castShadow = true
    dirLight.shadow.mapSize.width = 1024
    dirLight.shadow.mapSize.height = 1024
    scene.add(dirLight)

    // Dynamic Themed Point Lights
    const lampLight = new THREE.PointLight(THEMES.cyber.primaryLight, 4.5, 8)
    lampLight.position.set(-2.2, 2.5, 0.5)
    lampLight.castShadow = true
    scene.add(lampLight)

    const screenLight = new THREE.PointLight(THEMES.cyber.secondaryLight, 3.5, 6)
    screenLight.position.set(0, 1.5, 0.2)
    scene.add(screenLight)

    const underglowLight = new THREE.PointLight(THEMES.cyber.primaryLight, 2.5, 5)
    underglowLight.position.set(0, -0.6, 0.5)
    scene.add(underglowLight)

    themeLightsRef.current.lampLight = lampLight
    themeLightsRef.current.screenLight = screenLight
    themeLightsRef.current.underglowLight = underglowLight

    // 2. Desk Surface
    const deskTopGeom = new THREE.BoxGeometry(5.2, 0.12, 2.4)
    const deskMat = new THREE.MeshPhysicalMaterial({
      color: 0x14151f,
      metalness: 0.3,
      roughness: 0.4,
      clearcoat: 0.2,
    })
    const deskTop = new THREE.Mesh(deskTopGeom, deskMat)
    deskTop.position.y = 0
    deskTop.receiveShadow = true
    workstation.add(deskTop)

    // Desk Legs (Minimalist Steel Frames)
    const legGeom = new THREE.BoxGeometry(0.08, 2.4, 2.2)
    const legMat = new THREE.MeshStandardMaterial({ color: 0x242735, metalness: 0.8, roughness: 0.3 })

    const leftLeg = new THREE.Mesh(legGeom, legMat)
    leftLeg.position.set(-2.4, -1.2, 0)
    workstation.add(leftLeg)

    const rightLeg = new THREE.Mesh(legGeom, legMat)
    rightLeg.position.set(2.4, -1.2, 0)
    workstation.add(rightLeg)

    // 3. Ergonomic Desk Mat
    const matGeom = new THREE.BoxGeometry(3.6, 0.015, 1.3)
    const matMat = new THREE.MeshStandardMaterial({
      color: 0x0a0b10,
      roughness: 0.8,
    })
    const deskPad = new THREE.Mesh(matGeom, matMat)
    deskPad.position.set(0, 0.065, 0.2)
    deskPad.receiveShadow = true
    workstation.add(deskPad)

    // Desk Mat Edge Neon Line
    const matEdgeGeom = new THREE.BoxGeometry(3.64, 0.01, 0.02)
    const matEdgeMat = new THREE.MeshBasicMaterial({ color: THEMES.cyber.secondaryLight })
    const matEdge = new THREE.Mesh(matEdgeGeom, matEdgeMat)
    matEdge.position.set(0, 0.07, 0.85)
    workstation.add(matEdge)

    // 4. Ultra-Wide Primary Monitor Setup
    const monitorGroup = new THREE.Group()
    monitorGroup.position.set(0, 0.1, -0.45)
    workstation.add(monitorGroup)

    // Stand Base & Pole
    const baseGeom = new THREE.CylinderGeometry(0.28, 0.32, 0.04, 32)
    const standMat = new THREE.MeshStandardMaterial({ color: 0x222430, metalness: 0.9, roughness: 0.2 })
    const standBase = new THREE.Mesh(baseGeom, standMat)
    standBase.position.y = 0.02
    monitorGroup.add(standBase)

    const poleGeom = new THREE.CylinderGeometry(0.045, 0.045, 0.9, 16)
    const standPole = new THREE.Mesh(poleGeom, standMat)
    standPole.position.set(0, 0.48, -0.05)
    monitorGroup.add(standPole)

    // Monitor Bezel Frame
    const screenFrameGeom = new THREE.BoxGeometry(2.8, 1.45, 0.07)
    const screenFrameMat = new THREE.MeshStandardMaterial({ color: 0x11131a, metalness: 0.8, roughness: 0.3 })
    const screenFrame = new THREE.Mesh(screenFrameGeom, screenFrameMat)
    screenFrame.position.set(0, 1.05, 0)
    monitorGroup.add(screenFrame)

    // Dynamic Live Monitor Canvas Texture
    const monitorCanvas = document.createElement('canvas')
    monitorCanvas.width = 1024
    monitorCanvas.height = 512
    const monCtx = monitorCanvas.getContext('2d')
    const monitorTexture = new THREE.CanvasTexture(monitorCanvas)

    const drawMonitorScreen = (time: number) => {
      if (!monCtx) return
      // Screen background
      monCtx.fillStyle = '#090a10'
      monCtx.fillRect(0, 0, 1024, 512)

      // Header bar
      monCtx.fillStyle = '#181926'
      monCtx.fillRect(0, 0, 1024, 48)

      monCtx.fillStyle = '#ff5f56'
      monCtx.beginPath(); monCtx.arc(28, 24, 8, 0, Math.PI * 2); monCtx.fill()
      monCtx.fillStyle = '#ffbd2e'
      monCtx.beginPath(); monCtx.arc(52, 24, 8, 0, Math.PI * 2); monCtx.fill()
      monCtx.fillStyle = '#27c93f'
      monCtx.beginPath(); monCtx.arc(76, 24, 8, 0, Math.PI * 2); monCtx.fill()

      monCtx.fillStyle = '#94a3b8'
      monCtx.font = 'bold 18px monospace'
      monCtx.fillText('sammed@cloud-cluster ~ Python 3.12 • LangGraph & Celery Engine', 110, 30)

      // Telemetry Box Left
      monCtx.fillStyle = '#11121d'
      monCtx.fillRect(24, 70, 480, 410)
      monCtx.strokeStyle = '#27293d'
      monCtx.strokeRect(24, 70, 480, 410)

      monCtx.fillStyle = '#38bdf8'
      monCtx.font = 'bold 20px monospace'
      monCtx.fillText('❯ ARCHITECTURE TELEMETRY', 45, 110)

      monCtx.fillStyle = '#34d399'
      monCtx.font = '16px monospace'
      monCtx.fillText('● SYSTEM STATUS: PRODUCTION 99.9%', 45, 145)
      monCtx.fillText('● POSTGRESQL p99: <180ms (Tuned from 1.2s)', 45, 175)
      monCtx.fillText('● CELERY QUEUES: ACTIVE (Worker concurrency: 8)', 45, 205)
      monCtx.fillText('● AWS SAA-C03: S3 • EC2 • RDS • CLOUDFRONT', 45, 235)

      // Animated Wave Line
      monCtx.strokeStyle = '#a78bfa'
      monCtx.lineWidth = 3
      monCtx.beginPath()
      for (let x = 0; x < 420; x += 10) {
        const y = 340 + Math.sin(x * 0.05 + time * 4) * 25
        if (x === 0) monCtx.moveTo(45 + x, y)
        else monCtx.lineTo(45 + x, y)
      }
      monCtx.stroke()

      monCtx.fillStyle = '#a78bfa'
      monCtx.font = '14px monospace'
      monCtx.fillText('LIVE THROUGHPUT & EVENT STREAM', 45, 410)

      // Right Box: Live Code Terminal
      monCtx.fillStyle = '#11121d'
      monCtx.fillRect(520, 70, 480, 410)
      monCtx.strokeStyle = '#27293d'
      monCtx.strokeRect(520, 70, 480, 410)

      monCtx.fillStyle = '#a78bfa'
      monCtx.font = 'bold 18px monospace'
      monCtx.fillText('LANGGRAPH & RAG AGENT LOOP', 545, 110)

      monCtx.fillStyle = '#94a3b8'
      monCtx.font = '15px monospace'
      monCtx.fillText('class SammedPatil:', 545, 150)
      monCtx.fillText('    role = "Senior Python / Backend"', 545, 180)
      monCtx.fillText('    certs = ["AWS SAA", "LangGraph"]', 545, 210)
      monCtx.fillText('    async def execute_task(self):', 545, 240)
      monCtx.fillText('        await self.vector_search()', 545, 270)
      monCtx.fillText('        return "Mission Completed"', 545, 300)

      // Flashing cursor
      if (Math.sin(time * 6) > 0) {
        monCtx.fillStyle = '#38bdf8'
        monCtx.fillRect(545, 330, 12, 22)
      }

      monitorTexture.needsUpdate = true
    }

    const screenGeom = new THREE.PlaneGeometry(2.68, 1.34)
    const screenMat = new THREE.MeshBasicMaterial({
      map: monitorTexture,
    })
    const monitorScreen = new THREE.Mesh(screenGeom, screenMat)
    monitorScreen.position.set(0, 1.05, 0.038)
    monitorGroup.add(monitorScreen)

    // 5. Laptop (MacBook Pro style) on Left Side
    const laptopGroup = new THREE.Group()
    laptopGroup.position.set(-1.3, 0.065, 0.25)
    laptopGroup.rotation.y = 0.28 // Tilted towards center
    workstation.add(laptopGroup)

    // Base Chassis & Keyboard
    const lapBaseGeom = new THREE.BoxGeometry(0.88, 0.025, 0.6)
    const lapMat = new THREE.MeshStandardMaterial({ color: 0x282a36, metalness: 0.8, roughness: 0.3 })
    const lapBase = new THREE.Mesh(lapBaseGeom, lapMat)
    laptopGroup.add(lapBase)

    // Keyboard Bed & Trackpad
    const kbGeom = new THREE.BoxGeometry(0.76, 0.005, 0.32)
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x111218, roughness: 0.7 })
    const kbMesh = new THREE.Mesh(kbGeom, kbMat)
    kbMesh.position.set(0, 0.015, -0.07)
    laptopGroup.add(kbMesh)

    const padGeom = new THREE.BoxGeometry(0.3, 0.005, 0.18)
    const padMat = new THREE.MeshStandardMaterial({ color: 0x1f212d, metalness: 0.5, roughness: 0.4 })
    const trackpad = new THREE.Mesh(padGeom, padMat)
    trackpad.position.set(0, 0.015, 0.17)
    laptopGroup.add(trackpad)

    // Angled Laptop Screen
    const lapLid = new THREE.Group()
    lapLid.position.set(0, 0.015, -0.3)
    lapLid.rotation.x = -Math.PI / 1.55 // Open at ~115 degrees
    laptopGroup.add(lapLid)

    const lidFrameGeom = new THREE.BoxGeometry(0.88, 0.6, 0.018)
    const lidFrame = new THREE.Mesh(lidFrameGeom, lapMat)
    lidFrame.position.set(0, 0.3, 0)
    lapLid.add(lidFrame)

    // Laptop Screen Texture
    const lapCanvas = document.createElement('canvas')
    lapCanvas.width = 512
    lapCanvas.height = 340
    const lapCtx = lapCanvas.getContext('2d')
    if (lapCtx) {
      lapCtx.fillStyle = '#0f1016'
      lapCtx.fillRect(0, 0, 512, 340)

      lapCtx.fillStyle = '#38bdf8'
      lapCtx.font = 'bold 20px monospace'
      lapCtx.fillText('// roninfc_engine.py', 25, 40)

      lapCtx.fillStyle = '#34d399'
      lapCtx.font = '16px monospace'
      lapCtx.fillText('@router.post("/tournaments/schedule")', 25, 80)
      lapCtx.fillStyle = '#fafafa'
      lapCtx.fillText('async def schedule_bouts(event_id: str):', 25, 110)
      lapCtx.fillText('    pool = await init_celery()', 45, 140)
      lapCtx.fillText('    task = pool.dispatch(event_id)', 45, 170)
      lapCtx.fillText('    return {"status": "SUCCESS"}', 45, 200)

      lapCtx.fillStyle = '#a78bfa'
      lapCtx.fillText('// Verified p99 < 180ms', 25, 260)
      lapCtx.fillText('// AWS S3 + Razorpay Handlers', 25, 290)
    }
    const lapTexture = new THREE.CanvasTexture(lapCanvas)
    const lapScreenGeom = new THREE.PlaneGeometry(0.82, 0.54)
    const lapScreenMat = new THREE.MeshBasicMaterial({ map: lapTexture })
    const lapScreen = new THREE.Mesh(lapScreenGeom, lapScreenMat)
    lapScreen.position.set(0, 0.3, 0.01)
    lapLid.add(lapScreen)

    // 6. Mechanical Keyboard & Mouse in Center
    const kbMainGeom = new THREE.BoxGeometry(1.2, 0.035, 0.42)
    const kbMainMat = new THREE.MeshStandardMaterial({ color: 0x1e202b, metalness: 0.4, roughness: 0.5 })
    const mainKb = new THREE.Mesh(kbMainGeom, kbMainMat)
    mainKb.position.set(0, 0.08, 0.28)
    workstation.add(mainKb)

    // RGB Underglow Strip on Keyboard
    const rgbStripGeom = new THREE.BoxGeometry(1.22, 0.008, 0.44)
    const rgbStripMat = new THREE.MeshBasicMaterial({ color: THEMES.cyber.primaryLight })
    const rgbStrip = new THREE.Mesh(rgbStripGeom, rgbStripMat)
    rgbStrip.position.set(0, 0.07, 0.28)
    workstation.add(rgbStrip)

    // Ergonomic Gaming Mouse on Right
    const mouseGeom = new THREE.BoxGeometry(0.18, 0.05, 0.3)
    const mouseMat = new THREE.MeshStandardMaterial({ color: 0x181924, roughness: 0.4 })
    const mouse = new THREE.Mesh(mouseGeom, mouseMat)
    mouse.position.set(1.0, 0.09, 0.28)
    workstation.add(mouse)

    // 7. Developer Ceramic Coffee Mug
    const mugGeom = new THREE.CylinderGeometry(0.11, 0.09, 0.24, 24)
    const mugMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.3 })
    const mug = new THREE.Mesh(mugGeom, mugMat)
    mug.position.set(1.4, 0.18, 0.05)
    mug.castShadow = true
    workstation.add(mug)

    // 8. Server Tower / Mini AI Rig on Right Edge
    const towerGeom = new THREE.BoxGeometry(0.65, 1.4, 1.1)
    const towerMat = new THREE.MeshStandardMaterial({ color: 0x0c0d13, metalness: 0.8, roughness: 0.2 })
    const tower = new THREE.Mesh(towerGeom, towerMat)
    tower.position.set(2.05, 0.76, -0.3)
    tower.castShadow = true
    workstation.add(tower)

    // Front Glass RGB Vent on Tower
    const ventGeom = new THREE.PlaneGeometry(0.5, 1.1)
    const ventMat = new THREE.MeshBasicMaterial({ color: THEMES.cyber.secondaryLight, transparent: true, opacity: 0.6 })
    const vent = new THREE.Mesh(ventGeom, ventMat)
    vent.position.set(2.05, 0.76, 0.26)
    workstation.add(vent)

    // Activity LEDs on Tower
    const ledGeom = new THREE.SphereGeometry(0.02, 12, 12)
    const led1Mat = new THREE.MeshBasicMaterial({ color: 0x34d399 })
    const led1 = new THREE.Mesh(ledGeom, led1Mat)
    led1.position.set(2.05, 1.35, 0.26)
    workstation.add(led1)

    // 9. Modern Minimalist Desk Lamp on Left
    const lampGroup = new THREE.Group()
    lampGroup.position.set(-2.1, 0.06, -0.6)
    workstation.add(lampGroup)

    const lampBaseMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.2, 0.03, 24), standMat)
    lampGroup.add(lampBaseMesh)

    const lampStem = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.6, 16), standMat)
    lampStem.position.set(0, 0.8, 0)
    lampStem.rotation.z = -0.15
    lampGroup.add(lampStem)

    const lampHead = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.04, 0.1), standMat)
    lampHead.position.set(0.3, 1.55, 0.1)
    lampGroup.add(lampHead)

    const lampBulb = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.08), new THREE.MeshBasicMaterial({ color: 0xffffff }))
    lampBulb.rotation.x = Math.PI / 2
    lampBulb.position.set(0.3, 1.52, 0.1)
    lampGroup.add(lampBulb)

    // Mouse Parallax & Drag Rotation
    let mouseX = 0
    let mouseY = 0
    let targetRotY = 0
    let targetRotX = 0
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
        targetRotY += deltaX * 0.008
        targetRotX += deltaY * 0.005
        prevMouseX = e.clientX
        prevMouseY = e.clientY
      }
    }

    const onPointerDown = (e: MouseEvent) => {
      isDragging = true
      prevMouseX = e.clientX
      prevMouseY = e.clientY
    }

    const onPointerUp = () => {
      isDragging = false
    }

    container.addEventListener('mousemove', onPointerMove)
    container.addEventListener('mousedown', onPointerDown)
    window.addEventListener('mouseup', onPointerUp)

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
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Redraw live telemetry monitor screen
      drawMonitorScreen(elapsedTime)

      // Lerp Theme Light Colors
      const lights = themeLightsRef.current
      if (lights.lampLight && lights.targetPrimary) {
        lights.lampLight.color.lerp(lights.targetPrimary, 0.06)
      }
      if (lights.screenLight && lights.targetSecondary) {
        lights.screenLight.color.lerp(lights.targetSecondary, 0.06)
      }
      if (lights.underglowLight && lights.targetPrimary) {
        lights.underglowLight.color.lerp(lights.targetPrimary, 0.06)
      }

      // Tower Vent Pulse
      if (ventMat) {
        ventMat.opacity = 0.5 + Math.sin(elapsedTime * 3) * 0.25
      }

      // Smooth camera interpolation based on mouse parallax and drag
      if (!isDragging) {
        targetRotY = mouseX * 0.35
        targetRotX = mouseY * 0.2
      }

      workstation.rotation.y += (targetRotY - workstation.rotation.y) * 0.06
      workstation.rotation.x += (targetRotX - workstation.rotation.x) * 0.06

      // Gentle floating breathing effect
      workstation.position.y = Math.sin(elapsedTime * 1.5) * 0.04

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
      container.removeEventListener('mousemove', onPointerMove)
      container.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('mouseup', onPointerUp)

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }

      // Dispose Geometries and Materials
      deskTopGeom.dispose()
      deskMat.dispose()
      legGeom.dispose()
      legMat.dispose()
      matGeom.dispose()
      matMat.dispose()
      screenFrameGeom.dispose()
      screenFrameMat.dispose()
      screenGeom.dispose()
      screenMat.dispose()
      monitorTexture.dispose()
      lapBaseGeom.dispose()
      lapMat.dispose()
      lapTexture.dispose()
      towerGeom.dispose()
      towerMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-[520px] lg:h-[620px] flex items-center justify-center select-none">
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-300"
      />

      {/* Interactive Workstation Lighting Themes */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 p-1.5 bg-[#12131b]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
        {(Object.keys(THEMES) as DeskLightingTheme[]).map((theme) => {
          const t = THEMES[theme]
          const isSelected = activeTheme === theme
          return (
            <button
              key={theme}
              onClick={() => switchTheme(theme)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all flex items-center gap-2 ${
                isSelected
                  ? 'bg-white/15 text-white shadow-lg border border-white/20'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: `#${t.primaryLight.toString(16).padStart(6, '0')}`,
                  boxShadow: isSelected
                    ? `0 0 10px #${t.primaryLight.toString(16).padStart(6, '0')}`
                    : 'none',
                }}
              />
              <span>{t.label}</span>
            </button>
          )
        })}
      </div>

      {/* Floating 3D Desk Feature Badges */}
      <div className="hidden md:block absolute top-6 -left-4 z-10 pointer-events-none animate-[float_6s_ease-in-out_infinite]">
        <div className="bg-[#12131b]/90 backdrop-blur-md border border-purple-500/30 px-3.5 py-2 rounded-2xl text-xs font-mono text-purple-300 shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span>Python 3.12 • Django • Celery</span>
        </div>
      </div>

      <div className="hidden md:block absolute top-8 -right-4 z-10 pointer-events-none animate-[float_7s_ease-in-out_infinite_-2s]">
        <div className="bg-[#12131b]/90 backdrop-blur-md border border-cyan-500/30 px-3.5 py-2 rounded-2xl text-xs font-mono text-cyan-300 shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>PostgreSQL p99 &lt;180ms</span>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-16 -left-2 z-10 pointer-events-none animate-[float_8s_ease-in-out_infinite_-4s]">
        <div className="bg-[#12131b]/90 backdrop-blur-md border border-emerald-500/30 px-3.5 py-2 rounded-2xl text-xs font-mono text-emerald-300 shadow-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>AWS SAA-C03 • 99.9% Uptime</span>
        </div>
      </div>

      {/* Interaction Hint */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 text-[11px] font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-full border border-white/10 pointer-events-none backdrop-blur-md flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        3D Workstation • Drag to Rotate 360°
      </div>
    </div>
  )
}

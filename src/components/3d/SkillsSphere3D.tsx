import React, { useState, useEffect, useRef, useMemo } from 'react'

interface SkillItem {
  name: string
  category: 'backend' | 'ai' | 'cloud' | 'database' | 'async' | 'security'
  level: string
  color: string
}

const SKILLS_LIST: SkillItem[] = [
  // Backend & Core
  { name: 'Python', category: 'backend', level: 'Core Language • 4+ Years', color: '#a78bfa' },
  { name: 'Django / DRF', category: 'backend', level: 'Production REST APIs', color: '#a78bfa' },
  { name: 'FastAPI', category: 'backend', level: 'High-Speed Microservices', color: '#38bdf8' },
  { name: 'Microservices', category: 'backend', level: 'Distributed Architecture', color: '#a78bfa' },
  { name: 'System Design', category: 'backend', level: 'Scalable High-Availability', color: '#818cf8' },
  { name: 'RESTful APIs', category: 'backend', level: '50+ Production Endpoints', color: '#38bdf8' },

  // Distributed Systems & Async
  { name: 'Celery', category: 'async', level: 'Async Distributed Task Queues', color: '#34d399' },
  { name: 'Redis', category: 'async', level: 'Message Broker & Caching', color: '#f43f5e' },
  { name: 'Webhooks', category: 'async', level: 'Idempotent Event Handlers', color: '#38bdf8' },

  // AI & Automation
  { name: 'LangGraph', category: 'ai', level: 'Stateful Multi-Agent Workflows', color: '#a78bfa' },
  { name: 'RAG Pipelines', category: 'ai', level: 'OpenAI Vector Retrieval', color: '#34d399' },
  { name: 'AI Agents', category: 'ai', level: 'Autonomous Tool Calling', color: '#34d399' },
  { name: 'MCP (Model Context)', category: 'ai', level: 'Standardized Tool Serving', color: '#f59e0b' },
  { name: 'n8n Workflows', category: 'ai', level: 'Automation & Processing Queues', color: '#f472b6' },
  { name: 'Prompt Engineering', category: 'ai', level: 'Structured Output Reasoning', color: '#38bdf8' },

  // Cloud & DevOps
  { name: 'AWS (EC2, S3, IAM)', category: 'cloud', level: 'Certified Solutions Architect', color: '#f59e0b' },
  { name: 'Docker', category: 'cloud', level: 'Containerization', color: '#38bdf8' },
  { name: 'GitHub Actions CI/CD', category: 'cloud', level: 'Automated Deployments', color: '#34d399' },
  { name: 'Nginx & Gunicorn', category: 'cloud', level: 'Reverse Proxy & WSGI/ASGI', color: '#34d399' },
  { name: 'Linux', category: 'cloud', level: 'Production Server Ops', color: '#f59e0b' },

  // Databases & Security
  { name: 'PostgreSQL', category: 'database', level: 'Tuned ORM & Schema Design', color: '#38bdf8' },
  { name: 'Query Optimization', category: 'database', level: 'p99 1.2s → <180ms', color: '#34d399' },
  { name: 'JWT & RBAC', category: 'security', level: 'Enterprise Auth & OTP', color: '#a78bfa' },
  { name: 'Razorpay', category: 'security', level: 'Payment Gateway Integration', color: '#38bdf8' },
]

export default function SkillsSphere3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null)
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(SKILLS_LIST[0])

  const [rotation, setRotation] = useState({ rx: 0, ry: 0 })
  const rotationVelocity = useRef({ vx: 0.002, vy: 0.003 })
  const isDragging = useRef(false)
  const lastMousePos = useRef({ x: 0, y: 0 })
  const [radius, setRadius] = useState(200)

  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 640) setRadius(140)
      else if (window.innerWidth < 1024) setRadius(180)
      else setRadius(220)
    }
    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  const points = useMemo(() => {
    const total = SKILLS_LIST.length
    const offset = 2 / total
    const increment = Math.PI * (3 - Math.sqrt(5))

    return SKILLS_LIST.map((skill, i) => {
      const y = (i * offset - 1) + offset / 2
      const r = Math.sqrt(1 - y * y)
      const phi = i * increment
      const x = Math.cos(phi) * r
      const z = Math.sin(phi) * r

      return { skill, baseX: x, baseY: y, baseZ: z }
    })
  }, [])

  useEffect(() => {
    let animId: number
    const tick = () => {
      if (!isDragging.current && !hoveredSkill) {
        setRotation((prev) => ({
          rx: prev.rx + rotationVelocity.current.vx,
          ry: prev.ry + rotationVelocity.current.vy,
        }))
      }
      animId = requestAnimationFrame(tick)
    }
    animId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animId)
  }, [hoveredSkill])

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    lastMousePos.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    const deltaX = e.clientX - lastMousePos.current.x
    const deltaY = e.clientY - lastMousePos.current.y
    lastMousePos.current = { x: e.clientX, y: e.clientY }

    setRotation((prev) => ({
      rx: prev.rx - deltaY * 0.005,
      ry: prev.ry + deltaX * 0.005,
    }))
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const cosX = Math.cos(rotation.rx)
  const sinX = Math.sin(rotation.rx)
  const cosY = Math.cos(rotation.ry)
  const sinY = Math.sin(rotation.ry)

  const projectedSkills = points.map(({ skill, baseX, baseY, baseZ }) => {
    const x1 = baseX * cosY + baseZ * sinY
    const y1 = baseY
    const z1 = -baseX * sinY + baseZ * cosY

    const x2 = x1
    const y2 = y1 * cosX - z1 * sinX
    const z2 = y1 * sinX + z1 * cosX

    const distance = 400
    const scale = distance / (distance - z2 * radius)
    const px = x2 * radius * scale
    const py = y2 * radius * scale
    const opacity = (z2 + 1) / 2

    const isMatch = selectedCategory === 'all' || skill.category === selectedCategory

    return {
      skill,
      px,
      py,
      z2,
      scale,
      opacity: Math.max(0.2, opacity * (isMatch ? 1 : 0.25)),
      isMatch,
    }
  })

  projectedSkills.sort((a, b) => a.z2 - b.z2)

  return (
    <div className="w-full my-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {[
          { id: 'all', label: 'All Technologies' },
          { id: 'backend', label: 'Backend & APIs' },
          { id: 'async', label: 'Celery & Distributed Async' },
          { id: 'ai', label: 'AI & LangGraph' },
          { id: 'cloud', label: 'AWS & DevOps' },
          { id: 'database', label: 'PostgreSQL & DB' },
          { id: 'security', label: 'Auth & Razorpay' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-gradient-custom text-zinc-950 font-bold shadow-lg shadow-purple-500/20'
                : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* 3D Sphere Interactive Area */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="lg:col-span-8 relative h-[420px] sm:h-[480px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden rounded-3xl bg-zinc-950/40 border border-white/10 backdrop-blur-sm"
        >
          <div className="absolute w-48 h-48 rounded-full bg-purple-500/10 blur-[80px] pointer-events-none" />
          <div className="absolute w-36 h-36 rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none" />

          <div className="relative w-0 h-0 flex items-center justify-center">
            {projectedSkills.map(({ skill, px, py, scale, opacity, isMatch, z2 }) => {
              const isSelected = selectedSkill?.name === skill.name
              const isHovered = hoveredSkill?.name === skill.name

              return (
                <div
                  key={skill.name}
                  style={{
                    transform: `translate3d(${px}px, ${py}px, 0) scale(${scale})`,
                    opacity: opacity,
                    zIndex: Math.round(z2 * 1000 + 1000),
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  onClick={() => setSelectedSkill(skill)}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-colors duration-150 py-1.5 px-3 rounded-xl border text-xs sm:text-sm font-mono whitespace-nowrap backdrop-blur-md ${
                    isSelected
                      ? 'bg-white text-zinc-950 font-bold border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]'
                      : isHovered
                      ? 'bg-zinc-800 text-white border-purple-400 shadow-[0_0_15px_rgba(167,139,250,0.5)]'
                      : isMatch
                      ? 'bg-zinc-900/80 text-zinc-200 border-white/10 hover:border-white/30'
                      : 'bg-zinc-900/30 text-zinc-600 border-transparent'
                  }`}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: skill.color }}
                  />
                  {skill.name}
                </div>
              )
            })}
          </div>

          <div className="absolute bottom-3 left-4 text-[11px] font-mono text-zinc-500 pointer-events-none flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            3D Tech Globe • Drag to spin in 360° • Click node to inspect
          </div>
        </div>

        {/* Selected Skill Hologram Info Card */}
        <div className="lg:col-span-4">
          {selectedSkill ? (
            <div className="p-6 sm:p-8 rounded-3xl bg-[#12131b]/90 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-25"
                style={{ backgroundColor: selectedSkill.color }}
              />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider mb-4 border border-white/10 bg-white/5 text-zinc-400">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: selectedSkill.color }}
                />
                {selectedSkill.category}
              </div>

              <h4 className="text-2xl font-bold text-white mb-2">{selectedSkill.name}</h4>
              <p className="text-zinc-400 text-sm mb-6 font-mono">{selectedSkill.level}</p>

              <div className="space-y-3 border-t border-white/5 pt-4 text-xs font-mono text-zinc-300">
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-zinc-500">Production Experience</span>
                  <span className="text-emerald-400 font-semibold">4+ Years Active</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span className="text-zinc-500">Architectural Role</span>
                  <span className="text-cyan-400 font-semibold">Primary Backend Owner</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-zinc-500">Latency & SLAs</span>
                  <span className="text-purple-400 font-semibold">99.9% Production Uptime</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-mono font-semibold text-white bg-white/10 hover:bg-white/20 transition-all border border-white/10"
                >
                  View Systems Using {selectedSkill.name} →
                </a>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-3xl bg-zinc-900/30 border border-dashed border-white/10 text-center text-zinc-500 text-sm font-mono">
              Click any 3D node on the sphere to inspect architectural details.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import BackgroundCanvas3D from './components/3d/BackgroundCanvas3D'
import ScrollProgressBar3D from './components/3d/ScrollProgressBar3D'
import Scroll3DSection from './components/3d/Scroll3DSection'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import AIInnovation from './components/AIInnovation'
import ResumeSection from './components/Resume'
import GitHubSection from './components/GitHubSection'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CyberOS from './components/cyber-os/CyberOS'
import { FaTerminal } from 'react-icons/fa'

function App() {
  const [viewMode, setViewMode] = useState<'os' | 'classic'>(() => {
    return (localStorage.getItem('sammed_portfolio_mode') as 'os' | 'classic') || 'os'
  })

  const switchToClassic = () => {
    setViewMode('classic')
    localStorage.setItem('sammed_portfolio_mode', 'classic')
  }

  const switchToOS = () => {
    setViewMode('os')
    localStorage.setItem('sammed_portfolio_mode', 'os')
  }

  useEffect(() => {
    if (viewMode === 'classic') {
      // Smooth reveal on scroll
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active')
            }
          })
        },
        { threshold: 0.1 }
      )

      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
      return () => observer.disconnect()
    }
  }, [viewMode])

  if (viewMode === 'os') {
    return (
      <>
        <Loader />
        <CustomCursor />
        <CyberOS onSwitchToClassic={switchToClassic} />
      </>
    )
  }

  return (
    <>
      <ScrollProgressBar3D />
      <BackgroundCanvas3D />
      <Loader />
      <CustomCursor />
      <Navbar onSwitchToOS={switchToOS} />

      {/* Floating Quick Return to Cyber OS Button */}
      <button
        onClick={switchToOS}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#0c0e15]/90 backdrop-blur-xl border border-purple-500/40 text-white font-mono text-xs font-bold shadow-[0_10px_30px_rgba(168,85,247,0.35)] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        title="Return to 3D Cyber OS Desktop"
      >
        <div className="w-5 h-5 rounded-md bg-purple-600 flex items-center justify-center text-[10px]">
          <FaTerminal />
        </div>
        <span>Cyber OS Mode</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </button>

      <main className="relative z-10 overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* 3D Scroll Driven Section: About */}
        <Scroll3DSection id="about" tiltIntensity={8}>
          <About />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: Experience */}
        <Scroll3DSection id="experience" tiltIntensity={7}>
          <Experience />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: Projects */}
        <Scroll3DSection id="projects" tiltIntensity={7}>
          <Projects />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: AI & Innovation */}
        <Scroll3DSection id="ai" tiltIntensity={8}>
          <AIInnovation />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: Skills & 3D Globe */}
        <Scroll3DSection id="skills" tiltIntensity={6}>
          <Skills />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: Resume */}
        <Scroll3DSection id="resume" tiltIntensity={7}>
          <ResumeSection />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: GitHub */}
        <Scroll3DSection id="github" tiltIntensity={7}>
          <GitHubSection />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: Certifications */}
        <Scroll3DSection id="certifications" tiltIntensity={6}>
          <Certifications />
        </Scroll3DSection>

        {/* 3D Scroll Driven Section: Contact */}
        <Scroll3DSection id="contact" tiltIntensity={8}>
          <Contact />
        </Scroll3DSection>
      </main>

      <Footer />
    </>
  )
}

export default App

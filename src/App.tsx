import { useEffect } from 'react'
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

function App() {
  useEffect(() => {
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
  }, [])

  return (
    <>
      <ScrollProgressBar3D />
      <BackgroundCanvas3D />
      <Loader />
      <CustomCursor />
      <Navbar />

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

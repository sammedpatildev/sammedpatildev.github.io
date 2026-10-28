import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import BackgroundCanvas3D from './components/3d/BackgroundCanvas3D'
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
      <BackgroundCanvas3D />
      <Loader />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIInnovation />
        <ResumeSection />
        <GitHubSection />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

import ProfessionalNavbar from './components/professional/Navbar'
import ProfessionalHero from './components/professional/Hero'
import ProfessionalAbout from './components/professional/About'
import ProfessionalArchitectureVisualizer from './components/professional/ArchitectureVisualizer'
import ProfessionalExperience from './components/professional/Experience'
import ProfessionalProjects from './components/professional/Projects'
import ProfessionalSkills from './components/professional/Skills'
import ProfessionalCertificationsEducation from './components/professional/CertificationsEducation'
import ProfessionalResumeCenter from './components/professional/ResumeCenter'
import ProfessionalContact from './components/professional/Contact'
import ProfessionalFooter from './components/professional/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans antialiased relative">
      {/* Subtle modern developer ambient background glow */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-linear-grid opacity-60">
        <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(167,139,250,0.08),transparent_70%)]" />
        <div className="absolute top-[40%] right-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(56,189,248,0.04),transparent_70%)]" />
        <div className="absolute bottom-[10%] left-[-100px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(52,211,153,0.04),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        {/* Fixed Clean Navigation */}
        <ProfessionalNavbar />

        <main>
          {/* Hero Section with Large Portfolio Portrait */}
          <ProfessionalHero />

          {/* Profile & Biography */}
          <ProfessionalAbout />

          {/* Systems Architecture Workbench */}
          <ProfessionalArchitectureVisualizer />

          {/* Work Experience (Work History) */}
          <ProfessionalExperience />

          {/* Systems & Case Studies */}
          <ProfessionalProjects />

          {/* Technical Capabilities */}
          <ProfessionalSkills />

          {/* Certifications & Academic Degrees */}
          <ProfessionalCertificationsEducation />

          {/* Verified Resume Center */}
          <ProfessionalResumeCenter />

          {/* Direct Contact */}
          <ProfessionalContact />
        </main>

        {/* Professional Footer */}
        <ProfessionalFooter />
      </div>
    </div>
  )
}

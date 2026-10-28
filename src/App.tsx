import ProfessionalNavbar from './components/professional/Navbar'
import ProfessionalHero from './components/professional/Hero'
import ProfessionalAbout from './components/professional/About'
import ProfessionalExperience from './components/professional/Experience'
import ProfessionalProjects from './components/professional/Projects'
import ProfessionalSkills from './components/professional/Skills'
import ProfessionalCertificationsEducation from './components/professional/CertificationsEducation'
import ProfessionalResumeCenter from './components/professional/ResumeCenter'
import ProfessionalContact from './components/professional/Contact'
import ProfessionalFooter from './components/professional/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-white font-sans antialiased">
      {/* Fixed Clean Navigation */}
      <ProfessionalNavbar />

      <main>
        {/* Hero Section */}
        <ProfessionalHero />

        {/* Profile & Biography */}
        <ProfessionalAbout />

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
  )
}

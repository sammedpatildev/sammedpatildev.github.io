import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaBuilding, FaGlobeAmericas, FaBolt, FaCheckCircle } from 'react-icons/fa'

const experiences = [
  {
    period: '03/2022 – Present',
    title: 'Associate Software Engineer',
    company: 'AimedAt Solutions PVT LTD',
    location: 'Bengaluru, Karnataka, India',
    icon: <FaBuilding className="text-purple-400" />,
    badgeColor: '#a78bfa',
    summary: 'Driving end-to-end backend architecture, high-throughput REST APIs, distributed task processing, and database optimization across multiple enterprise SaaS products.',
    products: [
      {
        name: 'RoninFC (Combat Sports & Athlete Management Platform)',
        roleTag: 'Primary Backend Owner',
        points: [
          'Led backend platform design end-to-end from initial system requirements to production deployment.',
          'Engineered scalable REST APIs for athlete onboarding, coach management, event registrations, and automated tournament bracket scheduling.',
          'Integrated Razorpay payment gateway with robust webhook handlers for recurring subscriptions and automated media asset management using AWS S3.',
        ],
      },
      {
        name: 'MHealth (Healthcare Platform for Pregnant Women)',
        roleTag: 'Healthcare Systems',
        points: [
          'Designed secure healthcare APIs for doctor-patient scheduling, biometric medical metric tracking, and lab report processing.',
          'Developed custom algorithmic workflows for personalized, dynamic diet and nutrition recommendations.',
          'Built automated asynchronous reminder task queues using Celery and Redis message brokers.',
        ],
      },
      {
        name: 'CMDC (Cloud Hosting & Domain Reseller Platform)',
        roleTag: 'Cloud & Infrastructure Services',
        points: [
          'Engineered domain management and cloud hosting backend services.',
          'Refactored Django serializers and optimized ORM relationships to significantly improve overall API throughput.',
          'Built background job queues using Celery for automated, zero-touch domain provisioning.',
        ],
      },
      {
        name: 'Indina E-Commerce Platform',
        roleTag: 'High-Volume Microservices',
        points: [
          'Built resilient backend microservices for product catalogs, high-speed user carts, order execution, and checkout flows.',
          'Configured secure authentication APIs (JWT, OTP, RBAC) and integrated third-party payment gateways.',
        ],
      },
    ],
    optimizations: [
      'Tuned PostgreSQL ORM queries and index structures, dropping p99 response times from 1.2s to <180ms across high-traffic endpoints.',
      'Reduced main-thread latency by 40% by offloading heavy background workloads to Celery and Redis queues.',
      'Deployed microservices using AWS (EC2, S3), Docker, Nginx, Gunicorn, and GitHub Actions CI/CD with 99.9% uptime SLA.',
    ],
    tech: ['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'AWS (EC2, S3)', 'Docker', 'Nginx', 'Gunicorn', 'Razorpay', 'CI/CD'],
  },
  {
    period: '11/2024 – 03/2025',
    title: 'Freelance Frontend Developer (Contract)',
    company: 'KMA Labs',
    location: 'Virginia, USA (Remote)',
    icon: <FaGlobeAmericas className="text-cyan-400" />,
    badgeColor: '#38bdf8',
    summary: 'Engineered responsive web applications and high-performance interactive interfaces for international client services.',
    products: [
      {
        name: 'Service Marketplace Web Platform',
        roleTag: 'Frontend Engineering',
        points: [
          'Developed a mobile-first, responsive service marketplace web application using React.js, HTML5, and modern CSS3, increasing mobile user engagement by 25%.',
          'Built reusable UI components and integrated state management with backend RESTful APIs for dynamic data fetching.',
          'Optimized cross-browser compatibility, bundle sizes, and performance metrics to achieve top-tier Lighthouse audit scores (95+).',
        ],
      },
    ],
    optimizations: [
      'Engineered mobile UX improvements boosting engagement metrics by 25%.',
      'Refactored frontend bundle size and asset loading for sub-second first contentful paint.',
    ],
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'Lighthouse Optimization'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Track Record" />
        <SectionTitle highlight="Experience">Professional</SectionTitle>

        <div className="flex flex-col gap-10 mt-12">
          {experiences.map((exp) => (
            <Tilt3DCard
              key={exp.company}
              maxTilt={4}
              scale={1.01}
              glareColor={`${exp.badgeColor}20`}
              className="rounded-3xl"
            >
              <div className="bg-[#111219]/90 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shadow-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1">
                        <span className="text-base font-semibold" style={{ color: exp.badgeColor }}>
                          {exp.company}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs sm:text-sm text-zinc-400 font-mono">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono font-semibold text-white">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed py-6 font-mono border-b border-white/5">
                  {exp.summary}
                </p>

                {/* Sub-products grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  {exp.products.map((prod) => (
                    <div key={prod.name} className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <h4 className="text-sm font-bold text-white">{prod.name}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 border border-purple-500/30 text-purple-300 shrink-0">
                            {prod.roleTag}
                          </span>
                        </div>
                        <ul className="space-y-2">
                          {prod.points.map((pt, pIdx) => (
                            <li key={pIdx} className="text-xs text-zinc-400 flex items-start gap-2 leading-relaxed">
                              <span className="text-cyan-400 mt-0.5 shrink-0">▹</span>
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Optimizations & DevOps Impact */}
                {exp.optimizations && exp.optimizations.length > 0 && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/20 to-cyan-950/20 border border-emerald-500/20 mb-6">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-3">
                      <FaBolt /> Core Platform Optimization & DevOps SLA
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {exp.optimizations.map((opt, oIdx) => (
                        <li key={oIdx} className="text-xs text-zinc-300 flex items-start gap-2 font-mono leading-relaxed">
                          <FaCheckCircle className="text-emerald-400 mt-1 shrink-0 text-xs" />
                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 font-mono text-xs text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  )
}

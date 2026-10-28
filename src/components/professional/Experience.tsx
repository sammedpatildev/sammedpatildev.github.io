import { FaCalendarAlt, FaMapMarkerAlt, FaCheck, FaLayerGroup } from 'react-icons/fa'

export default function ProfessionalExperience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
            02. Professional Experience
          </span>
          <div className="h-[1px] flex-1 bg-zinc-800" />
        </div>

        <div className="space-y-12">
          {/* Experience 1: AimedAt Solutions PVT LTD */}
          <div className="relative pl-0 md:pl-8 border-l-0 md:border-l md:border-zinc-800 space-y-6">
            <div className="hidden md:block absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#09090b]" />

            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Associate Software Engineer</span>
                  <span className="text-zinc-500 font-normal">@</span>
                  <span className="text-zinc-200">AimedAt Solutions PVT LTD</span>
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded-full w-fit">
                  03/2022 – Present
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                <FaCalendarAlt className="text-zinc-500" />
                <span>March 2022 – Present</span>
                <span className="text-zinc-600">•</span>
                <FaMapMarkerAlt className="text-zinc-500" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            {/* Product Deliverables Grid */}
            <div className="space-y-6">
              {/* RoninFC */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                    <FaLayerGroup className="text-purple-400" />
                    <span>RoninFC (Combat Sports & Athlete Management Platform)</span>
                  </h4>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                    Primary Backend Owner
                  </span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Served as <strong>Primary Backend Owner</strong> leading platform design from requirements to deployment.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Engineered REST APIs for athlete onboarding, coach management, event registration, and automated tournament scheduling.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Integrated Razorpay payment gateway with webhook handlers for subscriptions and media management using AWS S3.</span>
                  </div>
                </div>
              </div>

              {/* MHealth */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2.5">
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <FaLayerGroup className="text-rose-400" />
                  <span>MHealth (Healthcare Platform for Pregnant Women)</span>
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Designed healthcare APIs for doctor-patient scheduling, medical metric tracking, and lab report processing.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Developed custom algorithm workflows for personalized dynamic diet recommendations.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Built automated reminder task queues using Celery & Redis.</span>
                  </div>
                </div>
              </div>

              {/* CMDC */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2.5">
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <FaLayerGroup className="text-cyan-400" />
                  <span>CMDC (Cloud Hosting & Domain Reseller Platform)</span>
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Developed domain management and cloud hosting backend services.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Refactored Django serializers and optimized ORM relationships to improve API throughput.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Built background job queues using Celery for automated domain provisioning.</span>
                  </div>
                </div>
              </div>

              {/* Indina E-Commerce */}
              <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2.5">
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <FaLayerGroup className="text-amber-400" />
                  <span>Indina E-Commerce Platform</span>
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Built backend microservices for product catalogs, user carts, order execution, and checkout flows.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Configured secure authentication APIs (JWT, OTP, RBAC) and third-party payment gateways.</span>
                  </div>
                </div>
              </div>

              {/* Core Platform Optimization & DevOps */}
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-2.5">
                <h4 className="text-sm font-bold text-emerald-300 font-mono">
                  Core Platform Optimization & DevOps (Across All Products)
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Tuned PostgreSQL ORM queries and indexing, dropping p99 response times from <strong>1.2s to &lt;180ms</strong> across high-traffic endpoints.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Reduced main-thread latency by <strong>40%</strong> by offloading asynchronous background tasks to Celery/Redis queues.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                    <span>Deployed microservices using <strong>AWS (EC2, S3), Docker, Nginx, Gunicorn</strong>, and GitHub Actions CI/CD with <strong>99.9% uptime</strong>.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="pt-2">
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['Python', 'Django', 'DRF', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'AWS EC2', 'AWS S3', 'Docker', 'Nginx', 'Gunicorn', 'GitHub Actions CI/CD', 'Razorpay', 'JWT', 'RBAC'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Experience 2: KMA Labs */}
          <div className="relative pl-0 md:pl-8 border-l-0 md:border-l md:border-zinc-800 space-y-4">
            <div className="hidden md:block absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-zinc-500 border-2 border-[#09090b]" />

            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Freelance Frontend Developer (Contract)</span>
                  <span className="text-zinc-500 font-normal">@</span>
                  <span className="text-zinc-200">KMA Labs</span>
                </h3>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800 px-2.5 py-0.5 rounded-full w-fit">
                  11/2024 – 03/2025
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                <FaCalendarAlt className="text-zinc-500" />
                <span>November 2024 – March 2025</span>
                <span className="text-zinc-600">•</span>
                <FaMapMarkerAlt className="text-zinc-500" />
                <span>Virginia, USA</span>
              </div>
            </div>

            {/* Bullets */}
            <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                <span>Developed a mobile-first, responsive service marketplace web application using <strong>React.js, HTML5, and CSS3</strong>, increasing mobile user engagement by <strong>25%</strong>.</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                <span>Built reusable UI components and integrated state management with backend RESTful APIs for dynamic data fetching.</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span className="text-emerald-400 mt-1 flex-shrink-0 text-xs"><FaCheck /></span>
                <span>Optimized cross-browser compatibility, bundle sizes, and performance metrics to achieve top-tier Lighthouse audit scores.</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="pt-1">
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Git'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

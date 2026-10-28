import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'
import Tilt3DCard from './3d/Tilt3DCard'
import { FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa'

const repos = [
  {
    name: 'Ai-Agent',
    desc: 'Autonomous AI Agent workflows implementing LangGraph, LangChain, and OpenAI tool-calling capabilities.',
    stars: 2,
    forks: 1,
    lang: 'Python',
  },
  {
    name: 'django_project_boilerplate',
    desc: 'Production-ready Django 5 / DRF boilerplate configured with Celery, Redis, Docker, and JWT authentication.',
    stars: 3,
    forks: 1,
    lang: 'Python',
  },
  {
    name: 'Diwali_sales_analysis',
    desc: 'Exploratory data analysis and predictive customer segmentation with Python and data science libraries.',
    stars: 1,
    forks: 0,
    lang: 'Jupyter Notebook',
  },
]

export default function GitHubSection() {
  return (
    <section id="github" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Open Source" />
        <SectionTitle highlight="Activity">GitHub &</SectionTitle>

        {/* 3D Repos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {repos.map((repo, idx) => (
            <Tilt3DCard
              key={repo.name}
              maxTilt={8}
              glareColor="rgba(167, 139, 250, 0.2)"
              className="rounded-3xl"
            >
              <motion.a
                href={`https://github.com/sammedp-aat/${repo.name}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group h-full bg-[#111219]/90 border border-white/10 rounded-3xl p-6 transition-all duration-300 block backdrop-blur-xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <FaGithub className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors font-mono truncate">
                        {repo.name}
                      </h4>
                      <span className="text-[10px] font-mono text-zinc-500">Public Repository</span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed font-mono mb-6 line-clamp-2">
                    {repo.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {repo.lang}
                  </span>
                  <div className="flex items-center gap-3 text-zinc-500">
                    <span className="flex items-center gap-1 hover:text-white transition-colors">
                      <FaStar className="text-[10px]" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 hover:text-white transition-colors">
                      <FaCodeBranch className="text-[10px]" /> {repo.forks}
                    </span>
                  </div>
                </div>
              </motion.a>
            </Tilt3DCard>
          ))}
        </div>

        {/* GitHub Callout Banner */}
        <div className="p-6 rounded-3xl bg-black/40 border border-white/10 text-center font-mono text-xs text-zinc-400 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
          <span>Explore repositories, branches, and commits directly on GitHub.</span>
          <a
            href="https://github.com/sammedp-aat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all font-semibold"
          >
            <FaGithub /> github.com/sammedp-aat →
          </a>
        </div>
      </div>
    </section>
  )
}

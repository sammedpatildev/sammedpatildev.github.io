import { motion } from 'framer-motion'
import SectionTag from './SectionTag'
import SectionTitle from './SectionTitle'

const repos = [
  { name: 'django_project_boilerplate', desc: 'A boilerplate Django project for quickly getting started', stars: 0, forks: 0, lang: 'Python' },
  { name: 'Ai-Agent', desc: 'AI Agent implementation with LangChain and OpenAI', stars: 0, forks: 0, lang: 'Python' },
  { name: 'Diwali_sales_analysis', desc: 'Sales analysis using Python and data science', stars: 0, forks: 0, lang: 'Jupyter Notebook' },
]

export default function GitHubSection() {
  return (
    <section id="github" className="px-4 sm:px-8 lg:px-16 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto">
        <SectionTag text="Open Source" />
        <SectionTitle highlight="Activity">GitHub</SectionTitle>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
        >
          {[
            { label: 'Repositories', value: '8' },
            { label: 'Stars', value: '3' },
            { label: 'Followers', value: '2' },
            { label: 'Following', value: '6' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#18181b] border border-white/5 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs text-[#a1a1aa] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Repos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/sammedp-aat/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-[#18181b] border border-white/5 rounded-xl p-5 hover:border-[#a78bfa4d] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-5 h-5 text-[#a78bfa] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <div>
                  <h4 className="text-sm font-semibold group-hover:text-[#a78bfa] transition-colors">{repo.name}</h4>
                  <p className="text-xs text-[#a1a1aa] mt-0.5 line-clamp-1">{repo.desc}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-[#a1a1aa]">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3572a5]" />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#18181b] border border-white/5 rounded-xl p-6 text-center"
        >
          <p className="text-sm text-[#a1a1aa]">
            <a
              href="https://github.com/sammedp-aat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a78bfa] hover:underline"
            >
              View full GitHub profile &rarr;
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

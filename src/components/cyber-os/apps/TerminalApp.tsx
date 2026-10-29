import React, { useState, useRef, useEffect } from 'react'

interface HistoryEntry {
  type: 'cmd' | 'output' | 'error'
  text: string
}

const COMMAND_HELP = [
  { cmd: 'help', desc: 'Display all available system commands' },
  { cmd: 'whoami', desc: 'Display engineer profile & background' },
  { cmd: 'projects', desc: 'List production platforms & architectures' },
  { cmd: 'skills', desc: 'View tech stack (Python, AWS, AI, Celery)' },
  { cmd: 'metrics', desc: 'View p99 latency & SLA benchmarks' },
  { cmd: 'contact', desc: 'Display verified phone, email, and LinkedIn' },
  { cmd: 'clear', desc: 'Clear the terminal window' },
]

export default function TerminalApp() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { type: 'output', text: 'SammedOS Kernel v4.2.0 (x86_64-cloud-aws)' },
    { type: 'output', text: 'Type "help" to view commands, or click the quick action chips below.' },
  ])
  const [inputVal, setInputVal] = useState('')
  const terminalEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim()
    if (!trimmed) return

    const newHistory: HistoryEntry[] = [...history, { type: 'cmd', text: `sammed@cloud:~$ ${trimmed}` }]
    const lower = trimmed.toLowerCase()

    switch (lower) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: COMMAND_HELP.map((c) => `  ${c.cmd.padEnd(12)} - ${c.desc}`).join('\n'),
        })
        break

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `Sammed Patil — Senior Python / Backend Engineer & AI Engineer
Location : Bangalore, Karnataka, India
Experience: 4+ Years designing & scaling high-throughput microservices
Stack    : Python, Django, DRF, FastAPI, PostgreSQL, Celery, Redis, AWS
AI Focus : LangGraph Multi-Agent Workflows, RAG Pipelines, MCP
Degrees  : MCA (Bangalore City University), BCA (RCU University)`,
        })
        break

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `[1] RoninFC — Combat Sports & Athlete Management Platform (Primary Backend Owner)
    Stack: Python, Django, DRF, PostgreSQL, Celery, Redis, AWS S3, Razorpay

[2] MHealth — Healthcare Platform for Pregnant Women (Dynamic Diet Algorithms)
    Stack: Python, Django, DRF, PostgreSQL, Celery, Redis, AWS, RBAC

[3] AI Agent & RAG Pipeline Suite (Generative AI & Autonomous Workflows)
    Stack: Python, OpenAI API, LangGraph, RAG, Vector DBs, FastAPI, n8n, MCP

[4] CMDC Cloud Hosting & Indina E-Commerce (Domain Queues & Microservices)
    Stack: Python, Django, DRF, PostgreSQL, Redis, Celery, Docker, JWT`,
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[Languages] Python, JavaScript, SQL (PostgreSQL, MySQL, SQLite)
[Backend]   Django, Django REST Framework, FastAPI, RESTful APIs, System Design
[Async]     Celery, Redis, Asynchronous Task Queues, Message Brokers, Webhooks
[Cloud]     AWS (EC2, S3, IAM), Docker, GitHub Actions CI/CD, Nginx, Gunicorn, Linux
[AI & RAG]  Generative AI, OpenAI API, RAG, AI Agents, LangGraph, MCP, n8n
[Security]  PostgreSQL Query Tuning, JWT, RBAC, OTP, Razorpay Gateways`,
        })
        break

      case 'metrics':
        newHistory.push({
          type: 'output',
          text: `✔ p99 Response Time : Dropped from 1.2s to <180ms via PostgreSQL ORM tuning
✔ Main-Thread Latency: Reduced by 40% via Celery/Redis async offloading
✔ Production Uptime  : 99.9% SLA on AWS (EC2, S3), Docker, Nginx, and GitHub CI/CD`,
        })
        break

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email   : patilsammed022@gmail.com
Phone   : +91 8217030162 / +91 8296257820
LinkedIn: https://linkedin.com/in/sammed-patil-dev
GitHub  : https://github.com/sammedpatildev
Location: Bangalore, Karnataka, India (Open to Relocation / Remote)`,
        })
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${trimmed}". Type "help" to see available commands.`,
        })
        break
    }

    setHistory(newHistory)
    setInputVal('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal)
    }
  }

  return (
    <div className="flex flex-col h-full font-mono text-xs sm:text-sm">
      {/* Quick Action Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pb-3 mb-3 border-b border-white/10 text-xs">
        <span className="text-zinc-500 mr-1">Quick:</span>
        {['whoami', 'projects', 'skills', 'metrics', 'contact', 'clear'].map((cmd) => (
          <button
            key={cmd}
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-purple-500/20 text-zinc-300 hover:text-purple-300 border border-white/5 transition-all cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2 leading-relaxed">
        {history.map((entry, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            {entry.type === 'cmd' ? (
              <span className="text-emerald-400 font-bold">{entry.text}</span>
            ) : entry.type === 'error' ? (
              <span className="text-rose-400">{entry.text}</span>
            ) : (
              <span className="text-zinc-300">{entry.text}</span>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Input Line */}
      <div className="flex items-center gap-2 pt-3 mt-2 border-t border-white/10 text-emerald-400">
        <span className="font-bold select-none">sammed@cloud:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          placeholder="type command (e.g. whoami, projects, metrics)..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-zinc-600 font-mono"
        />
      </div>
    </div>
  )
}

import { projects } from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="p-5 rounded-xl glass border border-white/5 hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-2">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => <span key={s} className="text-xs px-2 py-1 bg-white/5 rounded">{s}</span>)}
              </div>
              <div className="mt-4 text-sm text-slate-400">
                <ul className="list-disc pl-5 space-y-1">
                  {p.achievements.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
              <div className="mt-4 flex gap-3">
                <a className="text-sm text-cyan-300 hover:underline" href={p.liveUrl}>Live</a>
                <a className="text-sm text-slate-400 hover:underline" href={p.codeUrl}>Code</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

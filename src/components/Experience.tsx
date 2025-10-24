import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold">Experience</h2>
        <div className="mt-6 space-y-6">
          {experience.map((e) => (
            <article key={e.company} className="p-4 rounded-lg glass border border-white/5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{e.role} — {e.company}</h3>
                  <p className="text-sm text-slate-400">{e.duration}</p>
                </div>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-300 space-y-1">
                {e.achievements.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

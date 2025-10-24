import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span key={s} className="px-3 py-1 text-sm bg-white/5 rounded-md">{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

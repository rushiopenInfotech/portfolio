import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
  const [text] = useTypewriter({ words: ['Full Stack Developer', 'AI Chatbot Builder', 'Frontend Enthusiast'], loop: true, typeSpeed: 70, deleteSpeed: 50 })

  return (
    <section id="home" className="pt-28 pb-12">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Hello, I’m Rushikesh Yevale</h1>
            <p className="mt-3 text-cyan-300 font-medium">Based in Pune, India — Full Stack Developer</p>
            <p className="mt-6 text-lg max-w-xl text-slate-300">Motivated and self-driven full-stack developer with 1 year of experience building scalable web applications, integrating backend services, and deploying cloud-based solutions. Currently contributing to AI Chat Assist — an AI-powered chatbot platform.</p>

            <div className="mt-6 flex items-center gap-4">
              <a className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold text-white gradient-btn shadow" href="#contact">Contact Me</a>
              <span className="text-sm text-slate-400">{"I am a "}<span className="text-cyan-300 font-medium">{text}</span><Cursor cursorColor="#06b6d4" /></span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="glass rounded-2xl p-6 shadow-soft border border-white/5">
              <p className="text-sm text-slate-300">Highlights</p>
              <ul className="mt-4 space-y-2 text-slate-200">
                <li>• Building modern web apps with React + TypeScript</li>
                <li>• AI integrations, chatbots and automation</li>
                <li>• Cloud deployments and container workflows</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

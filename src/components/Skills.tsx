import { skills } from '../data/skills'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-brand text-transparent bg-clip-text"
          >
            Technical Skills
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-neutral-light dark:text-neutral-dark max-w-2xl mx-auto"
          >
            A comprehensive list of technologies and tools I work with to create amazing web experiences.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              className="group relative"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-10 rounded-xl blur transition-opacity duration-300" />
              
              {/* Skill pill */}
              <div className="relative px-5 py-2.5 rounded-xl bg-white/[0.03] backdrop-blur-sm border border-white/10 text-sm font-medium text-neutral-light dark:text-neutral-dark hover:text-brand-light dark:hover:text-brand-light transition-colors">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-40 w-64 h-64 bg-gradient-brand rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-64 h-64 bg-brand-cyan rounded-full opacity-10 blur-3xl" />
      </div>
    </section>
  )
}

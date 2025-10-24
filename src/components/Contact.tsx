import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
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
            Get In Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-lg text-neutral-light dark:text-neutral-dark max-w-2xl mx-auto"
          >
            Have a project in mind or just want to chat? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="relative group"
          >
            {/* Card background with glassmorphism */}
            <div className="absolute inset-0 bg-white/[0.02] dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl dark:shadow-black/20" />
            
            {/* Decorative gradient circles */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-cyan rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
            
            {/* Content */}
            <div className="relative p-8">
              <h3 className="text-2xl font-bold text-brand-light">Rushikesh Yevale</h3>
              <p className="mt-2 text-lg text-neutral-light dark:text-neutral-dark">
                Full Stack Developer — Pune, India
              </p>
              
              <div className="mt-8 space-y-4">
                <a 
                  href="tel:+919172782811" 
                  className="flex items-center gap-4 text-neutral-light dark:text-neutral-dark hover:text-brand-light transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                    <Phone size={20} />
                  </div>
                  <span>+91 9172782811</span>
                </a>
                
                <a 
                  href="mailto:rayevale2017@gmail.com"
                  className="flex items-center gap-4 text-neutral-light dark:text-neutral-dark hover:text-brand-light transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white/[0.03] border border-white/10">
                    <Mail size={20} />
                  </div>
                  <span>rayevale2017@gmail.com</span>
                </a>
              </div>

              <div className="mt-8 flex gap-4">
                <a 
                  href="https://github.com/rushiopenInfotech" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-light dark:text-neutral-dark hover:text-brand-light hover:border-brand-light/30 transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/rushikesh-yevale-769b311a9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.03] border border-white/10 text-neutral-light dark:text-neutral-dark hover:text-brand-light hover:border-brand-light/30 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Card background with glassmorphism */}
            <div className="absolute inset-0 bg-white/[0.02] dark:bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl dark:shadow-black/20" />
            
            {/* Content */}
            <form className="relative p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-neutral-light dark:text-neutral-dark mb-2">
                  Your Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-light dark:text-neutral-dark placeholder-neutral-light/50 dark:placeholder-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-light/20"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-light dark:text-neutral-dark mb-2">
                  Your Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-light dark:text-neutral-dark placeholder-neutral-light/50 dark:placeholder-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-light/20"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-light dark:text-neutral-dark mb-2">
                  Message
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-neutral-light dark:text-neutral-dark placeholder-neutral-light/50 dark:placeholder-neutral-dark/50 focus:outline-none focus:ring-2 focus:ring-brand-light/20 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-xl bg-gradient-brand text-white font-medium shadow-lg shadow-brand-light/20 hover:-translate-y-0.5 transition-transform"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/4 -left-40 w-64 h-64 bg-gradient-brand rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-64 h-64 bg-brand-cyan rounded-full opacity-10 blur-3xl" />
      </div>
    </section>
  )
}

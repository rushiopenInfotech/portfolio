import { motion } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Hero() {
  const [text] = useTypewriter({ 
    words: ['Full Stack Developer', 'AI Chatbot Builder', 'Frontend Enthusiast'], 
    loop: true, 
    typeSpeed: 70, 
    deleteSpeed: 50 
  })

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-light/5 via-transparent to-transparent dark:from-brand-light/10" />
      
      <div className="container relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Hello, I'm{" "}
                <span className="bg-gradient-brand text-transparent bg-clip-text">
                  Rushikesh Yevale
                </span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-brand-cyan font-medium tracking-wide">
                Based in Pune, India — Full Stack Developer
              </p>
              <p className="mt-6 text-base md:text-lg text-neutral-light dark:text-neutral-dark max-w-xl">
                Motivated full-stack developer with 1 year of experience building scalable web apps, 
                integrating backend services, and deploying cloud solutions. Currently contributing to{" "}
                <span className="text-brand-light">AI Chat Assist</span> — an AI-powered chatbot platform.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg bg-gradient-brand text-white font-semibold shadow-lg shadow-brand-light/20 hover:-translate-y-0.5 transition-transform"
                >
                  Contact Me
                </a>
                <div className="text-neutral-light dark:text-neutral-dark font-medium">
                  I am a{" "}
                  <span className="text-brand-light">{text}</span>
                  <Cursor cursorColor="#7B4BFF" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-brand rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-cyan rounded-full opacity-20 blur-2xl" />
              
              {/* Card */}
              <div className="relative bg-white/5 dark:bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <h3 className="font-semibold text-lg bg-gradient-brand text-transparent bg-clip-text">
                  Highlights
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    "Building modern web apps with React + TypeScript",
                    "AI integrations, chatbots and automation",
                    "Cloud deployments and container workflows"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
                      className="flex items-center gap-3 text-neutral-light dark:text-neutral-dark"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
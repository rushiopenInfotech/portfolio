import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingChat() {
  const openContact = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={openContact}
      aria-label="Open contact"
      className="fixed bottom-6 right-20 z-50 p-3.5 rounded-xl bg-gradient-brand text-white shadow-lg shadow-brand-light/20 backdrop-blur-sm hover:-translate-y-0.5 transition-transform"
    >
      <MessageCircle size={20} />

      {/* Animated ping effect */}
      <span className="absolute -top-0.5 -right-0.5 h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-brand-light"></span>
      </span>
    </motion.button>
  )
}

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import useTheme from '../hooks/useTheme'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [solid, setSolid] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsOpen(false)
    }
  }

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        solid ? 'py-4 backdrop-blur-xl bg-white/[0.02] dark:bg-slate-900/[0.8] shadow-lg shadow-black/[0.03] dark:shadow-black/[0.1]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container">
        <nav className="relative flex items-center justify-between">
          <motion.a 
            href="#home" 
            onClick={(e) => handleNav(e, '#home')} 
            className="text-xl font-bold bg-gradient-brand text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Rushikesh Yevale
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href)}
                  className="relative text-sm font-medium text-neutral-light dark:text-neutral-dark hover:text-brand-light dark:hover:text-brand-light transition-colors"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.button
              onClick={toggle}
              aria-label="Toggle theme"
              className="relative p-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] dark:bg-slate-800/40 dark:hover:bg-slate-800/60 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="relative w-5 h-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] dark:bg-slate-800/40 dark:hover:bg-slate-800/60"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] dark:bg-slate-800/40 dark:hover:bg-slate-800/60"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-4 py-4 px-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] shadow-xl md:hidden"
              >
                <div className="flex flex-col gap-3">
                  {links.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNav(e, link.href)}
                      className="text-sm font-medium text-neutral-light dark:text-neutral-dark hover:text-brand-light dark:hover:text-brand-light transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * i }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  )
}

import React, { useEffect, useState } from 'react'
import { Sun, Moon, Menu } from 'lucide-react'
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

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`fixed w-full z-30 transition-colors ${solid ? 'backdrop-blur bg-white/5 dark:bg-slate-900/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between py-4">
        <a href="#home" onClick={(e) => handleNav(e, '#home')} className="font-bold text-lg">Rushikesh Yevale</a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={(e) => handleNav(e, l.href)} className="text-sm hover:underline">
              {l.label}
            </a>
          ))}
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-white/5 dark:hover:bg-slate-800/40">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2 rounded-md"><Menu size={20} /></button>
        </div>
      </div>
    </header>
  )
}

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MotionStyle } from 'framer-motion'

interface MagneticLinkProps {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  className?: string
  target?: string
  rel?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  'data-testid'?: string
  id?: string
  style?: React.CSSProperties
}

export default function MagneticLink({
  children,
  href,
  onClick,
  className = '',
  target,
  rel,
  variant = 'secondary',
  style,
  ...props
}: MagneticLinkProps) {
  const particleFieldRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 200, damping: 18, mass: 0.5 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)
  const rotateX = useTransform(springY, [-20, 20], [8, -8])
  const rotateY = useTransform(springX, [-20, 20], [-8, 8])

  useEffect(() => {
    if (!particleFieldRef.current) return

    const particleField = particleFieldRef.current
    const particleCount = 25

    // Clear existing particles
    particleField.innerHTML = ''

    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'

      // Random position within the field
      const x = Math.random() * 150 - 75
      const y = Math.random() * 150 - 75
      const duration = 1.5 + Math.random() * 1.5

      particle.style.setProperty('--x', `${x}px`)
      particle.style.setProperty('--y', `${y}px`)
      particle.style.setProperty('--duration', `${duration}s`)
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      particleField.appendChild(particle)
    }
  }, [])

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2

    x.set(offsetX * 0.2)
    y.set(offsetY * 0.2)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const magneticStyles: MotionStyle = {
    x: springX,
    y: springY,
    rotateX,
    rotateY,
    transformPerspective: 600,
    ...(style as MotionStyle),
  }

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-brand text-white shadow-lg shadow-brand-light/20 hover:-translate-y-0.5'
      case 'secondary':
        return 'bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.05] text-neutral-light dark:text-neutral-dark hover:text-brand-light hover:border-brand-light/30'
      case 'ghost':
        return 'bg-transparent hover:bg-white/[0.05] border border-transparent hover:border-white/10 text-neutral-light dark:text-neutral-dark hover:text-brand-light'
      default:
        return ''
    }
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      className={`magnetic-link ${getVariantClasses()} ${className}`}
      style={magneticStyles}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span className="magnetic-content relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Particle Field */}
      <div className="particles-field" ref={particleFieldRef} />
    </motion.a>
  )
}

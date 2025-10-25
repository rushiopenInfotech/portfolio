import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'ghost'
  'data-testid'?: string
  id?: string
  style?: React.CSSProperties
}

export default function MagneticButton({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'primary',
  ...props
}: MagneticButtonProps) {
  const particleFieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!particleFieldRef.current) return

    const particleField = particleFieldRef.current
    const particleCount = 30

    // Clear existing particles
    particleField.innerHTML = ''

    // Generate particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle'

      // Random position within the field
      const x = Math.random() * 200 - 100
      const y = Math.random() * 200 - 100
      const duration = 1 + Math.random() * 2

      particle.style.setProperty('--x', `${x}px`)
      particle.style.setProperty('--y', `${y}px`)
      particle.style.setProperty('--duration', `${duration}s`)
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      particleField.appendChild(particle)
    }
  }, [])

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-brand text-white shadow-lg shadow-brand-light/20 hover:-translate-y-0.5'
      case 'secondary':
        return 'bg-white/[0.03] backdrop-blur-sm border border-white/10 hover:bg-white/[0.05]'
      case 'ghost':
        return 'bg-transparent hover:bg-white/[0.05] border border-transparent hover:border-white/10'
      default:
        return ''
    }
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`magnetic-button ${getVariantClasses()} ${className}`}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      {...props}
    >
      <span className="magnetic-content relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Particle Field */}
      <div className="particles-field" ref={particleFieldRef} />
    </motion.button>
  )
}

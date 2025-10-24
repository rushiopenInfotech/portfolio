import { useEffect, useState, useCallback } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'theme'

export function useTheme(initial?: Theme) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return initial ?? 'dark'
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null
    if (saved) return saved
    // fallback to prefers-color-scheme
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  const apply = useCallback((t: Theme) => {
    const root = document.documentElement
    if (t === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try {
      localStorage.setItem(STORAGE_KEY, t)
    } catch (e) {
      // ignore
      console.error(e)
    }
  }, [])

  useEffect(() => {
    apply(theme)
  }, [theme, apply])

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light')
    }
    const mq = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')
    if (mq && mq.addEventListener) mq.addEventListener('change', listener)
    return () => {
      if (mq && mq.removeEventListener) mq.removeEventListener('change', listener)
    }
  }, [])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])

  return { theme, setTheme, toggle }
}

export default useTheme

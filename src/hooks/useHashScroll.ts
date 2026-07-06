import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to hash anchor after route change, accounting for fixed navbar height
export function useHashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    // Give the page time to render before scrolling
    const id = hash.replace('#', '')
    const attempt = (tries: number) => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 100)
      }
    }
    setTimeout(() => attempt(5), 80)
  }, [pathname, hash])
}

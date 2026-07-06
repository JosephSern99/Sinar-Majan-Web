import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../data/content'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }

// Pages whose hero is dark (#1a1e2e) — navbar starts white text
const DARK_HERO_PAGES = ['/about', '/what-we-supply', '/global-reach', '/contact', '/oil-and-gas', '/aviation', '/hedge-fund']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isDarkHero = DARK_HERO_PAGES.includes(location.pathname)
  // Home hero is light (#f4f7f9), others are dark — but all start transparent
  // When transparent on home → dark text; on dark pages → white text
  const transparentTextColor = isDarkHero ? '#ffffff' : '#0f172a'
  const transparentSubColor = isDarkHero ? 'rgba(255,255,255,0.6)' : '#64748b'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
    // Re-evaluate scroll on page change
    setScrolled(window.scrollY > 40)
  }, [location.pathname])

  // Resolved colors based on scroll state
  const logoText = scrolled ? '#0f172a' : transparentTextColor
  const navText = scrolled ? '#64748b' : transparentSubColor
  const navTextHover = scrolled ? '#0f172a' : '#ffffff'
  const navTextActive = scrolled ? '#0d9488' : '#00d4aa'
  const hamburgerColor = scrolled ? '#64748b' : transparentTextColor

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(255,255,255,0.93)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.06)' : 'none',
        transition: 'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        ...font,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
            style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', boxShadow: '0 2px 8px rgba(13,148,136,0.3)' }}
          >
            SM
          </div>
          <span className="font-bold text-sm tracking-tight transition-colors duration-300" style={{ color: logoText }}>
            Sinar Majan
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: isActive ? navTextActive : navText }}
              >
                {link.label}
                {/* Active underline */}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-200"
                  style={{
                    background: navTextActive,
                    width: isActive ? '100%' : '0%',
                  }}
                />
                {/* Hover underline */}
                {!isActive && (
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-200"
                    style={{ background: navTextHover, opacity: 0.4 }}
                  />
                )}
              </Link>
            )
          })}

          <Link
            to="/contact"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105 flex items-center gap-1.5"
            style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', boxShadow: '0 2px 12px rgba(13,148,136,0.25)' }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg transition-all duration-200"
          style={{ color: hamburgerColor }}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={menuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* ── Premium mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              background: '#1a1e2e',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
            className="md:hidden"
          >
            {/* Nav links */}
            <div className="px-6 pt-6 pb-4 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const isActive = location.pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={link.href}
                      className="flex items-center justify-between py-3.5 px-4 rounded-xl transition-all duration-150 group"
                      style={{
                        background: isActive ? 'rgba(13,148,136,0.12)' : 'transparent',
                        border: isActive ? '1px solid rgba(13,148,136,0.2)' : '1px solid transparent',
                      }}
                    >
                      <span
                        className="text-sm font-semibold"
                        style={{ color: isActive ? '#00d4aa' : 'rgba(255,255,255,0.7)', ...font }}
                      >
                        {link.label}
                      </span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-150 group-hover:translate-x-0.5"
                        style={{ color: isActive ? '#00d4aa' : 'rgba(255,255,255,0.25)' }}
                      />
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Divider */}
            <div className="mx-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            {/* CTA block */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className="px-6 py-5"
            >
              <p className="text-xs font-medium mb-3 px-1" style={{ color: 'rgba(255,255,255,0.35)', ...font }}>
                Ready to source materials?
              </p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white py-3.5 rounded-xl transition-all duration-200 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', boxShadow: '0 4px 16px rgba(13,148,136,0.3)', ...font }}
              >
                Get a Quote
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../data/content'
import type { NavLink, NavChild } from '../../types'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }

const DARK_HERO_PAGES = ['/about', '/what-we-supply', '/global-reach', '/contact', '/oil-and-gas', '/aviation', '/hedge-fund']

// Which top-level path counts as "active" for a nav item
function isNavActive(link: NavLink, pathname: string): boolean {
  if (link.href) return pathname === link.href
  if (link.children) return link.children.some((c) => pathname === c.href)
  return false
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  const isDarkHero = DARK_HERO_PAGES.includes(location.pathname)
  const transparentText = isDarkHero ? '#ffffff' : '#0f172a'
  const transparentSub = isDarkHero ? 'rgba(255,255,255,0.65)' : '#64748b'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setOpenDropdown(null)
    setMobileExpanded(null)
    window.scrollTo(0, 0)
    setScrolled(window.scrollY > 40)
  }, [location.pathname])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const logoColor = scrolled ? '#0f172a' : transparentText
  const navColor = scrolled ? '#64748b' : transparentSub
  const navActive = scrolled ? '#0d9488' : (isDarkHero ? '#00d4aa' : '#0d9488')
  const chevronColor = scrolled ? '#94a3b8' : (isDarkHero ? 'rgba(255,255,255,0.45)' : '#94a3b8')

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
      <div ref={dropdownRef} className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between relative">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 z-10">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
            style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', boxShadow: '0 2px 8px rgba(13,148,136,0.3)' }}
          >
            SM
          </div>
          <span className="font-bold text-sm tracking-tight transition-colors duration-300" style={{ color: logoColor }}>
            Sinar Majan
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const active = isNavActive(link, location.pathname)
            const hasDropdown = !!link.children

            if (hasDropdown) {
              const isOpen = openDropdown === link.label
              return (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 group"
                    style={{ color: active ? navActive : navColor }}
                  >
                    {link.label}
                    <ChevronDown
                      size={13}
                      className="transition-transform duration-200"
                      style={{
                        color: chevronColor,
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.97 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute top-full left-0 pt-2 z-50"
                        style={{ minWidth: 280 }}
                      >
                        <div
                          style={{
                            background: '#0d1117',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: 14,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
                            overflow: 'hidden',
                          }}
                        >
                          {/* Dropdown header */}
                          <div
                            className="px-4 py-2.5 border-b"
                            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                          >
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)', ...font }}>
                              {link.label}
                            </span>
                          </div>

                          {/* Items */}
                          <div className="p-2">
                            {link.children!.map((child: NavChild) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="flex items-start gap-3 px-3 py-3 rounded-xl transition-all duration-150 group/item"
                                style={{
                                  opacity: child.soon ? 0.5 : 1,
                                  pointerEvents: child.soon ? 'none' : 'auto',
                                }}
                                onMouseEnter={(e) => {
                                  if (!child.soon) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                                }}
                                onMouseLeave={(e) => {
                                  (e.currentTarget as HTMLElement).style.background = 'transparent'
                                }}
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-0.5">
                                    <span className="text-sm font-semibold text-white" style={font}>
                                      {child.label}
                                    </span>
                                    {child.soon && (
                                      <span
                                        className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider"
                                        style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', ...font }}
                                      >
                                        Soon
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)', ...font }}>
                                    {child.desc}
                                  </span>
                                </div>
                                {!child.soon && (
                                  <ArrowRight
                                    size={13}
                                    className="mt-0.5 shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity"
                                    style={{ color: '#00d4aa' }}
                                  />
                                )}
                              </Link>
                            ))}
                          </div>

                          {/* View all footer */}
                          <div
                            className="px-4 py-2.5 border-t"
                            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                          >
                            <Link
                              to={link.children![0].href}
                              className="flex items-center gap-1.5 text-xs font-semibold transition-colors"
                              style={{ color: '#00d4aa', ...font }}
                            >
                              View all {link.label}
                              <ArrowRight size={11} />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }

            // Plain link
            if (link.disabled) {
              return (
                <span
                  key={link.href}
                  className="px-3 py-2 text-sm font-medium rounded-lg cursor-not-allowed select-none"
                  style={{ color: navColor, opacity: 0.4 }}
                >
                  {link.label}
                </span>
              )
            }

            return (
              <Link
                key={link.href}
                to={link.href!}
                className="px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-150 relative group"
                style={{ color: active ? navActive : navColor }}
              >
                {link.label}
                <span
                  className="absolute bottom-1 left-3 right-3 h-px transition-all duration-200"
                  style={{ background: navActive, opacity: active ? 1 : 0 }}
                />
              </Link>
            )
          })}

          <Link
            to="/contact"
            className="ml-3 text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', boxShadow: '0 2px 12px rgba(13,148,136,0.25)' }}
          >
            Get a Quote
          </Link>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg"
          style={{ color: scrolled ? '#64748b' : transparentText }}
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

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{
              background: '#0d1117',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            }}
            className="md:hidden"
          >
            <div className="px-4 pt-4 pb-2 flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => {
                const active = isNavActive(link, location.pathname)
                const hasDropdown = !!link.children
                const isExpanded = mobileExpanded === link.label

                if (hasDropdown) {
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      <button
                        onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                        className="w-full flex items-center justify-between py-3.5 px-4 rounded-xl"
                        style={{
                          background: active ? 'rgba(13,148,136,0.1)' : 'transparent',
                          border: active ? '1px solid rgba(13,148,136,0.18)' : '1px solid transparent',
                        }}
                      >
                        <span className="text-sm font-semibold" style={{ color: active ? '#00d4aa' : 'rgba(255,255,255,0.75)', ...font }}>
                          {link.label}
                        </span>
                        <ChevronDown
                          size={14}
                          className="transition-transform duration-200"
                          style={{ color: 'rgba(255,255,255,0.3)', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                        />
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 mb-2 flex flex-col gap-0.5 border-l" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                              {link.children!.map((child: NavChild) => (
                                <Link
                                  key={child.label}
                                  to={child.href}
                                  className="flex flex-col pl-4 py-2.5"
                                  style={{ opacity: child.soon ? 0.45 : 1, pointerEvents: child.soon ? 'none' : 'auto' }}
                                >
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-white" style={font}>{child.label}</span>
                                    {child.soon && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)', ...font }}>Soon</span>
                                    )}
                                  </div>
                                  <span className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.3)', ...font }}>{child.desc}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                }

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    {link.disabled ? (
                      <div
                        className="flex items-center justify-between py-3.5 px-4 rounded-xl cursor-not-allowed"
                        style={{ opacity: 0.35, border: '1px solid transparent' }}
                      >
                        <span className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.75)', ...font }}>
                          {link.label}
                        </span>
                      </div>
                    ) : (
                      <Link
                        to={link.href!}
                        className="flex items-center justify-between py-3.5 px-4 rounded-xl"
                        style={{
                          background: active ? 'rgba(13,148,136,0.1)' : 'transparent',
                          border: active ? '1px solid rgba(13,148,136,0.18)' : '1px solid transparent',
                        }}
                      >
                        <span className="text-sm font-semibold" style={{ color: active ? '#00d4aa' : 'rgba(255,255,255,0.75)', ...font }}>
                          {link.label}
                        </span>
                        <ArrowRight size={14} style={{ color: active ? '#00d4aa' : 'rgba(255,255,255,0.2)' }} />
                      </Link>
                    )}
                  </motion.div>
                )
              })}
            </div>

            <div className="mx-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              className="px-4 py-4"
            >
              <p className="text-xs font-medium mb-3 px-1" style={{ color: 'rgba(255,255,255,0.3)', ...font }}>Ready to source or enquire?</p>
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 text-sm font-semibold text-white py-3.5 rounded-xl"
                style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', boxShadow: '0 4px 16px rgba(13,148,136,0.3)', ...font }}
              >
                Get a Quote <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

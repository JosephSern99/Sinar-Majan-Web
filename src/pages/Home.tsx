import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Layers, Zap, Package, ShieldCheck, Truck, FileCheck, ShoppingCart, Droplets, Plane, TrendingUp } from 'lucide-react'
import Ticker from '../components/ui/Ticker'
import { STATS, PRODUCTS, DIFFERENTIATORS } from '../data/content'

const ICONS: Record<string, React.ElementType> = { layers: Layers, zap: Zap, package: Package }
const DIFF_ICONS = [ShoppingCart, ShieldCheck, Truck, FileCheck]

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

const BUSINESS_LINES = [
  {
    icon: Droplets,
    label: 'Oil & Gas Trading',
    sub: 'Diesel · Jet Fuel · LPG',
    desc: 'Buy and sell petroleum products sourced from regional refineries across Malaysia and Southeast Asia.',
    href: '/oil-and-gas',
    accent: '#f59e0b',
    live: true,
  },
  {
    icon: Layers,
    label: 'Metals & Materials',
    sub: 'Ferrous · Non-Ferrous · Industrial',
    desc: 'Mill-direct supply of structural steel, aluminium, copper, and industrial commodities for construction and manufacturing.',
    href: '/what-we-supply',
    accent: '#0d9488',
    live: true,
  },
  {
    icon: Plane,
    label: 'Aviation Trading',
    sub: 'Avtur · Jet A-1 · SAF',
    desc: 'Dedicated aviation fuel supply and management — into-plane services for commercial and private operators.',
    href: '/aviation',
    accent: '#60a5fa',
    live: false,
  },
  {
    icon: TrendingUp,
    label: 'Futures & Hedge Funds',
    sub: 'Derivatives · Hedging · Funds',
    desc: 'Commodity futures trading and institutional fund management across energy and metals markets.',
    href: '/hedge-fund',
    accent: '#a78bfa',
    live: false,
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: '#f4f7f9', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Decorative blobs */}
        <div className="absolute right-[-8%] top-[8%] w-[560px] h-[560px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)' }} />
        <div className="absolute right-[4%] top-[14%] w-[420px] h-[420px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(13,148,136,0.1)' }} />
        <div className="absolute right-[12%] top-[22%] w-[260px] h-[260px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(13,148,136,0.08)' }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold"
            style={{ ...font, background: 'rgba(13,148,136,0.08)', color: '#0d9488', border: '1px solid rgba(13,148,136,0.15)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
            Energy · Commodities · Metals · Malaysia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-slate-900 leading-[1.04] max-w-4xl mb-7"
            style={serif}
          >
            Energy & commodities,
            <br />
            <em className="not-italic" style={{ color: '#0d9488' }}>delivered.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg text-slate-500 max-w-xl leading-relaxed mb-10"
            style={font}
          >
            Sinar Majan trades oil & gas products, metals, and industrial commodities —
            sourced globally, delivered across Malaysia and Southeast Asia to operators,
            manufacturers, and project sites.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/oil-and-gas"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-8 py-4 rounded-xl transition-all duration-200 hover:opacity-90 hover:scale-105 group"
              style={{ ...font, background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)' }}
            >
              Explore Oil & Gas
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-slate-100"
              style={{ ...font, background: '#ffffff', color: '#0f172a', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>

        <Ticker />
      </section>

      {/* ── BUSINESS LINES ── */}
      <section style={{ background: '#1a1e2e' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ ...font, color: '#00d4aa' }}>/ What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={serif}>Our business lines</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BUSINESS_LINES.map((line, i) => {
              const Icon = line.icon
              return (
                <motion.div
                  key={line.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    to={line.href}
                    className="group flex flex-col h-full p-7 transition-all duration-200"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16 }}
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ background: `${line.accent}18`, border: `1px solid ${line.accent}30` }}
                      >
                        <Icon size={18} style={{ color: line.accent }} />
                      </div>
                      {!line.live && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)', ...font }}>
                          Soon
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold mb-1" style={{ color: line.accent, ...font }}>{line.sub}</div>
                    <h3 className="font-bold text-white mb-3 group-hover:opacity-90 transition-opacity" style={{ ...font, fontSize: 15 }}>{line.label}</h3>
                    <p className="text-xs leading-relaxed flex-1" style={{ ...font, color: '#64748b' }}>{line.desc}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2.5 transition-all" style={{ color: line.accent }}>
                      {line.live ? 'View details' : 'Learn more'}
                      <ArrowRight size={11} />
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`px-8 py-6 ${i < STATS.length - 1 ? 'border-r border-slate-100' : ''}`}
              >
                <div className="text-4xl lg:text-5xl font-bold text-slate-900 mb-1" style={serif}>{s.value}</div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-widest" style={font}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section style={{ background: '#f4f7f9' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-4" style={font}>/ 01 · Who We Are</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight" style={serif}>
              A global supply house built for{' '}
              <em className="not-italic text-slate-400">Malaysian industry.</em>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col gap-5"
          >
            <p className="text-slate-600 leading-relaxed" style={font}>
              We source ferrous metals, non-ferrous metals, and industrial commodities from
              production mills across Asia, the Middle East, and Europe — then fulfill bulk
              supply to engineering firms, construction sub-contractors, and manufacturers
              across Malaysia.
            </p>
            <p className="text-slate-600 leading-relaxed" style={font}>
              As an authorized dealer, we maintain certified supply chains, verified material
              traceability, and an established logistics network stretching from mill to project site.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors group w-fit mt-2"
              style={font}
            >
              About Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── PRODUCTS PREVIEW ── */}
      <section style={{ background: '#ffffff' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3" style={font}>/ 02 · Our Supply</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight" style={serif}>What we supply</h2>
            </div>
            <Link to="/what-we-supply" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-teal-600 transition-colors group shrink-0" style={font}>
              Metals catalogue <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {PRODUCTS.map((product, i) => {
              const Icon = ICONS[product.icon]
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card-glossy p-8 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.15)' }}
                  >
                    <Icon size={20} style={{ color: '#0d9488' }} />
                  </div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2" style={font}>0{i + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3" style={serif}>{product.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5" style={font}>{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.examples.slice(0, 4).map((ex) => (
                      <span
                        key={ex}
                        className="text-xs font-medium px-2.5 py-1 rounded-md"
                        style={{ background: '#f1f5f9', color: '#64748b', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: '#f4f7f9' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3" style={font}>/ 03 · Why Sinar Majan</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight" style={serif}>Built for serious B2B buyers.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = DIFF_ICONS[i]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-glossy p-6"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.12)' }}
                  >
                    <Icon size={18} style={{ color: '#0d9488' }} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2" style={font}>{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed" style={font}>{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Manifesto strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 card-glossy grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100"
          >
            {[
              { headline: 'No inflated margins.', sub: 'Mill-direct pricing passed on to you.' },
              { headline: 'No supply gaps.', sub: 'Global sourcing keeps stock available.' },
              { headline: 'No logistics guesswork.', sub: 'We coordinate delivery to your site.' },
            ].map(({ headline, sub }) => (
              <div key={headline} className="px-8 py-7">
                <div className="font-bold text-slate-800 mb-1.5" style={{ ...font, fontSize: 15 }}>{headline}</div>
                <div className="text-sm text-slate-500" style={font}>{sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={serif}
          >
            Ready to place an order?
          </motion.h2>
          <p className="text-teal-100 mb-10 max-w-md mx-auto" style={font}>
            Tell us what you need. Our team responds within 1 business day.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 px-10 py-4 rounded-xl transition-all duration-200 hover:scale-105 group"
            style={{ background: '#ffffff', ...font }}
          >
            Start a Conversation
            <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}

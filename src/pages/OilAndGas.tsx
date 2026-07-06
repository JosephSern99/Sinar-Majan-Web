import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Droplets, Flame, Wind, TrendingUp, Ship, Globe } from 'lucide-react'
import { useHashScroll } from '../hooks/useHashScroll'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

// Unsplash photo IDs — dark overlay ensures readability if any fail to load
const PHOTOS = {
  hero:    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1920&q=80',
  diesel:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
  jetfuel: 'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?auto=format&fit=crop&w=900&q=80',
  lpg:     'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=900&q=80',
}

const PRODUCTS = [
  {
    id: 'diesel',
    label: 'Gas Oil / Diesel',
    code: 'ULSD · EN 590',
    icon: Droplets,
    photo: PHOTOS.diesel,
    accent: '#f59e0b',
    headline: 'The fuel that moves Malaysia.',
    body: 'We buy and sell Ultra-Low Sulphur Diesel (ULSD) and Gas Oil for transportation fleets, power generation, marine bunkering, and industrial machinery. Sourced from regional refineries, delivered to your depot or project site.',
    specs: [
      { label: 'Grade', value: 'ULSD · EN 590 · Marine GO' },
      { label: 'Sulphur', value: '≤ 10 ppm (ULSD)' },
      { label: 'Delivery', value: 'Road tanker · Barge · Pipeline offtake' },
      { label: 'Min. Volume', value: 'From 50,000 litres' },
      { label: 'Pricing', value: 'PLATTS / ARGUS linked' },
    ],
    endUsers: ['Fleet operators', 'Power plants', 'Mining & quarrying', 'Marine vessels', 'Construction sites'],
  },
  {
    id: 'jetfuel',
    label: 'Jet Fuel',
    code: 'Avtur · Jet A-1',
    icon: Wind,
    photo: PHOTOS.jetfuel,
    accent: '#60a5fa',
    headline: 'Aviation-grade. Every time.',
    body: 'Jet A-1 (Avtur) supply for commercial aviation, private charter, military, and cargo operators. All product is sourced from IATA-certified refineries with full chain-of-custody documentation and quality certification on every parcel.',
    specs: [
      { label: 'Grade', value: 'Jet A-1 per DEF STAN 91-091' },
      { label: 'Flash Point', value: '≥ 38°C' },
      { label: 'Delivery', value: 'Into-plane · Into-tank · Ex-rack' },
      { label: 'Min. Volume', value: 'From 100,000 litres' },
      { label: 'Docs', value: 'CoQ · CoA · Mill cert included' },
    ],
    endUsers: ['Commercial airlines', 'Charter operators', 'Air cargo companies', 'FBOs', 'Government aviation'],
  },
  {
    id: 'lpg',
    label: 'LPG',
    code: 'Propane · Butane · Mix',
    icon: Flame,
    photo: PHOTOS.lpg,
    accent: '#a78bfa',
    headline: 'Clean energy for homes and industry.',
    body: 'Liquefied Petroleum Gas in bulk, cylinder, and autogas formats. Sourced from local refineries and regional traders — serving industrial manufacturers, hospitality, residential distributors, and commercial kitchens across Peninsular Malaysia.',
    specs: [
      { label: 'Grade', value: 'Commercial Propane / Butane / Mix' },
      { label: 'Purity', value: '≥ 95% (HD-5 Propane)' },
      { label: 'Delivery', value: 'Bulk tanker · Cylinder · Autogas' },
      { label: 'Min. Volume', value: 'From 5 MT (bulk)' },
      { label: 'Storage', value: 'Cylindrical & mounded bullet tanks' },
    ],
    endUsers: ['Manufacturers', 'Hospitality & catering', 'Residential distributors', 'Petrochemical plants', 'Retail auto-gas'],
  },
]

const HOW_WE_TRADE = [
  { icon: Globe, step: '01', title: 'Origination', body: 'We source product directly from refineries, national oil companies, and major traders across the Asia-Pacific and Middle East supply chain.' },
  { icon: Ship, step: '02', title: 'Logistics', body: 'Product is moved via road tanker, coastal barge, or pipeline offtake — coordinated to your depot, terminal, or job-site delivery schedule.' },
  { icon: TrendingUp, step: '03', title: 'Pricing', body: 'All pricing is referenced against PLATTS or ARGUS price assessments, with transparent premium/discount structures agreed upfront.' },
  { icon: Droplets, step: '04', title: 'Delivery & Docs', body: 'Every parcel comes with full documentation — Bill of Lading, Certificate of Quality, Certificate of Analysis, and quantity inspection reports.' },
]

export default function OilAndGas() {
  useHashScroll()
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="relative pt-36 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(13,17,23,0.88) 0%, rgba(26,30,46,0.96) 100%), url('${PHOTOS.hero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0d1117',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ ...font, color: '#f59e0b' }}
            className="text-xs font-semibold tracking-widest uppercase mb-6"
          >
            / Oil & Gas Trading
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
            style={{ ...serif, color: '#ffffff' }}
          >
            Fuelling Malaysia's
            <br />
            <em className="not-italic" style={{ color: '#f59e0b' }}>energy sector.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-lg max-w-xl leading-relaxed mb-10"
            style={{ ...font, color: '#94a3b8' }}
          >
            Sinar Majan trades Diesel, Jet Fuel, and LPG — sourced from regional
            refineries and delivered to operators, distributors, and project sites
            across Malaysia and Southeast Asia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white px-8 py-4 rounded-xl transition-all hover:opacity-90 hover:scale-105 group"
              style={{ background: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)', ...font }}
            >
              Request a Price Indication
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/10"
              style={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', ...font }}
            >
              Speak to a Trader
            </Link>
          </motion.div>
        </div>

        {/* Quick stats strip */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 16, overflow: 'hidden' }}>
            {[
              { value: '3', label: 'Products Traded' },
              { value: 'Spot & Term', label: 'Contract Types' },
              { value: 'PLATTS / ARGUS', label: 'Price Reference' },
              { value: 'MY · SG · ID', label: 'Delivery Markets' },
            ].map(({ value, label }) => (
              <div key={label} className="px-7 py-5" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="text-lg font-bold text-white mb-0.5" style={serif}>{value}</div>
                <div className="text-xs font-semibold uppercase tracking-widest" style={{ ...font, color: 'rgba(255,255,255,0.4)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE / SUPPLY / DEMAND strip (Gunvor style) ── */}
      <section style={{ background: '#0d1117', borderBottom: '1px solid rgba(255,255,255,0.06)' }} className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden' }}>
          {[
            { tag: 'USE', text: 'Transportation, power generation, aviation, industrial fuel, domestic cooking & heating' },
            { tag: 'SUPPLY', text: 'Regional refineries (MY, SG, KR, CN), major traders, NOCs, spot market cargoes' },
            { tag: 'DEMAND', text: 'Malaysia, Singapore, Indonesia — growing Southeast Asian energy consumption' },
          ].map(({ tag, text }) => (
            <div key={tag} className="px-7 py-6" style={{ background: '#111827' }}>
              <span
                className="inline-block text-xs font-black tracking-[0.15em] uppercase px-2.5 py-1 rounded mb-3"
                style={{ background: 'rgba(245,158,11,0.12)', color: '#f59e0b', ...font }}
              >
                {tag}
              </span>
              <p className="text-sm leading-relaxed" style={{ ...font, color: '#64748b' }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section style={{ background: '#0a0f14' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ ...font, color: '#f59e0b' }}>/ What We Trade</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={serif}>Three core products</h2>
          </div>

          <div className="flex flex-col gap-6">
            {PRODUCTS.map((p, i) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.id}
                  id={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="overflow-hidden"
                  style={{ borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)', scrollMarginTop: '88px' }}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Photo panel */}
                    <div
                      className="relative min-h-72 lg:min-h-80"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 100%), url('${p.photo}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundColor: '#1a1e2e',
                      }}
                    >
                      <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <span
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 w-fit"
                          style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}30`, ...font }}
                        >
                          <Icon size={12} />
                          {p.code}
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-2" style={serif}>{p.label}</h3>
                        <p className="text-sm text-white/60 leading-relaxed max-w-sm" style={font}>{p.headline}</p>
                      </div>
                    </div>

                    {/* Content panel */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between" style={{ background: '#111827' }}>
                      <div>
                        <p className="text-sm leading-relaxed mb-8" style={{ ...font, color: '#94a3b8' }}>{p.body}</p>

                        <div className="mb-8">
                          <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ ...font, color: 'rgba(255,255,255,0.25)' }}>Specifications</div>
                          <div className="flex flex-col gap-2.5">
                            {p.specs.map(({ label, value }) => (
                              <div key={label} className="flex items-start gap-3">
                                <span className="text-xs font-semibold uppercase tracking-wider min-w-[90px] mt-0.5" style={{ ...font, color: 'rgba(255,255,255,0.3)' }}>{label}</span>
                                <span className="text-xs font-medium" style={{ ...font, color: '#e2e8f0' }}>{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ ...font, color: 'rgba(255,255,255,0.25)' }}>End Users</div>
                          <div className="flex flex-wrap gap-2">
                            {p.endUsers.map((u) => (
                              <span
                                key={u}
                                className="text-xs font-medium px-2.5 py-1 rounded-lg"
                                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.07)', ...font }}
                              >
                                {u}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <Link
                        to="/contact"
                        className="mt-8 inline-flex items-center gap-2 text-xs font-semibold group w-fit"
                        style={{ color: p.accent, ...font }}
                      >
                        Enquire for {p.label}
                        <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE TRADE ── */}
      <section style={{ background: '#0d1117' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ ...font, color: '#f59e0b' }}>/ Trading Model</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white" style={serif}>How we buy and sell</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 20, overflow: 'hidden' }}>
            {HOW_WE_TRADE.map((step) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-8"
                  style={{ background: '#111827' }}
                >
                  <div className="text-xs font-black tracking-widest uppercase mb-5" style={{ ...font, color: 'rgba(255,255,255,0.2)' }}>{step.step}</div>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
                  >
                    <Icon size={18} style={{ color: '#f59e0b' }} />
                  </div>
                  <h3 className="font-bold text-white mb-3" style={{ ...font, fontSize: 15 }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ ...font, color: '#64748b' }}>{step.body}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMING SOON TEASERS ── */}
      <section style={{ background: '#0a0f14' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ ...font, color: 'rgba(255,255,255,0.3)' }}>/ Expanding Business Lines</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white" style={serif}>More verticals, coming soon</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Aviation Trading',
                sub: 'Jet fuel procurement, into-plane services, and aviation fuel management for commercial and private operators.',
                badge: 'In Development',
                href: '/aviation',
              },
              {
                title: 'Futures & Hedge Fund Management',
                sub: 'Commodity derivatives, hedging strategies, and fund management for institutional energy exposure.',
                badge: 'Coming Soon',
                href: '/hedge-fund',
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                className="group block p-8 transition-all duration-200"
                style={{ background: '#111827', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}
              >
                <span
                  className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5"
                  style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', ...font }}
                >
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors" style={serif}>{item.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ ...font, color: '#64748b' }}>{item.sub}</p>
                <span className="text-xs font-semibold flex items-center gap-1.5 group-hover:gap-2.5 transition-all" style={{ color: 'rgba(255,255,255,0.3)', ...font }}>
                  Learn more <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6" style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #f59e0b 100%)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5"
            style={serif}
          >
            Need a price indication?
          </motion.h2>
          <p className="text-amber-100 mb-10 max-w-md mx-auto" style={font}>
            Tell us your product, volume, delivery point, and timing.
            Our trading desk responds within 4 business hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold px-10 py-4 rounded-xl hover:scale-105 transition-all group"
            style={{ background: '#ffffff', color: '#92400e', ...font }}
          >
            Contact Our Trading Desk
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  )
}

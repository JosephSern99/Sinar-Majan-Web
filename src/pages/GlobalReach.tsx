import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Globe, Factory, Ship, Anchor } from 'lucide-react'
import Globe3D from '../components/ui/Globe3D'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

const SOURCE_REGIONS = [
  {
    region: 'East Asia',
    icon: Factory,
    countries: ['China', 'Japan', 'South Korea', 'Taiwan'],
    materials: 'Steel coils, structural sections, aluminium ingots, zinc, wire rods',
  },
  {
    region: 'South & Southeast Asia',
    icon: Ship,
    countries: ['India', 'Indonesia', 'Vietnam', 'Thailand'],
    materials: 'Billets, rebar, HR/CR coils, cement clinker, aggregates',
  },
  {
    region: 'Middle East',
    icon: Anchor,
    countries: ['UAE', 'Qatar', 'Saudi Arabia', 'Bahrain'],
    materials: 'Aluminium profiles, copper products, specialty steel, pipe fittings',
  },
  {
    region: 'Europe',
    icon: Globe,
    countries: ['Germany', 'Spain', 'Italy', 'Sweden'],
    materials: 'Stainless steel (304/316), specialty alloys, high-grade tool steel',
  },
]

const MALAYSIA_HUBS = [
  { city: 'Kuala Lumpur & Selangor', role: 'Headquarters & Primary Distribution', primary: true },
  { city: 'Johor Bahru', role: 'Southern Corridor Hub' },
  { city: 'Penang', role: 'Northern Distribution Centre' },
  { city: 'Perak', role: 'Industrial Corridor Supply' },
  { city: 'Pahang & Terengganu', role: 'East Coast Operations' },
  { city: 'Kedah & Kelantan', role: 'Northern & North-East Reach' },
]

const SECTORS = [
  { label: 'Government Open Tenders', desc: 'Registered supplier for public infrastructure procurement nationally.' },
  { label: 'Heavy Engineering', desc: 'Structural steel, fabrication metals, and specialty alloys for MEP and civil works.' },
  { label: 'Construction', desc: 'Rebar, sections, cement, and general building commodities at bulk rates.' },
  { label: 'Manufacturing Plants', desc: 'Ongoing supply agreements with consistent quality and delivery schedules.' },
  { label: 'Private Developers', desc: 'Commercial and residential projects requiring reliable bulk material supply.' },
]

export default function GlobalReach() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ background: '#1a1e2e' }} className="pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold tracking-widest uppercase text-teal-500 mb-6"
            style={font}
          >
            / Global Reach
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={serif}
          >
            Sourced globally.
            <br />
            <em className="not-italic" style={{ color: '#00d4aa' }}>Delivered locally.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed"
            style={font}
          >
            Our supply network spans mills across 4 continents — giving Malaysian
            buyers access to global-grade materials at competitive bulk pricing,
            fulfilled reliably through our established local logistics network.
          </motion.p>
        </div>
      </section>

      {/* Interactive World Map */}
      <section style={{ background: '#0d1117' }} className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ ...font, color: '#00d4aa' }}>/ Live Supply Network</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white" style={serif}>
                Global sourcing, converging on Malaysia
              </h2>
            </div>
            <p className="text-sm text-slate-400 max-w-xs" style={font}>
              Hover a source node to see what materials flow from each origin.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Globe3D />
          </motion.div>
        </div>
      </section>

      {/* Global sourcing grid */}
      <section style={{ background: '#f4f7f9' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3" style={font}>/ Source Network</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={serif}>Where we source from</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {SOURCE_REGIONS.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div
                  key={r.region}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="card-glossy p-8"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.15)' }}
                    >
                      <Icon size={22} style={{ color: '#0d9488' }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-1" style={font}>{r.region}</h3>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {r.countries.map((c) => (
                          <span
                            key={c}
                            className="text-xs font-medium px-2 py-0.5 rounded"
                            style={{ background: '#e6faf6', color: '#0d9488', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed" style={font}>{r.materials}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Malaysia distribution */}
      <section style={{ background: '#ffffff' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-4" style={font}>/ Local Distribution</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6" style={serif}>
                Peninsular Malaysia,
                <br />end-to-end.
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4" style={font}>
                Our logistics fulfillment network reaches all major states across Peninsular
                Malaysia — from the industrial corridors of Klang Valley to the southern
                manufacturing hubs of Johor and northern industrial zones of Penang.
              </p>
              <p className="text-slate-500 leading-relaxed" style={font}>
                East Malaysia supply available upon project enquiry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-glossy overflow-hidden"
            >
              <div className="px-7 py-4 border-b border-slate-100">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest" style={font}>Distribution Hubs</span>
              </div>
              <div className="divide-y divide-slate-50">
                {MALAYSIA_HUBS.map((hub) => (
                  <div key={hub.city} className="px-7 py-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800 text-sm" style={font}>{hub.city}</div>
                      <div className="text-xs text-slate-400 mt-0.5" style={font}>{hub.role}</div>
                    </div>
                    {hub.primary && (
                      <span
                        className="text-xs font-semibold px-2.5 py-1 rounded-full"
                        style={{ background: '#e6faf6', color: '#0d9488', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
                      >
                        HQ
                      </span>
                    )}
                  </div>
                ))}
                <div className="px-7 py-4 bg-slate-50">
                  <span className="text-xs text-slate-400 italic" style={font}>East Malaysia — upon enquiry</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section style={{ background: '#f4f7f9' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3" style={font}>/ Who We Serve</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={serif}>Sectors we supply</h2>
          </div>

          <div className="card-glossy divide-y divide-slate-100">
            {SECTORS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="px-8 py-6 grid sm:grid-cols-3 gap-4 items-center hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-slate-300 w-6" style={font}>0{i + 1}</span>
                  <h3 className="font-semibold text-slate-800" style={font}>{s.label}</h3>
                </div>
                <p className="sm:col-span-2 text-sm text-slate-500 leading-relaxed" style={font}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)' }}>
        <h2 className="text-3xl font-bold text-white mb-4" style={serif}>Ready to enquire?</h2>
        <p className="text-teal-100 mb-8 max-w-sm mx-auto" style={font}>
          Tell us your project location and material requirements.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 px-8 py-4 rounded-xl hover:scale-105 transition-all group"
          style={{ background: '#ffffff', ...font }}
        >
          Make an Enquiry
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </>
  )
}

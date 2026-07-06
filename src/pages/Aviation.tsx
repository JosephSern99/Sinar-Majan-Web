import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Plane, Fuel, Shield, Clock } from 'lucide-react'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

const FEATURES = [
  { icon: Plane, title: 'Into-Plane Services', body: 'Direct fuelling at airport apron — coordinated with ground handlers and fuel farm operators.' },
  { icon: Fuel, title: 'Avtur / Jet A-1', body: 'IATA-certified Jet A-1 supply to commercial, charter, cargo, and government aviation operators.' },
  { icon: Shield, title: 'Sustainable Aviation Fuel', body: 'SAF blending and certification programs to support airline decarbonisation targets.' },
  { icon: Clock, title: 'Fuel Management', body: 'Inventory management, price hedging advisory, and demand forecasting for airline fuel teams.' },
]

export default function Aviation() {
  return (
    <>
      <section
        className="relative pt-36 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10,15,25,0.92) 0%, rgba(15,23,42,0.97) 100%), url('https://images.unsplash.com/photo-1436891620584-47fd0e565afb?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#0a0f19',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(96,165,250,0.12)', color: '#60a5fa', border: '1px solid rgba(96,165,250,0.2)', ...font }}
          >
            In Development
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
            style={{ ...serif, color: '#ffffff' }}
          >
            Aviation
            <br />
            <em className="not-italic" style={{ color: '#60a5fa' }}>fuel trading.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-xl leading-relaxed mb-10"
            style={{ ...font, color: '#94a3b8' }}
          >
            Sinar Majan is building a dedicated aviation fuel trading division — offering
            Jet A-1 supply, into-plane services, and fuel management solutions for
            commercial and private aviation operators across Southeast Asia.
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
              style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)', ...font }}
            >
              Express Early Interest
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#0a0f14' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ ...font, color: '#60a5fa' }}>/ Planned Capabilities</p>
          <h2 className="text-3xl font-bold text-white mb-12" style={serif}>What we're building</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => {
              const Icon = f.icon
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-7"
                  style={{ background: '#111827', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}
                  >
                    <Icon size={18} style={{ color: '#60a5fa' }} />
                  </div>
                  <h3 className="font-bold text-white mb-2" style={font}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ ...font, color: '#64748b' }}>{f.body}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 p-8 text-center" style={{ background: '#111827', borderRadius: 16, border: '1px solid rgba(96,165,250,0.1)' }}>
            <p className="text-white font-semibold mb-2" style={font}>Launching in 2025–2026</p>
            <p className="text-sm mb-6" style={{ ...font, color: '#64748b' }}>
              Register your interest now and our team will contact you when this division goes live.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)', color: '#ffffff', ...font }}
            >
              Register Interest <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

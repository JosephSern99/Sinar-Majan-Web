import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, BarChart2, Lock, RefreshCw } from 'lucide-react'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

const FEATURES = [
  { icon: TrendingUp, title: 'Commodity Futures', body: 'Trading Brent, WTI, Gas Oil, and LPG futures on ICE and CME for price discovery and speculative positioning.' },
  { icon: Lock, title: 'Price Hedging', body: 'Structured hedging programmes for oil buyers and sellers — fixed price, collar, and swap strategies.' },
  { icon: BarChart2, title: 'Fund Management', body: 'Institutional-grade commodity fund exposure — systematic and discretionary strategies across energy and metals.' },
  { icon: RefreshCw, title: 'Risk Advisory', body: 'Market intelligence, price exposure analysis, and risk reporting for corporate treasury teams.' },
]

export default function HedgeFund() {
  return (
    <>
      <section
        className="relative pt-36 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5,10,20,0.94) 0%, rgba(15,20,40,0.97) 100%), url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#050a14',
        }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-8"
            style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.2)', ...font }}
          >
            Coming Soon
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight max-w-3xl mb-6"
            style={{ ...serif, color: '#ffffff' }}
          >
            Futures &
            <br />
            <em className="not-italic" style={{ color: '#a78bfa' }}>Hedge Fund.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-xl leading-relaxed mb-10"
            style={{ ...font, color: '#94a3b8' }}
          >
            Sinar Majan is expanding into commodity derivatives and institutional fund
            management — bringing structured hedging, futures trading, and risk advisory
            to energy buyers and investors across the region.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white px-8 py-4 rounded-xl transition-all hover:opacity-90 hover:scale-105 group"
              style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #a78bfa 100%)', ...font }}
            >
              Express Early Interest
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section style={{ background: '#050a14' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ ...font, color: '#a78bfa' }}>/ Planned Services</p>
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
                  style={{ background: '#0d1117', borderRadius: 16, border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}
                  >
                    <Icon size={18} style={{ color: '#a78bfa' }} />
                  </div>
                  <h3 className="font-bold text-white mb-2" style={font}>{f.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ ...font, color: '#475569' }}>{f.body}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 p-8 text-center" style={{ background: '#0d1117', borderRadius: 16, border: '1px solid rgba(167,139,250,0.1)' }}>
            <p className="text-white font-semibold mb-2" style={font}>Launching 2026</p>
            <p className="text-sm mb-6" style={{ ...font, color: '#475569' }}>
              Register your institutional interest and be first to hear when we launch.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-xl transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #a78bfa 100%)', color: '#ffffff', ...font }}
            >
              Register Interest <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

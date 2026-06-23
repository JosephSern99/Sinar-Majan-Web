import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { DIFFERENTIATORS } from '../data/content'

const font = { fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }
const serif = { fontFamily: "'Playfair Display', Georgia, serif" }

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section style={{ background: '#1a1e2e' }} className="pt-36 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ ...font, color: '#00d4aa' }}
            className="text-xs font-semibold tracking-widest uppercase mb-6"
          >
            / About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold leading-tight max-w-3xl"
            style={{ ...serif, color: '#ffffff' }}
          >
            Built on relationships.
            <br />
            <em className="not-italic" style={{ color: '#00d4aa' }}>Driven by reliability.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg max-w-xl leading-relaxed"
            style={{ ...font, color: '#94a3b8' }}
          >
            Two decades of bulk metals supply. One consistent promise — quality material,
            on time, at the right price.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#f4f7f9' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-5" style={font}>/ Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight mb-6" style={serif}>
              The backbone of Malaysian
              <br />industrial supply chains.
            </h2>
            <blockquote
              className="text-xl font-bold leading-snug border-l-4 pl-5 mb-0"
              style={{ ...serif, color: '#64748b', borderColor: '#0d9488' }}
            >
              <em>"Where others see complexity,<br />we see the supply chain."</em>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            {[
              'Sinar Majan was established to serve a clear and underserved market need: reliable, direct-sourced bulk supply of metals and industrial commodities for the businesses that build Malaysia.',
              'Operating as a high-volume B2B vendor, we source from production mills and primary importers across Asia, the Middle East, and Europe — acting as central market intermediaries who break bulk quantities into workable order sizes for every scale of operation.',
              'Over more than two decades, we have built an established logistics network and a reputation for consistency — fulfilling government open tenders, private infrastructure projects, and ongoing manufacturing supply agreements across Peninsular Malaysia.',
            ].map((text, i) => (
              <p key={i} className="text-slate-600 leading-relaxed" style={font}>{text}</p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How we operate */}
      <section style={{ background: '#ffffff' }} className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 mb-3" style={font}>/ How We Operate</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900" style={serif}>Our operating model</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DIFFERENTIATORS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-glossy p-7"
              >
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ ...font, color: '#cbd5e1' }}
                >
                  0{i + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2" style={font}>{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed" style={font}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: '#1a1e2e' }} className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-slate-700/50">
          {[
            { label: 'Integrity', desc: 'Every transaction is traceable. Certifications on every order.' },
            { label: 'Reliability', desc: 'We deliver on time, on spec, every time — or we find a solution.' },
            { label: 'Partnership', desc: 'Long-term supply relationships built on trust, not just transactions.' },
          ].map(({ label, desc }) => (
            <div key={label} className="md:px-10 first:pl-0 last:pr-0">
              <h3 className="text-2xl font-bold text-white mb-3" style={serif}>{label}</h3>
              <p className="text-sm leading-relaxed" style={{ ...font, color: '#94a3b8' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#f4f7f9' }} className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-5" style={serif}>Work with us.</h2>
        <p className="text-slate-500 mb-10 max-w-sm mx-auto" style={font}>
          Ready to streamline your materials supply chain? Let's talk.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white px-10 py-4 rounded-xl hover:opacity-90 hover:scale-105 transition-all group"
          style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)', ...font }}
        >
          Start a Conversation
          <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </section>
    </>
  )
}

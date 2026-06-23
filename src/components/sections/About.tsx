import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, TrendingUp, Award } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
              About Sinar Majan
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
              The backbone of Malaysian industrial supply chains.
            </h2>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Sinar Majan operates as a high-volume B2B metals and commodities vendor, sourcing
              directly from production mills and primary importers. We break bulk quantities into
              accessible volumes for engineering firms, sub-contractors, and factories across
              Peninsular Malaysia.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              As an authorized dealer and central market intermediary, we maintain verified supply
              chains and logistics fulfillment networks — from government open tenders to private
              manufacturing buyers.
            </p>
          </motion.div>

          {/* Right — cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid sm:grid-cols-1 gap-4"
          >
            {[
              {
                icon: Building2,
                title: 'Mill-Direct Sourcing',
                desc: 'Procured directly from production mills and primary importers, cutting out unnecessary intermediaries.',
              },
              {
                icon: TrendingUp,
                title: 'Bulk-to-Accessible',
                desc: 'We break large mill quantities into order sizes that work for smaller engineering and construction operations.',
              },
              {
                icon: Award,
                title: 'Verified & Certified',
                desc: 'Material certifications and traceability on every supply order, meeting industry compliance requirements.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl bg-zinc-800/60 border border-zinc-700/50 hover:border-teal-500/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
                  <Icon size={20} className="text-teal-400" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{title}</div>
                  <div className="text-zinc-400 text-sm mt-1 leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShoppingCart, ShieldCheck, Truck, FileCheck } from 'lucide-react'
import { DIFFERENTIATORS } from '../../data/content'

const ICONS = [ShoppingCart, ShieldCheck, Truck, FileCheck]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-us" className="py-24 px-4 bg-zinc-900">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
            Why Sinar Majan
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            Built for serious B2B buyers.
          </h2>
          <p className="mt-4 text-zinc-400 text-lg">
            We exist to make bulk material procurement straightforward, reliable, and cost-efficient
            for Malaysian industry.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-teal-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Manifesto strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-700 border border-zinc-700 rounded-2xl overflow-hidden"
        >
          {[
            { headline: 'No inflated margins.', sub: 'Mill-direct pricing passed to you.' },
            { headline: 'No supply uncertainty.', sub: 'Established dealer network keeps stock moving.' },
            { headline: 'No logistics headaches.', sub: 'We coordinate delivery to your site or project.' },
          ].map(({ headline, sub }) => (
            <div key={headline} className="px-8 py-7 bg-zinc-800/30">
              <div className="text-white font-bold text-lg">{headline}</div>
              <div className="text-zinc-400 text-sm mt-1">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

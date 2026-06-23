import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Zap, Package } from 'lucide-react'
import { PRODUCTS } from '../../data/content'

const ICONS: Record<string, React.ElementType> = {
  layers: Layers,
  zap: Zap,
  package: Package,
}

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white">
            What we supply
          </h2>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Three core product tracks covering the full spectrum of industrial metals and
            commodity needs for Malaysian construction and manufacturing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((product, i) => {
            const Icon = ICONS[product.icon]
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-teal-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-teal-500/0 group-hover:bg-teal-500/[0.03] transition-colors" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{product.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">{product.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {product.examples.map((ex) => (
                      <span
                        key={ex}
                        className="text-xs bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1 rounded-full"
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

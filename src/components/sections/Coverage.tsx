import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

const REGIONS = [
  'Kuala Lumpur & Selangor',
  'Johor Bahru',
  'Penang',
  'Perak',
  'Negeri Sembilan',
  'Melaka',
  'Pahang',
  'Kedah & Perlis',
  'Kelantan & Terengganu',
]

export default function Coverage() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="coverage" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">
              Distribution Reach
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-white leading-tight">
              Peninsular Malaysia,
              <br />
              end-to-end.
            </h2>
            <p className="mt-6 text-zinc-400 text-lg leading-relaxed">
              Our logistics and supply network spans all major states across Peninsular Malaysia.
              Whether you're running a government infrastructure project or a private manufacturing
              line, we have the reach and capacity to deliver on time.
            </p>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              We actively serve government open tenders, local engineering firms, and private
              sub-contractors — with established fulfillment routes across industrial corridors.
            </p>
          </motion.div>

          {/* Right — region grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="text-zinc-400 text-sm font-medium mb-6 uppercase tracking-wider">
              States Served
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {REGIONS.map((region) => (
                <div key={region} className="flex items-center gap-3 text-zinc-300 text-sm">
                  <MapPin size={14} className="text-teal-400 shrink-0" />
                  {region}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-zinc-800 text-sm text-zinc-500">
              East Malaysia supply available upon enquiry.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

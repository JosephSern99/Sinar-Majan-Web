import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const REGIONS = [
  { state: 'Kuala Lumpur & Selangor', note: 'Primary Hub' },
  { state: 'Johor Bahru', note: 'Southern Corridor' },
  { state: 'Penang', note: 'Northern Hub' },
  { state: 'Perak', note: 'Industrial Corridor' },
  { state: 'Negeri Sembilan', note: 'Central Region' },
  { state: 'Melaka', note: 'Southern Region' },
  { state: 'Pahang', note: 'East Coast' },
  { state: 'Kedah & Perlis', note: 'Northern Region' },
  { state: 'Kelantan', note: 'North-East' },
  { state: 'Terengganu', note: 'East Coast' },
  { state: 'Putrajaya & Cyberjaya', note: 'Government Precinct' },
]

const SECTORS = [
  { name: 'Government Open Tenders', desc: 'Registered supplier for public infrastructure procurement across all states.' },
  { name: 'Engineering Firms', desc: 'Structural steel, fabrication steel, and specialty metals for mechanical and civil engineering.' },
  { name: 'Construction Sub-Contractors', desc: 'Bulk rebar, formwork materials, and general construction commodities.' },
  { name: 'Manufacturing Plants', desc: 'Ongoing supply agreements for production lines requiring consistent material quality.' },
  { name: 'Private Developers', desc: 'Commercial and residential construction materials at competitive bulk rates.' },
]

export default function Coverage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0A0A0A] pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6"
          >
            / Coverage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            State by state,
            <br />
            <em className="text-stone-500">project by project.</em>
          </motion.h1>
        </div>
      </section>

      {/* States grid */}
      <section className="bg-[#FAFAF8] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">/ Distribution Reach</p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Peninsular Malaysia,
                <br />
                end-to-end.
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                Our logistics and fulfillment network spans all 11 states and federal territories
                across Peninsular Malaysia. From the industrial corridors of Selangor to the
                southern manufacturing hubs of Johor, we deliver on time and on spec.
              </p>
              <p className="text-stone-500 leading-relaxed">
                East Malaysia supply is available upon enquiry for larger project requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-stone-200"
            >
              <div className="px-8 py-5 border-b border-stone-200">
                <span className="text-xs tracking-widest uppercase text-stone-400 font-medium">States Served</span>
              </div>
              <div className="divide-y divide-stone-100">
                {REGIONS.map((r) => (
                  <div key={r.state} className="px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin size={12} className="text-stone-300 shrink-0" />
                      <span className="text-sm text-[#0A0A0A] font-medium">{r.state}</span>
                    </div>
                    <span className="text-xs text-stone-400">{r.note}</span>
                  </div>
                ))}
                <div className="px-8 py-4 bg-stone-50">
                  <span className="text-xs text-stone-400 italic">East Malaysia — upon enquiry</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors served */}
      <section className="bg-[#F4F4F0] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">/ Who We Serve</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0A0A0A]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Sectors we supply
            </h2>
          </div>

          <div className="divide-y divide-stone-200 border-t border-stone-200">
            {SECTORS.map((sector, i) => (
              <motion.div
                key={sector.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="py-8 grid sm:grid-cols-3 gap-4 items-center"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-stone-300 w-6">0{i + 1}</span>
                  <h3 className="font-semibold text-[#0A0A0A]">{sector.name}</h3>
                </div>
                <p className="sm:col-span-2 text-sm text-stone-500 leading-relaxed">{sector.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A0A0A] py-20 px-6 text-center">
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Are we in your area?
        </h2>
        <p className="text-stone-500 mb-8 max-w-sm mx-auto">
          Get in touch with your project location and requirements — we'll confirm coverage and lead times.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-white text-white text-xs tracking-widest uppercase font-semibold px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-all group"
        >
          Check Availability
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  )
}

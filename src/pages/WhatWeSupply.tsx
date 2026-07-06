import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Zap, Package } from 'lucide-react'
import { PRODUCTS } from '../data/content'
import { useHashScroll } from '../hooks/useHashScroll'

const ICONS: Record<string, React.ElementType> = { layers: Layers, zap: Zap, package: Package }

const FERROUS_ITEMS = [
  { name: 'Mild Steel Bars (Round & Deformed)', spec: 'Dia 6mm–50mm, Grade 250/460' },
  { name: 'Steel Plates (HR & CR)', spec: 'Thickness 3mm–100mm, Width up to 2500mm' },
  { name: 'Steel Pipes & Hollow Sections', spec: 'CHS, RHS, SHS — various schedules' },
  { name: 'I-Beams & H-Beams (Universal)', spec: 'UB/UC 100×100 to 356×406' },
  { name: 'Wire Rods', spec: 'Grade SAE 1006–1018, Coil form' },
  { name: 'Angle Bars & Channel Sections', spec: 'Equal & unequal legs, 25mm–200mm' },
  { name: 'Cast Iron Products', spec: 'Grey CI, Ductile CI, various grades' },
]

const NON_FERROUS_ITEMS = [
  { name: 'Aluminium Sheets & Plates', spec: 'Alloy 1100, 5052, 6061 — T0 to T6' },
  { name: 'Aluminium Extrusions & Profiles', spec: 'Standard & custom profiles available' },
  { name: 'Copper Pipes & Tubes', spec: 'ASTM B88 — Type K, L, M' },
  { name: 'Copper Bus Bars & Sheets', spec: 'ETP, OFHC — various tempers' },
  { name: 'Stainless Steel (304 / 316)', spec: 'Sheets, bars, pipes — 2B, BA, No.4 finish' },
  { name: 'Brass Bars & Fittings', spec: 'CZ121, CZ131 — rods, tubes, fittings' },
  { name: 'Zinc Alloys & Ingots', spec: 'Zamak alloys, SHG Zinc ingots' },
]

const COMMODITY_ITEMS = [
  { name: 'Ordinary Portland Cement (OPC)', spec: 'MS EN 197-1 certified, 50kg bags or bulk' },
  { name: 'Sand, Gravel & Aggregates', spec: 'Fine/coarse aggregate, crusher run' },
  { name: 'PVC Pipes & Conduits', spec: 'BS/MS standard, pressure & drainage class' },
  { name: 'Roofing Materials', spec: 'Corrugated iron, zinc sheets, colorsteel' },
  { name: 'Structural Fasteners', spec: 'Bolts, nuts, washers — Grade 4.6 to 10.9' },
  { name: 'Industrial Chemical Compounds', spec: 'Lubricants, rust inhibitors, coatings' },
]

function ProductSection({
  product,
  items,
  index,
}: {
  product: (typeof PRODUCTS)[0]
  items: { name: string; spec: string }[]
  index: number
}) {
  const Icon = ICONS[product.icon]
  return (
    <section id={product.id} className={`py-24 px-6 ${index % 2 === 0 ? 'bg-[#FAFAF8]' : 'bg-[#F4F4F0]'}`} style={{ scrollMarginTop: '88px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="w-12 h-12 border border-stone-200 flex items-center justify-center mb-8">
              <Icon size={20} className="text-stone-400" />
            </div>
            <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">0{index + 1}</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {product.title}
            </h2>
            <p className="text-stone-500 leading-relaxed mb-8">{product.description}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold border border-[#0A0A0A] px-6 py-3 hover:bg-[#0A0A0A] hover:text-white transition-all group"
            >
              Enquire Now
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — item list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="divide-y divide-stone-200 border-t border-stone-200">
              {items.map((item) => (
                <div key={item.name} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="font-medium text-[#0A0A0A] text-sm">{item.name}</span>
                  <span className="text-xs text-stone-400 shrink-0">{item.spec}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function WhatWeSupply() {
  useHashScroll()
  const sections = [
    { product: PRODUCTS[0], items: FERROUS_ITEMS },
    { product: PRODUCTS[1], items: NON_FERROUS_ITEMS },
    { product: PRODUCTS[2], items: COMMODITY_ITEMS },
  ]

  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0A0A0A] pt-36 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.3em] uppercase text-stone-500 mb-6"
          >
            / What We Supply
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl font-bold text-white leading-tight max-w-3xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            A diversified physical supply portfolio,{' '}
            <em className="text-stone-500">sourced with precision.</em>
          </motion.h1>
        </div>
      </section>

      {/* Product Sections */}
      {sections.map(({ product, items }, i) => (
        <ProductSection key={product.id} product={product} items={items} index={i} />
      ))}

      {/* Bottom CTA */}
      <section className="bg-[#0A0A0A] py-20 px-6 text-center">
        <h2
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Can't find what you need?
        </h2>
        <p className="text-stone-500 mb-8">We source on request. Tell us the specification.</p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 border border-white text-white text-xs tracking-widest uppercase font-semibold px-8 py-4 hover:bg-white hover:text-[#0A0A0A] transition-all group"
        >
          Make an Enquiry
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </>
  )
}

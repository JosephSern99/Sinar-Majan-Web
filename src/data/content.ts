import type { Product, Differentiator } from '../types'

export const NAV_LINKS = [
  { label: 'What We Supply', href: '/what-we-supply' },
  { label: 'About', href: '/about' },
  { label: 'Global Reach', href: '/global-reach' },
  { label: 'Contact', href: '/contact' },
]

export const TICKER_ITEMS = [
  { label: 'MILD STEEL BAR', price: 'RM 2,850/t', change: '+1.2%', up: true },
  { label: 'HOT ROLLED COIL', price: 'RM 3,120/t', change: '-0.8%', up: false },
  { label: 'ALUMINIUM INGOT', price: 'RM 9,450/t', change: '+0.5%', up: true },
  { label: 'COPPER CATHODE', price: 'RM 38,200/t', change: '-1.1%', up: false },
  { label: 'STAINLESS STEEL 304', price: 'RM 12,800/t', change: '+0.3%', up: true },
  { label: 'WIRE ROD', price: 'RM 2,650/t', change: '-0.6%', up: false },
  { label: 'H-BEAM', price: 'RM 3,900/t', change: '+0.9%', up: true },
  { label: 'CEMENT OPC', price: 'RM 420/t', change: '-0.2%', up: false },
  { label: 'STEEL PIPE', price: 'RM 4,200/t', change: '+0.7%', up: true },
  { label: 'ZINC INGOT', price: 'RM 11,800/t', change: '+0.4%', up: true },
]

export const STATS = [
  { value: '20+', label: 'Years in Operation' },
  { value: '500+', label: 'Clients Served' },
  { value: '12+', label: 'Source Countries' },
  { value: '3', label: 'Continents Sourced' },
]

export const PRODUCTS: Product[] = [
  {
    id: 'ferrous',
    title: 'Ferrous Metals',
    description:
      'Raw and semi-finished ferrous metals sourced directly from production mills — the backbone of construction, fabrication, and heavy engineering.',
    examples: ['Mild Steel Bars', 'Steel Plates', 'Steel Pipes', 'I-Beams & H-Beams', 'Wire Rods', 'Cast Iron'],
    icon: 'layers',
  },
  {
    id: 'non-ferrous',
    title: 'Non-Ferrous Metals',
    description:
      'High-grade non-ferrous metals and alloys for precision engineering, electrical, and architectural applications across Malaysia.',
    examples: ['Aluminium Sheets', 'Copper Pipes', 'Stainless Steel', 'Brass Fittings', 'Zinc Alloys', 'Titanium'],
    icon: 'zap',
  },
  {
    id: 'industrial',
    title: 'Industrial Commodities',
    description:
      'Essential baseline commodities serving production factories and construction sub-contractors at competitive bulk pricing.',
    examples: ['Cement', 'Sand & Aggregates', 'PVC Pipes', 'Roofing Materials', 'Structural Fasteners', 'Chemical Compounds'],
    icon: 'package',
  },
]

export const DIFFERENTIATORS: Differentiator[] = [
  {
    title: 'Mill-Direct Sourcing',
    description: 'We buy directly from production mills and primary importers — removing unnecessary intermediaries and passing savings to you.',
  },
  {
    title: 'Authorized Dealer',
    description: 'Certified dealer status with full material traceability and certifications on every order.',
  },
  {
    title: 'Local Logistics',
    description: 'Established fulfillment routes across all major industrial corridors in Peninsular Malaysia.',
  },
  {
    title: 'Government Tender Ready',
    description: 'Registered supplier for government open tenders and public infrastructure supply contracts.',
  },
]

export const PRODUCT_INTEREST_OPTIONS = [
  'Ferrous Metals',
  'Non-Ferrous Metals',
  'Industrial Commodities',
  'Mixed / Multiple Categories',
  'Other',
]

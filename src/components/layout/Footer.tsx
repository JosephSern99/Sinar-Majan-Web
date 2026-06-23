import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../data/content'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: '#1a1e2e',
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
      }}
      className="text-slate-400 py-16 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-slate-700/50">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-black"
                style={{ background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)' }}
              >
                SM
              </div>
              <span className="text-white font-bold text-sm">Sinar Majan</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-6">
              Authorized bulk dealer of ferrous & non-ferrous metals and industrial
              commodities. Globally sourced. Delivered across Malaysia.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              {[
                { icon: Phone, text: '+60 XX-XXXX XXXX' },
                { icon: Mail, text: 'enquiry@sinarmajan.com.my' },
                { icon: MapPin, text: 'Kuala Lumpur, Malaysia' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-slate-400">
                  <Icon size={14} className="text-teal-500 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-600 font-semibold mb-5">Navigation</div>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Supply */}
          <div>
            <div className="text-xs tracking-widest uppercase text-slate-600 font-semibold mb-5">What We Supply</div>
            <div className="flex flex-col gap-3 text-sm text-slate-500">
              <span>Ferrous Metals</span>
              <span>Non-Ferrous Metals</span>
              <span>Industrial Commodities</span>
              <Link to="/contact" className="mt-2 text-teal-400 hover:text-teal-300 transition-colors font-medium">
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-600">
          <span>© {year} Sinar Majan. All rights reserved.</span>
          <span>SSM Registered · Globally Sourced · Malaysia Delivered</span>
        </div>
      </div>
    </footer>
  )
}

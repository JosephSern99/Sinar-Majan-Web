import { TICKER_ITEMS } from '../../data/content'

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="overflow-hidden select-none py-3"
      style={{ background: '#1a1e2e', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="ticker-track flex items-center whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-5">
            <span
              className="text-[11px] font-semibold tracking-widest uppercase"
              style={{ color: '#64748b', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {item.label}
            </span>
            <span
              className="text-[11px] font-bold"
              style={{ color: '#e2e8f0', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {item.price}
            </span>
            <span
              className={`text-[11px] font-semibold ${item.up ? 'text-emerald-400' : 'text-red-400'}`}
              style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {item.up ? '▲' : '▼'} {item.change}
            </span>
            <span style={{ color: '#334155', marginLeft: 8, marginRight: 4 }}>·</span>
          </span>
        ))}
      </div>
    </div>
  )
}

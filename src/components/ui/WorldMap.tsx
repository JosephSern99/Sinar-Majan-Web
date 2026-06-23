import { useState, useEffect, useRef } from 'react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps'

const GEO_URL = '/world-110m.json'

// Malaysia = destination hub
const MALAYSIA: [number, number] = [101.69, 3.14]

interface SourceNode {
  name: string
  city: string
  coords: [number, number]
  material: string
  color: string
}

const SOURCES: SourceNode[] = [
  { name: 'China', city: 'Shanghai', coords: [121.47, 31.23], material: 'Steel coils · Wire rods · Structural sections', color: '#f59e0b' },
  { name: 'Japan', city: 'Tokyo', coords: [139.69, 35.69], material: 'Specialty steel · Precision alloys', color: '#f59e0b' },
  { name: 'South Korea', city: 'Seoul', coords: [126.98, 37.57], material: 'HR/CR coils · Stainless steel', color: '#f59e0b' },
  { name: 'India', city: 'Mumbai', coords: [72.87, 19.08], material: 'Billets · Rebar · Aggregates', color: '#a78bfa' },
  { name: 'UAE', city: 'Dubai', coords: [55.30, 25.26], material: 'Aluminium profiles · Copper · Pipe fittings', color: '#a78bfa' },
  { name: 'Germany', city: 'Hamburg', coords: [10.00, 53.55], material: 'Stainless 304/316 · Specialty alloys', color: '#60a5fa' },
]

function PulsingDot({ color }: { color: string }) {
  return (
    <g>
      <circle r={6} fill={color} opacity={0.9} />
      <circle r={6} fill={color} opacity={0}>
        <animate attributeName="r" values="6;16;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle r={6} fill={color} opacity={0}>
        <animate attributeName="r" values="6;22;6" dur="2s" begin="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </g>
  )
}

function AnimatedLine({
  from,
  to,
  color,
  delay,
}: {
  from: [number, number]
  to: [number, number]
  color: string
  delay: number
}) {
  const id = `line-${from[0].toFixed(0)}-${from[1].toFixed(0)}`
  return (
    <g>
      {/* Static dim track */}
      <Line
        from={from}
        to={to}
        stroke={color}
        strokeWidth={0.6}
        strokeOpacity={0.15}
        strokeLinecap="round"
      />
      {/* Animated flowing dash */}
      <Line
        from={from}
        to={to}
        stroke={color}
        strokeWidth={1.2}
        strokeOpacity={0.8}
        strokeLinecap="round"
        style={{
          strokeDasharray: '6 200',
          strokeDashoffset: 0,
          animation: `flow-${id} 3s linear ${delay}s infinite`,
        }}
      />
      <style>{`
        @keyframes flow-${id} {
          0%   { stroke-dashoffset: 200; stroke-opacity: 0; }
          10%  { stroke-opacity: 0.9; }
          80%  { stroke-opacity: 0.7; }
          100% { stroke-dashoffset: -40; stroke-opacity: 0; }
        }
      `}</style>
    </g>
  )
}

interface TooltipState {
  node: SourceNode | null
  x: number
  y: number
}

export default function WorldMap() {
  const [tooltip, setTooltip] = useState<TooltipState>({ node: null, x: 0, y: 0 })
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ background: '#0d1117', borderRadius: 20, border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Radial glow behind Malaysia */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '48%', left: '70%',
          width: 300, height: 300,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Legend */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {[
          { color: '#f59e0b', label: 'East Asia' },
          { color: '#a78bfa', label: 'South Asia & Middle East' },
          { color: '#60a5fa', label: 'Europe' },
          { color: '#00d4aa', label: 'Destination (Malaysia)' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
            />
            <span
              className="text-[10px] font-semibold"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {tooltip.node && (
        <div
          className="absolute z-20 pointer-events-none"
          style={{
            left: tooltip.x + 14,
            top: tooltip.y - 10,
            background: 'rgba(15,23,42,0.96)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 10,
            padding: '10px 14px',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
            minWidth: 200,
          }}
        >
          <div
            className="text-xs font-bold text-white mb-0.5"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            {tooltip.node.city}, {tooltip.node.name}
          </div>
          <div
            className="text-[10px] leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            {tooltip.node.material}
          </div>
        </div>
      )}

      {mounted && (
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 140, center: [60, 15] }}
          width={900}
          height={480}
          style={{ width: '100%', height: 'auto' }}
        >
          {/* Countries */}
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e2d3d"
                  stroke="#0d1f2d"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { fill: '#263d52', outline: 'none' },
                    pressed: { outline: 'none' },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Animated flow lines */}
          {SOURCES.map((src, i) => (
            <AnimatedLine
              key={src.name}
              from={src.coords}
              to={MALAYSIA}
              color={src.color}
              delay={i * 0.5}
            />
          ))}

          {/* Source markers */}
          {SOURCES.map((src) => (
            <Marker
              key={src.name}
              coordinates={src.coords}
              onMouseEnter={(e) => {
                const rect = containerRef.current?.getBoundingClientRect()
                if (rect) {
                  setTooltip({ node: src, x: e.clientX - rect.left, y: e.clientY - rect.top })
                }
              }}
              onMouseLeave={() => setTooltip({ node: null, x: 0, y: 0 })}
              style={{ cursor: 'pointer' }}
            >
              <PulsingDot color={src.color} />
              <text
                textAnchor="middle"
                y={-12}
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  fill: 'rgba(255,255,255,0.6)',
                  fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                  pointerEvents: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {src.city}
              </text>
            </Marker>
          ))}

          {/* Malaysia — destination hub */}
          <Marker coordinates={MALAYSIA}>
            <g>
              {/* Outer rings */}
              <circle r={20} fill="none" stroke="#00d4aa" strokeWidth={0.6} opacity={0.2}>
                <animate attributeName="r" values="14;28;14" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle r={14} fill="none" stroke="#00d4aa" strokeWidth={0.8} opacity={0.3}>
                <animate attributeName="r" values="10;20;10" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
              </circle>
              {/* Core dot */}
              <circle r={7} fill="#00d4aa" opacity={0.95} />
              <circle r={3.5} fill="#ffffff" />
            </g>
            <text
              textAnchor="middle"
              y={-16}
              style={{
                fontSize: 9,
                fontWeight: 800,
                fill: '#00d4aa',
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                letterSpacing: '0.08em',
              }}
            >
              KUALA LUMPUR
            </text>
            <text
              textAnchor="middle"
              y={-7}
              style={{
                fontSize: 7,
                fontWeight: 600,
                fill: 'rgba(0,212,170,0.6)',
                fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              }}
            >
              DISTRIBUTION HUB
            </text>
          </Marker>
        </ComposableMap>
      )}

      {/* Bottom attribution strip */}
      <div
        className="absolute bottom-3 right-4 text-[9px] font-medium"
        style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        Sinar Majan · Global Supply Network
      </div>
    </div>
  )
}

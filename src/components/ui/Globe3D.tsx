import { useEffect, useRef, useState } from 'react'
import GlobeGL from 'react-globe.gl'

interface GlobePoint {
  lat: number
  lng: number
  label: string
  city: string
  material: string
  color: string
  size: number
  isHub: boolean
}

interface GlobeArc {
  startLat: number
  startLng: number
  endLat: number
  endLng: number
  color: string
}

const KL = { lat: 3.14, lng: 101.69 }

const SOURCES: Omit<GlobePoint, 'isHub'>[] = [
  { lat: 31.23, lng: 121.47, label: 'Shanghai', city: 'Shanghai, China', material: 'Steel coils · Wire rods · Structural sections', color: '#f59e0b', size: 0.5 },
  { lat: 35.69, lng: 139.69, label: 'Tokyo', city: 'Tokyo, Japan', material: 'Specialty steel · Precision alloys', color: '#f59e0b', size: 0.5 },
  { lat: 37.57, lng: 126.98, label: 'Seoul', city: 'Seoul, South Korea', material: 'HR/CR coils · Stainless steel', color: '#f59e0b', size: 0.5 },
  { lat: 19.08, lng: 72.87, label: 'Mumbai', city: 'Mumbai, India', material: 'Billets · Rebar · Aggregates', color: '#a78bfa', size: 0.5 },
  { lat: 25.26, lng: 55.30, label: 'Dubai', city: 'Dubai, UAE', material: 'Aluminium · Copper · Gas Oil · LPG', color: '#a78bfa', size: 0.5 },
  { lat: 53.55, lng: 10.00, label: 'Hamburg', city: 'Hamburg, Germany', material: 'Stainless 304/316 · Specialty alloys', color: '#60a5fa', size: 0.5 },
  { lat: 1.35, lng: 103.82, label: 'Singapore', city: 'Singapore', material: 'Petroleum products · LNG · Bunkers', color: '#f59e0b', size: 0.5 },
  { lat: 29.56, lng: 106.55, label: 'Chongqing', city: 'Chongqing, China', material: 'Diesel · Gas Oil · Fuel Oil', color: '#f59e0b', size: 0.4 },
]

const POINTS: GlobePoint[] = [
  ...SOURCES.map((s) => ({ ...s, isHub: false })),
  { lat: KL.lat, lng: KL.lng, label: 'Kuala Lumpur', city: 'Kuala Lumpur, Malaysia', material: 'Distribution Hub', color: '#00d4aa', size: 0.9, isHub: true },
]

const RINGS = POINTS.map((p) => ({
  lat: p.lat,
  lng: p.lng,
  color: p.color,
  maxR: p.isHub ? 5 : 3,
  propagationSpeed: p.isHub ? 2.5 : 1.8,
  repeatPeriod: p.isHub ? 700 : 900,
}))

const ARCS: GlobeArc[] = SOURCES.map((s) => ({
  startLat: s.lat,
  startLng: s.lng,
  endLat: KL.lat,
  endLng: KL.lng,
  color: s.color,
}))

function getArcColor(d: object) {
  const arc = d as GlobeArc
  return [`${arc.color}00`, `${arc.color}cc`, `${arc.color}cc`, `${arc.color}00`]
}

export default function Globe3D() {
  const globeRef = useRef<InstanceType<typeof GlobeGL>>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 800, h: 600 })
  const [ready, setReady] = useState(false)

  // Responsive sizing
  useEffect(() => {
    function measure() {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth
        setSize({ w, h: Math.max(420, Math.min(w * 0.7, 680)) })
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Camera + auto-rotate after mount
  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true)
      if (globeRef.current) {
        // Point camera at Southeast Asia initially
        globeRef.current.pointOfView({ lat: 15, lng: 90, altitude: 2.2 }, 1200)
        const controls = globeRef.current.controls()
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.4
        controls.enableZoom = false
      }
    }, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ borderRadius: 20, background: '#060c14', border: '1px solid rgba(255,255,255,0.05)' }}
    >
      {/* Glow behind KL */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '52%', left: '72%',
          width: 280, height: 280,
          transform: 'translate(-50%,-50%)',
          background: 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 65%)',
          zIndex: 1,
        }}
      />

      {/* Legend */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 pointer-events-none">
        {[
          { color: '#f59e0b', label: 'East & Southeast Asia' },
          { color: '#a78bfa', label: 'South Asia & Middle East' },
          { color: '#60a5fa', label: 'Europe' },
          { color: '#00d4aa', label: 'KL Distribution Hub' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color, boxShadow: `0 0 5px ${color}` }} />
            <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 10, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontWeight: 600 }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip hint */}
      <div
        className="absolute bottom-4 left-4 z-10 pointer-events-none text-[10px] font-medium"
        style={{ color: 'rgba(255,255,255,0.2)', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        Sinar Majan · Global Supply Network · Drag to explore
      </div>

      <div style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.8s ease' }}>
        <GlobeGL
          ref={globeRef}
          width={size.w}
          height={size.h}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          atmosphereColor="#00d4aa"
          atmosphereAltitude={0.18}
          showAtmosphere={true}
          showGraticules={false}

          // Pulsing rings
          ringsData={RINGS}
          ringLat="lat"
          ringLng="lng"
          ringColor={(d: object) => {
            const r = d as typeof RINGS[0]
            return (t: number) => {
              const alpha = Math.max(0, 1 - t)
              return r.color + Math.round(alpha * 200).toString(16).padStart(2, '0')
            }
          }}
          ringMaxRadius="maxR"
          ringPropagationSpeed="propagationSpeed"
          ringRepeatPeriod="repeatPeriod"
          ringAltitude={0.005}

          // Source points
          pointsData={POINTS}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.01}
          pointRadius="size"
          pointResolution={12}
          pointLabel={(d: object) => {
            const p = d as GlobePoint
            return `<div style="
              background: rgba(10,15,25,0.95);
              border: 1px solid rgba(255,255,255,0.1);
              border-radius: 10px;
              padding: 10px 14px;
              font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
              backdrop-filter: blur(12px);
              min-width: 190px;
            ">
              <div style="font-size: 12px; font-weight: 700; color: #fff; margin-bottom: 2px;">${p.city}</div>
              <div style="font-size: 10px; color: rgba(255,255,255,0.45); line-height: 1.5;">${p.material}</div>
            </div>`
          }}

          // Animated trade route arcs
          arcsData={ARCS}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor={getArcColor}
          arcAltitudeAutoScale={0.35}
          arcStroke={0.5}
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashInitialGap={(d: object) => {
            const idx = ARCS.indexOf(d as GlobeArc)
            return idx * 0.15
          }}
          arcDashAnimateTime={2400}

          enablePointerInteraction={true}
        />
      </div>
    </div>
  )
}

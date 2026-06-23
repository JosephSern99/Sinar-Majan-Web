import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageLoader() {
  const location = useLocation()
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Start loader on route change
    setVisible(true)
    setProgress(0)

    // Fast ramp to 80%, then stall until done
    const t1 = setTimeout(() => setProgress(30), 60)
    const t2 = setTimeout(() => setProgress(65), 180)
    const t3 = setTimeout(() => setProgress(80), 350)

    // Complete
    const t4 = setTimeout(() => {
      setProgress(100)
      // Fade out after bar completes
      const t5 = setTimeout(() => setVisible(false), 300)
      return () => clearTimeout(t5)
    }, 500)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      clearTimeout(t4)
    }
  }, [location.pathname])

  if (!visible) return null

  return (
    <>
      {/* Top progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          zIndex: 9999,
          background: 'rgba(244,247,249,0.2)',
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #0d9488 0%, #00d4aa 100%)',
            transition: progress === 0 ? 'none' : 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            boxShadow: '0 0 10px rgba(0,212,170,0.6), 0 0 4px rgba(13,148,136,0.4)',
          }}
        />
      </div>

      {/* Full-screen overlay on initial hard load only (progress < 100) */}
      {progress < 100 && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9998,
            background: '#f4f7f9',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: progress === 100 ? 0 : 1,
            transition: 'opacity 0.25s ease',
            pointerEvents: progress === 100 ? 'none' : 'all',
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: 'linear-gradient(135deg, #0d9488 0%, #00d4aa 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 28,
              boxShadow: '0 8px 32px rgba(13,148,136,0.25)',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
              fontWeight: 900,
              fontSize: 18,
              color: '#ffffff',
              letterSpacing: '-0.5px',
            }}
          >
            SM
          </div>

          {/* Spinner ring */}
          <div style={{ position: 'relative', width: 40, height: 40 }}>
            {/* Track */}
            <svg width="40" height="40" style={{ position: 'absolute', inset: 0 }}>
              <circle
                cx="20" cy="20" r="17"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="3"
              />
            </svg>
            {/* Spinning arc */}
            <svg
              width="40"
              height="40"
              style={{
                position: 'absolute',
                inset: 0,
                animation: 'spin 0.9s linear infinite',
              }}
            >
              <defs>
                <linearGradient id="spinGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#00d4aa" />
                </linearGradient>
              </defs>
              <circle
                cx="20" cy="20" r="17"
                fill="none"
                stroke="url(#spinGrad)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="60 47"
                strokeDashoffset="0"
              />
            </svg>
          </div>

          {/* Label */}
          <p
            style={{
              marginTop: 20,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#94a3b8',
              fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            }}
          >
            Sinar Majan
          </p>
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}

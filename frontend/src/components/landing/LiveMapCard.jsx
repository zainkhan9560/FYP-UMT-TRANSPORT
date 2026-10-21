import { useEffect, useState } from 'react'
import { Clock3, MapPin } from 'lucide-react'

import umtSeal from '../../assets/brand/umt-seal.png'

// Route geometry (straight segments with rounded corners, so stop coordinates are exact).
const ROUTE_PATH =
  'M40 250 H120 Q150 250 150 220 V170 Q150 140 180 140 H270 Q300 140 300 110 V70 Q300 48 322 48 H372'

const STOPS = [
  [40, 250],
  [120, 250],
  [150, 195],
  [210, 140],
  [270, 140],
  [300, 95],
  [340, 48],
]

const LOOP_SECONDS = 14

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return reduced
}

/** Illustrative live-tracking card: a stylised map with a bus riding along a route. */
export default function LiveMapCard() {
  const reduced = usePrefersReducedMotion()

  return (
    <div className="lp-map-card">
      <div className="lp-map-head">
        <div className="lp-map-route">
          <span className="lp-map-dot" />
          <div>
            <strong>Askari X</strong>
            <span>To UMT campus</span>
          </div>
        </div>
        <span className="lp-pill lp-pill-ok">
          <i /> On time
        </span>
      </div>

      <div className="lp-map-canvas">
        <svg viewBox="0 0 420 300" role="img" aria-label="Illustration of a bus travelling along its route to the UMT campus">
          <defs>
            <clipPath id="lp-seal-clip">
              <circle cx="372" cy="48" r="19" />
            </clipPath>
          </defs>

          <rect width="420" height="300" fill="#eaf1fc" />

          {/* blocks + park */}
          <g fill="#dde8f9">
            <rect x="10" y="12" width="96" height="70" rx="10" />
            <rect x="122" y="12" width="120" height="58" rx="10" />
            <rect x="10" y="100" width="108" height="96" rx="10" />
            <rect x="196" y="160" width="86" height="80" rx="10" />
            <rect x="316" y="130" width="94" height="110" rx="10" />
            <rect x="312" y="84" width="40" height="30" rx="8" />
          </g>
          <rect x="130" y="205" width="52" height="60" rx="12" fill="#d6eedf" />
          <rect x="30" y="215" width="70" height="20" rx="10" fill="#d6eedf" />

          {/* roads */}
          <g stroke="#ffffff" strokeWidth="9" strokeLinecap="round" fill="none">
            <path d="M0 270 H420" />
            <path d="M112 0 V300" />
            <path d="M0 92 H420" />
            <path d="M286 0 V300" />
            <path d="M190 100 V300" />
          </g>

          {/* route: base + progress */}
          <path d={ROUTE_PATH} fill="none" stroke="#b7cbef" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d={ROUTE_PATH}
            pathLength="100"
            fill="none"
            stroke="#00307f"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="100"
            strokeDashoffset={reduced ? 45 : 100}
          >
            {!reduced && (
              <animate
                attributeName="stroke-dashoffset"
                from="100"
                to="0"
                dur={`${LOOP_SECONDS}s`}
                repeatCount="indefinite"
              />
            )}
          </path>

          {/* stops */}
          {STOPS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#ffffff" stroke="#00307f" strokeWidth="3" />
          ))}

          {/* campus marker */}
          <circle cx="372" cy="48" r="23" fill="#ffffff" opacity="0.95" />
          <circle cx="372" cy="48" r="23" fill="none" stroke="#00307f" strokeWidth="3" />
          <image href={umtSeal} x="353" y="29" width="38" height="38" clipPath="url(#lp-seal-clip)" />

          {/* bus */}
          <g transform={reduced ? 'translate(190 140)' : undefined}>
            {!reduced && (
              <animateMotion dur={`${LOOP_SECONDS}s`} repeatCount="indefinite" path={ROUTE_PATH} />
            )}
            <circle r="16" fill="#1f5fd0" opacity="0.25">
              {!reduced && (
                <>
                  <animate attributeName="r" values="14;28" dur="1.8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0" dur="1.8s" repeatCount="indefinite" />
                </>
              )}
            </circle>
            <circle r="15" fill="#00307f" stroke="#ffffff" strokeWidth="3" />
            <rect x="-7" y="-7" width="14" height="12" rx="3" fill="none" stroke="#ffffff" strokeWidth="1.8" />
            <path d="M-7 -1.5 H7" stroke="#ffffff" strokeWidth="1.8" />
            <circle cx="-3.5" cy="7.5" r="1.4" fill="#ffffff" />
            <circle cx="3.5" cy="7.5" r="1.4" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <div className="lp-map-foot">
        <div className="lp-map-eta">
          <Clock3 size={20} />
          <div>
            <strong>6 min</strong>
            <span>estimated arrival</span>
          </div>
        </div>
        <div className="lp-map-eta">
          <MapPin size={20} />
          <div>
            <strong>3 stops</strong>
            <span>away from you</span>
          </div>
        </div>
      </div>

      <span className="lp-map-note">Sample preview</span>
    </div>
  )
}

/**
 * UMT-style emblem (gear ring + monogram) drawn as SVG so it stays sharp at any size.
 * To use the official seal instead, drop it in /public as `umt-logo.png` and
 * render <img src="/umt-logo.png" alt="UMT" /> in place of this component.
 */
export default function UmtLogo({ size = 44, title = 'University of Management and Technology' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className="umt-logo"
    >
      <circle cx="50" cy="50" r="49" fill="#ffffff" />
      <circle
        cx="50"
        cy="50"
        r="41"
        fill="none"
        stroke="#00307f"
        strokeWidth="9"
        strokeDasharray="6.4 3.6"
      />
      <circle cx="50" cy="50" r="36" fill="#00307f" />
      <circle cx="50" cy="50" r="31" fill="none" stroke="#ffffff" strokeWidth="1.5" />
      <text
        x="50"
        y="56.5"
        textAnchor="middle"
        fontFamily="Manrope, DM Sans, sans-serif"
        fontWeight="800"
        fontSize="19"
        letterSpacing="0.5"
        fill="#ffffff"
      >
        UMT
      </text>
    </svg>
  )
}

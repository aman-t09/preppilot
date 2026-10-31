const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function ProgressRing({ percent }) {
  // dashoffset hides part of the circle's outline: 0 = full ring, CIRCUMFERENCE = empty
  const offset = CIRCUMFERENCE * (1 - percent / 100)

  return (
    <svg viewBox="0 0 120 120" className="ring">
      <circle cx="60" cy="60" r={RADIUS} className="ring-bg" />
      <circle
        cx="60"
        cy="60"
        r={RADIUS}
        className="ring-fg"
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={offset}
        transform="rotate(-90 60 60)"
      />
      <text x="60" y="68" textAnchor="middle" className="ring-text">
        {percent}%
      </text>
    </svg>
  )
}

export default ProgressRing
function WeekChart({ days }) {
  // days = [{ label: 'Mon', count: 3 }, ...]
  const max = Math.max(...days.map((d) => d.count), 1)

  return (
    <div className="week-chart">
      {days.map((d, i) => (
        <div key={d.label + i} className="week-col">
          <span className="week-count">{d.count}</span>
          <div className="week-track">
            <div
              className={`week-bar ${i === days.length - 1 ? 'today' : ''}`}
              style={{ height: `${Math.max((d.count / max) * 100, 4)}%` }}
            />
          </div>
          <span className="week-label">{d.label}</span>
        </div>
      ))}
    </div>
  )
}

export default WeekChart
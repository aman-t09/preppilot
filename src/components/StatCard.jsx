function StatCard({ label, value, color }) {
  return (
    <div className="stat-card" style={{ '--accent': color }}>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
  )
}

export default StatCard
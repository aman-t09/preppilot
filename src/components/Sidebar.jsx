function Sidebar({ items, active, onChange, streak, theme, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-icon">🚀</span> PrepPilot
      </div>

      <nav className="nav-list">
        {items.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${active === item.name ? 'active' : ''}`}
            onClick={() => onChange(item.name)}
          >
            <span>{item.icon}</span> {item.name}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="streak-box">
          <div className="streak-emoji">🔥</div>
          <div>
            <strong>{streak}-day streak</strong>
            <p>{streak > 0 ? 'Keep it going!' : 'Complete a task to start'}</p>
          </div>
        </div>

        <button className="theme-toggle" onClick={onToggleTheme}>
          {theme === 'dark' ? '☀️ Light mode' : '🌙 Dark mode'}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
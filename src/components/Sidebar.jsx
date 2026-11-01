import Icon from './Icon'

function Sidebar({ items, active, onChange, streak, theme, onToggleTheme }) {
  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-mark">P</span>
        PrepPilot
      </div>

      <p className="nav-heading">Menu</p>
      <nav className="nav-list">
        {items.map((item) => (
          <button
            key={item.name}
            className={`nav-item ${active === item.name ? 'active' : ''}`}
            aria-current={active === item.name ? 'page' : undefined}
            onClick={() => onChange(item.name)}
          >
            <Icon name={item.icon} />
            {item.name}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="streak-box">
          <Icon name="flame" size={20} />
          <div>
            <strong>{streak} day streak</strong>
            <p>{streak > 0 ? "Don't break it." : 'Finish a task to start one.'}</p>
          </div>
        </div>

        <button className="theme-toggle" onClick={onToggleTheme}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={16} />
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
    </aside>
  )
}

export default Sidebar
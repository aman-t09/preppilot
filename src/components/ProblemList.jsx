import { DIFFICULTY_COLORS, STATUSES } from '../data/defaults'

function ProblemList({ problems, onStatusChange, onDelete }) {
  if (problems.length === 0) {
    return <p className="empty">No problems to show.</p>
  }

  return (
    <ul className="problem-list">
      {problems.map((p) => {
        const color = DIFFICULTY_COLORS[p.difficulty]
        return (
          <li key={p.id} className="problem-item">
            <div className="problem-main">
              <div className="problem-title">
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noreferrer">{p.title} ↗</a>
                ) : (
                  p.title
                )}
              </div>
              <div className="problem-meta">
                <span className="badge topic-badge">{p.topic}</span>
                <span className="badge" style={{ background: `${color}1a`, color }}>
                  {p.difficulty}
                </span>
              </div>
              {p.notes && <p className="problem-notes">{p.notes}</p>}
            </div>

            <div className="problem-actions">
              <select
                className={`input status-select ${p.status}`}
                value={p.status}
                onChange={(e) => onStatusChange(p.id, e.target.value)}
              >
                {STATUSES.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <button
                className="icon-btn"
                onClick={() => onDelete(p.id)}
                aria-label={`Delete ${p.title}`}
              >
                ✕
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ProblemList
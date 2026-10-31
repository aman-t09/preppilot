import { useState } from 'react'
import { DIFFICULTY_COLORS, OUTCOME_COLORS } from '../data/defaults'

function ExperienceCard({ exp, onDelete }) {
  // Each card remembers for itself whether it is expanded.
  const [open, setOpen] = useState(false)

  const diffColor = DIFFICULTY_COLORS[exp.difficulty]
  const outColor = OUTCOME_COLORS[exp.outcome]
  const added = new Date(exp.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <article className="exp-card">
      <div className="exp-head">
        <div>
          <h3 className="exp-company">{exp.company}</h3>
          <p className="muted">{exp.role || 'Role not specified'}</p>
        </div>
        <button
          className="icon-btn"
          onClick={() => window.confirm(`Delete ${exp.company} experience?`) && onDelete(exp.id)}
          aria-label={`Delete ${exp.company} experience`}
        >
          ✕
        </button>
      </div>

      <div className="problem-meta">
        <span className="badge" style={{ background: `${outColor}1a`, color: outColor }}>
          {exp.outcome}
        </span>
        <span className="badge" style={{ background: `${diffColor}1a`, color: diffColor }}>
          {exp.difficulty}
        </span>
        <span className="badge topic-badge">{exp.rounds.length} rounds</span>
      </div>

      {open && (
        <div className="exp-details">
          {exp.rounds.length > 0 && (
            <>
              <h4>Rounds</h4>
              <ol>
                {exp.rounds.map((r, i) => <li key={i}>{r}</li>)}
              </ol>
            </>
          )}
          {exp.questions.length > 0 && (
            <>
              <h4>Questions asked</h4>
              <ul>
                {exp.questions.map((q, i) => <li key={i}>{q}</li>)}
              </ul>
            </>
          )}
          {exp.tips && (
            <>
              <h4>Tips</h4>
              <p>{exp.tips}</p>
            </>
          )}
          {exp.rounds.length === 0 && exp.questions.length === 0 && !exp.tips && (
            <p className="muted">No details added.</p>
          )}
        </div>
      )}

      <div className="exp-footer">
        <span className="muted">Added {added}</span>
        <button className="link-btn" onClick={() => setOpen(!open)}>
          {open ? 'Hide details ▲' : 'View details ▼'}
        </button>
      </div>
    </article>
  )
}

export default ExperienceCard
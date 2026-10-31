import { useState } from 'react'
import StatCard from '../components/StatCard'
import ExperienceForm from '../components/ExperienceForm'
import ExperienceCard from '../components/ExperienceCard'
import { DIFFICULTIES, OUTCOMES } from '../data/defaults'

function CompaniesPage({ experiences, onAdd, onDelete }) {
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const [outcome, setOutcome] = useState('All')
  const [difficulty, setDifficulty] = useState('All')

  const companies = new Set(experiences.map((e) => e.company.toLowerCase())).size
  const selected = experiences.filter((e) => e.outcome === 'Selected').length
  const rejected = experiences.filter((e) => e.outcome === 'Rejected').length

  const query = search.toLowerCase()
  const visible = experiences.filter(
    (e) =>
      (e.company.toLowerCase().includes(query) || e.role.toLowerCase().includes(query)) &&
      (outcome === 'All' || e.outcome === outcome) &&
      (difficulty === 'All' || e.difficulty === difficulty)
  )

  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Company Experiences</h1>
          <p className="page-subtitle">Record interview rounds, questions, and lessons by company.</p>
        </div>
        {!showForm && (
          <button className="btn" onClick={() => setShowForm(true)}>
            + Add experience
          </button>
        )}
      </div>

      <div className="stats-grid">
        <StatCard icon="🗂️" label="Experiences" value={experiences.length} color="#6366f1" />
        <StatCard icon="🏢" label="Companies" value={companies} color="#0ea5e9" />
        <StatCard icon="🎉" label="Selected" value={selected} color="#10b981" />
        <StatCard icon="📉" label="Rejected" value={rejected} color="#ef4444" />
      </div>

      {showForm && (
        <section className="card">
          <h2>New experience</h2>
          <ExperienceForm onAdd={onAdd} onDone={() => setShowForm(false)} />
        </section>
      )}

      <section className="card">
        <h2>All experiences ({visible.length})</h2>
        <div className="filters">
          <input
            className="input grow"
            placeholder="Search company or role..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select className="input" value={outcome} onChange={(e) => setOutcome(e.target.value)}>
            <option value="All">All outcomes</option>
            {OUTCOMES.map((o) => <option key={o}>{o}</option>)}
          </select>
          <select className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="All">All difficulties</option>
            {DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>

        {visible.length === 0 ? (
          <p className="empty">
            {experiences.length === 0
              ? 'No experiences yet. Click "Add experience" to log your first one.'
              : 'No experiences match your filters.'}
          </p>
        ) : (
          <div className="exp-grid">
            {visible.map((exp) => (
              <ExperienceCard key={exp.id} exp={exp} onDelete={onDelete} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

export default CompaniesPage
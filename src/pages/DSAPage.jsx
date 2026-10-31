import { useState } from 'react'
import StatCard from '../components/StatCard'
import ProblemForm from '../components/ProblemForm'
import ProblemList from '../components/ProblemList'
import TopicProgress from '../components/TopicProgress'
import { DIFFICULTIES, STATUSES } from '../data/defaults'

function DSAPage({ problems, onAdd, onStatusChange, onDelete }) {
  // Filters are temporary UI state, so they live here and are not saved
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')
  const [status, setStatus] = useState('All')

  const solved = problems.filter((p) => p.status === 'solved').length
  const inProgress = problems.filter((p) => p.status === 'in-progress').length
  const hardSolved = problems.filter((p) => p.status === 'solved' && p.difficulty === 'Hard').length

  const visible = problems.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (difficulty === 'All' || p.difficulty === difficulty) &&
      (status === 'All' || p.status === status)
  )

  return (
    <>
      <h1 className="page-title">DSA Tracker</h1>
      <p className="page-subtitle">Log problems and watch your topics fill up.</p>

      <div className="stats-grid">
        <StatCard icon="📚" label="Total problems" value={problems.length} color="#6366f1" />
        <StatCard icon="✅" label="Solved" value={solved} color="#10b981" />
        <StatCard icon="⏳" label="In progress" value={inProgress} color="#0ea5e9" />
        <StatCard icon="💎" label="Hard solved" value={hardSolved} color="#ef4444" />
      </div>

      <section className="card">
        <h2>Add a problem</h2>
        <ProblemForm onAdd={onAdd} />
      </section>

      <div className="dashboard-grid">
        <section className="card">
          <h2>Problems ({visible.length})</h2>
          <div className="filters">
            <input
              className="input grow"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
              <option value="All">All difficulties</option>
              {DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="All">All statuses</option>
              {STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>
          <ProblemList problems={visible} onStatusChange={onStatusChange} onDelete={onDelete} />
        </section>

        <section className="card">
          <h2>Topic progress</h2>
          <TopicProgress problems={problems} />
        </section>
      </div>
    </>
  )
}

export default DSAPage
import { useState } from 'react'
import { DSA_TOPICS, DIFFICULTIES, STATUSES } from '../data/defaults'

function ProblemForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [topic, setTopic] = useState(DSA_TOPICS[0])
  const [difficulty, setDifficulty] = useState('Easy')
  const [status, setStatus] = useState('todo')
  const [link, setLink] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title: title.trim(), topic, difficulty, status, link: link.trim(), notes: notes.trim() })
    // Clear only the text fields so you can add several problems of the same topic quickly
    setTitle('')
    setLink('')
    setNotes('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="input grow"
        placeholder="Problem title (e.g. Two Sum)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className="input" value={topic} onChange={(e) => setTopic(e.target.value)}>
        {DSA_TOPICS.map((t) => <option key={t}>{t}</option>)}
      </select>
      <select className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        {DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}
      </select>
      <select className="input" value={status} onChange={(e) => setStatus(e.target.value)}>
        {STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>
      <input
        className="input grow"
        type="url"
        placeholder="Problem link (optional)"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        className="input grow"
        placeholder="Notes / approach (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button className="btn" type="submit">+ Add</button>
    </form>
  )
}

export default ProblemForm
import { useState } from 'react'
import { CATEGORIES } from '../data/defaults'

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [minutes, setMinutes] = useState(30)

  const handleSubmit = (e) => {
    e.preventDefault() // stop the browser from reloading the page
    if (!title.trim()) return
    onAdd({ title: title.trim(), category, minutes: Number(minutes) || 30 })
    setTitle('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="input grow"
        placeholder="What will you study?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <input
        className="input small"
        type="number"
        min="5"
        step="5"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        aria-label="Minutes"
      />
      <button className="btn" type="submit">
        + Add
      </button>
    </form>
  )
}

export default TaskForm
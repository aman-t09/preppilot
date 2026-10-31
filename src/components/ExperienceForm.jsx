import { useState } from 'react'
import { DIFFICULTIES, OUTCOMES } from '../data/defaults'

// Turns a textarea's text into an array: one item per non-empty line.
const toLines = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)

function ExperienceForm({ onAdd, onDone }) {
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [difficulty, setDifficulty] = useState('Medium')
  const [outcome, setOutcome] = useState('Waiting')
  const [rounds, setRounds] = useState('')
  const [questions, setQuestions] = useState('')
  const [tips, setTips] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!company.trim()) return
    onAdd({
      company: company.trim(),
      role: role.trim(),
      difficulty,
      outcome,
      rounds: toLines(rounds),
      questions: toLines(questions),
      tips: tips.trim(),
    })
    onDone() // tells the page to close the form
  }

  return (
    <form className="exp-form" onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Company (e.g. Amazon) *"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        className="input"
        placeholder="Role (e.g. SDE Intern)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <select className="input" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        {DIFFICULTIES.map((d) => (
          <option key={d} value={d}>Difficulty: {d}</option>
        ))}
      </select>
      <select className="input" value={outcome} onChange={(e) => setOutcome(e.target.value)}>
        {OUTCOMES.map((o) => (
          <option key={o} value={o}>Outcome: {o}</option>
        ))}
      </select>

      <textarea
        className="input full"
        placeholder={'Rounds (one per line)\nOnline Assessment: 2 DSA problems\nTechnical Interview 1'}
        value={rounds}
        onChange={(e) => setRounds(e.target.value)}
      />
      <textarea
        className="input full"
        placeholder={'Questions asked (one per line)\nReverse a linked list\nExplain ACID properties'}
        value={questions}
        onChange={(e) => setQuestions(e.target.value)}
      />
      <textarea
        className="input full"
        placeholder="Tips / what you would do differently (optional)"
        value={tips}
        onChange={(e) => setTips(e.target.value)}
      />

      <div className="full form-actions">
        <button type="button" className="btn secondary" onClick={onDone}>
          Cancel
        </button>
        <button type="submit" className="btn">
          Save experience
        </button>
      </div>
    </form>
  )
}

export default ExperienceForm
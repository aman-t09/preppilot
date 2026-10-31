import { DSA_TOPICS } from '../data/defaults'

function TopicProgress({ problems }) {
  // Build one row per topic that has at least one problem
  const rows = DSA_TOPICS.map((topic) => {
    const inTopic = problems.filter((p) => p.topic === topic)
    const solved = inTopic.filter((p) => p.status === 'solved').length
    return { topic, total: inTopic.length, solved }
  }).filter((r) => r.total > 0)

  if (rows.length === 0) {
    return <p className="empty">Add problems to see topic-wise progress.</p>
  }

  return (
    <div className="topic-rows">
      {rows.map((r) => (
        <div key={r.topic}>
          <div className="topic-row-head">
            <span>{r.topic}</span>
            <span className="muted">{r.solved}/{r.total}</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${(r.solved / r.total) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TopicProgress
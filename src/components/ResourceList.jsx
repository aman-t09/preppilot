function ResourceList({ resources }) {
  return (
    <div className="resource-grid">
      {resources.map((r) => (
        <a key={r.name} className="resource-link" href={r.url} target="_blank" rel="noreferrer">
          <span className="resource-mark">{r.name[0]}</span>
          <strong>{r.name} ↗</strong>
          <span>{r.desc}</span>
        </a>
      ))}
    </div>
  )
}

export default ResourceList
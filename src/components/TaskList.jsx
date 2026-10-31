import { CATEGORY_COLORS } from '../data/defaults'

// onDelete is optional: the dashboard hides delete buttons, the Tasks page shows them.
function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet. Add one from the Tasks page.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        const color = CATEGORY_COLORS[task.category] || '#64748b'
        return (
          <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              id={`task-${task.id}`}
              checked={task.done}
              onChange={() => onToggle(task.id)}
            />
            <label className="task-label" htmlFor={`task-${task.id}`}>
              {task.title}
            </label>
            <span className="badge" style={{ background: `${color}1a`, color }}>
              {task.category}
            </span>
            <span className="task-time">{task.minutes} min</span>
            {onDelete && (
              <button
                className="icon-btn"
                onClick={() => onDelete(task.id)}
                aria-label={`Delete ${task.title}`}
              >
                ✕
              </button>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
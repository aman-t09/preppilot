import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

function TasksPage({ tasks, onToggle, onDelete, onAdd, onReset }) {
  return (
    <>
      <div className="page-header">
        <div>
          <h1 className="page-title">Tasks</h1>
          <p className="page-subtitle">Plan and manage your daily study list.</p>
        </div>
        <button className="btn secondary" onClick={onReset}>
          Reset today
        </button>
      </div>

      <section className="card">
        <h2>Add a task</h2>
        <TaskForm onAdd={onAdd} />
      </section>

      <section className="card">
        <h2>All tasks ({tasks.length})</h2>
        <TaskList tasks={tasks} onToggle={onToggle} onDelete={onDelete} />
      </section>
    </>
  )
}

export default TasksPage
import StatCard from '../components/StatCard'
import ProgressRing from '../components/ProgressRing'
import WeekChart from '../components/WeekChart'
import TaskList from '../components/TaskList'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

function DashboardPage({ tasks, completed, percent, streak, minutesLeft, weekData, onToggle }) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <h1 className="page-title">{getGreeting()}</h1>
      <p className="page-subtitle">{today}</p>

      <div className="stats-grid">
        <StatCard icon="✅" label="Completed today" value={`${completed}/${tasks.length}`} color="#10b981" />
        <StatCard icon="📈" label="Progress" value={`${percent}%`} color="#6366f1" />
        <StatCard icon="🔥" label="Day streak" value={streak} color="#f59e0b" />
        <StatCard icon="⏱️" label="Minutes left" value={minutesLeft} color="#0ea5e9" />
      </div>

      <div className="dashboard-grid">
        <section className="card">
          <h2>Today's Tasks</h2>
          <TaskList tasks={tasks} onToggle={onToggle} />
        </section>

        <div>
          <section className="card center">
            <h2>Today's Progress</h2>
            <ProgressRing percent={percent} />
            <p className="muted">{completed} of {tasks.length} tasks done</p>
          </section>

          <section className="card">
            <h2>Last 7 Days</h2>
            <WeekChart days={weekData} />
          </section>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
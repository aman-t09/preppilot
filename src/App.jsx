import { useState, useEffect } from 'react'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'
import { DEFAULT_TASKS } from './data/defaults'
import { dateKey, lastNDays, calcStreak } from './utils/date'
import Sidebar from './components/Sidebar'
import DashboardPage from './pages/DashboardPage'
import TasksPage from './pages/TasksPage'
import DSAPage from './pages/DSAPage'
import CompaniesPage from './pages/CompaniesPage'
import ResourcesPage from './pages/ResourcesPage'

const NAV_ITEMS = [
  { name: 'Dashboard', icon: '🏠' },
  { name: 'Tasks', icon: '📝' },
  { name: 'DSA Tracker', icon: '💻' },
  { name: 'Companies', icon: '🏢' },
  { name: 'Resources', icon: '📚' },
]

function App() {
  const [tasks, setTasks] = useLocalStorage('preppilot-tasks', DEFAULT_TASKS)
  const [history, setHistory] = useLocalStorage('preppilot-history', {})
  const [problems, setProblems] = useLocalStorage('preppilot-dsa', [])
  const [experiences, setExperiences] = useLocalStorage('preppilot-experiences', [])
  const [activePage, setActivePage] = useState('Dashboard')

  // First visit: follow the system theme. After that, use the saved choice.
  const [theme, setTheme] = useLocalStorage(
    'preppilot-theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  // Put the theme on <html data-theme="..."> so the CSS variables switch.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  const today = dateKey()

  // A task is "done" only if it was completed TODAY, so tasks reset themselves each day.
  const tasksToday = tasks.map((t) => ({ ...t, done: t.doneOn === today }))

  // Every change to the task list goes through here, so history never goes stale.
  const updateTasks = (nextTasks) => {
    setTasks(nextTasks)
    const doneCount = nextTasks.filter((t) => t.doneOn === today).length
    setHistory((prev) => ({ ...prev, [today]: doneCount }))
  }

  const toggleTask = (id) =>
    updateTasks(
      tasks.map((t) => (t.id === id ? { ...t, doneOn: t.doneOn === today ? null : today } : t))
    )

  const addTask = ({ title, category, minutes }) =>
    updateTasks([...tasks, { id: Date.now(), title, category, minutes, doneOn: null }])

  const deleteTask = (id) => updateTasks(tasks.filter((t) => t.id !== id))

  const resetToday = () => {
    if (window.confirm("Clear today's progress?")) {
      updateTasks(tasks.map((t) => ({ ...t, doneOn: null })))
    }
  }

  // DSA problem actions
  const addProblem = (data) =>
    setProblems((prev) => [{ ...data, id: Date.now(), createdAt: Date.now() }, ...prev])

  const changeProblemStatus = (id, status) =>
    setProblems((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)))

  const deleteProblem = (id) => setProblems((prev) => prev.filter((p) => p.id !== id))

  // Company experience actions
  const addExperience = (data) =>
    setExperiences((prev) => [{ ...data, id: Date.now(), createdAt: Date.now() }, ...prev])

  const deleteExperience = (id) => setExperiences((prev) => prev.filter((e) => e.id !== id))

  // Derived values: calculated from state on every render, never stored.
  const completed = tasksToday.filter((t) => t.done).length
  const percent = tasks.length ? Math.round((completed / tasks.length) * 100) : 0
  const minutesLeft = tasksToday.filter((t) => !t.done).reduce((sum, t) => sum + t.minutes, 0)
  const streak = calcStreak(history)
  const weekData = lastNDays(7).map((d) => ({ label: d.label, count: history[d.key] || 0 }))

  return (
    <div className="app">
      <Sidebar
        items={NAV_ITEMS}
        active={activePage}
        onChange={setActivePage}
        streak={streak}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="main">
        {activePage === 'Dashboard' && (
          <DashboardPage
            tasks={tasksToday}
            completed={completed}
            percent={percent}
            streak={streak}
            minutesLeft={minutesLeft}
            weekData={weekData}
            onToggle={toggleTask}
          />
        )}
        {activePage === 'Tasks' && (
          <TasksPage
            tasks={tasksToday}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onAdd={addTask}
            onReset={resetToday}
          />
        )}
        {activePage === 'DSA Tracker' && (
          <DSAPage
            problems={problems}
            onAdd={addProblem}
            onStatusChange={changeProblemStatus}
            onDelete={deleteProblem}
          />
        )}
        {activePage === 'Companies' && (
          <CompaniesPage
            experiences={experiences}
            onAdd={addExperience}
            onDelete={deleteExperience}
          />
        )}
        {activePage === 'Resources' && <ResourcesPage />}
      </main>
    </div>
  )
}

export default App
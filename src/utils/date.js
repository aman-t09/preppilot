// Returns a date as "2026-10-31" using the user's LOCAL time.
export function dateKey(date = new Date()) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

// Last n days, oldest first: [{ key: '2026-10-25', label: 'Sun' }, ...]
export function lastNDays(n) {
  const days = []
  for (let i = n - 1; i >= 0; i--) {
    const d = new Date()
    d.setDate(d.getDate() - i)
    days.push({
      key: dateKey(d),
      label: d.toLocaleDateString('en-US', { weekday: 'short' }),
    })
  }
  return days
}

// Counts consecutive days with at least one completed task.
// If today has nothing done yet, the streak is still alive from yesterday.
export function calcStreak(history) {
  let streak = 0
  const day = new Date()
  if (!(history[dateKey(day)] > 0)) day.setDate(day.getDate() - 1)
  while (history[dateKey(day)] > 0) {
    streak++
    day.setDate(day.getDate() - 1)
  }
  return streak
}
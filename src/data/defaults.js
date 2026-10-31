export const DEFAULT_TASKS = [
  { id: 1, title: 'Solve 2 Array problems', category: 'DSA', minutes: 45, doneOn: null },
  { id: 2, title: 'Revise Binary Search', category: 'DSA', minutes: 30, doneOn: null },
  { id: 3, title: 'Read OS notes: Process Scheduling', category: 'CS Core', minutes: 40, doneOn: null },
  { id: 4, title: 'Practice SQL joins', category: 'SQL', minutes: 30, doneOn: null },
  { id: 5, title: 'Aptitude: 15 quant questions', category: 'Aptitude', minutes: 25, doneOn: null },
]

export const CATEGORY_COLORS = {
  DSA: '#6366f1',
  'CS Core': '#0ea5e9',
  SQL: '#f59e0b',
  Aptitude: '#10b981',
  Projects: '#ec4899',
}

export const CATEGORIES = Object.keys(CATEGORY_COLORS)

export const RESOURCES = [
  { name: 'LeetCode', desc: 'Practice coding problems', url: 'https://leetcode.com', icon: '💻' },
  { name: 'NeetCode', desc: 'Curated DSA roadmap', url: 'https://neetcode.io', icon: '🗺️' },
  { name: 'GeeksforGeeks', desc: 'CS concepts and interview prep', url: 'https://www.geeksforgeeks.org', icon: '📗' },
  { name: 'freeCodeCamp', desc: 'Free coding courses', url: 'https://www.freecodecamp.org', icon: '🎓' },
  { name: 'Striver SDE Sheet', desc: 'Top interview questions', url: 'https://takeuforward.org', icon: '📋' },
  { name: 'SQLBolt', desc: 'Interactive SQL lessons', url: 'https://sqlbolt.com', icon: '🗄️' },
]
export const DSA_TOPICS = [
  'Arrays', 'Strings', 'Linked List', 'Stack & Queue', 'Recursion',
  'Binary Search', 'Trees', 'Graphs', 'Dynamic Programming',
  'Greedy', 'Heap', 'Backtracking', 'Other',
]

export const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

export const DIFFICULTY_COLORS = {
  Easy: '#10b981',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

export const STATUSES = [
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'solved', label: 'Solved' },
]
export const OUTCOMES = ['Selected', 'Rejected', 'Waiting']

export const OUTCOME_COLORS = {
  Selected: '#10b981',
  Rejected: '#ef4444',
  Waiting: '#f59e0b',
}
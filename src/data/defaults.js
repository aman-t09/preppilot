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
const daysAgo = (n) => Date.now() - n * 86400000

export const SAMPLE_EXPERIENCES = [
  {
    id: 'sample-1',
    company: 'Amazon',
    role: 'SDE Intern (Sample)',
    difficulty: 'Hard',
    outcome: 'Selected',
    rounds: [
      'Online Assessment: 2 DSA problems + work-style questions',
      'Technical Interview 1: DSA and problem solving',
      'Technical Interview 2: DSA + project discussion',
      'Bar Raiser: leadership principles and behavioral questions',
    ],
    questions: [
      'Merge K sorted lists',
      'Number of islands',
      'Design an LRU cache',
      'Tell me about a time you disagreed with a teammate',
    ],
    tips: 'Prepare 5-6 stories using the STAR format for the leadership principles. Talk through your approach before coding.',
    createdAt: daysAgo(2),
  },
  {
    id: 'sample-2',
    company: 'Microsoft',
    role: 'Software Engineer (Sample)',
    difficulty: 'Hard',
    outcome: 'Waiting',
    rounds: [
      'Online Coding Test',
      'Technical Round 1: arrays, strings, trees',
      'Technical Round 2: design and OOP concepts',
      'Hiring Manager Round',
    ],
    questions: [
      'Lowest common ancestor of a binary tree',
      'Validate a BST',
      'Design a parking lot system (OOP)',
      'Explain the difference between process and thread',
    ],
    tips: 'Interviewers care about clean code and edge cases. Always dry-run your code on a small example.',
    createdAt: daysAgo(5),
  },
  {
    id: 'sample-3',
    company: 'TCS',
    role: 'Digital / Ninja Hiring (Sample)',
    difficulty: 'Easy',
    outcome: 'Selected',
    rounds: [
      'TCS NQT: aptitude, verbal, reasoning, coding',
      'Technical Interview',
      'Managerial and HR Interview',
    ],
    questions: [
      'Reverse a string without library functions',
      'Difference between OOP pillars with examples',
      'Explain your final-year project',
      'Why do you want to join TCS?',
    ],
    tips: 'Aptitude speed matters most for the NQT. Know your project thoroughly, since most technical questions come from it.',
    createdAt: daysAgo(9),
  },
  {
    id: 'sample-4',
    company: 'Infosys',
    role: 'Systems Engineer (Sample)',
    difficulty: 'Medium',
    outcome: 'Rejected',
    rounds: [
      'Online Test: quantitative, logical, verbal, pseudocode',
      'Technical + HR Interview',
    ],
    questions: [
      'Output prediction on pointers and loops',
      'Normalization and its types in DBMS',
      'Write a query to find the second highest salary',
    ],
    tips: 'I underestimated the pseudocode section. Practice dry-running code mentally, and revise SQL basics.',
    createdAt: daysAgo(14),
  },
  {
    id: 'sample-5',
    company: 'Zoho',
    role: 'Software Developer (Sample)',
    difficulty: 'Hard',
    outcome: 'Rejected',
    rounds: [
      'Round 1: aptitude and C/C++ output questions',
      'Round 2: programming round (5-6 problems, no built-in libraries)',
      'Round 3: advanced programming / mini application',
      'Round 4: technical and HR',
    ],
    questions: [
      'Print a matrix in spiral order',
      'Library or bank management mini application',
      'String compression and pattern problems',
    ],
    tips: 'Zoho tests raw logic: practice writing programs without helper libraries, and build small console applications.',
    createdAt: daysAgo(21),
  },
  {
    id: 'sample-6',
    company: 'Flipkart',
    role: 'SDE-1 (Sample)',
    difficulty: 'Medium',
    outcome: 'Waiting',
    rounds: [
      'Online Assessment: 2 medium DSA problems',
      'Machine Coding Round: build a working system in 90 minutes',
      'Problem Solving Round',
      'Hiring Manager Round',
    ],
    questions: [
      'Machine coding: design a snake and ladder game',
      'Top K frequent elements',
      'Longest increasing subsequence',
    ],
    tips: 'For machine coding, focus on clean structure, extensibility, and a working demo before polish.',
    createdAt: daysAgo(30),
  },
]
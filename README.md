# PrepPilot

Placement preparation dashboard for tracking daily study tasks, DSA progress, company-wise interview experiences, and learning resources.

**Live demo:** https://preppilot-xi.vercel.app/

## Features

- Dashboard with progress ring, streak counter, and 7-day activity chart
- Daily task planner that resets automatically each day
- DSA tracker with topic-wise progress, search, and filters
- Company-wise interview experiences (rounds, questions, outcome) with search and filters
- Dark mode (follows system preference, choice is saved)
- Responsive layout, with all data persisted in the browser via localStorage

## Tech stack

- React (functional components, hooks, custom `useLocalStorage` hook)
- Vite
- Plain CSS with CSS variables for theming

## Project structure

```
src/
├── components/   reusable UI pieces
├── pages/        Dashboard, Tasks, DSA Tracker, Companies, Resources
├── hooks/        useLocalStorage
├── utils/        date helpers (streaks, weekly history)
├── data/         constants and default data
└── App.jsx       global state and page switching
```

## Run locally

```bash
git clone https://github.com/aman-t09/preppilot.git
cd preppilot
npm install
npm run dev
```

## Limitations and future work

- No backend: data is stored per browser and does not sync across devices
- Planned: Node/Express + MongoDB backend with authentication, JSON export/import
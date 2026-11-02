# NBA HUB 🏀

A modern NBA directory to explore all 30 NBA teams, discover their players, and dive into player profiles and statistics.

## Overview

NBA HUB is a basketball-focused web application designed to provide a clean and intuitive way to explore the NBA.

Users can navigate through three main levels:

- **Home:** Browse all 30 NBA teams, filter by conference, and search for teams.
- **Team Details:** Explore team information, overview, and key players.
- **Player Details:** Discover individual player profiles, statistics, shooting percentages, and biographical information.

## Tech Stack

- **Framework:** React 19
- **Full-stack framework:** TanStack Start
- **Routing:** TanStack Router (File-Based Routing)
- **Build tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui with Base UI
- **Icons:** Lucide React
- **Validation:** Zod

## Project Structure

```text
nba/
├── public/
│   └── images/
│       ├── flags/
│       ├── players/
│       └── teams/
│
├── mocks/
│   ├── players.json
│   ├── stats.json
│   └── teams.json
│
├── src/
│   ├── components/
│   │   ├── ui/
│   │   ├── home/
│   │   ├── teams/
│   │   ├── players/
│   │   └── shared/
│   │
│   ├── data/
│   ├── hooks/
│   ├── lib/
│   ├── routes/
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── teams/
│   │   │   └── $teamId.tsx
│   │   └── players/
│   │       └── $playerId.tsx
│   │
│   └── styles.css
│
├── components.json
├── package.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd nba
```

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run check` | Check code formatting with Prettier |
| `npm run format` | Format and fix code |

## Data & Assets

NBA HUB uses local JSON mock data and static image assets.

- `mocks/`: NBA teams, players, and statistics.
- `public/images/teams/`: Team logos and images.
- `public/images/players/`: Player photographs.
- `public/images/flags/`: Country flags.
- `src/data/`: TypeScript data modules that provide structured access to mock data.

## Application Routes

| Route | Description |
|---|---|
| `/` | NBA team directory |
| `/teams/$teamId` | Team details and roster |
| `/players/$playerId` | Player profile and statistics |

## Development Principles

- Feature-based component organization.
- Strong typing with TypeScript.
- File-based routing with TanStack Router.
- Reusable UI components.
- Centralized data access.
- Consistent naming conventions.
- Responsive user interface.

## Project Status

🚧 **In Development**

NBA HUB is currently under development. Features and documentation will evolve as the application grows.

---

**Built with passion for basketball. 🏀**
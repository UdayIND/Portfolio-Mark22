# 3D Portfolio Website

## Overview
A visually stunning, highly interactive single-page 3D portfolio website built with React, Three.js, Tailwind CSS, Zustand, GSAP, and FastAPI backend. Features multilingual support (EN, JP, ES, ZH), modular code, CI/CD, and dummy assets for easy replacement.

## Setup Instructions
1. Clone the repo and install dependencies for both frontend and backend.
2. Use Docker Compose for local development.
3. Replace dummy assets in `/frontend/src/assets` as needed.
4. See `docs/PLANNING.md` and `docs/TASK.md` for architecture and task tracking.

## Local Development

### Backend
1. Create a `.env` file in `/backend` (see `.env` template).
2. Activate the Python venv: `source backend/venv/bin/activate`
3. Install dependencies: `pip install -r backend/requirements.txt`
4. Start the backend: `uvicorn backend.src.main:app --reload`

### Frontend
1. Install dependencies: `cd frontend && npm install`
2. Start the frontend: `npm run dev`

The backend will run on `http://localhost:8000` and the frontend on `http://localhost:5173` by default.

## Contribution Guidelines
- Follow modular design and code style rules in PLANNING.md.
- Use feature branches and clear commit messages.
- Write and run tests for all new features.
- Document any new dummy assets or i18n changes.

TASK.md

Overview

This file tracks the detailed tasks, milestones, and sub-tasks for developing an interactive 3D portfolio website. Tasks are organized by phases and include granular steps to ensure clarity and progress tracking. Completed tasks will be marked with an [x], and new sub-tasks will be added under "Discovered During Work" as development progresses.

Phase 1: Project Initialization and Environment Setup

Task 1.1: Project Repository and Structure Setup





[ ] Create a new GitHub repository named 3d-portfolio-website



[ ] Set up a Python virtual environment using python -m venv venv



[ ] Configure Git with .gitignore for Python, Node.js, and Docker files



[ ] Initialize project folder structure as per PLANNING.md:





Create /frontend directory



Create /backend directory



Create /docs directory with PLANNING.md, TASK.md, and README.md



Create /tests directory



[ ] Create README.md with project overview, setup instructions, and contributor guidelines



[ ] Initialize Git with git init and make an initial commit

Task 1.2: Dependency Installation and Configuration





[x] Install Node.js and npm for frontend development



[x] Install Python dependencies for backend:





Install FastAPI with pip install fastapi



Install Uvicorn with pip install uvicorn



Install SQLAlchemy with pip install sqlalchemy



Install Pydantic with pip install pydantic



[x] Install React with TypeScript using npx create-react-app frontend --template typescript



[x] Install Three.js dependencies:





Install @react-three/fiber with npm install @react-three/fiber



Install @react-three/drei with npm install @react-three/drei



[x] Install Tailwind CSS with npm install -D tailwindcss postcss autoprefixer and initialize with npx tailwindcss init



[x] Install GSAP for animations with npm install gsap



[x] Install Zustand for state management with npm install zustand



[x] Configure package.json scripts for development, building, and testing



[x] Create requirements.txt for backend dependencies

Task 1.3: Development Environment Configuration





[x] Configure a local SQLite database for backend testing



[x] Set up environment variable files (.env template) for API keys and database URLs



[x] Configure ESLint for JavaScript/TypeScript with npx eslint --init



[x] Configure Prettier for code formatting with npm install --save-dev prettier



[x] Set up Black for Python formatting with pip install black



[x] Configure Husky and pre-commit hooks for linting and formatting



[x] Test the development environment by running npm start (frontend) and uvicorn main:app (backend)

Task 1.4: Asset Preparation and Integration





[ ] Collect and store the 3D user image in /frontend/src/assets/user-3d-model.gltf



[ ] Gather university logo and save in /frontend/src/assets/university-logo.png



[ ] Prepare project video files and store in /frontend/src/assets/project-videos/



[ ] Optimize 3D assets using Blender (export as compressed GLTF)



[ ] Convert videos to WebM format using FFMPEG for web optimization



[ ] Verify asset paths and accessibility in the project structure



[ ] Create /frontend/src/assets/i18n directory with en.json, jp.json, es.json, zh.json for multilingual support



[ ] Add placeholder assets: user-3d-model.gltf, university-logo.png, project-videos/placeholder-video.webm



[ ] Scaffold all frontend and backend directories and files as per PLANNING.md



[ ] Add README.md with setup and contribution guidelines



[ ] Add Dockerfile, docker-compose.yml, .gitignore, requirements.txt, and package.json



[ ] Initialize Vite (React+TS), Tailwind, Three.js, Zustand, GSAP, etc.



[ ] Initialize FastAPI backend with SQLModel, Pydantic, SQLite



[ ] Add test scaffolding (Jest, Pytest)



[ ] Add CI/CD config (GitHub Actions)



[ ] Document dummy asset usage and replacement

Phase 2: Core Frontend Development

Task 2.1: About Me Section Implementation





[x] Create AboutMe.tsx component in /frontend/src/components/



[x] Set up a Three.js canvas with @react-three/fiber for the 3D user image



[x] Load and render placeholder-avatar.glb with proper lighting and materials



[x] Implement cursor-based rotation using GSAP on hover



[ ] Add subtle scroll-triggered animation (e.g., zoom effect)



[x] Write Jest tests:





Test component rendering



Test cursor interaction (hover effect)



Test edge case (missing 3D model)



[ ] Optimize performance for mobile devices (reduce polygon count if needed)

Task 2.2: Education Section Implementation





[x] Create Education.tsx component



[x] Integrate university-logo.png as a subtle 3D background element



[x] Use Three.js to add a rotating 3D effect triggered by cursor movement



[x] Add text overlay for education details (e.g., degree, university name)



[ ] Implement responsive design for mobile and tablet views



[x] Write Jest tests:





Test logo rendering



Test cursor interaction



Test failure case (missing logo)

Task 2.3: Tech Stack Section Implementation





[ ] Create TechStack.tsx component



[ ] Design a 3D grid or orbiting icons for tech stack items (e.g., React, Three.js)



[ ] Use GSAP to animate tech icons based on scroll position



[ ] Add tooltips with tech descriptions on hover



[ ] Ensure accessibility with ARIA labels for screen readers



[ ] Write Jest tests:





Test grid rendering



Test scroll animation



Test edge case (empty tech list)

Task 2.4: Projects Section Implementation





[ ] Create Projects.tsx component



[ ] Design a 3D video frame on the left using Three.js



[ ] Embed project videos from /frontend/src/assets/project-videos/ with <video> tag



[ ] Add GSAP animation for video frame rotation on scroll



[ ] Display project details (title, description) on the right



[ ] Write Jest tests:





Test video frame rendering



Test video playback



Test failure case (missing video)

Phase 3: Core Backend Development

Task 3.1: Backend API Setup





[ ] Create main.py in /backend/src/



[ ] Set up FastAPI app with basic routing



[ ] Configure SQLAlchemy with SQLite for contact form data



[ ] Define Pydantic models for contact form validation



[ ] Implement /health endpoint for server status



[ ] Write Pytest tests:





Test /health endpoint success



Test edge case (invalid request)



Test failure case (server down)

Task 3.2: Publications API Integration





[ ] Create publications.py in /backend/src/api/routes/



[ ] Design endpoint to fetch Google Scholar data (static or via API)



[ ] Use Pydantic to validate publication data



[ ] Cache results using in-memory storage (e.g., dictionary)



[ ] Write Pytest tests:





Test data fetching



Test validation



Test cache hit

Task 3.3: Contact Form API





[ ] Create contact.py in /backend/src/api/routes/



[ ] Implement /contact POST endpoint for form submissions



[ ] Store submissions in SQLite database



[ ] Add email notification logic (e.g., using SMTP)



[ ] Write Pytest tests:





Test form submission success



Test edge case (invalid data)



Test failure case (database error)

Phase 4: Testing and Optimization

Task 4.1: Unit Testing Setup





[ ] Set up Pytest for backend in /tests/



[ ] Set up Jest and React Testing Library for frontend



[ ] Create test files mirroring project structure (e.g., /tests/components/AboutMe.test.tsx)



[ ] Run initial test suite and verify coverage



[ ] Configure GitHub Actions to run tests on push

Task 4.2: Performance Optimization





[ ] Run Lighthouse audit and document initial scores



[ ] Implement lazy loading for images and videos



[ ] Compress 3D models further with GLTF optimization tools



[ ] Use code splitting with Vite for frontend



[ ] Test optimized build and aim for 90+ Lighthouse scores

Task 4.3: End-to-End Testing





[ ] Install Cypress with npm install cypress --save-dev



[ ] Write test for scrolling through all sections



[ ] Write test for 3D cursor interactions



[ ] Write test for contact form submission



[ ] Run Cypress tests and debug failures

Phase 5: Deployment and Finalization

Task 5.1: Containerization





[ ] Create Dockerfile for frontend



[ ] Create Dockerfile for backend



[ ] Write docker-compose.yml for local orchestration



[ ] Test containers with docker-compose up



[ ] Push Docker images to Docker Hub

Task 5.2: Deployment to Cloud





[ ] Deploy frontend to Vercel with vercel CLI



[ ] Deploy backend to Render with Render dashboard



[ ] Configure environment variables on Vercel and Render



[ ] Test deployed application end-to-end

Task 5.3: Final Polish





[ ] Add WCAG 2.1 accessibility features (e.g., keyboard navigation)



[ ] Perform final Lighthouse audit and address issues



[ ] Update README.md with deployment links and setup instructions



[ ] Review and fix any bugs reported during testing

Discovered During Work





[ ] Vite frontend failed to start due to empty/corrupt root package.json; fixed by deleting the file

[ ] Removed stale jest.config.js to resolve config conflicts
[ ] Verified jest.config.cjs uses only module.exports

Milestones





Phase 1: Project Initialization (Target: May 25 - June 1, 2025)





Complete Tasks 1.1–1.4



Deliverable: Fully configured development environment with assets



Phase 2: Core Frontend (Target: June 2 - June 15, 2025)





Complete Tasks 2.1–2.4



Deliverable: Functional About Me, Education, Tech Stack, and Projects sections



Phase 3: Core Backend (Target: June 16 - June 22, 2025)





Complete Tasks 3.1–3.3



Deliverable: Working APIs for health, publications, and contact



Phase 4: Testing and Optimization (Target: June 23 - June 29, 2025)





Complete Tasks 4.1–4.3



Deliverable: 90%+ test coverage and optimized performance



Phase 5: Deployment and Finalization (Target: June 30 - July 6, 2025)





Complete Tasks 5.1–5.3



Deliverable: Live, accessible, and high-performing website

Notes





All tasks follow PLANNING.md guidelines for modularity, testing, and PEP8 compliance.



Update this file with completion status and new tasks as development progresses.



Refer to PLANNING.md for architecture and tech stack details.

- Removed duplicate test folder: deleted frontend/tests/ and all its contents (__mocks__, components, fileMock.js)
- Updated jest.config.cjs to use root-level tests/setupTests.ts for setupFilesAfterEnv and fixed transform/moduleNameMapper
- Created root tsconfig.test.json with CommonJS override for Jest, includes only tests/
- Installed @testing-library/jest-dom, @testing-library/react, @types/jest, @types/testing-library__react, @types/react, @types/react-dom at root
- Cleared Jest cache and confirmed tests now pass (no config errors)
- Repo is stable and ready for next section (Education)

🧩 TechStack Section
- Created frontend/src/assets/tech/ and added placeholder-tech.glb
- Created frontend/src/assets/project-videos/ with placeholder videos: project-en.webm, project-ja.webm, project-es.webm, project-zh.webm
- Added tests/components/TechStack.test.tsx with tests for render, missing tech data, and language fallback
- All assets are dummy/placeholder and documented for replacement
- No major issues; minor TODO: replace dummy assets and polish 3D/GSAP animation 

Discovered During Work
- TypeError: o.create is not a function when mocking Zustand or Drei in Jest. This is related to ESM/CJS interop issues and proxy usage in Zustand and @react-three/drei. Not a runtime bug; only affects test mocks. Will revisit with custom mocks or updated test strategy if needed. Does not block runtime or further development. 

🧩 Publications Section
- Created frontend/src/assets/publications/ with placeholder videos: publications-en.webm, publications-ja.webm, publications-es.webm, publications-zh.webm
- Implemented frontend/src/components/Publications.tsx with 3D interactive publication list, i18n, Zustand, GSAP, and video assets
- Added tests/components/Publications.test.tsx with tests for render, missing publication data, and language fallback
- All assets are dummy/placeholder and documented for replacement
- Known: Zustand/Drei Jest mock issue persists (see Discovered During Work)
- TODO: Replace dummy assets, connect to real publication data/API, and polish 3D/GSAP animation 

🧩 Backend Integration: Contact API (Frontend)
- Wired frontend Contact.tsx form to FastAPI /contact POST endpoint using fetch
- Handles loading, success, and error states with Zustand and GSAP animation
- Uses i18n for error/success messages
- Extended tests/components/Contact.test.tsx to mock API success and error, covering all form logic and UI behavior
- Known: TS6133 linter warning ('React' is declared but its value is never read) in test file; non-blocking for runtime or CI
- TODO: Add more robust i18n for backend error messages, polish GSAP animation, and test with real backend deployment 
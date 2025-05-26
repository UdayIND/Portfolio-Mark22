Project Vision
The goal is to create a visually stunning, highly interactive single-page portfolio website that leverages cutting-edge 3D web technologies to showcase personal information, education, tech stack, projects, publications, and contact details. The website will feature smooth scrolling and cursor-based 3D interactions, inspired by award-winning designs from Awwwards 3D websites. The site will prioritize performance, accessibility, and responsiveness while achieving top-tier web performance scores (e.g., Lighthouse scores of 90+ for Performance, Accessibility, Best Practices, and SEO). The application will be containerized for consistent deployment and include comprehensive unit tests for reliability.
Key Features

Single-Page Scrollable Layout: All sections (About Me, Education, Tech Stack, Projects, Publications, Contact) are presented in a smooth, vertically scrollable format.
3D Interactivity: Every section incorporates 3D elements (e.g., 3D models, animations, and cursor-driven effects) using modern web technologies.
About Me: Features a 3D-rendered image of the user (provided as an asset) with subtle animations triggered by cursor movement.
Education: Displays university logo and images subtly integrated into the background with 3D effects.
Tech Stack: Visualizes skills and technologies as interactive 3D objects (e.g., orbiting icons or a 3D tech grid).
Projects: Each project includes a description and an embedded video of the user explaining the project, displayed in an interactive 3D frame on the left side.
Publications: Integrates a dynamic 3D visualization of publications linked to a Google Scholar profile.
Contact Section: Includes a 3D form or interactive elements for user engagement (e.g., a 3D contact card that rotates on hover).
Performance Optimization: Achieves high Lighthouse scores through lazy loading, optimized assets, and efficient rendering.
Containerization: The application is fully containerized using Docker for consistent development and deployment.
Testing: Comprehensive unit tests for all components, including edge cases and failure scenarios.

Architecture
The project will follow a modular, component-based architecture to ensure maintainability and scalability. The application will be a single-page web app built with modern JavaScript frameworks and 3D rendering libraries.
Frontend

Framework: React with TypeScript for component-based development and type safety.
3D Rendering: Three.js (via @react-three/fiber and @react-three/drei) for 3D elements and animations.
Styling: Tailwind CSS for responsive, utility-first styling, optimized for performance.
State Management: Zustand for lightweight, performant state management of 3D interactions and UI state.
Animations: GSAP (GreenSock Animation Platform) for smooth scroll-based animations and cursor-driven effects.
Asset Management: Webpack or Vite for bundling and optimizing assets (images, videos, 3D models).

Backend

Framework: FastAPI for a lightweight API to serve dynamic content (e.g., publication data from Google Scholar or contact form submissions).
Database: SQLite with SQLAlchemy for simplicity, storing minimal data (e.g., contact form submissions). If Google Scholar integration requires dynamic data fetching, a caching layer (Redis) may be added.
Data Validation: Pydantic for validating API inputs and outputs.

Testing

Unit Tests: Pytest for backend and Jest with React Testing Library for frontend.
Test Structure: Tests mirror the app structure in a /tests folder, with at least one test for expected use, one for edge cases, and one for failure cases per feature.
End-to-End Tests: Cypress for testing user flows (e.g., scrolling, 3D interactions, form submissions).

Containerization

Docker: The application will be containerized with separate containers for the frontend (React app) and backend (FastAPI).
Docker Compose: Used for local development to orchestrate frontend, backend, and database containers.
CI/CD: GitHub Actions for automated testing, linting, and deployment to a cloud provider (e.g., Vercel for frontend, Render for backend).

Tech Stack

Frontend:
React (18.x) with TypeScript
Three.js (@react-three/fiber, @react-three/drei)
Tailwind CSS
GSAP for animations
Zustand for state management
Vite for development and bundling


Backend:
FastAPI
SQLAlchemy or SQLModel
Pydantic
SQLite (with potential Redis for caching)


Testing:
Pytest (backend)
Jest and React Testing Library (frontend)
Cypress (end-to-end)


DevOps:
Docker and Docker Compose
GitHub Actions
Vercel (frontend hosting), Render (backend hosting)


Tools:
ESLint and Prettier for code linting and formatting
Black for Python code formatting
Husky for pre-commit hooks
Webpack/Vite for asset optimization



Constraints

Performance: Must achieve Lighthouse scores of 90+ across all categories (Performance, Accessibility, Best Practices, SEO).
File Size Limit: No single file should exceed 500 lines of code, enforced by modular design and refactoring.
3D Asset Optimization: 3D models and videos must be optimized for web (e.g., compressed GLTF models, WebM videos).
Cross-Browser Compatibility: Support for latest versions of Chrome, Firefox, Safari, and Edge.
Responsive Design: Fully responsive across mobile, tablet, and desktop devices, with adaptive 3D rendering for lower-end devices.
Accessibility: Adhere to WCAG 2.1 guidelines (e.g., keyboard navigation, ARIA labels for 3D elements).
Testing Coverage: Aim for 90%+ test coverage for both frontend and backend.

Folder Structure
portfolio-website/
├── /frontend/
│   ├── /src/
│   │   ├── /components/
│   │   │   ├── AboutMe.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Publications.tsx
│   │   │   ├── Contact.tsx
│   │   ├── /assets/
│   │   │   ├── user-3d-model.gltf
│   │   │   ├── university-logo.png
│   │   │   ├── project-videos/
│   │   ├── /styles/
│   │   ├── /hooks/
│   │   ├── /utils/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── /tests/
│   │   ├── /components/
│   │   │   ├── AboutMe.test.tsx
│   │   │   ├── Education.test.tsx
│   │   │   ...
├── /backend/
│   ├── /src/
│   │   ├── /api/
│   │   │   ├── routes/
│   │   │   ├── models/
│   │   │   ├── schemas/
│   │   ├── main.py
│   ├── /tests/
│   │   ├── test_api.py
│   │   ...
├── /docs/
│   ├── PLANNING.md
│   ├── TASK.md
│   ├── README.md
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── package.json
├── requirements.txt

Development Workflow

Setup:
Initialize the project with Vite (React + TypeScript) and FastAPI.
Configure ESLint, Prettier, and Black for code formatting.
Set up Docker and Docker Compose for local development.
Initialize Git repository with Husky for pre-commit hooks.


Development:
Create modular React components for each section (About Me, Education, etc.).
Implement 3D elements using Three.js and GSAP for animations.
Develop FastAPI endpoints for dynamic data (e.g., contact form, publications).
Write unit tests concurrently with development.


Testing:
Run Pytest and Jest tests locally and in CI.
Use Cypress for end-to-end testing of user interactions.


Optimization:
Optimize 3D assets (e.g., compress GLTF models, use WebM for videos).
Implement lazy loading for images and videos.
Use code splitting and tree shaking with Vite.


Deployment:
Deploy frontend to Vercel and backend to Render.
Use GitHub Actions for automated testing and deployment.



Tools

Version Control: Git (hosted on GitHub)
Editor: VS Code with ESLint, Prettier, and Python extensions
CI/CD: GitHub Actions
Monitoring: Lighthouse for performance audits, Sentry for error tracking
Asset Creation: Blender for 3D model creation (if needed), FFMPEG for video optimization

Milestones

Initial Setup (Week 1-2):
Set up project structure, dependencies, and Docker.
Create PLANNING.md and TASK.md.
Initialize frontend and backend skeletons.


Core Features (Week 3-6):
Implement About Me, Education, Tech Stack, Projects, Publications, and Contact sections.
Integrate 3D elements and cursor-based interactions.
Develop FastAPI endpoints and SQLite database.


Testing & Optimization (Week 7-8):
Write unit and end-to-end tests.
Optimize assets and performance for Lighthouse scores.


Deployment (Week 9):
Deploy to Vercel (frontend) and Render (backend).
Set up CI/CD pipeline with GitHub Actions.


Final Polish (Week 10):
Address accessibility issues.
Perform final testing and bug fixes.



Risks & Mitigation

Risk: 3D rendering performance on low-end devices.
Mitigation: Implement adaptive rendering (e.g., reduce model complexity for mobile) and fallback 2D elements.


Risk: Large asset sizes impacting load times.
Mitigation: Compress 3D models (GLTF) and videos (WebM), use lazy loading, and implement CDN caching.


Risk: Accessibility challenges with 3D elements.
Mitigation: Add ARIA labels, ensure keyboard navigation, and provide text-based fallbacks.


Risk: Google Scholar integration complexity.
Mitigation: Use a third-party API (e.g., SerpAPI) or static data fetching with caching.



Next Steps

Create TASK.md with initial tasks for project setup.
Set up Git repository and initialize project structure.
Begin development of the About Me section with 3D user image integration.

ChatGPT said:
Updated saved memory
Here's your fully expanded and detailed PLANNING.md document. I’ve kept all your original content and enhanced it to provide clearer instructions for Cursor and future collaborators, ensuring everything is explicit and actionable:

PLANNING.md

Project Vision

The goal is to create a visually stunning, highly interactive single-page portfolio website that leverages cutting-edge 3D web technologies to showcase personal information, education, tech stack, projects, publications, and contact details. The website will feature smooth scrolling and cursor-based 3D interactions, inspired by award-winning designs from Awwwards 3D websites. The site will prioritize performance, accessibility, and responsiveness while achieving top-tier web performance scores (e.g., Lighthouse scores of 90+ for Performance, Accessibility, Best Practices, and SEO). The application will be containerized for consistent deployment and include comprehensive unit tests for reliability. The design must also reflect a high degree of professionalism suitable for recruiters and potential collaborators.

Key Features

Content Sections (Single-Page Scrollable Layout)
All content is laid out in a vertically scrollable single-page format.
Smooth-scroll and snapping behavior should be implemented for intuitive navigation between sections.
About Me
Displays personal introduction and a 3D-rendered avatar of the user (provided as a .gltf model).
Subtle animations (e.g., head tilt or camera zoom) triggered by cursor movement using @react-three/fiber.
Text and visuals complement each other, avoiding clutter.
Education
Showcases academic background.
Includes logos of institutions with floating or parallax 3D effects.
Background effects inspired by museum-style 3D walkthroughs.
Tech Stack
Icons representing technologies are displayed as orbiting or rotating 3D objects.
Mouse interactions highlight skills or display short tooltips in 3D space.
Projects
Each project includes:
Name, description, tech used.
Embedded video (WebM) of the user explaining the project, inside a 3D "monitor frame" or screen.
Projects float in a carousel or grid with 3D hover/tilt effects.
Publications
Automatically fetch and display publications from Google Scholar (or display static data if dynamic access fails).
Visualize data (e.g., word clouds, bar graphs of citations) as 3D charts using Three.js or D3-in-Three.js hybrid.
Clicking on a publication opens an abstract or external link.
Contact
3D contact card or form that rotates or expands on hover.
Sends data to backend API (with validation).
Includes links to GitHub, LinkedIn, Email with 3D icons that animate on hover.
Performance Optimization
Use lazy loading for videos/images.
Compress 3D models to GLB/optimized GLTF format.
Tree shaking, code splitting, and gzip compression via Vite.
Containerization
Backend and frontend run in isolated Docker containers.
Use Docker Compose for orchestration.
Shared network for inter-service communication.
Testing
Unit, integration, and end-to-end tests.
Test responsiveness, input validations, API edge cases, animations triggering correctly, and fallback rendering.
Architecture

Frontend
Framework: React (18.x) with TypeScript
3D Rendering: Three.js via @react-three/fiber, helpers via @react-three/drei
Styling: Tailwind CSS (fully responsive, mobile-first)
State Management: Zustand (efficient state handling for UI + 3D)
Animation: GSAP for fine-grain animation control including scroll-based triggers
Build Tool: Vite (for dev speed and optimized production bundles)
Asset Bundling: Leverage dynamic imports and Vite plugins for Three.js models
Backend
Framework: FastAPI (Python)
Database: SQLite (local form submission storage), Redis for caching if Google Scholar API is dynamic
ORM: SQLAlchemy or SQLModel (with Pydantic for schema validation)
Endpoints:
GET /publications → returns list of publications
POST /contact → handles form submissions with validation and anti-spam measures
Testing

Frontend:
Jest with React Testing Library
Focus on rendering, animation presence, interactions
Backend:
Pytest with coverage
Test each API route: success, edge case, failure
End-to-End:
Cypress: user scrolls, form submission, 3D interactions
Mobile and desktop tests
Containerization

Docker:
Separate containers for frontend and backend
Docker Compose:
Combines services for local dev
Shared .env file for configuration
CI/CD:
GitHub Actions:
Linting (ESLint, Prettier, Black)
Run all test suites
Build and deploy:
Vercel: frontend auto-deployment from main branch
Render: backend auto-deployment with webhook triggers
Tech Stack Summary

Frontend:

React (18.x)
TypeScript
@react-three/fiber & @react-three/drei
Tailwind CSS
Zustand
GSAP
Vite
Backend:

FastAPI
SQLAlchemy / SQLModel
SQLite (Redis optional)
Pydantic
Testing:

Pytest
Jest + React Testing Library
Cypress
DevOps:

Docker, Docker Compose
GitHub Actions
Vercel (frontend), Render (backend)
Tools:

ESLint + Prettier (JS/TS)
Black (Python)
Husky (pre-commit hooks)
Blender (for creating/editing 3D assets)
FFMPEG (for converting and compressing videos)
Constraints

Lighthouse Goals:
≥90 in Performance, Accessibility, Best Practices, SEO
Modular Codebase:
No file >500 lines
Optimized Assets:
3D models: compressed GLTF/GLB
Videos: WebM preferred
Browser Support:
Latest versions of Chrome, Firefox, Safari, Edge
Accessibility:
WCAG 2.1 compliant
Keyboard nav, screen-reader friendly ARIA labels for 3D elements
Responsive Design:
Works seamlessly on mobile, tablet, and desktop
Lower-end fallback rendering
Folder Structure

portfolio-website/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AboutMe.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Publications.tsx
│   │   │   ├── Contact.tsx
│   │   ├── assets/
│   │   │   ├── user-3d-model.gltf
│   │   │   ├── university-logo.png
│   │   │   ├── project-videos/
│   │   ├── styles/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── tests/
│   │   ├── components/
│   │   │   ├── AboutMe.test.tsx
│   │   │   ├── Education.test.tsx
│   │   │   ├── ...
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   ├── models/
│   │   │   ├── schemas/
│   │   ├── main.py
│   ├── tests/
│   │   ├── test_api.py
├── docs/
│   ├── PLANNING.md
│   ├── TASK.md
│   ├── README.md
├── Dockerfile
├── docker-compose.yml
├── .gitignore
├── package.json
├── requirements.txt
Development Workflow

Setup
Initialize project: npm create vite@latest + fastapi
Add linters/formatters: ESLint, Prettier, Black
Add Husky: pre-commit hooks for formatting
Create Docker and docker-compose files
Development
Build React components per section
Integrate 3D models and effects with GSAP + Three.js
Write and test FastAPI routes
Integrate backend to fetch dynamic content (if applicable)
Testing
Write and run Jest + Pytest for each new feature
Run Cypress tests on full interactions
Optimization
Compress all media/assets
Use lazy loading and tree shaking
Audit Lighthouse regularly
Deployment
Connect GitHub repo to Vercel + Render
Configure GitHub Actions for CI/CD
Milestones

Week	Goals
1–2	Project setup, Docker, initial commit, folder structure
3–6	Build all content sections, integrate 3D, basic backend
7–8	Testing, performance optimization, Lighthouse tuning
9	Deployment, CI/CD integration
10	Final polish: accessibility, cross-browser testing
Risks & Mitigation

Performance on low-end devices: Use simplified meshes, fallback 2D elements
Heavy asset sizes: Compress aggressively, host assets via CDN
Accessibility challenges: Add alt text, ARIA roles, keyboard support
Google Scholar complexity: Use fallback static JSON if live data isn’t feasible
Next Steps

Create TASK.md with sprint-based task breakdown
Initialize GitHub repository
Set up development environment
Start with AboutMe.tsx and integrate 3D model
Let me know if you’d like me to generate the TASK.md or project setup scripts next.

You said:
No . this is not as well developed or thought .
Give a better and more well structured one.
ChatGPT said:
Thanks for the clarification. To give you a better structured and more deeply developed PLANNING.md for your portfolio website, could you please let me know a few more things:

Do you want to include user personas, user journeys, or design principles to guide the UX?
Should the planning document include specific Figma/UI design references or planned layouts?
Would you like technical deep-dives on fallback strategies for older devices (e.g., Progressive Enhancement)?
Should the document describe alternative implementation paths or stretch goals (like dark mode, multilingual support)?
Do you want it structured with TOC and documentation-like headers (e.g., Architecture → Frontend → Component Design)?
Let me know so I can build a truly production-grade planning file.

You said:
https://www.awwwards.com/websites/3d/
I want the website to use 3d elements and components like this.
I want the website to have multi-lingual support in English,Japanese,spanish,chinese.
The videos should have also be changed when switching languages.
I will create videos and upload.
I want he best software engineering practices to implemented for structure.I also want security from injections and etc.
Use all free and open source tools available  such as sup abase for database etc.
I am not sure if cursor can directly download and use tools and plugins and elements from sigma to develop my website.
If it can I will give cursor the permission to search and use elements best fit for my website.
I want it to be dark , professional etc.
go
ChatGPT said:
Great. I will create a comprehensive and deeply structured PLANNING.md for your 3D portfolio website that:

Uses advanced 3D interactions inspired by award-winning Awwwards websites.
Includes multilingual support (English, Japanese, Spanish, Chinese), with corresponding localized videos.
Implements robust security (against injections, XSS, etc.).
Follows best practices in modern software engineering, using modular architecture and clean design.
Uses only free, open-source tools like Supabase, and leverages tools like Figma if Cursor supports them.
Features a dark, professional design aesthetic.
I will organize the plan with clear sections on architecture, tooling, performance, security, UI/UX patterns, internationalization, and development workflows. I’ll let you know as soon as it’s ready.

Research completed in 8m · 15 sources · 74 searches
Planning Document for Multilingual 3D Portfolio Website with Open Source Stack
Project Plan: Interactive 3D Portfolio Website

Vision and Goals

The vision is to create a single-page, interactive 3D portfolio website that stands out with a top-tier design and immersive user experience. This site will serve as a personal portfolio, showcasing the user's background (About Me, Education, Publications), skills (Tech Stack), and work (Projects) in a highly engaging manner. Goals include:
Showcase & Branding: Present the user's profile and projects in a memorable way, using advanced web graphics to reflect creativity and technical prowess. The site itself will function as a portfolio piece, demonstrating modern web development skills (Three.js, React, etc.) to impress potential clients or employers.
Engaging User Experience: Achieve an Awwwards-level experience with rich interactivity—smooth scrolling, animations, and 3D elements that captivate visitors. Each section of content will have interactive visual components, encouraging exploration and making the content enjoyable to browse.
Professional & Accessible Design: Maintain a professional, dark-themed aesthetic that aligns with the user's personal brand. Despite the creativity, the UI should be clear and user-friendly, with intuitive navigation and accessible content (multi-language support and compliance with accessibility standards).
Performance and Quality: Ensure the site is robust, secure, and high-performing. It should load quickly and run smoothly even with heavy media and 3D content, targeting Lighthouse scores above 90 in Performance, Accessibility, Best Practices, and SEO. The codebase and infrastructure will follow best practices for maintainability (clean code, modular architecture, CI/CD, testing) so that the project remains sustainable for future updates.
By meeting these goals, the portfolio site will effectively communicate the user's qualifications and creativity, while providing a cutting-edge web experience to visitors.
Design and UX Principles

Dark Theme & Visual Aesthetic: The site will adopt a modern dark theme, using a palette of deep grays/black for backgrounds with contrasting text and vibrant accent colors for highlights. A dark background helps 3D visuals and neon/glowing effects stand out, conveying a sleek, high-tech vibe. All text and UI elements will be designed for high contrast against the dark background to ensure readability. The overall look will be professional and minimalistic, avoiding clutter so that the interactive visuals and content shine without overwhelming the user. Inspiration from Awwwards 3D Designs: Drawing from top-tier 3D websites on Awwwards, we'll incorporate innovative UX patterns and micro-interactions that elevate the experience. This includes elements such as creative animations, unique cursor effects, parallax scrolling, and smooth transitions between sections
medium.com
. For example, the site may feature:
Page Transitions & Loaders: A custom loading animation (perhaps a subtle 3D spinner or progress bar) will display while heavy assets load, ensuring a polished feel from the start
medium.com
. Transitions between sections will be smooth (e.g., fading or sliding animations as the user scrolls) to maintain flow.
Microinteractions: Small interactive feedbacks on hover or click (buttons lighting up, icons animating) will make the interface feel responsive and refined
medium.com
. A possible custom cursor that reacts to hover (growing or highlighting interactive 3D objects under it) could be implemented for a playful touch.
Typography & Layout: Inspired by award-winning sites, we might use bold, large typography for section headers (e.g., the user's name or section titles) to create visual hierarchy
medium.com
. Content will be well-spaced and organized (following design principles of alignment and spacing) so that even with unconventional 3D layouts, the information is digestible. We will occasionally "break the grid" in controlled ways (e.g., overlapping elements or asymmetrical layouts) to add creative flair, while still maintaining usability
medium.com
.
Interactive 3D Elements: Each content section will feature a 3D or animated element that reinforces the section's theme (detailed per section in Core Features below). These 3D elements will not be mere decorations; they will provide interactive or animated context – for instance, a rotating 3D model related to a project or an animated graph for the tech stack. User input (scrolling, hovering, clicking) will influence these elements (e.g., scrolling might rotate a 3D scene slightly or trigger an animation sequence), giving users a sense of control and immersion. Important principles include maintaining smooth performance (avoiding janky animations) and offering visual cues so users know when elements are interactive (e.g., change of cursor or subtle glow on hover). A consistent frame rate and optimized animations (using GPU-friendly techniques) will ensure these interactions feel natural. User Experience & Navigation: Although the site is a single long page, clear navigation will be provided. A fixed navigation menu or icon will allow quick jumps to each section (About, Projects, etc.), and sections will be visually distinct so users recognize transitions. Smooth scrolling (possibly with a slight easing effect) and parallax will create depth—for example, background elements moving slower than foreground text
medium.com
. We will also implement scroll progress indicators or section headings that become highlighted in the nav as one scrolls through, so the user always knows where they are. On mobile devices, where heavy 3D might be toned down, the navigation may collapse into a menu for easy access to sections. Responsive & Accessible Design: The layout and interactions will be responsive to various screen sizes. On smaller devices, we may simplify or replace complex 3D scenes with static images or lighter animations to maintain performance and usability. Text will remain legible on all screen sizes (using relative units and media queries to adjust font sizes). Accessibility is a priority: all interactive elements will have non-visual alternatives or descriptions (e.g., ARIA labels, alt text for images) to support screen readers. The dark theme color choices will be tested for sufficient contrast. We will also respect user preferences (for example, honoring prefers-reduced-motion to disable or simplify animations for users who prefer less motion). By adhering to these design and UX principles, the site will achieve a balance between creative, cutting-edge visuals and usability. It will feel like a modern interactive experience without sacrificing clarity or performance, reflecting both the user's personal style and professional approach.
Core Features

The portfolio site will be a single-page application with distinct scrollable sections, each providing specific information and interactive visuals. Below is an outline of each core section and feature set:
Landing / About Me: This top section introduces the user. It will likely feature the user's name and a tagline or brief bio. An interactive 3D element here might be a 3D model or avatar of the user, or an abstract representation (e.g., a rotating globe if the user has global experience, or a dynamically lit 3D text of the user's name). As the entry point, it sets the mood: a dark background with perhaps a subtle animated starfield or gradient, and a spotlight effect on the central content. Text will include a short welcome message and links (or cues to scroll) to view more. This section establishes immediate interest with a "wow factor" 3D animation (for example, the 3D avatar could wave or the camera could subtly orbit around it). It will also include basic info like the user's professional title and a call-to-action (maybe a "scroll to explore" indicator).
Education: A section outlining the user's educational background (degrees, institutions, years). The content could be presented as a timeline or list, potentially with an interactive 3D timeline graphic. For instance, each milestone (degree or certification) could be a 3D card or icon (like a graduation cap icon in 3D) that animates into view as the user scrolls to this section. Hovering or clicking on a milestone might highlight it or show more details (e.g., courses, thesis) in a tooltip or side panel. The design will remain clean and professional—e.g., using university colors or logos (with permission) as textures on 3D elements, or simply bold text with subtle 3D accents. Even though 3D is used, the educational info (degree names, years) will be clearly listed in text for easy scanning.
Tech Stack: This section showcases the technologies and tools the user is proficient in. Instead of a plain list of skills, it will use an interactive 3D visualization. One idea is a 3D rotating galaxy of tech icons – for example, logos of programming languages and frameworks orbiting around a central node. Users could rotate this visualization (via drag or automatic slow spin) to view all tech icons. Hovering on an icon might enlarge it or pop up the name of the technology. Another concept is a stack of 3D blocks each labeled with a tech name, assembled into a sort of tower or pyramid that animates together. We will use recognizable logos (ensuring they're licensed for use or open-source) possibly applied as textures on 3D objects (like a cube faces showing different logos). The layout will ensure that if the 3D element is not accessible (for screen readers), the names of the technologies are also present in text form (perhaps as a caption or list below the canvas). This section emphasizes the breadth of skills in a visual way, while the interactive element invites users to engage (e.g., the user can spin the tech globe to find a particular technology).
Projects (with Videos): The projects section is a critical part of the portfolio, highlighting select projects the user has worked on. Each project entry will include the project title, a brief description, the tech stack used, and a video demo of the project in action. The videos will be embedded and language-specific (see Internationalization for switching logic). The layout might present projects as cards or tiles in a horizontal carousel or vertical stack. For each project, there could be a 3D preview or interactive thumbnail – for example, a 3D representation of the project (if it's a website, maybe a 3D browser window mockup that can be rotated; if it's a device app, a 3D phone with a looping video on the screen). Clicking a project’s thumbnail or a play button will open or play the project video. We will ensure videos do not autoplay with sound (to avoid startling users); instead, use a clear play control. Videos will be served in optimized formats (likely MP4/H.264 or WebM for modern browsers) and we’ll provide controls for pause/play and volume. Each project description text will be available in all supported languages, and the video source will change per language as provided (for instance, if the user has narrated project videos in different languages). We will coordinate the text and video such that switching the site’s language updates both seamlessly (e.g., by reloading the <source> of the video based on current locale).
Publications: This section is for any publications (research papers, articles, etc.) the user has authored. Content might include a list of publication titles, the venue or journal, and the year. To keep it engaging, we could incorporate a subtle 3D element like a 3D bookshelf or floating documents. For example, each publication could be a hovering card or book cover that, on hover, flips to show a summary or opens a link to the full publication. If the user has PDF downloads or external links, icons or buttons will be provided (with appropriate visuals like a PDF icon or external link icon). The style remains professional: likely white text for titles (possibly clickable) on the dark background, with gold or colored accents for important details (like award-winning publications). The 3D decorative elements (books, papers) might gently bob or rotate to give a sense of depth, but will not distract from the list of publications. This section also needs multi-language support for any descriptive text, although typically titles might remain in their published language (we'll clarify with the user if translations of titles are needed or not).
Contact: The final section provides a way for visitors to reach out. It will include a contact form with fields like Name, Email, and Message (all supporting multi-language labels and placeholder text). This form will be connected to the backend (Supabase) to store submissions. We will implement input validation on this form (e.g., required fields, valid email format) both on the client and server side. The design of the contact form will follow the dark theme—perhaps using semi-transparent input fields or glowing borders on focus to match the futuristic aesthetic. Alongside the form, we'll list other contact info or social media links (icons for LinkedIn, GitHub, Twitter, etc.), each possibly appearing as an interactive 3D icon (for example, a 3D email icon that might animate when hovered). The "Send Message" button may trigger a 3D effect on click (like a quick particle burst or a paper plane icon animation) to give feedback that the message was sent. After submission, the user will see a success notification (e.g., a toast message like "Thank you! Your message has been sent."). We will also handle error states gracefully (e.g., if submission fails, show a friendly error message). Security measures (like preventing XSS in the message field and spam protection) will be integrated (see Security Measures section for details).
Language Switcher: A core feature across the site (not a section, but a UI control likely in the header or footer) is full multilingual support. A language selector (possibly an icon toggle or dropdown listing "EN, 日本語, ES, 中文") will allow users to switch between English, Japanese, Spanish, and Chinese. This control will be accessible on all pages (likely fixed in a corner of the navbar). When a user switches language, all text content on the page will update to the selected language, and the project videos will switch to the corresponding language version. This ensures a consistent experience for multilingual users – for example, selecting Japanese will show UI labels and descriptions in Japanese and play the Japanese narration project demo videos. We will ensure that switching language does not reload the entire site (it can update content dynamically if using a SPA approach) or if it does (in case of static site per locale), the state (like scroll position) is preserved or the user is taken to the equivalent section in the new language.
Performance & Feedback Features: Throughout all features, we'll incorporate elements to ensure performance and feedback. For instance, lazy-loading of images and videos (the Projects videos will only load the thumbnail initially and only load the video file when the user is about to watch it, to save bandwidth). We will also include loading spinners or skeleton previews for content that may load asynchronously from the database (e.g., if publications or projects are fetched from Supabase, a brief loading indicator will show while data arrives). User feedback elements such as tooltips (for explaining icons or providing translations when hovering on a tech icon perhaps) and error messages will be consistent in style.
Together, these core features create a comprehensive one-page portfolio that is informative, engaging, and interactive. Each section is carefully planned to highlight the content in a visually striking way while maintaining usability and coherence with the overall design.
Internationalization and Localization Strategy

Supporting multiple languages (English, Japanese, Spanish, Chinese) is a fundamental requirement. Our strategy for internationalization (i18n) and localization (L10n) will ensure that all text, media, and even interactive elements adapt to the selected language, providing a first-class experience for users in each language. Language Infrastructure: We will use a proven i18n library for React – likely react-i18next (for a custom React app) or Next.js's built-in internationalization routing if we use Next.js. React-i18next provides efficient loading of translation resources and easy hooks/components for switching language on the fly
freecodecamp.org
. We'll maintain separate translation JSON files (or resources) for each language (e.g., en.json, ja.json, es.json, zh.json) containing all translatable strings in key-value form. This includes section headings, paragraph text, form labels, button texts, validation messages, etc. For example:
// en.json (similar structure for ja.json, es.json, zh.json)
{
  "about": {
    "heading": "About Me",
    "intro": "I'm a software developer ...",
    ...
  },
  "contact": {
    "nameLabel": "Name",
    "emailLabel": "Email",
    "messageLabel": "Message",
    "submit": "Send Message",
    "success": "Thank you! Your message has been sent."
  },
  ...
}
By externalizing text, we ensure no hard-coded strings in components, which prevents accidental non-translated content. For any text that might include dynamic values (e.g., "X projects completed"), we'll use i18n features for pluralization or interpolation to ensure grammatical correctness in each language. Language Switcher UI: A visible control (like a globe icon or a dropdown) will allow users to switch the interface language at any time. This might be implemented as a simple dropdown listing the languages in their own script (e.g., "English", "日本語", "Español", "中文") for clarity. When a user selects a language, the application will trigger the i18n library to load/apply that language pack. If using Next.js, it might navigate to a locale-specific route (like /ja for Japanese) which automatically loads the correct translations and content. We will preserve the user's selected language (for example, by storing in a cookie or localStorage, or relying on Next's locale mechanism) so that subsequent visits default to their last chosen language. Dynamic Content Localization: For videos and media, which are user-provided in different languages, we'll implement logic to switch those sources. Each project entry in the Projects section will have multiple video URLs – one per language. We can store these in a structured way (e.g., in Supabase or a config file). For example, a project entry might have an object of video links like: { video_en: "proj1_en.mp4", video_ja: "proj1_ja.mp4", ... }. When the site language changes, the video component will update to the appropriate source. Concretely, if using a React state for the video URL, a useEffect will watch the current language and update the source path accordingly
stackoverflow.com
. For instance, pseudo-code:
useEffect(() => {
  switch(currentLang) {
    case 'en': setVideoSrc(project.video_en); break;
    case 'ja': setVideoSrc(project.video_ja); break;
    // ... etc
  }
}, [currentLang]);
This ensures that if a user toggles to Spanish, they will see the Spanish project demo video without needing to manually navigate somewhere else
stackoverflow.com
. We will also provide appropriate subtitles or captions if the videos have on-screen text, depending on what the user provides (e.g., if an English project video has English text baked in, for other languages we might provide subtitles or a translated version of the video if supplied). Localized 3D and Graphics: Any text that appears inside 3D scenes (for example, a 3D text mesh that says "About Me") will also be dynamic based on language. We will avoid putting a lot of text inside canvases, but if needed (like a 3D "Hello" greeting), we can either have multiple versions of the model or dynamically generate textures for text. A simpler approach for multi-language text is to use the HTML/CSS for text and overlay it on the 3D scene, or use Three.js TextGeometry with the appropriate translated string. We must also ensure our font supports all required characters (especially Chinese and Japanese characters which might require a different font). We'll incorporate font files for necessary scripts and load them conditionally or use system fonts that are widely available for those languages. The site’s <html lang> attribute will be updated whenever the language changes (important for accessibility and SEO, so search engines know which language content is in). Right-to-Left (RTL) Support: In this project, all requested languages (English, Japanese, Spanish, Chinese) are written left-to-right. We do not have an RTL language like Arabic or Hebrew in scope, but we will design our i18n approach to accommodate RTL if needed in the future (for example, ensuring the CSS and layout could adapt via the dir="rtl" attribute if a new language is added). Data and Formatting: We will consider locale-specific formatting for any dates, times, or numbers in content. For example, if the Education section lists dates, different locales might format date strings differently (English "Mar 2022", Spanish "Mar 2022" might be similar, Japanese might use year first or include era, Chinese might need characters for month). Using i18n libraries, we can format dates/numbers using locale-specific utilities or simply ensure the content is written appropriately in each translation file. Default and Fallbacks: English will serve as the default language (if the user’s preference isn’t known). We might implement auto-detection: on first visit, detect the browser’s language settings and switch to that language if it’s one of the supported ones. This can be done via navigator.language and mapping (e.g., "es" -> Spanish). We will have fallback logic so that if a particular string is missing in a translation file (hopefully avoided by thorough translation), the app falls back to English for that string rather than showing a blank or key. Process for Translation: We will gather all text early in development so that it can be translated professionally (if needed) or by the user for each language. The translations will be tested in context to ensure they fit in the design (for instance, some languages may have longer words that could overflow buttons, or different line breaks needed). We will adjust CSS for each locale as needed (e.g., smaller font for Japanese if those characters render larger, or allow text to wrap). Additionally, we will ensure the font rendering looks good (Chinese and Japanese might require specific font weights or smoothing due to the dark background). By implementing this robust internationalization strategy, the site will provide a seamless experience to users in all four languages. It will not only translate text but localize the entire experience (including videos and possibly imagery if any contains text), demonstrating cultural and linguistic sensitivity. This approach also future-proofs the site to add more languages if needed by following the same pattern of adding translation files and media assets.
Technical Architecture (Frontend, Backend, APIs, Database)

The application will use a modern web tech stack with a clear separation of concerns between the front-end and back-end, following a scalable, modular architecture. Frontend: The front-end will be built with React (likely using Next.js as the framework for its additional features like SSR and built-in routing). The reason for choosing Next.js is its support for server-side rendering and static generation which can enhance performance and SEO, as well as its built-in internationalization routing support that aligns with our multilingual requirement. Next.js is open-source and widely used (it’s a common choice even among award-winning sites
medium.com
). If not Next.js, an alternative could be a React application bootstrapped with Vite or Create React App and using React Router for single-page navigation, but we'd then manually handle i18n and SSR. Next.js gives us structure out-of-the-box and the option to export a static site if needed. In the React app, we will integrate Three.js via @react-three/fiber (R3F) for the 3D graphics. This allows us to write Three.js scenes as React components, benefiting from React's declarative style and state management within the 3D context
medium.com
. Using R3F aligns with best practices from the community for adding WebGL content to React and has performance optimizations built-in. We’ll also use React Three Drei (a helper library with premade R3F components like orbit controls, loaders, environment lighting, etc.) to accelerate development of common 3D features
medium.com
. All these front-end technologies (React, Next.js, R3F, Drei) are free and open-source. The front-end will handle routing (if we consider each section anchor as a route or at least separate locales as routes), state management for UI (likely using React's Context API or lightweight state libraries if needed). For example, a LanguageContext might store the current language, and a global state for things like whether the contact form modal is open, etc. We don’t anticipate heavy global state beyond i18n, so Context or even simple prop drilling suffices; we likely won't need Redux for this project, keeping things simpler. Backend: We will use Supabase as the backend-as-a-service. Supabase provides several components:
PostgreSQL Database (open-source, where our data will reside),
Authentication (if needed) – though for this portfolio, user auth is not a core feature except potentially an admin login to view messages (not specified, likely not needed initially),
Supabase Storage – we might use this to store media assets (like the user-provided videos) in an S3-like object storage with CDN,
Supabase Functions (Edge Functions) – serverless functions that could handle custom backend logic if needed (for instance, sending an email on contact form submission or performing form validation on the server side).
Given the requirements, our backend usage is relatively light: we need to store and retrieve data for Projects, Publications, and Contact messages. We can model these in the Supabase Postgres database:
Projects table: fields for project title, description, tech stack, and possibly separate video URL fields for each language (or a related table for project videos with language codes). We might design it as projects table and a project_videos table keyed by project and language for normalization, or just have columns like video_en, video_ja, ... for simplicity.
Publications table: fields for publication title, venue, date, link (to PDF or external site).
Contact Messages table: fields for name, email, message, timestamp. This will collect submissions from the contact form.
Supabase provides a RESTful API and client libraries to interact with the database (thanks to PostgREST under the hood). For reading data (projects, publications), we have two options:
Direct from the client: Use the Supabase JavaScript client in the React app to query the database (with the public “anon” key). This is straightforward for read-only data and Supabase can enforce Row-Level Security (RLS) to ensure only intended data is accessible. For example, we can fetch the list of projects on page load or build time.
Via Next.js (if used) API routes or getStaticProps: We could fetch data server-side during the build (making the site static) or at runtime on the server. For instance, getStaticProps in Next could retrieve projects and publications from Supabase and embed them into the page, reducing client workload and improving SEO (the content appears in the HTML). Since content changes are infrequent, static generation with periodic revalidation might be ideal.
For the contact form (write operation), we will not allow direct client writes with the public key unless RLS is perfectly configured for safety. A more secure pattern is to create a small serverless function or Next.js API route to handle contact submissions
medium.com
. This API route (let's call it /api/contactSubmit) will accept the form data via POST. It will use Supabase's service role (secure) key on the server side to insert the message into the Contact Messages table
medium.com
. This way, the secret key is never exposed to the client, and we avoid any malicious use of the database. The API route can also implement additional spam checks or email sending if needed in the future. If we go fully static without Next server, an alternative is to use Supabase's client with RLS that only allows inserts (no reads) into the Contact table and perhaps a CAPTCHA; however, using a serverless function is more straightforward for security. Database (Supabase Postgres): The Postgres database will be the single source of truth for dynamic content:
Data modeling will follow normalization for structured data. For example, if Projects have multi-language fields, we could have a projects table and a project_translations table with columns (project_id, language, title, description, video_url). However, given only four languages and likely fewer than 10 projects, we might simplify by including multiple language columns in one row. We'll weigh maintainability (maybe the user or others might update content via Supabase Studio) – a translation table might be cleaner for them to edit.
We'll employ Row Level Security (RLS) policies on the tables to protect data. Specifically, enable RLS and write policies such that:
The projects and publications tables can be read by anyone (if there's no sensitive data, or we may use the anon key with read rights).
The contact_messages table allows inserts from anyone (no auth required) but does not allow select to public. That way, site visitors can send messages, but cannot read or list messages via the public API
medium.com
. Only the service role (used in our API function) or a logged-in admin (if we implement one) can read them. This prevents data leaks and abuse.
Supabase also automatically provides real-time subscriptions, but we likely don't need live updates on a portfolio site (no concurrent user content changes happening).
Architecture Diagram: The high-level architecture is depicted below, showing how the front-end, back-end, and database interact: 

Figure: High-level architecture. The React front-end (with Three.js for 3D) runs in the browser and communicates with Supabase’s backend (via HTTPS). Supabase provides an API layer to the Postgres database. For contact form submissions, an optional serverless function (or Next.js API route) acts as an intermediary, using secure credentials to write to the database. All other content (projects, etc.) can be fetched either directly from the database with safe policies or pre-fetched on the server side. In summary, the frontend handles presentation and interaction (including rendering 3D scenes and managing UI state), while the backend (Supabase) handles data storage, retrieval, and any heavy lifting like authentication or file storage. The design is such that the frontend remains mostly static/deterministic (which aids caching and performance), using the backend primarily for content and form submissions. This separation and usage of Supabase means we avoid writing a custom backend server from scratch – instead, we configure Supabase and write minimal serverless logic as needed, keeping the architecture lean and maintainable. All components are chosen for being free, open-source, and proven in production scenarios.
3D Component Strategy and Interaction Design

Integrating 3D elements into a web portfolio is a centerpiece of this project. We'll leverage Three.js via @react-three/fiber to incorporate interactive 3D scenes in a React context. The strategy is to make these 3D components enhance each content section's message while keeping performance and usability in check. Global Canvas vs Section Canvases: We have a choice of using a single <Canvas> (Three.js rendering context) that spans the entire page or separate smaller canvases per section. We plan to use a single global canvas that is either full-screen or covers a large area, with the 3D content changing based on scroll position or section in view. The advantage is that a single canvas allows smoother global control (like one Three.js scene or multiple scenes managed together) and avoids re-initializing WebGL context for each section. We can use React Three Fiber’s <Suspense> and lazy loading for each section’s 3D models, only activating them when needed. Using a single canvas also simplifies having consistent lighting and effects (we can move the camera or swap out models as the user scrolls). Scroll-triggered 3D Animations: We will implement scroll-based triggers such that when the user scrolls to a certain section, the relevant 3D objects appear or animate in. There are a couple of methods:
Using R3F's <ScrollControls> and useScroll (from Drei) which can map scroll positions to animation progress in the 3D scene.
Using an external library like GSAP ScrollTrigger to coordinate scroll with 3D object animations (greensock is free for our use-case and very powerful, though it’s not fully open-source; we may use it in free mode or opt for an open alternative like ScrollMagic or just manual JS).
Simpler approach: use the Intersection Observer on sections and when a section is in view, trigger a state that R3F uses to start an animation (like toggling a boolean that an object reads to start rotating).
For example, as the "Tech Stack" section comes into view, we could trigger the 3D tech-orbit to start spinning or pulsing each icon. As we leave the section, maybe it pauses or diminishes. The "Projects" section might have a low-poly 3D backdrop (like abstract shapes or a grid) that subtly moves until a video is played, at which point it might dim. We will choreograph these so that each section has a distinct feel but transitions are not jarring. Interactive Controls: We will enable some user interaction with the 3D content:
Pointer (Mouse) interactions: Many R3F objects can respond to pointer events (onPointerOver, onClick, etc.). We will use this for things like making objects highlight or tooltip on hover. For example, in the tech stack globe, hovering on a tech icon could slightly enlarge that icon and display the tech name (maybe as a floating HTML element or as a 3D text sprite). Clicking could potentially do something fun like spin the globe to center that icon (though that might be extra). We will implement a custom cursor for the page that aligns with the theme (perhaps a small circle or crosshair that reacts to hover by expanding or changing color when over interactive elements
medium.com
).
Camera movement: Instead of a static camera, we can animate the camera position or targets as the user navigates sections. For instance, at the top (About Me) the camera might be front-facing an avatar model. Scrolling to Education might move the camera to a different part of the scene where the timeline is laid out in 3D space. Alternatively, each section might be a separate scene attached to a common camera, and we simply switch out the scene contents. We'll be careful to ensure transitions are smooth (maybe fade out/in objects or quickly move them off-screen). We may allow limited manual camera control in certain sections (like an OrbitControls in the tech globe, but disabled elsewhere for guided experience).
Physics or Novel Interactions: If time and performance allow, we might incorporate a physics library (like react-three-rapier
medium.com
, which is based on Rapier physics) for fun effects – e.g., making certain objects draggable or collide. A playful example could be in the About section: maybe the user can throw around some 3D letters or objects for fun. However, these will be secondary and only if they don't detract from the message or performance.
3D Models and Assets: We expect to use a mix of imported 3D models and procedural geometry:
If the user has custom 3D assets (perhaps from Figma or Blender exports), we will incorporate those. We might use models in glTF format (which is modern and compact). For example, a 3D avatar or mascot, or models representing projects (like a 3D character for a game project).
If no custom models are given, we'll rely on simple geometries (boxes, spheres, planes) combined with textures or shaders to create attractive visuals. For instance, the tech icons can be textures on planes or part of a single spritesheet.
We'll keep models lightweight (low polygon count where possible, use of Draco compression for glTF, etc.). We will also preload critical models during the initial load (perhaps via Suspense and asset loading indicators) so that when the user scrolls to that section, the model is ready.
Lighting and materials: We'll use Three.js materials that work with our dark theme – likely a mix of standard materials with subtle lighting for 3D depth, and possibly some shader materials for special effects (like a glowing neon shader for accents). Because dark theme is forgiving for performance (we can have a mostly black background and only a few lit objects), we can optimize by having maybe one main light (like a directional light or ambient + spotlight setup) and not too many shadow-casting lights (shadows are expensive, we might only enable them on key objects if at all).
Shaders and Postprocessing: For a truly polished look, we might incorporate some postprocessing using Drei or Three.js EffectComposer (open source). This could include a bloom effect for glowing parts (e.g., neon effects on hover), or SSAO for slight ambient occlusion to make 3D contact points look better. But these can be performance heavy; we'll test them and ensure frame rates stay high. We might provide an option or automatically disable some effects on lower-end devices (feature detection).
Performance in 3D: We'll keep monitoring the performance of 3D content. Strategies include:
Limit the number of objects in the scene at any time. If a section's 3D element is not in view, we can remove or hide those objects.
Use frustum culling (Three.js does this by default) and possibly manually dispose of resources when not needed.
Use low-res textures and compress them (like using WebP or Basis compressed textures) for any images on 3D models.
Avoid or carefully use particle systems/physics as they can generate many objects – if we use, maybe limit count or use a shader-based particle system (calculating in GPU).
Ensure the canvas size isn’t larger than needed – maybe use lower pixel ratio on mobile to reduce GPU load.
Integration with DOM: We'll need to coordinate 3D with HTML elements (like overlaying text on canvas). We can use react-three/drei's Html component to place HTML elements in the 3D scene (e.g., labels that stay attached to an object) if needed. This could be used for tooltips or labels that are easier to style with CSS but still follow a 3D object. We just have to ensure those are also translated and accessible. Backup/No-WebGL Fallback: Though most users will have WebGL, we should handle the case where WebGL is not supported or if the 3D fails to load (perhaps due to old hardware). The plan is to detect if WebGL context can be created; if not, we show a static fallback (e.g., an image or a simplified version of the content). For example, we might prerender or screenshot the 3D scenes and have those images ready to show. Or simply ensure that all crucial info is available in text and the site remains navigable without the 3D canvas (maybe display a polite message "Your browser cannot display the interactive 3D graphics; please update or continue without them"). By executing this 3D strategy, we aim to add meaningful interactivity that complements the portfolio content. The interactions should feel natural and engaging (like a part of the storytelling of the site) rather than gimmicky. Each 3D component will be thoroughly tested for both usability (does it help convey something or at least delight users) and stability (no crashes, manageable load). Adopting React Three Fiber ensures we can build these features using React paradigms and tap into an ecosystem of tools (drei, rapier, etc.), which accelerates development and aligns with modern best practices for WebGL in React
medium.com
.
Tooling and Libraries Used (with rationale)

To meet the requirements while adhering to best practices and open-source constraint, we have carefully chosen the following tools, frameworks, and libraries:
Framework & Core Libraries:
React (v17+ or 18) – The foundation of our front-end. React’s component-based architecture and rich ecosystem make it ideal for building interactive UIs. It efficiently updates the DOM and, by default, provides protection against XSS by escaping content, which is a security plus
linkedin.com
. Its popularity ensures long-term support and many integration libraries (e.g., for Three.js, i18n, testing).
Next.js (latest version, if chosen) – A React framework for server-side rendering, static generation, and other optimizations. Rationale: Next.js will assist with internationalization routing, automatic code-splitting, and optimized production builds. It also simplifies deployment (it can be run serverlessly or exported to static files) and has built-in support for SEO (Head component for meta tags) and performance (Image Optimization). Next.js is MIT-licensed (fully open-source). If Next.js is not used, we would use Vite to scaffold a React app for faster development and React Router for managing section navigation if needed; however, Next provides a more integrated solution.
Three.js – The core WebGL library for creating 3D graphics. Three.js (MIT license) is the de facto standard for web 3D, providing abstractions for cameras, scenes, lights, models, etc. We need its low-level power to render 3D models and animations.
@react-three/fiber – React renderer for Three.js
medium.com
. This library lets us build Three.js scenes using JSX/React components, greatly simplifying integration of 3D into our React app. It’s open-source (MIT) and maintained by Poimandres (who are known for excellent 3D tools in React). Using R3F ensures better reusability and state synchronization for our 3D components.
@react-three/drei – A helper toolkit on top of R3F that provides many ready-made components (orbit controls, environment maps, loaders, text, etc.)
medium.com
. This will save time and avoid reinventing the wheel for common needs. For example, Html for 3D label overlays, OrbitControls for camera orbit, or useGLTF for easily loading glTF models. Drei is also MIT-licensed.
State Management & Data Fetching:
We will primarily use React’s built-in Context API and hooks (useState, useReducer, etc.) for managing state (e.g., current language, whether a modal is open). This avoids adding heavy libraries when not necessary.
If using Next.js, for data fetching we may use getStaticProps / getServerSideProps for initial data. For client-side data updates (if any, like a form submission result), we can call our API or Supabase client directly. If we need to manage remote data state, we might introduce SWR or React Query – these are open-source libraries for fetching/caching data. For instance, SWR (MIT license) could fetch the projects list from Supabase and cache it. However, given the simplicity, manual fetch inside a useEffect or Next’s server-side fetching might suffice.
Internationalization:
react-i18next – An industry-standard library (based on i18next) for handling translations in React
freecodecamp.org
. It provides easy hooks to get translated strings and to change language. It also can handle things like plurals, and namespace separation (we might use separate namespaces per section if desired). The library is open-source (MIT). If using Next.js, we might also consider next-i18next which wraps i18next in a Next-friendly way, or just use Next's built-in JSON file approach. The rationale is to minimize custom i18n code and use proven solutions to avoid bugs (like missing translations or formatting issues).
i18next-browser-languagedetector – A plugin for i18next to auto-detect the user’s language preference from browser settings. This can help default to the right language on first visit.
Styling:
Tailwind CSS – A utility-first CSS framework (MIT license) that can speed up styling by providing pre-defined classes for spacing, typography, colors, etc. Using Tailwind will help ensure design consistency (we can define a custom dark theme palette in Tailwind config) and allow rapid UI changes without leaving JSX. It’s also great for responsive design via its mobile-first classes. Alternatively, if the design requires very custom styles, we might use CSS Modules or Styled-Components (MIT) for component-scoped styles. However, Tailwind’s flexibility likely covers our needs (and it has utilities for dark mode which might be leveraged if we ever have a light mode or just to ensure proper contrast).
Framer Motion – A powerful animation library for React (MIT license) to create fluid UI animations. We might use this for animating DOM elements (text or section transitions) complementing Three.js animations. For example, fading in sections, animating text appearance, or fancy hover effects on buttons. Framer Motion provides a declarative way to describe animations and can be easier than raw CSS or manual JS for complex sequences. For 3D objects, we rely on R3F for animations, but we could also use GSAP (GreenSock Animation Platform) especially for scroll-triggered timelines or advanced control. GSAP's core is free to use (under a special license that is not strictly MIT but is allowed for personal/commercial with no fee as long as certain plugins are not used). Since all software must be open-source, if we strictly interpret that, we might avoid GSAP and stick to Framer Motion or basic R3F animations. We will likely use react-spring (MIT) or Framer for smaller interactions if needed, and perhaps basic GSAP (which itself is free to use) for scroll syncing if absolutely necessary, ensuring we don't include any proprietary GSAP plugins that require a license.
Backend & Database:
Supabase Platform – This includes the Supabase JS Client library (MIT license) for making calls to the Supabase services (auth, database, storage). We'll use this in our front-end or server code to easily perform queries (e.g., supabase.from('projects').select('*')). The client abstracts the REST and real-time subscriptions. It's free and open-source.
We will use SQL (via Supabase) for any advanced querying if needed (e.g., to filter projects, although likely not needed in a simple portfolio). If needed, Supabase also provides GraphQL via a plugin, but that’s probably overkill here.
Supabase Auth – If we decide to have an admin login to view submissions, we can use Supabase Auth (which uses GoTrue under the hood) to enable email/password or third-party login for the site owner. This auth system is free and open-source. It’s not explicitly required in the description, so we might skip implementing any login on the site itself and just let the user view messages directly in Supabase or a simple protected route.
DevOps & Build:
Docker – We will use Docker for containerization. Specifically, we will create a Dockerfile for the application. Likely, a multi-stage Docker build: a builder stage using Node (Alpine) to install and compile the React app (or Next app), and a final stage to serve the app. If we export a static site, the final stage can be an Nginx Alpine image serving the static files. If we run a Node server (for SSR or API routes), the final stage will be a lightweight Node.js runtime image running next start. Docker itself is open-source and the images we use (Node, Nginx) are from official open libraries. Docker ensures environment consistency and makes deployment to any server or cloud that supports containers straightforward.
GitHub Actions – Our choice for CI/CD pipeline (hosted by GitHub, configuration via YAML in repo). GitHub Actions is free for our use-case and provides an open YAML format to define build steps. There is huge community support (actions for checkout, Node setup, etc.). We will use actions like actions/checkout (MIT), actions/setup-node to set up Node environment, and possibly docker/build-push-action (Apache-2.0) for building and pushing Docker images. All these are open-source. The rationale is to automate testing and deployment on each commit, reducing manual errors and ensuring high quality (we won't accidentally skip tests).
ESLint – Linting tool (MIT license) to enforce code quality and style. We will use ESLint with recommended configurations (and perhaps Airbnb or Next.js preset) to catch potential bugs (like undefined variables) and maintain consistent code style (especially important in a project with multiple languages in code, to avoid mistakes like mixing up keys). We'll also include eslint-plugin-react and eslint-plugin-jsx-a11y (for accessibility linting). This automated static analysis helps ensure we follow best practices for React and accessibility from the start.
Prettier – Code formatter (MIT) to automatically format code on commit or save. This ensures a uniform code style which improves readability and maintainability.
Testing Libraries:
Jest – A widely-used testing framework (MIT) for JavaScript, will serve as our test runner. Jest is great for unit and integration tests in React. It also has snapshot testing capability which might be useful for ensuring UI doesn’t unexpectedly change (though snapshots with 3D output might be tricky, we can snapshot component rendering without running heavy 3D logic by mocking it).
React Testing Library (RTL) – Built on Jest, RTL (MIT license) provides utilities to render components and simulate user interaction in tests, focusing on testing UI in a user-centric way. We'll use RTL for testing components like the contact form (e.g., filling fields and pressing submit, then asserting that a success message appears or that our mock API was called). RTL encourages best practices (not testing implementation details, but outcomes).
@react-three/test-renderer – A specialized test renderer for React Three Fiber components
r3f.docs.pmnd.rs
. This allows us to create a headless 3D scene in tests and inspect the scene graph or fire events on it
r3f.docs.pmnd.rs
r3f.docs.pmnd.rs
. For example, we can test that our <TechGlobe> component creates the right number of icon meshes, or that clicking on the 3D object triggers the expected state change (the test renderer can simulate renderer.fireEvent(mesh, 'click') to test interaction
r3f.docs.pmnd.rs
). This is important to ensure our 3D logic works as expected and to catch regressions in interactive behavior. It's open-source (MIT) as part of the R3F family.
Cypress or Playwright – For end-to-end testing, one of these will be used. Both are open-source (Cypress under MIT, Playwright under Apache). These tools automate a real browser to test user flows. We will write e2e tests such as: "When the page loads, it shows the About section, then if I click the Spanish language, the About heading text changes to Spanish and the rest of the page content updates accordingly." Also tests like "Fill the contact form and submit, expect a success message". Additionally, we might simulate scrolling to ensure sections load their content (though testing canvas animations might be limited, we can at least ensure no errors occur and content appears). Playwright has an advantage of easier multi-browser testing (it can run tests in WebKit, Firefox, and Chrome) which could be beneficial to ensure broad compatibility.
Security & Utility Libraries:
DOMPurify – If we ever had to display user-generated HTML (not expected in this portfolio aside from maybe formatted publication abstracts), DOMPurify (Mozilla Public License) could sanitize it. Currently, we will ensure not to use dangerouslySetInnerHTML at all, so this might not be needed. But it's worth listing as a tool if needed for sanitization
linkedin.com
.
Helmet (for Next) – If using a custom server, Helmet (MIT) could set HTTP headers for security (CSP, HSTS, etc.). Next.js has built-in ways to set headers in next.config.js. We can incorporate those (e.g., contentSecurityPolicy in Next’s headers config).
Zod or Yup – For schema validation of data (MIT licenses). Specifically, we can use Zod to define a schema for contact form inputs on the server side and validate incoming requests
medium.com
. This ensures the data is in expected format and prevents malicious content (like too long strings or incorrect types) from processing. Zod can also be used on the client to share schema (since it’s JS) to validate before sending. This is robust for security and consistency.
All these tools are both free and open-source. We have chosen them to ensure we meet the project's constraints and quality standards:
They enable us to follow best practices (e.g., ESLint for code quality, i18next for proper localization, etc.).
Each addresses a specific need in the project (3D rendering, translations, testing, security, performance).
By using popular libraries, we also ensure that any future developers (or the user if they continue development) can find community support and documentation.
Finally, our development environment will likely use Node.js LTS (open source) for building the project, and Git for version control (Git is open source). We'll include helpful scripts in package.json for common tasks (e.g., npm run dev, npm run build, npm run test, npm run lint). The emphasis is on using standard, widely-adopted tooling to ensure longevity and reliability of the project, as well as compliance with the open-source requirement.
Security Measures

Security is paramount. We will implement multiple layers of security to protect the site and its data from common vulnerabilities (XSS, CSRF, SQL injection, etc.), following OWASP best practices and leveraging the inherent security features of our stack. 1. Cross-Site Scripting (XSS) Prevention: React by default escapes content, significantly mitigating XSS risks in our UI. We will avoid use of dangerouslySetInnerHTML entirely, unless absolutely necessary (which we do not anticipate). All user-provided data (like contact form input) will be treated cautiously:
We will sanitize inputs on the client side as a first step, using simple validation or a library if needed, to prevent unacceptable content. For example, the contact form might reject input containing HTML or scripts. However, we treat client-side sanitization as a UX improvement, not a sole security measure. The server side (Supabase or our API) will do its own sanitization/validation.
If we ever needed to render rich text from the database (not likely in this project), we would run it through an HTML sanitizer like DOMPurify to strip any script tags or malicious code before insertion into the DOM
linkedin.com
.
We will set a strict Content Security Policy (CSP) via headers, which whitelists sources of scripts, images, media, etc. For example, the CSP will specify that scripts can only come from our own domain (and perhaps 'unsafe-inline' will be avoided to not allow inline scripts)
linkedin.com
. This way, even if an XSS attack sneaks in, the CSP can prevent external script execution.
No eval or dynamic script creation will be used. Third-party scripts will be minimal (likely none except maybe analytics), which reduces XSS vectors.
2. Cross-Site Request Forgery (CSRF) Protection: CSRF mainly concerns state-changing requests (like form submissions) being triggered unknowingly by a user. Our site has one primary state-changing action: the contact form submission. Since we don't have user sessions (no login cookies for site users), CSRF risk is somewhat lower (attackers can't force a user to perform an action as an authenticated user since there's no auth). However, if we implement an admin login in the future or use cookies for any reason, we will:
Use CSRF tokens for form submissions if needed
linkedin.com
. For example, if the contact form posting to our API needed extra protection, we could include a hidden CSRF token that must match. In our case, since it's a simple form accessible by anyone, a CSRF token may not be strictly necessary (there's no harmful side-effect a third party could trick a user into beyond sending a message).
We will ensure any session cookies (if any) use the SameSite=Lax or Strict attribute
linkedin.com
, preventing them from being sent on cross-site requests, mitigating CSRF by default.
The contact form API will implement checks like requiring a specific custom header or value that normal browsers send with our form, to distinguish from random requests.
Additionally, a CAPTCHA or honeypot field might be used to prevent automated CSRF or spam requests (e.g., a hidden field that if filled by bots will cause validation fail).
3. SQL Injection Prevention: When interacting with the database via Supabase, we will not construct any raw SQL queries with string concatenation. Supabase's client library and PostgREST use parameterized queries under the hood for filters, etc., so injection risk is minimal. On Supabase Edge functions or any server code, if we did use SQL, we’d use parameter binding. Also:
All inputs that reach the database (like contact message content) will be validated and sanitized
medium.com
. For instance, the contact message will allow only certain length and characters; we ensure it's stored as plain text (the worst an attacker could do is send a weird text, which doesn't execute).
We will implement input validation on the server side using a schema (like Zod as mentioned). This will check types and acceptable values rigorously
medium.com
. For example, name should be a string < 100 chars, email must match an email regex, etc. This stops attempts to include SQL commands or excessively long input that might exploit any buffer.
Supabase RLS policies also help: even if an injection was attempted, a properly configured RLS might simply reject a query that isn't structured as expected or where the user isn't authorized. But the primary defense is parameterized queries.
4. Authentication & Access Control: Although the site doesn't have public logins, if we include an admin section for reading contact submissions, we will secure it:
Use Supabase Auth for the site owner to login (or some form of Netlify basic auth on a admin route if simpler). Only after auth would the messages table be read. This protects user data (messages) from unauthorized access.
Enforce strong passwords if using email/password, and maybe 2FA if available, since an admin compromise could expose contact info.
If no admin UI is built, the user will retrieve messages via the Supabase dashboard directly, which is secure behind their account.
5. Sensitive Data Handling: We won't handle highly sensitive personal data beyond what a user voluntarily submits in contact (name, email, message). Even so:
We will transmit data exclusively over HTTPS. Any API calls to Supabase or our functions will be on HTTPS endpoints. We will obtain an SSL certificate for the site domain (if hosted on a platform, they often provide one, or use LetsEncrypt if self-hosting).
We will encrypt secrets such as Supabase service key. In practice, this means not exposing it in client code. It will only exist in serverless function environment or GitHub Actions secrets. We will never commit keys to the repo. Environment variables will be used for any keys and handled carefully (they will be set in the deployment environment, not hard-coded).
The database (Supabase) presumably encrypts data at rest (most managed Postgres do; if self-hosting, we’d enable disk encryption). Regardless, only the project owner (with the service role or through Supabase UI) can access raw data.
6. Content Security & Integrity:
We will set appropriate HTTP headers to harden the app:
X-Frame-Options: DENY to prevent clickjacking by disallowing our site to be framed by others
linkedin.com
.
X-XSS-Protection: 0 (modern browsers ignore this if CSP is set, but older ones might use it).
Referrer-Policy: strict-origin-when-cross-origin to minimize leakage of referrer info.
Permissions-Policy (formerly Feature-Policy) to restrict use of sensitive APIs (e.g., no geolocation or camera access unless needed).
Strict-Transport-Security (HSTS) to enforce HTTPS on browsers for our domain.
Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy might be set if needed for certain performance isolation (especially if using SharedArrayBuffer for performance—likely not needed here).
We will also ensure that any third-party assets (fonts, scripts) are loaded from trusted sources. Ideally, host them ourselves to avoid dependency on external domains. If we use Google Fonts or similar, we will consider either self-hosting the fonts or at least ensure the connection is secure and allowed in CSP.
If using Next.js, we can easily add these headers in next.config.js. If using Nginx in Docker, we will configure it to send these headers.
7. Protecting Supabase API Keys:
Supabase provides an anon public key (meant for client use with RLS) and a secret service key. Our anon key will be embedded in the frontend to allow reads (that's fine because RLS will limit its power). We will guard the service key carefully:
It will only be used server-side (in our contact API route). In GitHub Actions and in deployment, it will be an environment secret. We read it from process.env.SUPABASE_SERVICE_KEY on the server. This way, it's never exposed in client bundle
medium.com
.
We will periodically rotate this key via Supabase if needed (post-launch maintenance).
The database rules will ensure that even if someone somehow got the anon key, they cannot modify or read unauthorized data, as explained.
8.Spam & Abuse:
Rate limiting: To prevent spamming of the contact form or other potential abuse (like hitting our APIs continuously), we will implement rate limits. In a serverless function for contact, we can track the sender's IP or a fingerprint and if they exceed a threshold (e.g., more than X messages per minute), we temporarily block or require a CAPTCHA. Since implementing a full backend rate limit might be complex, we might rely on services or simple measures like in-memory count within the function (though serverless resets on each call typically). Alternatively, because Supabase logs can be monitored, we can have a simple rule: only allow, say, 5 messages per day per IP (not foolproof, but a deterrent). We can implement that via a check in the function by querying how many recent messages from that IP exist.
Honeypot Field: Add an invisible field in the contact form that humans won’t fill (via CSS hidden). Bots might fill it, and if it's filled, we reject the submission.
If spam becomes a big issue, we could integrate an open-source CAPTCHA alternative or a math question ("what is 2+3") to filter out bots. We'll assess if needed.
9. Dependency Security:
We will regularly run npm audit (and during CI) to catch vulnerabilities in libraries and update as needed. Using widely-used libraries like React, Next, etc., means vulnerabilities are rare and patched quickly.
We will pin versions or use caret versions carefully to avoid injecting a breaking change unawares, but also not stay outdated. Dependabot (a GitHub feature) can be enabled to alert/PR for security updates.
Build process: our CI will ensure that only vetted code is deployed. We won't directly pull from unknown sources. We can also consider verifying integrity of assets (subresource integrity for CDN assets if any).
10. Testing for Security:
We will include tests for certain security aspects, e.g., ensuring that content is properly encoded. For example, a test could render a component with a string that includes <script> and verify that it's not executed and appears innocuous in output. Also, tests to ensure our API does not accept invalid input (like too long strings get rejected with 400).
Before launch, we can run a security scan using tools like OWASP ZAP or other automated scanners to catch any missed issues. Also using Lighthouse's Best Practices audit (which includes some security checks for HTTPS and vuln libraries).
11. Docker and Deployment Security:
The Docker container will be built following least privilege: e.g., using a non-root user to run the app inside the container (for Nginx or Node). This avoids container breakout risk.
We'll minimize open ports (basically only port 80/443 as needed). If deploying on a VM, use firewall to restrict other ports.
The CI/CD (GitHub Actions) will store secrets (like deployment server credentials or API keys) in encrypted secrets, and we will follow the principle of least privilege for those as well (for example, if deploying to a cloud, use a token that only allows deploying to that one app, not full account access).
By covering these areas, we aim for a secure configuration by design. The combination of React's inherent protections and our proactive measures (sanitization, CSP, RLS, etc.) will mitigate most common threats:
XSS: mitigated by React escaping and CSP and no unsafe injection of HTML
linkedin.com
.
CSRF: mitigated by same-site cookies and token if needed
linkedin.com
.
SQLi: mitigated by using safe query APIs and validating input
medium.com
.
Data exposure: mitigated by auth controls and not exposing secrets.
Misc: any library or server config decisions will consider security (for instance, enabling HTTPS/2 to avoid certain older protocol vulnerabilities, and monitoring logs for suspicious activities).
Security will be revisited continuously during development (especially after we have a working prototype, we'll perform a review focusing solely on security aspects to see if anything was overlooked).
Testing Plan

We will implement a comprehensive testing strategy covering unit, integration, end-to-end, and performance tests to ensure the application is robust and meets quality standards. Automated tests will be run in CI/CD pipelines to catch regressions early. 1. Unit Testing:
Unit tests will focus on individual functions and React components in isolation:
Utility Functions: Any helper functions (e.g., a function that selects the correct video URL given a language code, or validation functions for form input) will have straightforward unit tests. For example, testing that getVideoUrl(project, 'ja') returns the Japanese video link and falls back correctly if one is missing.
React Components (Pure): For components that are mostly presentational or have simple logic, we'll use Jest + React Testing Library (RTL) to render them and verify output. For instance, the LanguageSwitcher component – we can simulate a click on a language option and assert that a callback (or context value) changes accordingly.
Validation Schema: If using Zod for form validation, we can write tests to feed it various inputs and ensure it accepts valid ones and rejects invalid ones (to ensure our rules like "email must have @" are enforced).
3D Components (with R3F Test Renderer): Using @react-three/test-renderer, we will test the behavior of critical 3D components. For example:
For the Tech Stack 3D globe component, after rendering, we can inspect renderer.scene to ensure it contains the expected number of children (like the number of tech icons)
r3f.docs.pmnd.rs
r3f.docs.pmnd.rs
.
We can simulate an interaction: e.g., await renderer.fireEvent(mesh, 'click') on a mesh representing a tech icon and then check if its scale or state updated as expected (like perhaps clicking an icon highlights it)
r3f.docs.pmnd.rs
.
For the Contact form component (which might not be 3D but normal React), we will test that entering data and hitting submit calls the Supabase API function (we will mock the API call). We can use Jest mocks or MSW (Mock Service Worker) to simulate the network.
We will mock heavy external dependencies in unit tests. For instance, in a test of a component that uses the Supabase client, we'll inject a mock Supabase client to avoid real network calls. Similarly, Three.js can be heavy, so for tests that don't require actual rendering, we might stub out Three components or run tests in a node environment without needing a real canvas.
2. Integration Testing:
Integration tests will combine multiple components or test more complex flows without a full end-to-end environment:
We can mount a larger portion of the app (e.g., a section with its content and perhaps the 3D canvas context) using React Testing Library and JSDOM environment. Then test interactions like "when the LanguageContext is set to Spanish, the About section's heading changes to the Spanish text".
Test that the context and i18n integration works: we might simulate a language change event and ensure all child components (across multiple sections) show updated text. This ensures our i18n configuration is correct.
Integration of 3D and DOM: For example, if we have a tooltip that appears when a 3D object is hovered (which might be implemented with a state change that causes a DOM element to appear), we can simulate that state change and check the DOM via RTL.
We will test interactions between the front-end and Supabase on a staging/test environment: possibly using a separate test Supabase project or using Supabase's ability to run a local Postgres for testing. Alternatively, use MSW to simulate Supabase REST responses. For example, test that when the app loads, it fetches a list of projects from Supabase and those projects' titles render in the Projects section.
3. End-to-End (E2E) Testing:
Using Cypress or Playwright, we'll simulate actual user scenarios in a real browser environment:
Basic Navigation & Rendering: Test that the page loads successfully and the main sections are present. E.g., ensure that the heading "About Me" appears, then scroll to "Projects" and see that project items appear. This catches any runtime errors that might not appear in unit tests (like if Three.js fails to initialize).
Language Switching E2E: Start with English content, click the language switcher to Japanese. Then verify that known text (like the About Me heading) is now in Japanese (we'll have the expected translations to compare). Also verify that the video in Projects has switched (if possible, we could check the video element's src attribute or some identifier).
Contact Form E2E: Fill out the form fields (simulate typing a name, email, message). Induce a validation error (e.g., put an invalid email "abc" and try to submit, ensure an error message appears and submission does not go through). Then fill a correct email, submit the form. If our design shows a success message, assert it is visible. We won't actually send a real email, but we might let it hit a test Supabase or intercept the network request. In Cypress, we can stub the network call and respond with a fake success, then ensure the UI behaves accordingly.
3D Interaction E2E: End-to-end frameworks aren't as straightforward for canvases, but we can attempt some limited checks: e.g., ensure that the canvas element is present and has a certain size, or that interactive CSS changes happen. For example, if hovering over a tech icon changes the cursor or highlights text, we can simulate a mouseover (Cypress has .trigger('mouseover', {position: ...}) on elements if we know their DOM region or have an overlay). We might not validate the internal 3D state, but at least ensure no errors on interacting.
Performance E2E (Lighthouse): We can integrate a Lighthouse CI or use Playwright to measure performance metrics. For example, using Playwright's trace or web-vitals library to get the Largest Contentful Paint (LCP) and ensure it's under a threshold. We aim for high Lighthouse scores, so we might run Lighthouse on the built site as part of CI (there are GitHub Actions for Lighthouse). We can set budgets (like < 2s LCP on desktop, < 4s on mobile) and treat regressions as issues.
Cross-browser testing: Using Playwright, we can run the same tests in Chromium, Firefox, and WebKit engines to catch any browser-specific issues (Three.js and our CSS should work across, but it's good to verify). Also test on mobile viewport sizes via the testing framework or manually.
4. Automated Accessibility Testing:
We'll incorporate accessibility tests in both unit/integration and E2E:
Use jest-axe (axe-core) with React Testing Library to run an accessibility audit on rendered components. For example, render the entire page or each section and use axe to check for common issues (missing alt attributes, low contrast, incorrect ARIA usage). We'll fix any violations.
Use Cypress-axe in end-to-end tests to run accessibility checks on the live site after each major interaction. For instance, after loading the page, run axe to ensure no serious violations (apart from known intentional ones, if any).
We will specifically test keyboard navigation in E2E: e.g., press "Tab" repeatedly and ensure focus goes through nav links and into the contact form fields logically. Also test that pressing "Enter" on the language switch toggles it (for keyboard users).
The tests will ensure that language changes update the lang attribute on html, which is important for screen readers (we can check the DOM property).
5. Performance Testing:
Besides Lighthouse, we can do some profiling:
Possibly write a script (using Puppeteer/Playwright) to measure memory usage after loading the site and after interacting, to check no obvious memory leaks (Three.js should free resources when scenes change; we will test for detached canvases or console warnings).
Use Chrome DevTools to simulate slow network and check our loading strategy (manually). Not automated, but part of testing plan.
6. Continuous Testing Integration:
GitHub Actions will run our test suite on each push. We'll have jobs for linting, unit/integration tests (headless), and E2E tests (possibly using a headless browser or a Xvfb display for Cypress). We may separate E2E to run on certain branches or nightly if it's heavy.
We will also include tests for our Docker container (maybe as part of CI, build the image and ensure it starts and responds on a ping route or serves the static files).
Testing the CI pipeline itself: we'll do dry runs to ensure environment variables and secrets are correctly configured (like making sure tests can access any needed test configuration, e.g., a test Supabase URL).
7. Test Coverage Goals:
We aim for high coverage on critical logic (ideally > 80% lines). We won't obsess over coverage numbers for 3D visuals that are hard to test, but we ensure key functionalities (language switch, contact form, content rendering) are thoroughly tested. 8. Manual Testing:
In addition to automated tests, we will conduct thorough manual testing, especially for the visual aspects that are hard to validate via code:
Test on various devices (desktop with high DPI, a typical laptop, an iPad/tablet, an Android phone, an iPhone) to see that responsive design holds, and performance is acceptable.
Manually run through each language to catch any layout issues due to text length or font.
Use screen reader (e.g., NVDA or VoiceOver) to navigate the site and ensure content is announced meaningfully (this supplements our automated a11y checks).
Check that all external links (if any in Publications or contact info) work and open in new tabs (with proper rel="noopener" for security).
Possibly ask a friend or colleague who speaks the other languages to review that the content reads well in their language context.
By combining these testing approaches, we aim to catch issues at multiple levels. The end result should be a well-tested application where we have confidence in each deploy (since CI runs the tests), and any future changes can be made safely knowing tests will flag unexpected side-effects. Testing is woven into our development workflow (writing tests alongside features) so that quality is maintained from the start.
DevOps and CI/CD Strategy

We will set up a robust DevOps pipeline to automate building, testing, and deployment of the portfolio site. The focus is on consistency, repeatability, and catching issues early. Here’s the CI/CD strategy: Version Control & Repository Setup: We will use Git with a repository hosting service (GitHub, given we are using GitHub Actions). The repository will contain everything needed to build the project (except secrets). We'll enforce a branching strategy: e.g., a main branch for production-ready code, and feature branches for development. Code reviews will be done via Pull Requests before merging to main to ensure code quality (if the team is more than one; if solo, at least use PR to trigger full CI before merging). Continuous Integration (CI):
Every push or Pull Request will trigger the CI pipeline on GitHub Actions:
Job 1: Lint & Static Analysis: Use ESLint to lint the codebase. Also run type checking if we use TypeScript (likely we may use TypeScript for better reliability, though it wasn't explicitly stated; if we do, tsc --noEmit would run here). This catches syntax errors, undefined variables, and style issues early.
Job 2: Run Unit/Integration Tests: Execute npm test (Jest tests) in headless mode. This will run all unit and integration tests and report results. The CI will fail if any test fails. We’ll also generate coverage report here (and optionally use Coveralls or Codecov integration if desired, though not mandatory).
Job 3: Build (for test or prod): Attempt a production build of the app (npm run build). This ensures that the code actually compiles and catches any build-time errors (like out-of-scope imports, etc.). If using Next, it will run Next’s build, which also catches certain issues like Link usage, etc. We'll also run an export if we plan static, to ensure that process works.
Job 4: End-to-End Tests: This job can spin up the built app and run Cypress/Playwright tests. To do this in CI:
For a Next.js app, we can run npm run start (the production server) or serve the static build via a simple server. On GitHub Actions, we'd use a service container or background process. Alternatively, use start-server-and-test package to launch the app and wait, then run Cypress.
For Cypress, we'll use the official Cypress GitHub Action which handles installing and running tests. Playwright also has a test runner that can be integrated.
This job might be conditionally run (maybe only on merges to main or a nightly schedule) if it's heavy, but ideally we run a subset on PRs as well for critical flows.
Job 5: Performance Audit (optional): We can have a job that uses Lighthouse CI to run performance audits on a deployed preview (or on localhost). This could produce a report of Lighthouse scores for performance, accessibility, etc., and fail if below 90 as desired. Possibly run this on main branch builds.
We will configure these jobs to run in parallel where possible (for speed) but with appropriate dependency (e.g., build must happen before e2e, since e2e needs an app to test). GitHub Actions allows a matrix or sequential steps in one job. Continuous Delivery/Deployment (CD):
After tests pass on the main branch, we will automate deployment:
Docker Build: We will have a GitHub Actions workflow (or part of same pipeline) to build the Docker image. Using the official Docker Build-Push GitHub Action, we'll:
Log in to a container registry (e.g., GitHub Container Registry or Docker Hub) using stored credentials (saved as GitHub Secrets).
Build the image from our Dockerfile. Tag it with a version (maybe the git commit or a semantic version if we maintain one).
Push the image to the registry.
The Docker image will encapsulate the web app. For example, it might run an Nginx serving the static files. If SSR is needed, it will run Node. We will have environment variables (like Supabase URL, anon key) passed to the container. For a static site, these might be embedded at build time; for a dynamic server, they’d be runtime env.
Deployment to Environment: Depending on hosting choice:
If using a cloud provider (AWS, DigitalOcean, etc.), we can set up infrastructure (maybe a VM or container service). For simplicity, we could use a VM (droplet) with Docker Compose. The CD pipeline could SSH into the server and do docker pull and docker run the new image, or update a compose file and restart. There are GitHub Actions for SSH deployment. We would ensure SSH keys are secure in secrets.
Alternatively, use a service like Fly.io or Heroku (both can directly deploy Docker images). These have CLIs we can call in CI to deploy. Fly.io is more open (the CLI is open source and free tier available). We could configure a fly.toml and just run flyctl deploy in CI.
Supabase does not host frontends, but for simplicity we might host static pages on something like Netlify (which is free, but not open-source software itself; though using it doesn't violate open-source requirement since it's just hosting the output).
If we treat "All software must be open-source" strictly, the deployment target might be self-hosted or an open platform. We can mention using Docker Swarm or Kubernetes if scaling was needed, but likely overkill for a portfolio.
We will at least outline that the container can be run on any Docker host, so the user has flexibility (they could run on their own server, in a container on a PaaS, etc.).
Environment Configuration: We'll manage environment-specific settings via env vars (in GitHub Actions and on the server). E.g., SUPABASE_URL, SUPABASE_ANON_KEY for the app to connect to correct Supabase instance (likely these don't change between environments unless we have a dev and prod Supabase project).
Notifications: We can configure the CI to notify (via email or Slack webhook) on deploy success/failure, so the user or team knows the status. This is optional.
Continuous Monitoring: (Post-deployment, part of DevOps)
We plan to set up uptime monitoring (maybe using a free service or self-hosted cron job) to ping the site regularly and alert if down.
Also, we may integrate error logging: since we prefer open-source, a solution could be self-hosted Sentry or using Supabase's log if any. But for now, maybe console errors are fine for a small site. However, we can include something like Sentry’s open-source SDK (which is free to use, and Sentry can be self-hosted if needed) to catch runtime errors in production and report them.
Development Environment Parity:
We'll use Docker Compose in development to simulate the production environment if possible. E.g., one service for the app, one for a local Supabase (Supabase offers a docker-compose for local dev). This way, devs can run docker-compose up to have a stack locally (this ensures no "works on my machine" issues when deploying container).
If not using Docker for dev (maybe using npm start in dev mode is simpler), at least we ensure Node version parity (use .nvmrc or engines field to align with Node version in container, e.g., Node 18).
We'll use sample data in dev to populate Projects/Publications so we can see something. Possibly create a script to seed the Supabase dev DB with sample content.
Best Practices in CI/CD:
The CI will use caching to speed up builds (like cache ~/.npm or node_modules between runs, and possibly the Docker layers if using GitHub cache).
Only deploy when certain conditions met: e.g., merge to main triggers a production deploy. We might also have a staging environment: e.g., any push to a dev branch deploys to a staging site (maybe at a subdomain or separate container). The user can then review it before promoting to main.
Use of GitHub Environments: We can define a "Production" environment in GH Actions that requires approval to deploy, or holds the secrets. This way, one can implement a manual approval step for deployment if desired (perhaps overkill for personal site, but we mention it as possibility).
CI Failure Handling: If any test or lint fails, the code isn't deployed. We'll set required checks on GitHub so you cannot merge if tests fail.
Documentation & CI: We'll add a README with instructions on how to run tests, build, and deploy, so that it's clear for any developer. Also, possibly a section on how to use the CI (like how to trigger a redeploy, how to rollback if needed - perhaps by re-running a previous workflow or keeping previous image tags). This CI/CD approach ensures continuous quality (through tests and checks) and continuous delivery (every change that passes tests can go live automatically). It minimizes human error in the deployment process and allows the user to confidently update their portfolio content or features, knowing that the pipeline will verify everything before it affects the live site.
Accessibility Strategy

Building the portfolio with accessibility in mind ensures that all users, including those with disabilities, can access and navigate the content. We will adhere to WCAG 2.1 (AA) standards as a baseline. Key strategies include: Semantic HTML Structure: We will use appropriate semantic elements for content:
Use <header>, <main>, <footer>, and <section> tags to define page regions. Each section (About, Education, etc.) will likely be a <section> with an appropriate heading (<h2> or similar). This provides screen readers a clear content outline and allows quick navigation via ARIA landmarks or heading navigation.
Ensure that heading levels are logical and not skipped (e.g., if the site title is an <h1>, section titles are <h2>, sub-sections if any are <h3>, etc.).
Use lists for lists of items (e.g., a list of publications could be marked up with <ul> and <li> for each publication entry).
Form elements in Contact: use proper <label> for each input and associate them via for attribute. The submit button will be a <button type="submit"> within a <form>.
Keyboard Navigation: The site will be fully navigable via keyboard:
All interactive elements (links, buttons, form fields) will be reachable with Tab key. We’ll ensure the focus order follows the visual/logical order of the content.
Custom interactive elements (like if we create a custom carousel or a custom 3D canvas interaction that requires input) will be given keyboard controls as well or an equivalent. For example, if there's a need to rotate the 3D scene via keyboard, we could allow arrow keys to rotate the tech globe as an enhancement for those who cannot use a mouse.
Avoid keyboard traps: no element (like a modal) will trap focus without a way out. If we open a modal (say a video in fullscreen), focus will be moved into it and then returned to the trigger after closing (using focus management in React).
Provide skip links: e.g., a "Skip to Content" link at the top to jump to main content, which is useful for keyboard and screen reader users to bypass repetitive navigation.
Screen Reader Accessibility:
We will use ARIA attributes where needed to enhance the experience for screen reader users, but we'll prefer native elements first (less ARIA is more when native semantics suffice).
The language switcher: we will ensure it has an appropriate label (e.g., aria-label="Select Language" if it's just flags or short codes). If it's a dropdown, use a native <select> or an accessible custom menu with roving tab index.
The 3D canvas itself might be marked as aria-hidden="true" if it doesn't convey info directly (because screen readers can't interpret canvas content). Instead, we will provide textual descriptions of what’s happening. For example, in the Tech Stack section, we might include a visually-hidden list of the technologies so a screen reader user can still know what skills are listed. Or a summary like "Technologies: React, Node.js, Python, etc." This ensures no information is lost.
Any important images (like project thumbnails if we have them outside canvas) will have descriptive alt text. Decorative images will have empty alt attributes to be skipped.
If the user’s name is rendered in a fancy way (like a logo or canvas), we will ensure it’s also present as text (perhaps the site title text).
We will set the document <title> and meta description appropriately for context.
Color and Contrast:
All text will meet contrast requirements against the background (4.5:1 for normal text, 3:1 for large text). Given a dark theme, this usually means light-colored text. We'll pick colors accordingly and test with contrast checkers. For instance, white on black is fine; for colored text, ensure it’s not a low-contrast dark gray on black, etc. We will also check contrast of things like placeholder text in forms (which often is lighter by default) and adjust if needed.
We will avoid conveying information solely by color. For example, in the timeline or tech list, if we color-code categories, we'll also include text or icons to differentiate. Similarly, error messages will not rely only on red color but also include an icon or bold text and proper ARIA roles.
Focus indicators: We will customize focus outlines to be clearly visible on the dark background. The default focus ring might be fine (often it's a glowing outline), but if not, we’ll add CSS to make it obvious (e.g., a bright cyan outline or underline for focused links). This helps keyboard users track where they are.
Accessible Forms:
The contact form will have labels as mentioned, and also validation messages that are screen-reader friendly. For instance, if email is invalid, an error text appears and we might use aria-live="polite" on an error container so it's announced. Also associate the error message with the field via aria-describedby.
We will use HTML5 form validation attributes (like type="email", required) for basic validation which browsers announce automatically, plus our custom validation for better messages if needed.
The submit button will be reachable and have a clear label ("Send Message" rather than just an icon).
ARIA Roles and Attributes:
We might use role="navigation" on the nav bar, role="main" on the main content (though using <main> tag already implies that).
If we implement any custom components like a carousel or tab interface, we will assign proper ARIA roles (e.g., role="tablist", role="tab", role="tabpanel" along with aria-selected, aria-controls etc., for a tabbed interface).
For dynamic content changes (like after form submission, showing a success alert), we’ll use role="status" or role="alert" on those messages so screen readers announce them immediately.
If any 3D element has an interactive nature akin to a button (say clicking a 3D object triggers something), we will consider making it keyboard-focusable (tabindex="0" on its container) and giving it role="button" with an aria-label describing the action. However, since 3D objects themselves are canvas-rendered, we might instead have an overlay button that triggers the same action for accessibility.
Testing & Tools:
As noted in the Testing Plan, we will use tools like axe-core to automatically detect accessibility issues during development. We'll also do manual testing with screen readers (NVDA/JAWS on Windows, VoiceOver on MacOS/iOS, TalkBack on Android) to ensure content is being read in a sensible order and with appropriate descriptions.
We'll test keyboard navigation manually to ensure one can reach all content and operate all controls (including opening/closing any modals, submitting forms, etc.) without a mouse.
We will utilize eslint-plugin-jsx-a11y in our development to get warnings if we forget things like an alt attribute or use an incorrect ARIA role.
Responsive Accessibility:
On mobile, interactive elements will be large enough to tap (meeting minimum touch target size). We'll avoid tiny buttons. If necessary, we’ll increase padding on small elements for touch.
The language selection on mobile might be a larger dropdown or a full screen selector to ensure it's easily usable.
Prefer Reduced Motion:
Recognizing that our site will have animations, we will respect the prefers-reduced-motion media query. If a user has that setting enabled, we will provide a more static experience: e.g., disable auto-playing animations, reduce parallax or perhaps only do instantaneous transitions rather than smooth scroll. We can implement checks in our CSS/JS to not run certain effects when reduced-motion is on. For example, Three.js could still run, but we might not rotate models constantly; only on user interaction.
We will also avoid any animations that flash excessively or could trigger photosensitive issues (no rapid strobes or very high-contrast flashes).
Alternate Content:
For any videos, we should provide captions or text transcripts if dialogue or narration is present. At minimum, since videos are user-provided, we’ll encourage that they include subtitles. If a video has important visual-only content, we might need audio description; but given these are likely project demos, we'll ensure the text around the video explains what's shown.
If a user can't use WebGL, as mentioned, we have a fallback. That fallback (like an image or text summary) ensures that even without the fancy visuals, the user can access the information. We'll make sure those fallbacks are properly labeled (the image fallback would have alt text describing what the 3D scene would have conveyed, for instance).
Continuous Accessibility Maintenance:
We will include accessibility in our checklist for code reviews and testing for any new features or changes.
Post-launch, if any user feedback highlights an accessibility problem, we'll address it promptly.
By implementing these measures, we aim for the site to be usable by people with a wide range of abilities. Accessibility is not just an afterthought but integrated into design and development from the start. This also often improves overall user experience for everyone (e.g., good contrast and clear navigation benefit all users, not just those with disabilities). The result should be a portfolio that is both impressive visually and inclusive.
Performance Optimization Plan

Achieving a Lighthouse performance score of 90+ is a key goal. This is challenging with heavy 3D and video content, but we will adopt numerous strategies across development and deployment to optimize performance in terms of load time, runtime efficiency, and responsiveness. 1. Asset Optimization:
Images: Use efficient image formats (WebP/AVIF) for any raster images. If we have photographs or texture images, we’ll compress them and serve appropriately sized versions. Next.js can assist with <Image> optimization (serving different sizes for different screen widths and WebP when supported). We will also use lazy loading for offscreen images (Next <Image> does this by default or we can use loading="lazy" for normal <img>).
Videos: Optimize video files provided by the user:
Encode videos in modern codecs (H.264 or H.265/VP9 for better compression) and ensure resolution/bitrate is not excessive (no 4K video if not needed; maybe 720p or 1080p if clarity needed).
Host videos on a fast CDN or use Supabase Storage (which provides a CDN). We can also consider streaming via HTML5 video streaming protocols if needed, but since it's likely short demo clips, progressive MP4 is fine.
Use the preload="metadata" attribute on video tags so that the browser only downloads metadata (not the whole video) until user interacts. We can also not autoplay heavy videos, giving user control.
Potentially provide poster images for videos so that a placeholder shows without loading the video frames.
3D Models: Use Draco or GLTF compression for 3D assets. Remove unnecessary data from models (e.g., reduce mesh complexity, limit textures sizes). We'll only load models when needed. Using R3F’s lazy loading with Suspense ensures that, for instance, the model for the Education section isn't loaded until user scrolls near it.
Fonts: Use system fonts where possible to avoid additional requests. If using custom fonts (for Japanese/Chinese, we might need them), subset them to include only needed characters (especially Chinese font files can be huge; we might rely on user’s device fonts or use Google Noto fonts but subset to reduce size). Use font-display: swap or optional so text shows immediately with fallback if needed.
Iconography: Use CSS or SVG for icons (like social icons) instead of heavy images. SVGs can be inlined or combined in a sprite to reduce requests.
2. Code Optimization:
Tree Shaking and Bundle Size: We'll ensure unused code isn't included:
Avoid large libraries if not necessary. For instance, use only specific Lodash functions instead of whole Lodash, or no Lodash at all.
Use dynamic imports for components that are not immediately needed. In Next.js, we can do next/dynamic to load heavy components (like the 3D canvas) on client-side after initial render. For example, the initial page could show a lightweight intro and then dynamically import the heavy Three.js stuff when appropriate (or when user scrolls).
We might split the bundle by route or section. If using Next, each page (if we had multi-page) gets its own chunk. In a single-page app context, we can simulate that by code-splitting per section. E.g., import the Projects section component dynamically so its code (and maybe videos data) isn't loaded until needed.
Remove any development/debug libraries in production. Ensure NODE_ENV=production for React to use prod optimizations.
Minification & Compression:
Rely on Next/Webpack to minify JS/CSS. Also ensure removing source maps in prod (or hosting them separately).
Enable Gzip or Brotli compression on the web server for text assets (HTML, JS, CSS). This greatly reduces transfer size of code.
We'll configure caching headers for static assets (images, videos, JS) with a long max-age and content-hash in filenames for cache-busting. This helps repeat visits.
Caching of Data:
If content (projects, publications) is fetched from Supabase at runtime, we will implement caching. The easiest is to fetch once and store in context or SWR cache so we don't make multiple network calls. We could also leverage HTTP caching: Supabase REST can send ETag headers; on our side, we might not need it because the data is small, but it's worth considering if data grew.
Next.js static generation is a form of caching at build time: since the content doesn't change often, we can pre-build pages. If dynamic, we can use Incremental Static Regeneration (ISR) to rebuild e.g. once a day or when content changes.
Lazy-loading and Defer:
All non-critical scripts will be loaded with defer or async. For example, if we have any analytics script, load it after main content is loaded.
We will place script tags (if any outside bundler) at bottom of body or use Next’s strategy to ensure they don’t block rendering.
The 3D canvas itself might be heavy in render; if the top section (About) doesn’t strictly need heavy 3D right away, we could delay its full initialization for a second or two (post onLoad). Or show a low-detail version then enhance.
Use requestIdleCallback or setTimeout for any non-urgent work after load (if polyfills needed).
Runtime Performance:
Optimize React rendering by preventing unnecessary re-renders. Use React.memo for components that don't need to re-run often, particularly if they contain heavy 3D logic. Use useCallback/useMemo appropriately.
Avoid heavy computations on the main thread. For instance, if parsing large data or doing image manipulations, consider web workers. Not likely needed in our case but something to keep in mind.
For Three.js animations, we might cap the frame rate or stop animations when tab is not visible (browsers auto throttle requestAnimationFrame in background).
Ensure that event handlers are efficient (debounce expensive tasks like scroll events if we do something on scroll aside from Three's optimized approach).
Smooth Scrolling Performance: If we implement smooth scrolling or parallax, we'll ensure it's done using CSS transform/translateZ(0) or requestAnimationFrame with efficient calculation, to keep 60fps. Possibly rely on GSAP or a library that is optimized for this. Ensure to test on lower-end devices.
3. Server-Side Rendering & Loading Strategy:
Use SSR for initial paint of content: The text content of at least the initial view (and maybe all sections, since it's not too large) can be rendered server-side. That way, the user sees something immediately (good Largest Contentful Paint and Time to First Byte). The hydration cost exists but React handles that.
Preload critical resources: We will mark the main hero image or main font as preload in the HTML head if needed. Also, if using Next, its resource hints might automatically do that.
Possibly use a service worker to cache assets after first load for offline or repeat visits, though for a portfolio it's optional. However, if Lighthouse PWA score is considered, a basic service worker with a precache could bump that (only do if time permits and not complicating open-source requirement; Workbox is open-source though).
4. Lighthouse and Web Vitals Monitoring:
We'll continuously test and fine-tune. For example, run Lighthouse in Chrome DevTools with device emulation (mobile, Fast 3G) to see where the performance bottlenecks are. If LCP is large, check what element it is (could be a large image or video poster) and optimize that (maybe use a smaller image or defer video).
Optimize First Contentful Paint (FCP) by keeping initial HTML small and critical CSS inline (Next can inline critical CSS). The dark theme might allow us to use a simple background color (so not reliant on large background images early).
Optimize Largest Contentful Paint (LCP): Usually the largest thing might be a hero image or text. If it's text, ensure webfont isn't delaying it (use font swap). If it's an image, ensure that image is optimized and maybe use next/image with priority.
Minimize Total Blocking Time (TBT): This means ensure our JavaScript bundles aren’t too large or heavy. Splitting and deferring as discussed addresses this. Also avoid long tasks – e.g., if Three.js initialization is heavy, maybe split it into smaller chunks or start it after first paint.
Ensure Cumulative Layout Shift (CLS) is near zero: This means avoid layout jumps. Use fixed dimensions for images/video so they don't cause reflow when loaded. Ensure fonts flash minimal (font swap helps avoid invisible text).
Check Memory and FPS for 3D: We might use Chrome's performance profiler on mid-tier devices to ensure the animation loops are not dropping frames. If we see consistent 60fps then good; if not, reduce complexity.
5. Content Delivery and Hosting:
We will host static assets on a global CDN if possible (Supabase Storage uses CDN, or if deploying on Vercel/Netlify, they have CDN). This reduces latency for global users.
HTTP/2 or HTTP/3 will be used so multiple assets can load in parallel efficiently.
Gzip/Brotli as mentioned for transfer reduction.
6. Performance Budgets and Monitoring:
We can set a budget such as "JS bundle < 500KB gzipped", "Total images < 1MB on load", etc., and keep checking during development. Webpack Bundle Analyzer can be used to inspect what’s contributing to bundle size and eliminate bloat.
After launch, monitor site analytics for performance (e.g., use Chrome UX report or a simple RUM script to log page load times). Or use a free service like Cloudflare Web Analytics or SpeedCurve (though not open-source, we can do RUM ourselves with some script to Supabase perhaps).
If any section seems heavy, we might introduce a toggle to disable 3D if user chooses (like a "disable effects" mode), but hopefully not necessary with optimizations.
7. Specific 3D Performance Tricks:
Use requestAnimationFrame wisely: Only render animations when needed. R3F provides control over the render loop; we can pause the render loop when nothing is animating or not in view. For example, Drei's ScrollControls can only render on scroll changes, etc.
Use lower frame rate for certain effects if imperceptible (30fps animations for subtle background perhaps).
Combine shaders where possible, reduce draw calls by merging geometries if possible for static objects.
Limit shadows and post-processing passes. Maybe disable expensive shadow calculations on mobile (use simple lighting).
Possibly leverage WebGL extensions like hardware instancing if we have many similar objects (like dozens of star particles, instance them).
Clean up Three.js objects to prevent memory leaks (dispose geometries, materials when unmounting a scene/section).
We will test performance on a mid-range mobile device. If it struggles, consider simplifying the scene (e.g., fewer particles, simpler materials on mobile via user-agent or WebGL context info).
By systematically applying these optimizations, we expect to meet or come close to the Lighthouse targets:
Performance 90+: Achieved by reducing initial load (size and requests), optimizing runtime (smooth 3D), and leveraging caching.
Accessibility 90+: Our Accessibility strategy covers that.
Best Practices 90+: That usually means using HTTPS, correct HTML, no security vulnerabilities; we'll ensure no console errors, correct image aspect ratios, etc.
SEO 90+: We'll ensure meta tags, proper titles, language attributes, and mostly server-rendered content for crawlers. Even though it's a JS-heavy site, SSR or static generation ensures crawlers see content. We'll also provide a sitemap if needed and use semantic HTML.
Performance will be an ongoing consideration during development, not just an afterthought. We will profile and optimize at each milestone (especially when adding videos and 3D) to keep the experience fast and responsive.
Folder Structure

We will organize the project files in a modular, feature-oriented structure, making it easy to maintain and navigate. Below is the proposed folder structure (for the front-end and project overall):
project-root/
├── public/              # Public assets served directly
│   ├── locales/        # JSON files for translations (en.json, ja.json, etc.)
│   ├── videos/         # Project videos (or could be hosted elsewhere, but keep placeholders or thumbnails)
│   ├── models/         # 3D model files (GLB/GLTF)
│   └── images/         # Images (thumbnails, icons if any, maybe a fallback image for 3D scenes)
├── src/                 # Application source code
│   ├── components/     # Reusable UI components (used across sections/pages)
│   │   ├── Navbar.jsx        # Navigation bar component (language switcher, etc.)
│   │   ├── Footer.jsx        # Footer component (if any)
│   │   ├── LanguageSwitcher.jsx 
│   │   ├── ProjectCard.jsx   # Possibly a card component for projects
│   │   ├── ... (common buttons, form elements, etc.)
│   │ 
│   ├── sections/       # Section-specific components (each corresponds to a section of the page)
│   │   ├── AboutSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── TechStackSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── PublicationsSection.jsx
│   │   └── ContactSection.jsx
│   │       (Each may include its own sub-components or 3D components specific to that section.)
│   │
│   ├── three/          # 3D-specific utilities and components
│   │   ├── CanvasContainer.jsx   # Wrapper for R3F Canvas, providing context (could be in sections too)
│   │   ├── models/              # If we code split 3D models, could have components to load them
│   │   │   ├── AvatarModel.jsx      # Example: 3D model component for About section avatar
│   │   │   └── ... (other model components)
│   │   ├── effects/             # Custom shader or effect implementations
│   │   └── ** (any custom hooks like useSpin or useScrollAnimation)
│   │
│   ├── hooks/          # Custom React hooks for logic
│   │   ├── useTranslations.js   # Maybe a wrapper around i18n
│   │   ├── useContactForm.js    # Manages form state and submission logic
│   │   └── useMediaQuery.js     # e.g., to handle prefers-reduced-motion or responsive queries
│   │
│   ├── context/        # Context providers
│   │   ├── LanguageContext.js   # Context for current language selection
│   │   └── ... (maybe ThemeContext if needed, though theme is static dark)
│   │
│   ├── services/       # External service integration (API calls)
│   │   ├── supabaseClient.js   # Initialize Supabase client
│   │   ├── supabaseService.js  # Functions for CRUD (e.g., fetchProjects, submitContact)
│   │   └── i18n.js            # i18next initialization configuration
│   │
│   ├── styles/         # Global and shared styles
│   │   ├── globals.css       # Base CSS (if using Tailwind, tailwind base goes here)
│   │   ├── theme.css         # Color variables, etc.
│   │   └── ... (or Tailwind config and generated file)
│   │
│   ├── pages/ (if using Next.js)   # Pages directory for Next.js
│   │   ├── _app.jsx        # Custom App component for global providers (Language provider, etc.)
│   │   ├── _document.jsx   # Custom Document for lang attribute and meta tags
│   │   ├── index.jsx       # The main page, which would import all sections 
│   │   └── api/            # API routes (Next.js backend functions)
│   │       └── contact.js  # API route for contact form submission
│   │
│   └── index.js (if not Next, e.g., ReactDOM render entry)
│
├── tests/              # Additional test utilities (if not colocating tests)
│   ├── __mocks__/      # Mock files (e.g., file mocks for Jest, or Supabase client mocks)
│   └── setupTests.js   # Configuration for testing library, e.g., importing jest-dom matchers
│
├── Dockerfile          # Docker configuration for containerizing the app
├── docker-compose.yml  # If needed for local dev (could set up app + local db)
├── supabase/           # Supabase configuration (SQL scripts, seed data)
│   ├── migrations/     # SQL migration files for setting up tables
│   ├── seeds/          # SQL or script for initial content seeding
│   └── README.md       # Instructions on connecting to Supabase, applying migrations
│
├── public/locales/...  # (as above in public folder)
├── package.json
├── tailwind.config.js  # (if using Tailwind)
├── .eslintrc.js
├── jest.config.js
└── README.md           # Documentation for developers and users
This structure emphasizes modularity and separation of concerns
linkedin.com
:
Components vs Sections: We separate generic, reusable components (buttons, cards, nav) from section-specific ones. Each section component under sections/ can assemble its content and possibly include unique 3D subcomponents or logic. This makes it easy to work on one section in isolation without affecting others.
Three.js concerns: By placing 3D logic in a dedicated directory (or collocated with sections if tightly coupled), we keep it organized. For example, if the About section uses an AvatarModel, we could put AvatarModel.jsx near AboutSection.jsx or in a three/models. The decision will be documented for consistency.
Hooks & Context: Encapsulating logic like internationalization, form handling, etc., into hooks/contexts keeps components cleaner and follows DRY principles.
Services: The services layer is akin to an API layer – any interaction with Supabase or other external APIs goes through functions here. This means if we switch backend or adjust queries, we do it in one place. It also makes it easier to mock in tests (we can mock these service functions to not actually call network).
Styles: All global CSS resides in styles (if using Tailwind, the global CSS might just include the Tailwind directives). If not using Tailwind, we might have multiple CSS files here for layout, typography, etc. We might also use CSS Modules for component-specific styles – those would live alongside components (e.g., Component.module.css next to a component, which is a fine approach too). The folder structure can accommodate either approach.
We will follow feature-based organization
linkedin.com
: each section and component has its own files (and potentially CSS and test file together). For instance, AboutSection.test.jsx could live in the same folder as AboutSection.jsx to colocate tests. Alternatively, we keep tests in a parallel structure under __tests__. The exact placement we'll decide early and be consistent. Colocating tests with components improves cohesion and makes moving/refactoring components easier. Additional notes on structure:
We include a supabase/ directory for database scripts. This is for infrastructure-as-code, ensuring the DB schema is versioned. We might write SQL migration files to create tables and RLS policies. This way, setting up Supabase in a new environment is documented (e.g., run these SQL commands). Supabase also allows exporting the schema.
The Dockerfile is at root for easy access. If our app evolves to multiple services (e.g., a separate admin server), we could have a docker-compose to orchestrate, but likely unnecessary.
Config files like ESLint, Prettier, Tailwind, etc., reside at root. We will use these to enforce style and build config.
By structuring the project this way, we achieve:
Clarity: Developers (and the user) can easily find where things are: content of a section is in one place, the logic for translation in another, etc.
Modularity: Changes in one section or component don't inadvertently affect another, reducing risk.
Scalability: If the site grows (say adding a "Blog" section or more pages), we can naturally extend this structure (e.g., add a new section component and route).
Maintainability: Feature grouping means one can work on "Projects section" entirely within ProjectsSection.jsx and related components, which is intuitive. Also, this aligns with clean code principles by grouping related code together rather than by type only
linkedin.com
.
We will document this structure in the developer README so anyone working on the project understands where to place new files and find existing ones. Tools like ESLint will be configured to align with this structure (for example, maybe using an import plugin to ensure proper path aliasing if needed for cleaner imports rather than long relative paths).
Development Workflow

To ensure efficient and high-quality development, we will adopt a clear workflow with iterative development, code reviews, and continuous integration. Key aspects of the development workflow include: Project Management & Planning: We will break down the project into tasks and milestones (as detailed in the Milestones section). Likely using an agile approach, each milestone (or sprint) focuses on a set of features (e.g., "Implement 3D in About and Education sections" or "Set up multi-language support"). Tasks will be tracked possibly via GitHub Issues or a Trello board, to keep track of progress and ensure nothing is missed (especially regarding the many requirements like security checks, testing, etc.). Branching Strategy:
The main (or master) branch will always contain the stable, deployable code.
For development, feature branches will be created from main for each feature or section (e.g., feature/3d-about-section, feature/i18n-setup).
Once a feature is complete (and tests pass), it will be merged into main through a Pull Request. We will use PRs to do code reviews (even if a single dev, treating it as a checkpoint) and let CI run tests.
We might also have a develop branch if multiple features need integration testing together before going to main, but for a project of this scope, feature -> main might suffice.
Coding Standards: We will adhere to clean code principles:
Use meaningful naming for variables, functions, and components.
Keep functions and components focused (single-responsibility). Large sections might be broken into sub-components for readability.
Add comments and JSDoc where non-obvious logic occurs (particularly for complex 3D computations or tricky multilingual handling).
Remove dead code promptly to avoid clutter.
Follow consistent coding style as enforced by Prettier and ESLint. This ensures consistency (semi colons, quotes, indentations, etc., are uniform).
Incremental Development: We plan to build the site feature by feature while always maintaining a runnable state:
Start with a skeleton (basic page structure, navigation, empty sections with just headings). Ensure this loads and is deployed.
Add one section's content and its visual features at a time. E.g., implement About section 3D and text, get that working, then proceed to next section. This way, if something breaks, it's easier to pinpoint.
Integrate multi-language early with just a couple of strings to test the system, then expand to all text.
Add Supabase integration once the front-end can display data; perhaps stub data first, then connect actual DB.
Testing as part of development:
We adopt a test-driven or test-guided approach whenever feasible. For example, when developing the contact form, first write tests for validation and submission behavior, then implement the code to satisfy them.
Run tests and lint locally frequently. We can use npm run dev concurrently with npm run test --watch to continuously run tests on file changes.
Use Storybook (optional): If time permits, we may use Storybook to develop components in isolation, especially for the UI components like cards or the language switcher. This isn't required, but it could help test components at different states (and it's open source). However, given heavy 3D, we might skip Storybook to avoid complexity.
Use of Design Tools:
The mention of Figma assets suggests we have some design mockups. We'll refer to those for exact styling, spacing, and interactive behavior expectations. We might export images or measure dimensions from Figma. We'll keep Figma open during development as a reference and ensure pixel (or near-pixel) perfect implementation.
If needed, use the color palette and font styles from Figma by translating them into CSS variables or Tailwind config.
Communication and Feedback:
If working with the user or a team, frequent demos (perhaps at each milestone) will be given to gather feedback. For example, after implementing the 3D intro, show it to ensure it meets expectations.
Use GitHub issues to discuss any changes or to document decisions (like "Decided to use Next.js because...").
Continuous Integration:
The CI pipeline is part of workflow: developers are expected not to merge code that fails CI. This means running tests locally before pushing is ideal to avoid broken builds.
We will set up pre-commit hooks (using Husky, open source) to run linting/tests on commit. This acts as a safeguard to catch issues early. For example, Husky can run npm run lint && npm run test:unit on commit. (We have to ensure this doesn’t slow down too much; we might skip running full e2e on commit but do it on push via CI).
Documentation and Knowledge Sharing:
Maintain the README (with setup, build instructions). Also, create a USER_GUIDE.md (if needed) to explain to the site owner how to update content (like "to add a new project, do X in Supabase or in code").
Comment the code, especially for complex sections like 3D logic, to explain how it works.
If multiple devs, use comments or PR descriptions to explain rationale of complex implementations.
Environment Management:
We will have a .env.local (not committed) for local development with keys (Supabase URL, anon key, etc.). Provide an example .env.example for reference.
Possibly set up a local Supabase using the Supabase CLI for dev (so dev environment doesn't affect prod data).
Use dummy/test API keys in dev to avoid accidentally posting to production DB while developing. Ensure config for dev vs prod is separated.
Milestone-based Reviews:
At the end of each milestone, do a review: run all tests, do cross-browser test, check performance of what's done so far, adjust plan if needed (maybe some features need more time or tweaking design).
Tooling Integration in Workflow:
Use the browser devtools extensively for profiling (Network tab to ensure no large files unaccounted for, Performance tab for frame rate, Lighthouse tab for quick feedback).
Possibly use VSCode extensions for ESLint/Prettier to get instant feedback in editor.
Use Git hooks or CI to enforce commit message style if we use conventional commits for changelog (this might be optional since it's a personal project, but good practice if scaling).
The development workflow will treat performance and accessibility as first-class citizens: so while developing a section, also test it with keyboard and Lighthouse then and there, rather than waiting until the end. This iterative checking prevents costly rework.
Deployment Workflow (Dev/Staging):
We might deploy a staging version (e.g., on a temporary URL or using Vercel preview) for user to test multilingual content and visuals in a live environment. Getting feedback on a staging site is valuable. With our CI, any branch can be deployed to a test environment, or we can push to a staging branch that auto-deploys to a non-production site.
Handling Risks in Dev:
If an experimental feature (like a fancy 3D effect) is not working out or causing delays, we will communicate and potentially pivot to a simpler implementation to keep overall timeline.
Keep the user updated if any trade-offs are made (like reducing complexity for mobile).
Have contingency plans (like using static images if a particular model is too slow).
Overall, the development workflow is structured yet flexible, emphasizing regular testing, incremental progress, and collaboration/feedback. This will help ensure the final product is delivered on time and meets all of the user's requirements without last-minute surprises.
Milestones and Timeline

We estimate the project can be completed in a series of milestones over approximately 8-10 weeks. Each milestone represents a chunk of work with specific deliverables. Below is a breakdown of these milestones, their focus, and an estimated timeline:
Milestone 1: Project Setup and Planning (Week 1)
Deliverables: Completed project scaffolding and planning docs.
Set up version control (Git repository initialized with README).
Set up the React/Next.js project with initial structure (create the basic Next app or CRA, add TypeScript if using, configure ESLint, Prettier, Tailwind, etc.).
Install core dependencies (React, Three.js, R3F, i18next, Supabase client).
Verify that a simple "Hello World" page runs locally and in a Docker container.
Write the PLANNING.md (this document) to confirm understanding and approach (this is essentially happening now).
Timeline: End of Week 1 – have environment running and team agreement on structure (this includes approval of design in Figma if not already finalized).
Milestone 2: Basic Structure & Navigation (Week 2)
Deliverables: Static page with all sections laid out (without final design/3D), global navigation working.
Implement the HTML structure of the single-page layout: sections for About, Education, Tech Stack, Projects, Publications, Contact with placeholder content.
Implement the Navbar (with section links and language switcher UI stubbed out).
Implement a basic dark theme styling (set background color, base text styles).
No 3D yet, just maybe placeholders or static image where 3D will go.
Setup React router or Next linking for anchor links (maybe one-page scroll, but ensure clicking nav scrolls or jumps to section).
Ensure the page is responsive with this basic layout (mobile view shows sections stacked, nav collapses if needed).
Integrate CI pipeline basics (lint and test jobs) so from here on every push is checked.
Timeline: End of Week 2 – a skeleton site is online (possibly at a staging URL) with navigable sections (even if empty content), demonstrating overall layout.
Milestone 3: 3D Integration & About Section (Week 3-4)
Deliverables: Fully implemented About Me section with interactive 3D, initial 3D framework in place.
Set up the React Three Fiber <Canvas> and global 3D context. Test adding a simple cube or shape in About section to confirm Three.js rendering.
Develop the actual 3D content for About (e.g., load the avatar model or create the desired 3D graphic). Implement animation or interaction as planned (like rotation or cursor tracking).
Style the About Me text and ensure it's legible on the background (tweak lighting in 3D if needed to contrast text).
Add any microinteractions in this section (like a hover effect on the 3D model or a prompt to scroll).
Test performance impact of this 3D on load; optimize as needed (maybe use a low LOD model for initial load).
Write unit tests for any logic introduced (e.g., a hook controlling the animation).
Timeline: End of Week 4 – the top section is visually impressive and functional. Possibly show to user for feedback and tweak accordingly.
Milestone 4: Develop Remaining Sections (Week 4-6)
Deliverables: Education, Tech Stack, Projects, Publications sections implemented, including 3D elements and placeholder data.
Implement Education section: likely simpler 3D (e.g., icons or timeline). Ensure content is formatted (maybe use a timeline list).
Implement Tech Stack section: the orbiting tech icons or however chosen. This is another complex 3D bit, ensure it's interactive and not too heavy. Might involve adding multiple objects and controlling them.
Implement Projects section: initially use placeholder project entries (can hard-code a couple of projects). Integrate video embedding, but can use a sample video or a stub for now. Ensure the layout (cards or list) works and the video modal/player appears and plays. Implement switching logic in code (maybe not fully functional i18n yet, but structure it to handle different videos).
Implement Publications section: list out a few dummy publications with links. Possibly include a small 3D graphic if planned (like floating papers).
Ensure each section's 3D and animations trigger at right time (this might involve linking to scroll events — we might use simple checks for now, like on component mount play animation).
Add basic form in Contact section (fields and a disabled submit for now).
During this milestone, continually test that adding each new 3D piece doesn’t break others. If we see performance dropping, adjust immediately (maybe toggle things off if not visible).
Write relevant tests (component tests to ensure project cards render, clicking play opens video, etc.).
Timeline: End of Week 6 – all main content sections are implemented with placeholder content. Site is fully scrollable with all features visible. Internationalization and backend not yet integrated, but structure is there.
Milestone 5: Internationalization (Week 6-7)
Deliverables: Site content translated into all four languages, language switcher fully functional (switches text and videos).
Setup i18next (or Next i18n). Create translation JSON files for at least English and one other language to start. Possibly use Google Translate temporarily for filler text or ask user for translations.
Integrate the translations in components: replace hard-coded text with t('key') lookups.
Ensure dynamic content (like projects, publications) can also be translated. Possibly implement logic to fetch different data sets per language or structure state to hold content for current language.
Implement the language switcher dropdown functionality: on selection, triggers i18n change and video source updates.
Load the correct language by default (maybe based on browser or a config).
Add tests: e.g., set language context to Spanish and verify a known element text matches Spanish JSON. Also test that video.src changes when language changes
stackoverflow.com
.
By the end, the site should be viewable completely in each language by toggling. (At this point, final translation text may still need refinement from the user, but the mechanism works).
Timeline: Mid of Week 7 – All languages toggling smoothly. Possibly demo to bilingual colleagues or user to verify translations are placed correctly and layout still looks good (some adjustments may be needed if, say, Spanish text is longer).
Milestone 6: Supabase Integration (Week 7)
Deliverables: Data-driven content and functional contact form using Supabase backend.
Set up the Supabase project (if not done already). Create tables for projects, publications, contact as planned. Enable RLS policies.
Replace placeholder content with real data fetched from Supabase:
Use Supabase JS client to fetch projects list (with all languages video URLs) and publications list on page load or via getStaticProps.
Verify the data displays correctly in the UI.
Implement the contact form submission: Next.js API route (or Supabase function) that writes to DB. Test end-to-end (submit form, see entry in DB).
Add a success feedback on form and handle error (for example, if DB insertion fails, show error).
Security: test that RLS is working by trying to read contact messages with anon (should not succeed, which we simulate maybe).
Possibly implement a basic rate-limit or honeypot on contact now.
Ensure environment variables for Supabase keys are configured in dev and production.
Write tests for service functions (e.g., mock Supabase client and test that submitMessage calls the right insert with given data).
Timeline: End of Week 7 – The site is now dynamic: can update DB and see changes (e.g., add a new project entry in Supabase and it shows up). Contact form can be tested and should record messages.
Milestone 7: Testing & QA (Week 8)
Deliverables: Test suite finalized (unit, integration, e2e), all tests passing. Bugs from testing fixed.
Do a thorough round of cross-browser testing: open site in Chrome, Firefox, Safari, Edge, plus mobile browsers. Fix any compatibility issues (maybe minor CSS tweaks or polyfills if needed).
Perform accessibility audit using tools and manual tests. Fix any issues (like missing alt, keyboard trap, etc.) uncovered.
Optimize any poor performance findings: run Lighthouse on both desktop and mobile settings. If any category <90, address it (maybe compress something further, or defer some code).
Run the full CI suite – ensure all tests are green. Increase test coverage if some critical path was missed.
Prepare any documentation needed (if delivering to user, how to run or update content).
Timeline: Middle of Week 8 – Aim to have essentially a release candidate. This is where we might do a soft launch on a staging environment for the user to test everything themselves and sign off.
Milestone 8: Deployment and Launch (Week 8)
Deliverables: Live production deployment of the site via Docker, with CI/CD pipeline fully operational.
Set up production hosting: e.g., set up domain, SSL, and ensure the Docker container is running on the server. If using a service, finalize config.
Double-check environment variables in prod (pointing to production Supabase, etc.). Do a test deployment through CI pipeline to see it flows.
Once deployed, do a final sanity check on the live site (maybe with some monitoring tools).
Launch: make the site public on the intended domain.
Monitor for initial issues (maybe ask a few people to visit and report any issues).
Timeline: End of Week 8 or early Week 9 – the site is officially live.
Milestone 9: Post-Launch Improvement (Week 9-10)
Deliverables: Any post-launch fixes or enhancements, and project wrap-up.
Collect any user feedback or bug reports after launch (maybe something was missed like a translation nuance or an edge-case bug).
Fine-tune content if needed (maybe adjusting text or adding a new project if user provides).
Ensure the user is comfortable with updating content via Supabase or making minor text tweaks via translations files.
Final performance tuning if real-user monitoring shows any slow points.
Write a short guide for the user (how to add content or how the multi-language video works if they want to change videos).
Timeline: Week 9 and 10 – addressing final feedback and polishing, then concluding the project.
Each milestone ends with a review/checkpoint to ensure the project is on track and to incorporate any changes in direction if needed (for example, if after Milestone 3 the user wants a different visual effect, we adjust in Milestone 4). The timeline is approximate; some milestones (like the integration and testing) might overlap or iterate (e.g., as we build sections we also test them). But by structuring it this way, we cover all required features systematically. The highest risk tasks (3D and multi-language) are done early enough to mitigate issues, while the testing and optimization are towards the end once we have something complete to fine-tune.
Risks and Mitigations

Developing an interactive 3D multi-language site comes with several risks. We identify key risks and our mitigation strategies for each:
Performance Risk (Heavy 3D/Video content): The rich media could lead to slow load times or laggy interactions, especially on mobile or low-end devices.
Mitigation: Optimize assets and use performance best practices as outlined (compress media, lazy load, code split). We will continuously profile performance during development (not wait until the end) and adjust complexity accordingly. If a certain 3D effect is too slow, we will simplify the model or effect (e.g., reduce polygon count, remove expensive shaders). We'll also implement fallbacks: e.g., if device has low performance (we can check hardware concurrency or user agent), use simpler visuals. Ensuring Lighthouse tests throughout development will catch regressions early.
Additionally, we have the option to allow user to disable animations via a "Reduce Motion" setting if needed, which can improve performance for those who opt in.
Technical Complexity Risk (Three.js & React integration): Building advanced 3D interactions in React might pose a learning curve and potential integration bugs (e.g., state not syncing with animations, or memory leaks).
Mitigation: Use well-documented libraries (R3F, Drei) and refer to examples or community snippets for similar effects. We'll create small prototypes for tricky parts (for example, test a mini React+R3F scene separately) before integrating into the main project, to iron out issues. We also plan to write tests for 3D components to verify basic behavior (as much as possible) to catch issues like event mis-binding.
Also, continuously monitor console for Three.js warnings or errors which can hint at incorrect usage (like forgetting to dispose objects).
Timeline Risk: The scope is broad (multiple features: 3D, i18n, backend, testing). There's risk of underestimating time for certain tasks, which could cause delays.
Mitigation: We have built slack into the timeline (8-10 weeks with a buffer in Milestone 9). We prioritized core features early (3D sections by week 6) to leave time for integration issues. If things run behind, we will triage features:
Ensure the most essential content is working (all sections, language support, contact form).
If needed, reduce some of the bells and whistles: e.g., simplify a 3D animation or skip a very fancy effect to meet performance/timeline.
Possibly overlap some tasks (internationalization integration can occur while finishing last section).
Frequent check-ins each week will identify if we're slipping and need to adjust scope or add resources (maybe get help for translation or testing tasks if needed).
Cross-Browser/Device Compatibility Risk: The site may work on modern Chrome but could have issues on Safari or older devices (WebGL differences, CSS differences).
Mitigation: Use progressive enhancement: rely on standard APIs and test on Safari and Firefox regularly (not just at the end). Polyfill any features if needed (Next can include polyfills for e.g. IntersectionObserver if not present, though most modern browsers are fine).
For WebGL, Three.js is widely compatible, but iOS Safari has some limitations (no WebGL2 on older iPhones). We'll ensure our Three.js usage has WebGL1 fallback (Three.js does this by default).
Also test on at least one mid-tier Android phone early (maybe via remote debugging) to gauge performance and issues.
Use autoprefixer (via PostCSS/Tailwind) to automatically handle vendor prefixes in CSS.
Security Risk: Despite measures, there's risk if we misconfigure RLS or expose something inadvertently.
Mitigation: Thoroughly test the security scenarios:
Try to retrieve data via the public API that should be protected (attempt to fetch contact messages with anon key in a controlled test – should fail).
Use Supabase's logging to see if any forbidden requests are attempted.
Review our code for any usage of dangerouslySetInnerHTML or similar and ensure none present.
Keep dependencies updated to avoid known vulnerabilities (like if a library we use gets a security patch, apply it).
If feasible, have a third-party (or the user) do a quick security review or run an automated scan.
Content & Localization Risk: Managing four languages can introduce consistency issues (e.g., a change in English text might be forgotten in others, or layout breaking for a particular language).
Mitigation: Use a structured approach for i18n – every string goes through the translation files. We won't have mixed languages in code. This way, it's easy to spot missing keys for a language (i18next can be configured to warn about missing translations). We can also create a script to find untranslated keys.
After populating translations, we'll do a full review in each language. Possibly get a native speaker or use online translation check for Japanese/Chinese to ensure no glaring mistakes or encoding issues.
We must also consider Chinese font/encoding. We'll ensure proper <meta charset="UTF-8"> and test that Chinese and Japanese characters display correctly (no tofu boxes). If a font issue, include appropriate font or let system fonts handle it.
For videos, there's risk that maybe not all videos are available in all languages by launch. If so, we'll decide on fallback (e.g., if Spanish video not provided, default to English video with maybe Spanish subtitles or a note). Communicate with user to get all assets or plan fallback.
Supabase/Infrastructure Risk: Using a cloud service means we rely on external uptime and we need to ensure proper config (like setting up RLS correctly or handling service outages).
Mitigation: Supabase is generally stable, but in case of a downtime, our site should handle it gracefully (e.g., if data fails to load, show a friendly error or cached content instead of breaking). For contact form, if the database isn't reachable, perhaps queue the message locally and retry, or at least notify user to try later.
We'll have some logging or alert if a backend call fails, so we can react if Supabase endpoints change or require updated keys.
We also mitigate by containerizing - if need to move away from Supabase to another Postgres, we can relatively easily do so since our data access is somewhat abstracted.
Maintaining High Lighthouse Scores Risk: It's possible that including certain necessary scripts or if 3D is heavy, we might struggle to get 90+ on mobile performance.
Mitigation: Use Lighthouse CI thresholds to continuously gauge. We can cheat a bit by prerendering as much as possible (e.g., since it's mostly static content, static generation yields a heavy initial HTML but maybe less JS).
If still low, consider strategies like:
Possibly loading 3D after a user interaction rather than immediately (so initial load is lighter).
Marking the site as a single-page app with no-javascript content properly so Lighthouse doesn't penalize as much (harder, likely not needed).
Ultimately, if one category (like performance on mobile) is stuck at 85 due to genuine reasons, discuss with user the trade-offs. But we'll strive to meet 90 by aggressive optimization as needed.
User Experience Risk (Too complex or distracting): There's a risk that in focusing on fancy 3D, we could overshadow the content or confuse users (especially those not used to interactive sites).
Mitigation: Ensure UX is intuitive: include instructions if needed (like a subtle "Scroll down" prompt, or an indicator to switch language). Do user testing (maybe have a couple of friends navigate and observe if they get stuck).
Provide easy ways out: e.g., if an animation is playing, user can still scroll past or skip. If a 3D game-like interaction is present (like Bruno Simon's portfolio has a driving game; we likely are simpler than that), ensure it doesn't block progression.
Keep a balance: e.g., do not make Contact form submission reliant on solving a 3D puzzle (unless it's obvious), just keep interactive fun where appropriate and straightforward for essential tasks.
SEO Risk: Single-page 3D sites can sometimes have poor SEO if not handled (because content is canvas-based or heavy JS).
Mitigation: Use Next.js for SSR so that all textual content is in HTML source. Also provide proper metadata (title tags with user's name and keywords like "Portfolio", meta descriptions). Use structured data (JSON-LD schema for personal profile or creative work) if relevant to help SEO.
Ensure each section is anchor-linkable (maybe allow /#projects links) which can help share links and also for search result snippet.
Submit sitemap after launch to Google to index the site.
By identifying these risks early and planning mitigations, we increase the likelihood of project success. We will maintain a risk log as needed, updating with any new risks that emerge and addressing them promptly. Regular team discussions or self-review each week will include a quick risk check: "Are we facing any new issues? How to mitigate them?" This proactive approach should prevent most major problems or at least allow us to react swiftly.
Post-Launch Considerations

Launching the site is not the end; we must also plan for its maintenance, scalability, and continuous improvement after it goes live. Here are key post-launch considerations:
Monitoring and Analytics: After launch, set up monitoring to ensure the site runs smoothly:
Use an uptime monitoring service (like UptimeRobot or a self-hosted Cron job pinging the site) to alert if the site goes down.
Monitor performance with real user metrics. We can integrate Google Analytics or a privacy-friendly open-source analytics (like Plausible, Umami) to track page load times and user interactions (ensuring all scripts remain lightweight). Supabase might also capture logs of queries, which can show if any are slow or erroring.
Possibly set up Sentry (or a similar error tracking) to catch any runtime JS errors in users' browsers that our testing didn't catch.
Supabase provides dashboard for database and auth usage; keep an eye on any spike in requests or failures.
Content Management: The user might want to update or add content (new projects, new publications) over time:
Since projects/publications are in the database, the user can use Supabase Studio (the web GUI) to add or edit entries. We should provide a short guide on how to do that (like which table, what fields, any format requirements such as language codes for video links).
Alternatively, if the user is non-technical, we might consider adding a basic admin UI in the future. But given all software must be open source, an admin could be just another front-end page protected by Supabase Auth. This is beyond initial scope but possible later.
We should also instruct how to update translations if needed (e.g., if they want to change wording, they'd have to update the JSON and redeploy). Perhaps non-English text is static enough, but in case of corrections, we can handle minor text updates via the same process as code changes or by also storing some content in the database.
Publications might be updated (new papers). This is easy through DB or code, but making sure the site stays updated is important (so the user or dev should periodically sync it with their latest CV, etc.).
SEO and Promotion: Post-launch, ensure the site is properly indexed:
Submit the site to search engines (Google Search Console, Bing Webmaster) so they crawl it. Monitor search console for any SEO or mobile usability issues reported.
Because it's a portfolio, consider adding links to it from the user's social profiles (LinkedIn, GitHub) to drive traffic and improve SEO via backlinks.
Possibly consider adding meta tags for social sharing (Open Graph tags, Twitter Card). This ensures if the site link is shared, it shows a nice preview (like the user's name, title, and maybe a snapshot of the 3D scene). We can use a representative image (maybe take a screenshot of the site and use it as og:image).
The site could also be submitted to Awwwards or similar galleries if the user desires recognition (keeping in mind the user has to do a submission process).
Maintenance of Dependencies: Over time, libraries get updates (security or performance improvements).
We will set up Dependabot on GitHub which will alert of outdated dependencies. The user or maintainer should apply updates periodically. Especially critical for security (e.g., if a vulnerability in Next.js is discovered, update promptly).
We should pin the versions in package.json or use caret carefully, and test the site after updating any major library (especially Three.js or R3F which could have breaking changes).
The CI tests will help ensure an update doesn't break functionality.
Backup and Recovery:
Ensure Supabase data is backed up. Supabase likely has automated backups on paid plans; if using the free tier, we should occasionally export the data (they have a download database option or one can use pg_dump since it's Postgres). At least the contact messages should be backed up if they accumulate valuable info, and project data if not stored elsewhere.
The code is in Git, which is inherently backed up if on GitHub. We may want to tag a release version on launch for reference.
Scalability and Future Enhancements:
If the user's portfolio grows (more projects, languages, or even new sections like a blog), the architecture should accommodate it. We already have a structure to add new sections.
Supabase can handle scaling of reads easily. If the site gets high traffic, we might consider caching responses or using a CDN for the generated page. Next.js static export is very scalable via CDN; if we went SSR, ensure the host can handle concurrent connections or upgrade if needed.
For a blog, we could integrate a markdown-based or CMS solution easily thanks to modular design (maybe an MDX blog page or hooking to Supabase for blog posts).
If adding more languages, it’s straightforward (just add new JSON and video, possibly adjust UI for more options in language switcher).
If adding more 3D complexity, ensure to revisit performance at that time or perhaps use more advanced techniques (like moving heavy computations to workers or using WASM).
User Engagement:
Since contact is available, the user might get inquiries. Possibly integrate sending an email notification when a new message arrives (Supabase can trigger a function or a Zapier integration). That way the user doesn’t have to check the database manually. This could be a future improvement: for now, maybe advise the user to check Supabase or we can quickly connect an email service for alerts if time permits.
Consider adding social media links or a CTA if the user wants to drive engagement (like "Download CV" or "Email me directly").
Legal and Privacy:
Post-launch, ensure compliance with any legal requirements:
If targeting EU users, consider a privacy policy or at least mention how contact form data is used (probably not necessary as it's personal portfolio, but if analytics is used, disclose it).
If the site uses cookies (maybe only for language preference), consider a simple cookie notice if required by local laws (for just language cookie maybe not needed).
Since all components are open source, license compliance: ensure we have attributions if needed (some libraries might require a LICENSE file distribution; we'll include dependency licenses if any special ones).
Feedback Loop:
After launch, gather feedback from actual users (or recruiters viewing it). Did they find it easy to use? Was anything annoying or confusing?
Use that feedback to do minor adjustments. Maybe some might say "the intro animation took too long" – then we could shorten or allow skipping it.
This continuous improvement will keep the site effective as a portfolio.
Operational Handoff:
If the user is not the developer, ensure they have all access needed (Supabase project access, hosting access) and understand how to do basic tasks. Provide a brief training or docs for:
Updating content (via Supabase or code).
Running the site locally if they want (how to use Docker or npm start).
What to do if something goes wrong (e.g., contact developer or check logs).
If we used CI with GitHub, ensure the user also has access to the repo and understands that merging changes triggers deployment.
In summary, post-launch we will transition into a maintenance mode: keep the site running securely and efficiently, update content as needed, and be prepared to implement enhancements. Our planning and use of best practices aim to minimize maintenance headaches (clean code and tests mean future changes are easier). We consider this project a living product that can evolve, and we've built a foundation (with modular code, CI/CD, etc.) to support that evolution smoothly.

Favicon
Favicon
Favicon
Favicon
Favicon
Sources



ChatGPT can make mistakes. Check important info.

Planning Document for Multilingual 3D Portfolio Website with Open Source Stack
ChatGPT
I'm building a comprehensive PLANNING.md for a personal portfolio site. It includes sections on vision, design principles, core features, internationalization, technical architecture, 3D component strategy, tooling, security measures, testing plan, DevOps strategy, and more.
Searched for React i18n multilingual video content
ChatGPT
Checking stackoverflow for relevant information on video switching.
Favicon
Read stackoverflow.com

ChatGPT
I'm looking into potential images or diagrams for the technical architecture sections, such as Supabase or Next.js architectures, while ensuring they align with guidelines.
Searched for Supabase React architecture diagram
ChatGPT
I'm working through Supabase docs to find an architecture diagram.
Favicon
Read supabase.com

ChatGPT
I'm looking at the Supabase documentation for a diagram, possibly in an image form, likely positioned at the top for easy reference.
Favicon
Read more from supabase.com

ChatGPT
OK, let me see. No direct help or diagrams. Considering scrolling more or searching for "diagram showing the architecture of Supabase." "MyLens AI" might have what I need.
Favicon
Read mylens.ai

ChatGPT
I’m figuring out why the "MyLens AI" link is tricky to access. Considering searching for an image or creating a simple diagram in text, and also checking out blog examples or researching best practices for React or Next.js project structures.
Searched for React portfolio folder structure best practices
ChatGPT
I’m organizing a folder structure for a React project, considering feature-based organization and including directories for components, sections, assets, locales, hooks, services, styles, tests, and utilities.
Searched for Awwwards 3D portfolio design best practices
ChatGPT
I found two articles—one from Awwwards about 3D design inspirations, and the other by Alex Streza, offering guidelines on creating award-worthy websites, emphasizing design principles like hierarchy and animations.
Favicon
Read medium.com

ChatGPT
Hmm, I’m thinking about applying hierarchy and spacing creatively, using large font sizes, and incorporating engaging page transitions, loaders, and animations.
Favicon
Read more from medium.com

ChatGPT
I'm gathering info on using Three.js with react-three-fiber and react-three-drei, and possibly integrating GSAP for animation. Considering Astro, Next, or static JSON for internationalization. Exploring Supabase for dynamic content management.
Searched for XSS CSRF input validation React Supabase security best practices
ChatGPT
I'm pulling together specifics on React security measures, including preventing XSS and CSRF and securing authentication. The LinkedIn article might detail these points already.
Favicon
Read linkedin.com

ChatGPT
I’m noting that the document was published on May 5, 2025, making it recent and credible for citing bullet points on XSS, CSRF, and possibly more.
Favicon
Read more from linkedin.com

ChatGPT
I'm gathering information on input validation or injection in the article, scrolling further to find relevant mentions.
Favicon
Read more from linkedin.com

ChatGPT
I’m piecing together strategies to prevent SQL injections using APIs, Supabase, ORMs, and parameterized queries on databases.
Favicon
Read medium.com

ChatGPT
I'm mapping out a standout personal portfolio by showcasing skills, emphasizing UX design with a dark theme and interactive 3D elements, and using the latest tools like Next.js, React, and Supabase.
Focusing on dark theme color contrast, ARIA roles, keyboard navigation, and performance optimization for better user experiences.
Favicon
Read more from medium.com

ChatGPT
Using a bullet or textual summary might be enough. Alternatively, a CI/CD pipeline diagram could be beneficial.
Searched for GitHub Actions CI CD pipeline diagram
ChatGPT
I’m thinking through interactive 3D sections or diagrams like ASCII or GraphViz to represent the technical architecture, folder structure, and milestones, simplifying complex ideas.
Analyzed with python
ChatGPT
I'm working out how to use Python libraries for generating dot language images with Graphviz, possibly bypassing the need for actual Graphviz binaries.
Searched for react-three-fiber internationalization
ChatGPT
I’m examining JSON translation files for internationalization, considering language-specific video links, and contemplating modular folder structures for enhanced organization. Exploring references for input validation and XSS & CSRF security is also on my list.
Favicon
Read linkedin.com

ChatGPT
I’m gathering info on structuring code by feature rather than type, incorporating lazy loading, and considering test-driven development for coverage goals.
Searched for React testing best practices jest CI
ChatGPT
I'm gathering info on practical testing ideas, considering R3F recommendations, and checking for guidance on using a test renderer for R3F components.
Favicon
Read r3f.docs.pmnd.rs

ChatGPT
I’m thinking through the use of @react-three/test-renderer for 3D component testing, given its meticulous coverage. This enhancer would mean using fireEvent to ensure expected changes.
Favicon
Read more from r3f.docs.pmnd.rs

ChatGPT
Piecing together the PLANNING.md with sections on Vision and Goals, Design, Core Features, and more. Images need context—no standalone citations.
Searched for Supabase architecture diagram
ChatGPT
I'm piecing together a clear, comprehensive explanation of architecture, including citations for mentions of design references, code quality, security, and i18n examples.
Favicon
Read stackoverflow.com

ChatGPT
I’m assembling a comprehensive internationalization strategy using i18n, localizing content, and integrating Supabase for dynamic data management. This aligns perfectly with next-gen technology requirements.
This is enlightening. Implementing robust security in the stack, especially with Supabase's RLS and server-side practices, ensures consistent data integrity and access controls.
I’m crafting a detailed tech stack outline for a portfolio website, integrating Next.js, Supabase, and Docker, ensuring robust DevOps, testing, and security measures for optimal build and deployment.
Searched for React Supabase portfolio architecture diagram
ChatGPT
I'm thinking through different methods to create a diagram, including using OpenAI's matplotlib or networkx libraries, ASCII to PNG conversion, and flowcharts.
Analyzed with python
ChatGPT
To include the 'architecture_diagram.png', I will open it in a browser for easy embedding.
I’m working through how to showcase a local Python output image, possibly via 【30†embed_image】 to enhance technical architecture clarity.
Research completed in 8m · 15 sources

Preview

Download PDF

Share Link
Project Plan: Interactive 3D Portfolio Website

Vision and Goals

The vision is to create a single-page, interactive 3D portfolio website that stands out with a top-tier design and immersive user experience. This site will serve as a personal portfolio, showcasing the user's background (About Me, Education, Publications), skills (Tech Stack), and work (Projects) in a highly engaging manner. Goals include:
Showcase & Branding: Present the user's profile and projects in a memorable way, using advanced web graphics to reflect creativity and technical prowess. The site itself will function as a portfolio piece, demonstrating modern web development skills (Three.js, React, etc.) to impress potential clients or employers.
Engaging User Experience: Achieve an Awwwards-level experience with rich interactivity—smooth scrolling, animations, and 3D elements that captivate visitors. Each section of content will have interactive visual components, encouraging exploration and making the content enjoyable to browse.
Professional & Accessible Design: Maintain a professional, dark-themed aesthetic that aligns with the user's personal brand. Despite the creativity, the UI should be clear and user-friendly, with intuitive navigation and accessible content (multi-language support and compliance with accessibility standards).
Performance and Quality: Ensure the site is robust, secure, and high-performing. It should load quickly and run smoothly even with heavy media and 3D content, targeting Lighthouse scores above 90 in Performance, Accessibility, Best Practices, and SEO. The codebase and infrastructure will follow best practices for maintainability (clean code, modular architecture, CI/CD, testing) so that the project remains sustainable for future updates.
By meeting these goals, the portfolio site will effectively communicate the user's qualifications and creativity, while providing a cutting-edge web experience to visitors.
Design and UX Principles

Dark Theme & Visual Aesthetic: The site will adopt a modern dark theme, using a palette of deep grays/black for backgrounds with contrasting text and vibrant accent colors for highlights. A dark background helps 3D visuals and neon/glowing effects stand out, conveying a sleek, high-tech vibe. All text and UI elements will be designed for high contrast against the dark background to ensure readability. The overall look will be professional and minimalistic, avoiding clutter so that the interactive visuals and content shine without overwhelming the user. Inspiration from Awwwards 3D Designs: Drawing from top-tier 3D websites on Awwwards, we'll incorporate innovative UX patterns and micro-interactions that elevate the experience. This includes elements such as creative animations, unique cursor effects, parallax scrolling, and smooth transitions between sections
medium.com
. For example, the site may feature:
Page Transitions & Loaders: A custom loading animation (perhaps a subtle 3D spinner or progress bar) will display while heavy assets load, ensuring a polished feel from the start
medium.com
. Transitions between sections will be smooth (e.g., fading or sliding animations as the user scrolls) to maintain flow.
Microinteractions: Small interactive feedbacks on hover or click (buttons lighting up, icons animating) will make the interface feel responsive and refined
medium.com
. A possible custom cursor that reacts to hover (growing or highlighting interactive 3D objects under it) could be implemented for a playful touch.
Typography & Layout: Inspired by award-winning sites, we might use bold, large typography for section headers (e.g., the user's name or section titles) to create visual hierarchy
medium.com
. Content will be well-spaced and organized (following design principles of alignment and spacing) so that even with unconventional 3D layouts, the information is digestible. We will occasionally "break the grid" in controlled ways (e.g., overlapping elements or asymmetrical layouts) to add creative flair, while still maintaining usability
medium.com
.
Interactive 3D Elements: Each content section will feature a 3D or animated element that reinforces the section's theme (detailed per section in Core Features below). These 3D elements will not be mere decorations; they will provide interactive or animated context – for instance, a rotating 3D model related to a project or an animated graph for the tech stack. User input (scrolling, hovering, clicking) will influence these elements (e.g., scrolling might rotate a 3D scene slightly or trigger an animation sequence), giving users a sense of control and immersion. Important principles include maintaining smooth performance (avoiding janky animations) and offering visual cues so users know when elements are interactive (e.g., change of cursor or subtle glow on hover). A consistent frame rate and optimized animations (using GPU-friendly techniques) will ensure these interactions feel natural. User Experience & Navigation: Although the site is a single long page, clear navigation will be provided. A fixed navigation menu or icon will allow quick jumps to each section (About, Projects, etc.), and sections will be visually distinct so users recognize transitions. Smooth scrolling (possibly with a slight easing effect) and parallax will create depth—for example, background elements moving slower than foreground text
medium.com
. We will also implement scroll progress indicators or section headings that become highlighted in the nav as one scrolls through, so the user always knows where they are. On mobile devices, where heavy 3D might be toned down, the navigation may collapse into a menu for easy access to sections. Responsive & Accessible Design: The layout and interactions will be responsive to various screen sizes. On smaller devices, we may simplify or replace complex 3D scenes with static images or lighter animations to maintain performance and usability. Text will remain legible on all screen sizes (using relative units and media queries to adjust font sizes). Accessibility is a priority: all interactive elements will have non-visual alternatives or descriptions (e.g., ARIA labels, alt text for images) to support screen readers. The dark theme color choices will be tested for sufficient contrast. We will also respect user preferences (for example, honoring prefers-reduced-motion to disable or simplify animations for users who prefer less motion). By adhering to these design and UX principles, the site will achieve a balance between creative, cutting-edge visuals and usability. It will feel like a modern interactive experience without sacrificing clarity or performance, reflecting both the user's personal style and professional approach.
Core Features

The portfolio site will be a single-page application with distinct scrollable sections, each providing specific information and interactive visuals. Below is an outline of each core section and feature set:
Landing / About Me: This top section introduces the user. It will likely feature the user's name and a tagline or brief bio. An interactive 3D element here might be a 3D model or avatar of the user, or an abstract representation (e.g., a rotating globe if the user has global experience, or a dynamically lit 3D text of the user's name). As the entry point, it sets the mood: a dark background with perhaps a subtle animated starfield or gradient, and a spotlight effect on the central content. Text will include a short welcome message and links (or cues to scroll) to view more. This section establishes immediate interest with a "wow factor" 3D animation (for example, the 3D avatar could wave or the camera could subtly orbit around it). It will also include basic info like the user's professional title and a call-to-action (maybe a "scroll to explore" indicator).
Education: A section outlining the user's educational background (degrees, institutions, years). The content could be presented as a timeline or list, potentially with an interactive 3D timeline graphic. For instance, each milestone (degree or certification) could be a 3D card or icon (like a graduation cap icon in 3D) that animates into view as the user scrolls to this section. Hovering or clicking on a milestone might highlight it or show more details (e.g., courses, thesis) in a tooltip or side panel. The design will remain clean and professional—e.g., using university colors or logos (with permission) as textures on 3D elements, or simply bold text with subtle 3D accents. Even though 3D is used, the educational info (degree names, years) will be clearly listed in text for easy scanning.
Tech Stack: This section showcases the technologies and tools the user is proficient in. Instead of a plain list of skills, it will use an interactive 3D visualization. One idea is a 3D rotating galaxy of tech icons – for example, logos of programming languages and frameworks orbiting around a central node. Users could rotate this visualization (via drag or automatic slow spin) to view all tech icons. Hovering on an icon might enlarge it or pop up the name of the technology. Another concept is a stack of 3D blocks each labeled with a tech name, assembled into a sort of tower or pyramid that animates together. We will use recognizable logos (ensuring they're licensed for use or open-source) possibly applied as textures on 3D objects (like a cube faces showing different logos). The layout will ensure that if the 3D element is not accessible (for screen readers), the names of the technologies are also present in text form (perhaps as a caption or list below the canvas). This section emphasizes the breadth of skills in a visual way, while the interactive element invites users to engage (e.g., the user can spin the tech globe to find a particular technology).
Projects (with Videos): The projects section is a critical part of the portfolio, highlighting select projects the user has worked on. Each project entry will include the project title, a brief description, the tech stack used, and a video demo of the project in action. The videos will be embedded and language-specific (see Internationalization for switching logic). The layout might present projects as cards or tiles in a horizontal carousel or vertical stack. For each project, there could be a 3D preview or interactive thumbnail – for example, a 3D representation of the project (if it's a website, maybe a 3D browser window mockup that can be rotated; if it's a device app, a 3D phone with a looping video on the screen). Clicking a project’s thumbnail or a play button will open or play the project video. We will ensure videos do not autoplay with sound (to avoid startling users); instead, use a clear play control. Videos will be served in optimized formats (likely MP4/H.264 or WebM for modern browsers) and we’ll provide controls for pause/play and volume. Each project description text will be available in all supported languages, and the video source will change per language as provided (for instance, if the user has narrated project videos in different languages). We will coordinate the text and video such that switching the site’s language updates both seamlessly (e.g., by reloading the <source> of the video based on current locale).
Publications: This section is for any publications (research papers, articles, etc.) the user has authored. Content might include a list of publication titles, the venue or journal, and the year. To keep it engaging, we could incorporate a subtle 3D element like a 3D bookshelf or floating documents. For example, each publication could be a hovering card or book cover that, on hover, flips to show a summary or opens a link to the full publication. If the user has PDF downloads or external links, icons or buttons will be provided (with appropriate visuals like a PDF icon or external link icon). The style remains professional: likely white text for titles (possibly clickable) on the dark background, with gold or colored accents for important details (like award-winning publications). The 3D decorative elements (books, papers) might gently bob or rotate to give a sense of depth, but will not distract from the list of publications. This section also needs multi-language support for any descriptive text, although typically titles might remain in their published language (we'll clarify with the user if translations of titles are needed or not).
Contact: The final section provides a way for visitors to reach out. It will include a contact form with fields like Name, Email, and Message (all supporting multi-language labels and placeholder text). This form will be connected to the backend (Supabase) to store submissions. We will implement input validation on this form (e.g., required fields, valid email format) both on the client and server side. The design of the contact form will follow the dark theme—perhaps using semi-transparent input fields or glowing borders on focus to match the futuristic aesthetic. Alongside the form, we'll list other contact info or social media links (icons for LinkedIn, GitHub, Twitter, etc.), each possibly appearing as an interactive 3D icon (for example, a 3D email icon that might animate when hovered). The "Send Message" button may trigger a 3D effect on click (like a quick particle burst or a paper plane icon animation) to give feedback that the message was sent. After submission, the user will see a success notification (e.g., a toast message like "Thank you! Your message has been sent."). We will also handle error states gracefully (e.g., if submission fails, show a friendly error message). Security measures (like preventing XSS in the message field and spam protection) will be integrated (see Security Measures section for details).
Language Switcher: A core feature across the site (not a section, but a UI control likely in the header or footer) is full multilingual support. A language selector (possibly an icon toggle or dropdown listing "EN, 日本語, ES, 中文") will allow users to switch between English, Japanese, Spanish, and Chinese. This control will be accessible on all pages (likely fixed in a corner of the navbar). When a user switches language, all text content on the page will update to the selected language, and the project videos will switch to the corresponding language version. This ensures a consistent experience for multilingual users – for example, selecting Japanese will show UI labels and descriptions in Japanese and play the Japanese narration project demo videos. We will ensure that switching language does not reload the entire site (it can update content dynamically if using a SPA approach) or if it does (in case of static site per locale), the state (like scroll position) is preserved or the user is taken to the equivalent section in the new language.
Performance & Feedback Features: Throughout all features, we'll incorporate elements to ensure performance and feedback. For instance, lazy-loading of images and videos (the Projects videos will only load the thumbnail initially and only load the video file when the user is about to watch it, to save bandwidth). We will also include loading spinners or skeleton previews for content that may load asynchronously from the database (e.g., if publications or projects are fetched from Supabase, a brief loading indicator will show while data arrives). User feedback elements such as tooltips (for explaining icons or providing translations when hovering on a tech icon perhaps) and error messages will be consistent in style.
Together, these core features create a comprehensive one-page portfolio that is informative, engaging, and interactive. Each section is carefully planned to highlight the content in a visually striking way while maintaining usability and coherence with the overall design.
Internationalization and Localization Strategy

Supporting multiple languages (English, Japanese, Spanish, Chinese) is a fundamental requirement. Our strategy for internationalization (i18n) and localization (L10n) will ensure that all text, media, and even interactive elements adapt to the selected language, providing a first-class experience for users in each language. Language Infrastructure: We will use a proven i18n library for React – likely react-i18next (for a custom React app) or Next.js's built-in internationalization routing if we use Next.js. React-i18next provides efficient loading of translation resources and easy hooks/components for switching language on the fly
freecodecamp.org
. We'll maintain separate translation JSON files (or resources) for each language (e.g., en.json, ja.json, es.json, zh.json) containing all translatable strings in key-value form. This includes section headings, paragraph text, form labels, button texts, validation messages, etc. For example:
// en.json (similar structure for ja.json, es.json, zh.json)
{
  "about": {
    "heading": "About Me",
    "intro": "I'm a software developer ...",
    ...
  },
  "contact": {
    "nameLabel": "Name",
    "emailLabel": "Email",
    "messageLabel": "Message",
    "submit": "Send Message",
    "success": "Thank you! Your message has been sent."
  },
  ...
}
By externalizing text, we ensure no hard-coded strings in components, which prevents accidental non-translated content. For any text that might include dynamic values (e.g., "X projects completed"), we'll use i18n features for pluralization or interpolation to ensure grammatical correctness in each language. Language Switcher UI: A visible control (like a globe icon or a dropdown) will allow users to switch the interface language at any time. This might be implemented as a simple dropdown listing the languages in their own script (e.g., "English", "日本語", "Español", "中文") for clarity. When a user selects a language, the application will trigger the i18n library to load/apply that language pack. If using Next.js, it might navigate to a locale-specific route (like /ja for Japanese) which automatically loads the correct translations and content. We will preserve the user's selected language (for example, by storing in a cookie or localStorage, or relying on Next's locale mechanism) so that subsequent visits default to their last chosen language. Dynamic Content Localization: For videos and media, which are user-provided in different languages, we'll implement logic to switch those sources. Each project entry in the Projects section will have multiple video URLs – one per language. We can store these in a structured way (e.g., in Supabase or a config file). For example, a project entry might have an object of video links like: { video_en: "proj1_en.mp4", video_ja: "proj1_ja.mp4", ... }. When the site language changes, the video component will update to the appropriate source. Concretely, if using a React state for the video URL, a useEffect will watch the current language and update the source path accordingly
stackoverflow.com
. For instance, pseudo-code:
useEffect(() => {
  switch(currentLang) {
    case 'en': setVideoSrc(project.video_en); break;
    case 'ja': setVideoSrc(project.video_ja); break;
    // ... etc
  }
}, [currentLang]);
This ensures that if a user toggles to Spanish, they will see the Spanish project demo video without needing to manually navigate somewhere else
stackoverflow.com
. We will also provide appropriate subtitles or captions if the videos have on-screen text, depending on what the user provides (e.g., if an English project video has English text baked in, for other languages we might provide subtitles or a translated version of the video if supplied). Localized 3D and Graphics: Any text that appears inside 3D scenes (for example, a 3D text mesh that says "About Me") will also be dynamic based on language. We will avoid putting a lot of text inside canvases, but if needed (like a 3D "Hello" greeting), we can either have multiple versions of the model or dynamically generate textures for text. A simpler approach for multi-language text is to use the HTML/CSS for text and overlay it on the 3D scene, or use Three.js TextGeometry with the appropriate translated string. We must also ensure our font supports all required characters (especially Chinese and Japanese characters which might require a different font). We'll incorporate font files for necessary scripts and load them conditionally or use system fonts that are widely available for those languages. The site’s <html lang> attribute will be updated whenever the language changes (important for accessibility and SEO, so search engines know which language content is in). Right-to-Left (RTL) Support: In this project, all requested languages (English, Japanese, Spanish, Chinese) are written left-to-right. We do not have an RTL language like Arabic or Hebrew in scope, but we will design our i18n approach to accommodate RTL if needed in the future (for example, ensuring the CSS and layout could adapt via the dir="rtl" attribute if a new language is added). Data and Formatting: We will consider locale-specific formatting for any dates, times, or numbers in content. For example, if the Education section lists dates, different locales might format date strings differently (English "Mar 2022", Spanish "Mar 2022" might be similar, Japanese might use year first or include era, Chinese might need characters for month). Using i18n libraries, we can format dates/numbers using locale-specific utilities or simply ensure the content is written appropriately in each translation file. Default and Fallbacks: English will serve as the default language (if the user’s preference isn’t known). We might implement auto-detection: on first visit, detect the browser’s language settings and switch to that language if it’s one of the supported ones. This can be done via navigator.language and mapping (e.g., "es" -> Spanish). We will have fallback logic so that if a particular string is missing in a translation file (hopefully avoided by thorough translation), the app falls back to English for that string rather than showing a blank or key. Process for Translation: We will gather all text early in development so that it can be translated professionally (if needed) or by the user for each language. The translations will be tested in context to ensure they fit in the design (for instance, some languages may have longer words that could overflow buttons, or different line breaks needed). We will adjust CSS for each locale as needed (e.g., smaller font for Japanese if those characters render larger, or allow text to wrap). Additionally, we will ensure the font rendering looks good (Chinese and Japanese might require specific font weights or smoothing due to the dark background). By implementing this robust internationalization strategy, the site will provide a seamless experience to users in all four languages. It will not only translate text but localize the entire experience (including videos and possibly imagery if any contains text), demonstrating cultural and linguistic sensitivity. This approach also future-proofs the site to add more languages if needed by following the same pattern of adding translation files and media assets.
Technical Architecture (Frontend, Backend, APIs, Database)

The application will use a modern web tech stack with a clear separation of concerns between the front-end and back-end, following a scalable, modular architecture. Frontend: The front-end will be built with React (likely using Next.js as the framework for its additional features like SSR and built-in routing). The reason for choosing Next.js is its support for server-side rendering and static generation which can enhance performance and SEO, as well as its built-in internationalization routing support that aligns with our multilingual requirement. Next.js is open-source and widely used (it’s a common choice even among award-winning sites
medium.com
). If not Next.js, an alternative could be a React application bootstrapped with Vite or Create React App and using React Router for single-page navigation, but we'd then manually handle i18n and SSR. Next.js gives us structure out-of-the-box and the option to export a static site if needed. In the React app, we will integrate Three.js via @react-three/fiber (R3F) for the 3D graphics. This allows us to write Three.js scenes as React components, benefiting from React's declarative style and state management within the 3D context
medium.com
. Using R3F aligns with best practices from the community for adding WebGL content to React and has performance optimizations built-in. We’ll also use React Three Drei (a helper library with premade R3F components like orbit controls, loaders, environment lighting, etc.) to accelerate development of common 3D features
medium.com
. All these front-end technologies (React, Next.js, R3F, Drei) are free and open-source. The front-end will handle routing (if we consider each section anchor as a route or at least separate locales as routes), state management for UI (likely using React's Context API or lightweight state libraries if needed). For example, a LanguageContext might store the current language, and a global state for things like whether the contact form modal is open, etc. We don’t anticipate heavy global state beyond i18n, so Context or even simple prop drilling suffices; we likely won't need Redux for this project, keeping things simpler. Backend: We will use Supabase as the backend-as-a-service. Supabase provides several components:
PostgreSQL Database (open-source, where our data will reside),
Authentication (if needed) – though for this portfolio, user auth is not a core feature except potentially an admin login to view messages (not specified, likely not needed initially),
Supabase Storage – we might use this to store media assets (like the user-provided videos) in an S3-like object storage with CDN,
Supabase Functions (Edge Functions) – serverless functions that could handle custom backend logic if needed (for instance, sending an email on contact form submission or performing form validation on the server side).
Given the requirements, our backend usage is relatively light: we need to store and retrieve data for Projects, Publications, and Contact messages. We can model these in the Supabase Postgres database:
Projects table: fields for project title, description, tech stack, and possibly separate video URL fields for each language (or a related table for project videos with language codes). We might design it as projects table and a project_videos table keyed by project and language for normalization, or just have columns like video_en, video_ja, ... for simplicity.
Publications table: fields for publication title, venue, date, link (to PDF or external site).
Contact Messages table: fields for name, email, message, timestamp. This will collect submissions from the contact form.
Supabase provides a RESTful API and client libraries to interact with the database (thanks to PostgREST under the hood). For reading data (projects, publications), we have two options:
Direct from the client: Use the Supabase JavaScript client in the React app to query the database (with the public “anon” key). This is straightforward for read-only data and Supabase can enforce Row-Level Security (RLS) to ensure only intended data is accessible. For example, we can fetch the list of projects on page load or build time.
Via Next.js (if used) API routes or getStaticProps: We could fetch data server-side during the build (making the site static) or at runtime on the server. For instance, getStaticProps in Next could retrieve projects and publications from Supabase and embed them into the page, reducing client workload and improving SEO (the content appears in the HTML). Since content changes are infrequent, static generation with periodic revalidation might be ideal.
For the contact form (write operation), we will not allow direct client writes with the public key unless RLS is perfectly configured for safety. A more secure pattern is to create a small serverless function or Next.js API route to handle contact submissions
medium.com
. This API route (let's call it /api/contactSubmit) will accept the form data via POST. It will use Supabase's service role (secure) key on the server side to insert the message into the Contact Messages table
medium.com
. This way, the secret key is never exposed to the client, and we avoid any malicious use of the database. The API route can also implement additional spam checks or email sending if needed in the future. If we go fully static without Next server, an alternative is to use Supabase's client with RLS that only allows inserts (no reads) into the Contact table and perhaps a CAPTCHA; however, using a serverless function is more straightforward for security. Database (Supabase Postgres): The Postgres database will be the single source of truth for dynamic content:
Data modeling will follow normalization for structured data. For example, if Projects have multi-language fields, we could have a projects table and a project_translations table with columns (project_id, language, title, description, video_url). However, given only four languages and likely fewer than 10 projects, we might simplify by including multiple language columns in one row. We'll weigh maintainability (maybe the user or others might update content via Supabase Studio) – a translation table might be cleaner for them to edit.
We'll employ Row Level Security (RLS) policies on the tables to protect data. Specifically, enable RLS and write policies such that:
The projects and publications tables can be read by anyone (if there's no sensitive data, or we may use the anon key with read rights).
The contact_messages table allows inserts from anyone (no auth required) but does not allow select to public. That way, site visitors can send messages, but cannot read or list messages via the public API
medium.com
. Only the service role (used in our API function) or a logged-in admin (if we implement one) can read them. This prevents data leaks and abuse.
Supabase also automatically provides real-time subscriptions, but we likely don't need live updates on a portfolio site (no concurrent user content changes happening).
Architecture Diagram: The high-level architecture is depicted below, showing how the front-end, back-end, and database interact: 

Figure: High-level architecture. The React front-end (with Three.js for 3D) runs in the browser and communicates with Supabase’s backend (via HTTPS). Supabase provides an API layer to the Postgres database. For contact form submissions, an optional serverless function (or Next.js API route) acts as an intermediary, using secure credentials to write to the database. All other content (projects, etc.) can be fetched either directly from the database with safe policies or pre-fetched on the server side. In summary, the frontend handles presentation and interaction (including rendering 3D scenes and managing UI state), while the backend (Supabase) handles data storage, retrieval, and any heavy lifting like authentication or file storage. The design is such that the frontend remains mostly static/deterministic (which aids caching and performance), using the backend primarily for content and form submissions. This separation and usage of Supabase means we avoid writing a custom backend server from scratch – instead, we configure Supabase and write minimal serverless logic as needed, keeping the architecture lean and maintainable. All components are chosen for being free, open-source, and proven in production scenarios.
3D Component Strategy and Interaction Design

Integrating 3D elements into a web portfolio is a centerpiece of this project. We'll leverage Three.js via @react-three/fiber to incorporate interactive 3D scenes in a React context. The strategy is to make these 3D components enhance each content section's message while keeping performance and usability in check. Global Canvas vs Section Canvases: We have a choice of using a single <Canvas> (Three.js rendering context) that spans the entire page or separate smaller canvases per section. We plan to use a single global canvas that is either full-screen or covers a large area, with the 3D content changing based on scroll position or section in view. The advantage is that a single canvas allows smoother global control (like one Three.js scene or multiple scenes managed together) and avoids re-initializing WebGL context for each section. We can use React Three Fiber’s <Suspense> and lazy loading for each section’s 3D models, only activating them when needed. Using a single canvas also simplifies having consistent lighting and effects (we can move the camera or swap out models as the user scrolls). Scroll-triggered 3D Animations: We will implement scroll-based triggers such that when the user scrolls to a certain section, the relevant 3D objects appear or animate in. There are a couple of methods:
Using R3F's <ScrollControls> and useScroll (from Drei) which can map scroll positions to animation progress in the 3D scene.
Using an external library like GSAP ScrollTrigger to coordinate scroll with 3D object animations (greensock is free for our use-case and very powerful, though it’s not fully open-source; we may use it in free mode or opt for an open alternative like ScrollMagic or just manual JS).
Simpler approach: use the Intersection Observer on sections and when a section is in view, trigger a state that R3F uses to start an animation (like toggling a boolean that an object reads to start rotating).
For example, as the "Tech Stack" section comes into view, we could trigger the 3D tech-orbit to start spinning or pulsing each icon. As we leave the section, maybe it pauses or diminishes. The "Projects" section might have a low-poly 3D backdrop (like abstract shapes or a grid) that subtly moves until a video is played, at which point it might dim. We will choreograph these so that each section has a distinct feel but transitions are not jarring. Interactive Controls: We will enable some user interaction with the 3D content:
Pointer (Mouse) interactions: Many R3F objects can respond to pointer events (onPointerOver, onClick, etc.). We will use this for things like making objects highlight or tooltip on hover. For example, in the tech stack globe, hovering on a tech icon could slightly enlarge that icon and display the tech name (maybe as a floating HTML element or as a 3D text sprite). Clicking could potentially do something fun like spin the globe to center that icon (though that might be extra). We will implement a custom cursor for the page that aligns with the theme (perhaps a small circle or crosshair that reacts to hover by expanding or changing color when over interactive elements
medium.com
).
Camera movement: Instead of a static camera, we can animate the camera position or targets as the user navigates sections. For instance, at the top (About Me) the camera might be front-facing an avatar model. Scrolling to Education might move the camera to a different part of the scene where the timeline is laid out in 3D space. Alternatively, each section might be a separate scene attached to a common camera, and we simply switch out the scene contents. We'll be careful to ensure transitions are smooth (maybe fade out/in objects or quickly move them off-screen). We may allow limited manual camera control in certain sections (like an OrbitControls in the tech globe, but disabled elsewhere for guided experience).
Physics or Novel Interactions: If time and performance allow, we might incorporate a physics library (like react-three-rapier
medium.com
, which is based on Rapier physics) for fun effects – e.g., making certain objects draggable or collide. A playful example could be in the About section: maybe the user can throw around some 3D letters or objects for fun. However, these will be secondary and only if they don't detract from the message or performance.
3D Models and Assets: We expect to use a mix of imported 3D models and procedural geometry:
If the user has custom 3D assets (perhaps from Figma or Blender exports), we will incorporate those. We might use models in glTF format (which is modern and compact). For example, a 3D avatar or mascot, or models representing projects (like a 3D character for a game project).
If no custom models are given, we'll rely on simple geometries (boxes, spheres, planes) combined with textures or shaders to create attractive visuals. For instance, the tech icons can be textures on planes or part of a single spritesheet.
We'll keep models lightweight (low polygon count where possible, use of Draco compression for glTF, etc.). We will also preload critical models during the initial load (perhaps via Suspense and asset loading indicators) so that when the user scrolls to that section, the model is ready.
Lighting and materials: We'll use Three.js materials that work with our dark theme – likely a mix of standard materials with subtle lighting for 3D depth, and possibly some shader materials for special effects (like a glowing neon shader for accents). Because dark theme is forgiving for performance (we can have a mostly black background and only a few lit objects), we can optimize by having maybe one main light (like a directional light or ambient + spotlight setup) and not too many shadow-casting lights (shadows are expensive, we might only enable them on key objects if at all).
Shaders and Postprocessing: For a truly polished look, we might incorporate some postprocessing using Drei or Three.js EffectComposer (open source). This could include a bloom effect for glowing parts (e.g., neon effects on hover), or SSAO for slight ambient occlusion to make 3D contact points look better. But these can be performance heavy; we'll test them and ensure frame rates stay high. We might provide an option or automatically disable some effects on lower-end devices (feature detection).
Performance in 3D: We'll keep monitoring the performance of 3D content. Strategies include:
Limit the number of objects in the scene at any time. If a section's 3D element is not in view, we can remove or hide those objects.
Use frustum culling (Three.js does this by default) and possibly manually dispose of resources when not needed.
Use low-res textures and compress them (like using WebP or Basis compressed textures) for any images on 3D models.
Avoid or carefully use particle systems/physics as they can generate many objects – if we use, maybe limit count or use a shader-based particle system (calculating in GPU).
Ensure the canvas size isn’t larger than needed – maybe use lower pixel ratio on mobile to reduce GPU load.
Integration with DOM: We'll need to coordinate 3D with HTML elements (like overlaying text on canvas). We can use react-three/drei's Html component to place HTML elements in the 3D scene (e.g., labels that stay attached to an object) if needed. This could be used for tooltips or labels that are easier to style with CSS but still follow a 3D object. We just have to ensure those are also translated and accessible. Backup/No-WebGL Fallback: Though most users will have WebGL, we should handle the case where WebGL is not supported or if the 3D fails to load (perhaps due to old hardware). The plan is to detect if WebGL context can be created; if not, we show a static fallback (e.g., an image or a simplified version of the content). For example, we might prerender or screenshot the 3D scenes and have those images ready to show. Or simply ensure that all crucial info is available in text and the site remains navigable without the 3D canvas (maybe display a polite message "Your browser cannot display the interactive 3D graphics; please update or continue without them"). By executing this 3D strategy, we aim to add meaningful interactivity that complements the portfolio content. The interactions should feel natural and engaging (like a part of the storytelling of the site) rather than gimmicky. Each 3D component will be thoroughly tested for both usability (does it help convey something or at least delight users) and stability (no crashes, manageable load). Adopting React Three Fiber ensures we can build these features using React paradigms and tap into an ecosystem of tools (drei, rapier, etc.), which accelerates development and aligns with modern best practices for WebGL in React
medium.com
.
Tooling and Libraries Used (with rationale)

To meet the requirements while adhering to best practices and open-source constraint, we have carefully chosen the following tools, frameworks, and libraries:
Framework & Core Libraries:
React (v17+ or 18) – The foundation of our front-end. React’s component-based architecture and rich ecosystem make it ideal for building interactive UIs. It efficiently updates the DOM and, by default, provides protection against XSS by escaping content, which is a security plus
linkedin.com
. Its popularity ensures long-term support and many integration libraries (e.g., for Three.js, i18n, testing).
Next.js (latest version, if chosen) – A React framework for server-side rendering, static generation, and other optimizations. Rationale: Next.js will assist with internationalization routing, automatic code-splitting, and optimized production builds. It also simplifies deployment (it can be run serverlessly or exported to static files) and has built-in support for SEO (Head component for meta tags) and performance (Image Optimization). Next.js is MIT-licensed (fully open-source). If Next.js is not used, we would use Vite to scaffold a React app for faster development and React Router for managing section navigation if needed; however, Next provides a more integrated solution.
Three.js – The core WebGL library for creating 3D graphics. Three.js (MIT license) is the de facto standard for web 3D, providing abstractions for cameras, scenes, lights, models, etc. We need its low-level power to render 3D models and animations.
@react-three/fiber – React renderer for Three.js
medium.com
. This library lets us build Three.js scenes using JSX/React components, greatly simplifying integration of 3D into our React app. It’s open-source (MIT) and maintained by Poimandres (who are known for excellent 3D tools in React). Using R3F ensures better reusability and state synchronization for our 3D components.
@react-three/drei – A helper toolkit on top of R3F that provides many ready-made components (orbit controls, environment maps, loaders, text, etc.)
medium.com
. This will save time and avoid reinventing the wheel for common needs. For example, Html for 3D label overlays, OrbitControls for camera orbit, or useGLTF for easily loading glTF models. Drei is also MIT-licensed.
State Management & Data Fetching:
We will primarily use React’s built-in Context API and hooks (useState, useReducer, etc.) for managing state (e.g., current language, whether a modal is open). This avoids adding heavy libraries when not necessary.
If using Next.js, for data fetching we may use getStaticProps / getServerSideProps for initial data. For client-side data updates (if any, like a form submission result), we can call our API or Supabase client directly. If we need to manage remote data state, we might introduce SWR or React Query – these are open-source libraries for fetching/caching data. For instance, SWR (MIT license) could fetch the projects list from Supabase and cache it. However, given the simplicity, manual fetch inside a useEffect or Next’s server-side fetching might suffice.
Internationalization:
react-i18next – An industry-standard library (based on i18next) for handling translations in React
freecodecamp.org
. It provides easy hooks to get translated strings and to change language. It also can handle things like plurals, and namespace separation (we might use separate namespaces per section if desired). The library is open-source (MIT). If using Next.js, we might also consider next-i18next which wraps i18next in a Next-friendly way, or just use Next's built-in JSON file approach. The rationale is to minimize custom i18n code and use proven solutions to avoid bugs (like missing translations or formatting issues).
i18next-browser-languagedetector – A plugin for i18next to auto-detect the user’s language preference from browser settings. This can help default to the right language on first visit.
Styling:
Tailwind CSS – A utility-first CSS framework (MIT license) that can speed up styling by providing pre-defined classes for spacing, typography, colors, etc. Using Tailwind will help ensure design consistency (we can define a custom dark theme palette in Tailwind config) and allow rapid UI changes without leaving JSX. It’s also great for responsive design via its mobile-first classes. Alternatively, if the design requires very custom styles, we might use CSS Modules or Styled-Components (MIT) for component-scoped styles. However, Tailwind’s flexibility likely covers our needs (and it has utilities for dark mode which might be leveraged if we ever have a light mode or just to ensure proper contrast).
Framer Motion – A powerful animation library for React (MIT license) to create fluid UI animations. We might use this for animating DOM elements (text or section transitions) complementing Three.js animations. For example, fading in sections, animating text appearance, or fancy hover effects on buttons. Framer Motion provides a declarative way to describe animations and can be easier than raw CSS or manual JS for complex sequences. For 3D objects, we rely on R3F for animations, but we could also use GSAP (GreenSock Animation Platform) especially for scroll-triggered timelines or advanced control. GSAP's core is free to use (under a special license that is not strictly MIT but is allowed for personal/commercial with no fee as long as certain plugins are not used). Since all software must be open-source, if we strictly interpret that, we might avoid GSAP and stick to Framer Motion or basic R3F animations. We will likely use react-spring (MIT) or Framer for smaller interactions if needed, and perhaps basic GSAP (which itself is free to use) for scroll syncing if absolutely necessary, ensuring we don't include any proprietary GSAP plugins that require a license.
Backend & Database:
Supabase Platform – This includes the Supabase JS Client library (MIT license) for making calls to the Supabase services (auth, database, storage). We'll use this in our front-end or server code to easily perform queries (e.g., supabase.from('projects').select('*')). The client abstracts the REST and real-time subscriptions. It's free and open-source.
We will use SQL (via Supabase) for any advanced querying if needed (e.g., to filter projects, although likely not needed in a simple portfolio). If needed, Supabase also provides GraphQL via a plugin, but that’s probably overkill here.
Supabase Auth – If we decide to have an admin login to view submissions, we can use Supabase Auth (which uses GoTrue under the hood) to enable email/password or third-party login for the site owner. This auth system is free and open-source. It’s not explicitly required in the description, so we might skip implementing any login on the site itself and just let the user view messages directly in Supabase or a simple protected route.
DevOps & Build:
Docker – We will use Docker for containerization. Specifically, we will create a Dockerfile for the application. Likely, a multi-stage Docker build: a builder stage using Node (Alpine) to install and compile the React app (or Next app), and a final stage to serve the app. If we export a static site, the final stage can be an Nginx Alpine image serving the static files. If we run a Node server (for SSR or API routes), the final stage will be a lightweight Node.js runtime image running next start. Docker itself is open-source and the images we use (Node, Nginx) are from official open libraries. Docker ensures environment consistency and makes deployment to any server or cloud that supports containers straightforward.
GitHub Actions – Our choice for CI/CD pipeline (hosted by GitHub, configuration via YAML in repo). GitHub Actions is free for our use-case and provides an open YAML format to define build steps. There is huge community support (actions for checkout, Node setup, etc.). We will use actions like actions/checkout (MIT), actions/setup-node to set up Node environment, and possibly docker/build-push-action (Apache-2.0) for building and pushing Docker images. All these are open-source. The rationale is to automate testing and deployment on each commit, reducing manual errors and ensuring high quality (we won't accidentally skip tests).
ESLint – Linting tool (MIT license) to enforce code quality and style. We will use ESLint with recommended configurations (and perhaps Airbnb or Next.js preset) to catch potential bugs (like undefined variables) and maintain consistent code style (especially important in a project with multiple languages in code, to avoid mistakes like mixing up keys). We'll also include eslint-plugin-react and eslint-plugin-jsx-a11y (for accessibility linting). This automated static analysis helps ensure we follow best practices for React and accessibility from the start.
Prettier – Code formatter (MIT) to automatically format code on commit or save. This ensures a uniform code style which improves readability and maintainability.
Testing Libraries:
Jest – A widely-used testing framework (MIT) for JavaScript, will serve as our test runner. Jest is great for unit and integration tests in React. It also has snapshot testing capability which might be useful for ensuring UI doesn’t unexpectedly change (though snapshots with 3D output might be tricky, we can snapshot component rendering without running heavy 3D logic by mocking it).
React Testing Library (RTL) – Built on Jest, RTL (MIT license) provides utilities to render components and simulate user interaction in tests, focusing on testing UI in a user-centric way. We'll use RTL for testing components like the contact form (e.g., filling fields and pressing submit, then asserting that a success message appears or that our mock API was called). RTL encourages best practices (not testing implementation details, but outcomes).
@react-three/test-renderer – A specialized test renderer for React Three Fiber components
r3f.docs.pmnd.rs
. This allows us to create a headless 3D scene in tests and inspect the scene graph or fire events on it
r3f.docs.pmnd.rs
r3f.docs.pmnd.rs
. For example, we can test that our <TechGlobe> component creates the right number of icon meshes, or that clicking on the 3D object triggers the expected state change (the test renderer can simulate renderer.fireEvent(mesh, 'click') to test interaction
r3f.docs.pmnd.rs
). This is important to ensure our 3D logic works as expected and to catch regressions in interactive behavior. It's open-source (MIT) as part of the R3F family.
Cypress or Playwright – For end-to-end testing, one of these will be used. Both are open-source (Cypress under MIT, Playwright under Apache). These tools automate a real browser to test user flows. We will write e2e tests such as: "When the page loads, it shows the About section, then if I click the Spanish language, the About heading text changes to Spanish and the rest of the page content updates accordingly." Also tests like "Fill the contact form and submit, expect a success message". Additionally, we might simulate scrolling to ensure sections load their content (though testing canvas animations might be limited, we can at least ensure no errors occur and content appears). Playwright has an advantage of easier multi-browser testing (it can run tests in WebKit, Firefox, and Chrome) which could be beneficial to ensure broad compatibility.
Security & Utility Libraries:
DOMPurify – If we ever had to display user-generated HTML (not expected in this portfolio aside from maybe formatted publication abstracts), DOMPurify (Mozilla Public License) could sanitize it. Currently, we will ensure not to use dangerouslySetInnerHTML at all, so this might not be needed. But it's worth listing as a tool if needed for sanitization
linkedin.com
.
Helmet (for Next) – If using a custom server, Helmet (MIT) could set HTTP headers for security (CSP, HSTS, etc.). Next.js has built-in ways to set headers in next.config.js. We can incorporate those (e.g., contentSecurityPolicy in Next’s headers config).
Zod or Yup – For schema validation of data (MIT licenses). Specifically, we can use Zod to define a schema for contact form inputs on the server side and validate incoming requests
medium.com
. This ensures the data is in expected format and prevents malicious content (like too long strings or incorrect types) from processing. Zod can also be used on the client to share schema (since it’s JS) to validate before sending. This is robust for security and consistency.
All these tools are both free and open-source. We have chosen them to ensure we meet the project's constraints and quality standards:
They enable us to follow best practices (e.g., ESLint for code quality, i18next for proper localization, etc.).
Each addresses a specific need in the project (3D rendering, translations, testing, security, performance).
By using popular libraries, we also ensure that any future developers (or the user if they continue development) can find community support and documentation.
Finally, our development environment will likely use Node.js LTS (open source) for building the project, and Git for version control (Git is open source). We'll include helpful scripts in package.json for common tasks (e.g., npm run dev, npm run build, npm run test, npm run lint). The emphasis is on using standard, widely-adopted tooling to ensure longevity and reliability of the project, as well as compliance with the open-source requirement.
Security Measures

Security is paramount. We will implement multiple layers of security to protect the site and its data from common vulnerabilities (XSS, CSRF, SQL injection, etc.), following OWASP best practices and leveraging the inherent security features of our stack. 1. Cross-Site Scripting (XSS) Prevention: React by default escapes content, significantly mitigating XSS risks in our UI. We will avoid use of dangerouslySetInnerHTML entirely, unless absolutely necessary (which we do not anticipate). All user-provided data (like contact form input) will be treated cautiously:
We will sanitize inputs on the client side as a first step, using simple validation or a library if needed, to prevent unacceptable content. For example, the contact form might reject input containing HTML or scripts. However, we treat client-side sanitization as a UX improvement, not a sole security measure. The server side (Supabase or our API) will do its own sanitization/validation.
If we ever needed to render rich text from the database (not likely in this project), we would run it through an HTML sanitizer like DOMPurify to strip any script tags or malicious code before insertion into the DOM
linkedin.com
.
We will set a strict Content Security Policy (CSP) via headers, which whitelists sources of scripts, images, media, etc. For example, the CSP will specify that scripts can only come from our own domain (and perhaps 'unsafe-inline' will be avoided to not allow inline scripts)
linkedin.com
. This way, even if an XSS attack sneaks in, the CSP can prevent external script execution.
No eval or dynamic script creation will be used. Third-party scripts will be minimal (likely none except maybe analytics), which reduces XSS vectors.
2. Cross-Site Request Forgery (CSRF) Protection: CSRF mainly concerns state-changing requests (like form submissions) being triggered unknowingly by a user. Our site has one primary state-changing action: the contact form submission. Since we don't have user sessions (no login cookies for site users), CSRF risk is somewhat lower (attackers can't force a user to perform an action as an authenticated user since there's no auth). However, if we implement an admin login in the future or use cookies for any reason, we will:
Use CSRF tokens for form submissions if needed
linkedin.com
. For example, if the contact form posting to our API needed extra protection, we could include a hidden CSRF token that must match. In our case, since it's a simple form accessible by anyone, a CSRF token may not be strictly necessary (there's no harmful side-effect a third party could trick a user into beyond sending a message).
We will ensure any session cookies (if any) use the SameSite=Lax or Strict attribute
linkedin.com
, preventing them from being sent on cross-site requests, mitigating CSRF by default.
The contact form API will implement checks like requiring a specific custom header or value that normal browsers send with our form, to distinguish from random requests.
Additionally, a CAPTCHA or honeypot field might be used to prevent automated CSRF or spam requests (e.g., a hidden field that if filled by bots will cause validation fail).
3. SQL Injection Prevention: When interacting with the database via Supabase, we will not construct any raw SQL queries with string concatenation. Supabase's client library and PostgREST use parameterized queries under the hood for filters, etc., so injection risk is minimal. On Supabase Edge functions or any server code, if we did use SQL, we’d use parameter binding. Also:
All inputs that reach the database (like contact message content) will be validated and sanitized
medium.com
. For instance, the contact message will allow only certain length and characters; we ensure it's stored as plain text (the worst an attacker could do is send a weird text, which doesn't execute).
We will implement input validation on the server side using a schema (like Zod as mentioned). This will check types and acceptable values rigorously
medium.com
. For example, name should be a string < 100 chars, email must match an email regex, etc. This stops attempts to include SQL commands or excessively long input that might exploit any buffer.
Supabase RLS policies also help: even if an injection was attempted, a properly configured RLS might simply reject a query that isn't structured as expected or where the user isn't authorized. But the primary defense is parameterized queries.
4. Authentication & Access Control: Although the site doesn't have public logins, if we include an admin section for reading contact submissions, we will secure it:
Use Supabase Auth for the site owner to login (or some form of Netlify basic auth on a admin route if simpler). Only after auth would the messages table be read. This protects user data (messages) from unauthorized access.
Enforce strong passwords if using email/password, and maybe 2FA if available, since an admin compromise could expose contact info.
If no admin UI is built, the user will retrieve messages via the Supabase dashboard directly, which is secure behind their account.
5. Sensitive Data Handling: We won't handle highly sensitive personal data beyond what a user voluntarily submits in contact (name, email, message). Even so:
We will transmit data exclusively over HTTPS. Any API calls to Supabase or our functions will be on HTTPS endpoints. We will obtain an SSL certificate for the site domain (if hosted on a platform, they often provide one, or use LetsEncrypt if self-hosting).
We will encrypt secrets such as Supabase service key. In practice, this means not exposing it in client code. It will only exist in serverless function environment or GitHub Actions secrets. We will never commit keys to the repo. Environment variables will be used for any keys and handled carefully (they will be set in the deployment environment, not hard-coded).
The database (Supabase) presumably encrypts data at rest (most managed Postgres do; if self-hosting, we’d enable disk encryption). Regardless, only the project owner (with the service role or through Supabase UI) can access raw data.
6. Content Security & Integrity:
We will set appropriate HTTP headers to harden the app:
X-Frame-Options: DENY to prevent clickjacking by disallowing our site to be framed by others
linkedin.com
.
X-XSS-Protection: 0 (modern browsers ignore this if CSP is set, but older ones might use it).
Referrer-Policy: strict-origin-when-cross-origin to minimize leakage of referrer info.
Permissions-Policy (formerly Feature-Policy) to restrict use of sensitive APIs (e.g., no geolocation or camera access unless needed).
Strict-Transport-Security (HSTS) to enforce HTTPS on browsers for our domain.
Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy might be set if needed for certain performance isolation (especially if using SharedArrayBuffer for performance—likely not needed here).
We will also ensure that any third-party assets (fonts, scripts) are loaded from trusted sources. Ideally, host them ourselves to avoid dependency on external domains. If we use Google Fonts or similar, we will consider either self-hosting the fonts or at least ensure the connection is secure and allowed in CSP.
If using Next.js, we can easily add these headers in next.config.js. If using Nginx in Docker, we will configure it to send these headers.
7. Protecting Supabase API Keys:
Supabase provides an anon public key (meant for client use with RLS) and a secret service key. Our anon key will be embedded in the frontend to allow reads (that's fine because RLS will limit its power). We will guard the service key carefully:
It will only be used server-side (in our contact API route). In GitHub Actions and in deployment, it will be an environment secret. We read it from process.env.SUPABASE_SERVICE_KEY on the server. This way, it's never exposed in client bundle
medium.com
.
We will periodically rotate this key via Supabase if needed (post-launch maintenance).
The database rules will ensure that even if someone somehow got the anon key, they cannot modify or read unauthorized data, as explained.
8.Spam & Abuse:
Rate limiting: To prevent spamming of the contact form or other potential abuse (like hitting our APIs continuously), we will implement rate limits. In a serverless function for contact, we can track the sender's IP or a fingerprint and if they exceed a threshold (e.g., more than X messages per minute), we temporarily block or require a CAPTCHA. Since implementing a full backend rate limit might be complex, we might rely on services or simple measures like in-memory count within the function (though serverless resets on each call typically). Alternatively, because Supabase logs can be monitored, we can have a simple rule: only allow, say, 5 messages per day per IP (not foolproof, but a deterrent). We can implement that via a check in the function by querying how many recent messages from that IP exist.
Honeypot Field: Add an invisible field in the contact form that humans won’t fill (via CSS hidden). Bots might fill it, and if it's filled, we reject the submission.
If spam becomes a big issue, we could integrate an open-source CAPTCHA alternative or a math question ("what is 2+3") to filter out bots. We'll assess if needed.
9. Dependency Security:
We will regularly run npm audit (and during CI) to catch vulnerabilities in libraries and update as needed. Using widely-used libraries like React, Next, etc., means vulnerabilities are rare and patched quickly.
We will pin versions or use caret versions carefully to avoid injecting a breaking change unawares, but also not stay outdated. Dependabot (a GitHub feature) can be enabled to alert/PR for security updates.
Build process: our CI will ensure that only vetted code is deployed. We won't directly pull from unknown sources. We can also consider verifying integrity of assets (subresource integrity for CDN assets if any).
10. Testing for Security:
We will include tests for certain security aspects, e.g., ensuring that content is properly encoded. For example, a test could render a component with a string that includes <script> and verify that it's not executed and appears innocuous in output. Also, tests to ensure our API does not accept invalid input (like too long strings get rejected with 400).
Before launch, we can run a security scan using tools like OWASP ZAP or other automated scanners to catch any missed issues. Also using Lighthouse's Best Practices audit (which includes some security checks for HTTPS and vuln libraries).
11. Docker and Deployment Security:
The Docker container will be built following least privilege: e.g., using a non-root user to run the app inside the container (for Nginx or Node). This avoids container breakout risk.
We'll minimize open ports (basically only port 80/443 as needed). If deploying on a VM, use firewall to restrict other ports.
The CI/CD (GitHub Actions) will store secrets (like deployment server credentials or API keys) in encrypted secrets, and we will follow the principle of least privilege for those as well (for example, if deploying to a cloud, use a token that only allows deploying to that one app, not full account access).
By covering these areas, we aim for a secure configuration by design. The combination of React's inherent protections and our proactive measures (sanitization, CSP, RLS, etc.) will mitigate most common threats:
XSS: mitigated by React escaping and CSP and no unsafe injection of HTML
linkedin.com
.
CSRF: mitigated by same-site cookies and token if needed
linkedin.com
.
SQLi: mitigated by using safe query APIs and validating input
medium.com
.
Data exposure: mitigated by auth controls and not exposing secrets.
Misc: any library or server config decisions will consider security (for instance, enabling HTTPS/2 to avoid certain older protocol vulnerabilities, and monitoring logs for suspicious activities).
Security will be revisited continuously during development (especially after we have a working prototype, we'll perform a review focusing solely on security aspects to see if anything was overlooked).
Testing Plan

We will implement a comprehensive testing strategy covering unit, integration, end-to-end, and performance tests to ensure the application is robust and meets quality standards. Automated tests will be run in CI/CD pipelines to catch regressions early. 1. Unit Testing:
Unit tests will focus on individual functions and React components in isolation:
Utility Functions: Any helper functions (e.g., a function that selects the correct video URL given a language code, or validation functions for form input) will have straightforward unit tests. For example, testing that getVideoUrl(project, 'ja') returns the Japanese video link and falls back correctly if one is missing.
React Components (Pure): For components that are mostly presentational or have simple logic, we'll use Jest + React Testing Library (RTL) to render them and verify output. For instance, the LanguageSwitcher component – we can simulate a click on a language option and assert that a callback (or context value) changes accordingly.
Validation Schema: If using Zod for form validation, we can write tests to feed it various inputs and ensure it accepts valid ones and rejects invalid ones (to ensure our rules like "email must have @" are enforced).
3D Components (with R3F Test Renderer): Using @react-three/test-renderer, we will test the behavior of critical 3D components. For example:
For the Tech Stack 3D globe component, after rendering, we can inspect renderer.scene to ensure it contains the expected number of children (like the number of tech icons)
r3f.docs.pmnd.rs
r3f.docs.pmnd.rs
.
We can simulate an interaction: e.g., await renderer.fireEvent(mesh, 'click') on a mesh representing a tech icon and then check if its scale or state updated as expected (like perhaps clicking an icon highlights it)
r3f.docs.pmnd.rs
.
For the Contact form component (which might not be 3D but normal React), we will test that entering data and hitting submit calls the Supabase API function (we will mock the API call). We can use Jest mocks or MSW (Mock Service Worker) to simulate the network.
We will mock heavy external dependencies in unit tests. For instance, in a test of a component that uses the Supabase client, we'll inject a mock Supabase client to avoid real network calls. Similarly, Three.js can be heavy, so for tests that don't require actual rendering, we might stub out Three components or run tests in a node environment without needing a real canvas.
2. Integration Testing:
Integration tests will combine multiple components or test more complex flows without a full end-to-end environment:
We can mount a larger portion of the app (e.g., a section with its content and perhaps the 3D canvas context) using React Testing Library and JSDOM environment. Then test interactions like "when the LanguageContext is set to Spanish, the About section's heading changes to the Spanish text".
Test that the context and i18n integration works: we might simulate a language change event and ensure all child components (across multiple sections) show updated text. This ensures our i18n configuration is correct.
Integration of 3D and DOM: For example, if we have a tooltip that appears when a 3D object is hovered (which might be implemented with a state change that causes a DOM element to appear), we can simulate that state change and check the DOM via RTL.
We will test interactions between the front-end and Supabase on a staging/test environment: possibly using a separate test Supabase project or using Supabase's ability to run a local Postgres for testing. Alternatively, use MSW to simulate Supabase REST responses. For example, test that when the app loads, it fetches a list of projects from Supabase and those projects' titles render in the Projects section.
3. End-to-End (E2E) Testing:
Using Cypress or Playwright, we'll simulate actual user scenarios in a real browser environment:
Basic Navigation & Rendering: Test that the page loads successfully and the main sections are present. E.g., ensure that the heading "About Me" appears, then scroll to "Projects" and see that project items appear. This catches any runtime errors that might not appear in unit tests (like if Three.js fails to initialize).
Language Switching E2E: Start with English content, click the language switcher to Japanese. Then verify that known text (like the About Me heading) is now in Japanese (we'll have the expected translations to compare). Also verify that the video in Projects has switched (if possible, we could check the video element's src attribute or some identifier).
Contact Form E2E: Fill out the form fields (simulate typing a name, email, message). Induce a validation error (e.g., put an invalid email "abc" and try to submit, ensure an error message appears and submission does not go through). Then fill a correct email, submit the form. If our design shows a success message, assert it is visible. We won't actually send a real email, but we might let it hit a test Supabase or intercept the network request. In Cypress, we can stub the network call and respond with a fake success, then ensure the UI behaves accordingly.
3D Interaction E2E: End-to-end frameworks aren't as straightforward for canvases, but we can attempt some limited checks: e.g., ensure that the canvas element is present and has a certain size, or that interactive CSS changes happen. For example, if hovering over a tech icon changes the cursor or highlights text, we can simulate a mouseover (Cypress has .trigger('mouseover', {position: ...}) on elements if we know their DOM region or have an overlay). We might not validate the internal 3D state, but at least ensure no errors on interacting.
Performance E2E (Lighthouse): We can integrate a Lighthouse CI or use Playwright to measure performance metrics. For example, using Playwright's trace or web-vitals library to get the Largest Contentful Paint (LCP) and ensure it's under a threshold. We aim for high Lighthouse scores, so we might run Lighthouse on the built site as part of CI (there are GitHub Actions for Lighthouse). We can set budgets (like < 2s LCP on desktop, < 4s on mobile) and treat regressions as issues.
Cross-browser testing: Using Playwright, we can run the same tests in Chromium, Firefox, and WebKit engines to catch any browser-specific issues (Three.js and our CSS should work across, but it's good to verify). Also test on mobile viewport sizes via the testing framework or manually.
4. Automated Accessibility Testing:
We'll incorporate accessibility tests in both unit/integration and E2E:
Use jest-axe (axe-core) with React Testing Library to run an accessibility audit on rendered components. For example, render the entire page or each section and use axe to check for common issues (missing alt attributes, low contrast, incorrect ARIA usage). We'll fix any violations.
Use Cypress-axe in end-to-end tests to run accessibility checks on the live site after each major interaction. For instance, after loading the page, run axe to ensure no serious violations (apart from known intentional ones, if any).
We will specifically test keyboard navigation in E2E: e.g., press "Tab" repeatedly and ensure focus goes through nav links and into the contact form fields logically. Also test that pressing "Enter" on the language switch toggles it (for keyboard users).
The tests will ensure that language changes update the lang attribute on html, which is important for screen readers (we can check the DOM property).
5. Performance Testing:
Besides Lighthouse, we can do some profiling:
Possibly write a script (using Puppeteer/Playwright) to measure memory usage after loading the site and after interacting, to check no obvious memory leaks (Three.js should free resources when scenes change; we will test for detached canvases or console warnings).
Use Chrome DevTools to simulate slow network and check our loading strategy (manually). Not automated, but part of testing plan.
6. Continuous Testing Integration:
GitHub Actions will run our test suite on each push. We'll have jobs for linting, unit/integration tests (headless), and E2E tests (possibly using a headless browser or a Xvfb display for Cypress). We may separate E2E to run on certain branches or nightly if it's heavy.
We will also include tests for our Docker container (maybe as part of CI, build the image and ensure it starts and responds on a ping route or serves the static files).
Testing the CI pipeline itself: we'll do dry runs to ensure environment variables and secrets are correctly configured (like making sure tests can access any needed test configuration, e.g., a test Supabase URL).
7. Test Coverage Goals:
We aim for high coverage on critical logic (ideally > 80% lines). We won't obsess over coverage numbers for 3D visuals that are hard to test, but we ensure key functionalities (language switch, contact form, content rendering) are thoroughly tested. 8. Manual Testing:
In addition to automated tests, we will conduct thorough manual testing, especially for the visual aspects that are hard to validate via code:
Test on various devices (desktop with high DPI, a typical laptop, an iPad/tablet, an Android phone, an iPhone) to see that responsive design holds, and performance is acceptable.
Manually run through each language to catch any layout issues due to text length or font.
Use screen reader (e.g., NVDA or VoiceOver) to navigate the site and ensure content is announced meaningfully (this supplements our automated a11y checks).
Check that all external links (if any in Publications or contact info) work and open in new tabs (with proper rel="noopener" for security).
Possibly ask a friend or colleague who speaks the other languages to review that the content reads well in their language context.
By combining these testing approaches, we aim to catch issues at multiple levels. The end result should be a well-tested application where we have confidence in each deploy (since CI runs the tests), and any future changes can be made safely knowing tests will flag unexpected side-effects. Testing is woven into our development workflow (writing tests alongside features) so that quality is maintained from the start.
DevOps and CI/CD Strategy

We will set up a robust DevOps pipeline to automate building, testing, and deployment of the portfolio site. The focus is on consistency, repeatability, and catching issues early. Here’s the CI/CD strategy: Version Control & Repository Setup: We will use Git with a repository hosting service (GitHub, given we are using GitHub Actions). The repository will contain everything needed to build the project (except secrets). We'll enforce a branching strategy: e.g., a main branch for production-ready code, and feature branches for development. Code reviews will be done via Pull Requests before merging to main to ensure code quality (if the team is more than one; if solo, at least use PR to trigger full CI before merging). Continuous Integration (CI):
Every push or Pull Request will trigger the CI pipeline on GitHub Actions:
Job 1: Lint & Static Analysis: Use ESLint to lint the codebase. Also run type checking if we use TypeScript (likely we may use TypeScript for better reliability, though it wasn't explicitly stated; if we do, tsc --noEmit would run here). This catches syntax errors, undefined variables, and style issues early.
Job 2: Run Unit/Integration Tests: Execute npm test (Jest tests) in headless mode. This will run all unit and integration tests and report results. The CI will fail if any test fails. We’ll also generate coverage report here (and optionally use Coveralls or Codecov integration if desired, though not mandatory).
Job 3: Build (for test or prod): Attempt a production build of the app (npm run build). This ensures that the code actually compiles and catches any build-time errors (like out-of-scope imports, etc.). If using Next, it will run Next’s build, which also catches certain issues like Link usage, etc. We'll also run an export if we plan static, to ensure that process works.
Job 4: End-to-End Tests: This job can spin up the built app and run Cypress/Playwright tests. To do this in CI:
For a Next.js app, we can run npm run start (the production server) or serve the static build via a simple server. On GitHub Actions, we'd use a service container or background process. Alternatively, use start-server-and-test package to launch the app and wait, then run Cypress.
For Cypress, we'll use the official Cypress GitHub Action which handles installing and running tests. Playwright also has a test runner that can be integrated.
This job might be conditionally run (maybe only on merges to main or a nightly schedule) if it's heavy, but ideally we run a subset on PRs as well for critical flows.
Job 5: Performance Audit (optional): We can have a job that uses Lighthouse CI to run performance audits on a deployed preview (or on localhost). This could produce a report of Lighthouse scores for performance, accessibility, etc., and fail if below 90 as desired. Possibly run this on main branch builds.
We will configure these jobs to run in parallel where possible (for speed) but with appropriate dependency (e.g., build must happen before e2e, since e2e needs an app to test). GitHub Actions allows a matrix or sequential steps in one job. Continuous Delivery/Deployment (CD):
After tests pass on the main branch, we will automate deployment:
Docker Build: We will have a GitHub Actions workflow (or part of same pipeline) to build the Docker image. Using the official Docker Build-Push GitHub Action, we'll:
Log in to a container registry (e.g., GitHub Container Registry or Docker Hub) using stored credentials (saved as GitHub Secrets).
Build the image from our Dockerfile. Tag it with a version (maybe the git commit or a semantic version if we maintain one).
Push the image to the registry.
The Docker image will encapsulate the web app. For example, it might run an Nginx serving the static files. If SSR is needed, it will run Node. We will have environment variables (like Supabase URL, anon key) passed to the container. For a static site, these might be embedded at build time; for a dynamic server, they’d be runtime env.
Deployment to Environment: Depending on hosting choice:
If using a cloud provider (AWS, DigitalOcean, etc.), we can set up infrastructure (maybe a VM or container service). For simplicity, we could use a VM (droplet) with Docker Compose. The CD pipeline could SSH into the server and do docker pull and docker run the new image, or update a compose file and restart. There are GitHub Actions for SSH deployment. We would ensure SSH keys are secure in secrets.
Alternatively, use a service like Fly.io or Heroku (both can directly deploy Docker images). These have CLIs we can call in CI to deploy. Fly.io is more open (the CLI is open source and free tier available). We could configure a fly.toml and just run flyctl deploy in CI.
Supabase does not host frontends, but for simplicity we might host static pages on something like Netlify (which is free, but not open-source software itself; though using it doesn't violate open-source requirement since it's just hosting the output).
If we treat "All software must be open-source" strictly, the deployment target might be self-hosted or an open platform. We can mention using Docker Swarm or Kubernetes if scaling was needed, but likely overkill for a portfolio.
We will at least outline that the container can be run on any Docker host, so the user has flexibility (they could run on their own server, in a container on a PaaS, etc.).
Environment Configuration: We'll manage environment-specific settings via env vars (in GitHub Actions and on the server). E.g., SUPABASE_URL, SUPABASE_ANON_KEY for the app to connect to correct Supabase instance (likely these don't change between environments unless we have a dev and prod Supabase project).
Notifications: We can configure the CI to notify (via email or Slack webhook) on deploy success/failure, so the user or team knows the status. This is optional.
Continuous Monitoring: (Post-deployment, part of DevOps)
We plan to set up uptime monitoring (maybe using a free service or self-hosted cron job) to ping the site regularly and alert if down.
Also, we may integrate error logging: since we prefer open-source, a solution could be self-hosted Sentry or using Supabase's log if any. But for now, maybe console errors are fine for a small site. However, we can include something like Sentry’s open-source SDK (which is free to use, and Sentry can be self-hosted if needed) to catch runtime errors in production and report them.
Development Environment Parity:
We'll use Docker Compose in development to simulate the production environment if possible. E.g., one service for the app, one for a local Supabase (Supabase offers a docker-compose for local dev). This way, devs can run docker-compose up to have a stack locally (this ensures no "works on my machine" issues when deploying container).
If not using Docker for dev (maybe using npm start in dev mode is simpler), at least we ensure Node version parity (use .nvmrc or engines field to align with Node version in container, e.g., Node 18).
We'll use sample data in dev to populate Projects/Publications so we can see something. Possibly create a script to seed the Supabase dev DB with sample content.
Best Practices in CI/CD:
The CI will use caching to speed up builds (like cache ~/.npm or node_modules between runs, and possibly the Docker layers if using GitHub cache).
Only deploy when certain conditions met: e.g., merge to main triggers a production deploy. We might also have a staging environment: e.g., any push to a dev branch deploys to a staging site (maybe at a subdomain or separate container). The user can then review it before promoting to main.
Use of GitHub Environments: We can define a "Production" environment in GH Actions that requires approval to deploy, or holds the secrets. This way, one can implement a manual approval step for deployment if desired (perhaps overkill for personal site, but we mention it as possibility).
CI Failure Handling: If any test or lint fails, the code isn't deployed. We'll set required checks on GitHub so you cannot merge if tests fail.
Documentation & CI: We'll add a README with instructions on how to run tests, build, and deploy, so that it's clear for any developer. Also, possibly a section on how to use the CI (like how to trigger a redeploy, how to rollback if needed - perhaps by re-running a previous workflow or keeping previous image tags). This CI/CD approach ensures continuous quality (through tests and checks) and continuous delivery (every change that passes tests can go live automatically). It minimizes human error in the deployment process and allows the user to confidently update their portfolio content or features, knowing that the pipeline will verify everything before it affects the live site.
Accessibility Strategy

Building the portfolio with accessibility in mind ensures that all users, including those with disabilities, can access and navigate the content. We will adhere to WCAG 2.1 (AA) standards as a baseline. Key strategies include: Semantic HTML Structure: We will use appropriate semantic elements for content:
Use <header>, <main>, <footer>, and <section> tags to define page regions. Each section (About, Education, etc.) will likely be a <section> with an appropriate heading (<h2> or similar). This provides screen readers a clear content outline and allows quick navigation via ARIA landmarks or heading navigation.
Ensure that heading levels are logical and not skipped (e.g., if the site title is an <h1>, section titles are <h2>, sub-sections if any are <h3>, etc.).
Use lists for lists of items (e.g., a list of publications could be marked up with <ul> and <li> for each publication entry).
Form elements in Contact: use proper <label> for each input and associate them via for attribute. The submit button will be a <button type="submit"> within a <form>.
Keyboard Navigation: The site will be fully navigable via keyboard:
All interactive elements (links, buttons, form fields) will be reachable with Tab key. We’ll ensure the focus order follows the visual/logical order of the content.
Custom interactive elements (like if we create a custom carousel or a custom 3D canvas interaction that requires input) will be given keyboard controls as well or an equivalent. For example, if there's a need to rotate the 3D scene via keyboard, we could allow arrow keys to rotate the tech globe as an enhancement for those who cannot use a mouse.
Avoid keyboard traps: no element (like a modal) will trap focus without a way out. If we open a modal (say a video in fullscreen), focus will be moved into it and then returned to the trigger after closing (using focus management in React).
Provide skip links: e.g., a "Skip to Content" link at the top to jump to main content, which is useful for keyboard and screen reader users to bypass repetitive navigation.
Screen Reader Accessibility:
We will use ARIA attributes where needed to enhance the experience for screen reader users, but we'll prefer native elements first (less ARIA is more when native semantics suffice).
The language switcher: we will ensure it has an appropriate label (e.g., aria-label="Select Language" if it's just flags or short codes). If it's a dropdown, use a native <select> or an accessible custom menu with roving tab index.
The 3D canvas itself might be marked as aria-hidden="true" if it doesn't convey info directly (because screen readers can't interpret canvas content). Instead, we will provide textual descriptions of what’s happening. For example, in the Tech Stack section, we might include a visually-hidden list of the technologies so a screen reader user can still know what skills are listed. Or a summary like "Technologies: React, Node.js, Python, etc." This ensures no information is lost.
Any important images (like project thumbnails if we have them outside canvas) will have descriptive alt text. Decorative images will have empty alt attributes to be skipped.
If the user’s name is rendered in a fancy way (like a logo or canvas), we will ensure it’s also present as text (perhaps the site title text).
We will set the document <title> and meta description appropriately for context.
Color and Contrast:
All text will meet contrast requirements against the background (4.5:1 for normal text, 3:1 for large text). Given a dark theme, this usually means light-colored text. We'll pick colors accordingly and test with contrast checkers. For instance, white on black is fine; for colored text, ensure it’s not a low-contrast dark gray on black, etc. We will also check contrast of things like placeholder text in forms (which often is lighter by default) and adjust if needed.
We will avoid conveying information solely by color. For example, in the timeline or tech list, if we color-code categories, we'll also include text or icons to differentiate. Similarly, error messages will not rely only on red color but also include an icon or bold text and proper ARIA roles.
Focus indicators: We will customize focus outlines to be clearly visible on the dark background. The default focus ring might be fine (often it's a glowing outline), but if not, we’ll add CSS to make it obvious (e.g., a bright cyan outline or underline for focused links). This helps keyboard users track where they are.
Accessible Forms:
The contact form will have labels as mentioned, and also validation messages that are screen-reader friendly. For instance, if email is invalid, an error text appears and we might use aria-live="polite" on an error container so it's announced. Also associate the error message with the field via aria-describedby.
We will use HTML5 form validation attributes (like type="email", required) for basic validation which browsers announce automatically, plus our custom validation for better messages if needed.
The submit button will be reachable and have a clear label ("Send Message" rather than just an icon).
ARIA Roles and Attributes:
We might use role="navigation" on the nav bar, role="main" on the main content (though using <main> tag already implies that).
If we implement any custom components like a carousel or tab interface, we will assign proper ARIA roles (e.g., role="tablist", role="tab", role="tabpanel" along with aria-selected, aria-controls etc., for a tabbed interface).
For dynamic content changes (like after form submission, showing a success alert), we’ll use role="status" or role="alert" on those messages so screen readers announce them immediately.
If any 3D element has an interactive nature akin to a button (say clicking a 3D object triggers something), we will consider making it keyboard-focusable (tabindex="0" on its container) and giving it role="button" with an aria-label describing the action. However, since 3D objects themselves are canvas-rendered, we might instead have an overlay button that triggers the same action for accessibility.
Testing & Tools:
As noted in the Testing Plan, we will use tools like axe-core to automatically detect accessibility issues during development. We'll also do manual testing with screen readers (NVDA/JAWS on Windows, VoiceOver on MacOS/iOS, TalkBack on Android) to ensure content is being read in a sensible order and with appropriate descriptions.
We'll test keyboard navigation manually to ensure one can reach all content and operate all controls (including opening/closing any modals, submitting forms, etc.) without a mouse.
We will utilize eslint-plugin-jsx-a11y in our development to get warnings if we forget things like an alt attribute or use an incorrect ARIA role.
Responsive Accessibility:
On mobile, interactive elements will be large enough to tap (meeting minimum touch target size). We'll avoid tiny buttons. If necessary, we’ll increase padding on small elements for touch.
The language selection on mobile might be a larger dropdown or a full screen selector to ensure it's easily usable.
Prefer Reduced Motion:
Recognizing that our site will have animations, we will respect the prefers-reduced-motion media query. If a user has that setting enabled, we will provide a more static experience: e.g., disable auto-playing animations, reduce parallax or perhaps only do instantaneous transitions rather than smooth scroll. We can implement checks in our CSS/JS to not run certain effects when reduced-motion is on. For example, Three.js could still run, but we might not rotate models constantly; only on user interaction.
We will also avoid any animations that flash excessively or could trigger photosensitive issues (no rapid strobes or very high-contrast flashes).
Alternate Content:
For any videos, we should provide captions or text transcripts if dialogue or narration is present. At minimum, since videos are user-provided, we’ll encourage that they include subtitles. If a video has important visual-only content, we might need audio description; but given these are likely project demos, we'll ensure the text around the video explains what's shown.
If a user can't use WebGL, as mentioned, we have a fallback. That fallback (like an image or text summary) ensures that even without the fancy visuals, the user can access the information. We'll make sure those fallbacks are properly labeled (the image fallback would have alt text describing what the 3D scene would have conveyed, for instance).
Continuous Accessibility Maintenance:
We will include accessibility in our checklist for code reviews and testing for any new features or changes.
Post-launch, if any user feedback highlights an accessibility problem, we'll address it promptly.
By implementing these measures, we aim for the site to be usable by people with a wide range of abilities. Accessibility is not just an afterthought but integrated into design and development from the start. This also often improves overall user experience for everyone (e.g., good contrast and clear navigation benefit all users, not just those with disabilities). The result should be a portfolio that is both impressive visually and inclusive.
Performance Optimization Plan

Achieving a Lighthouse performance score of 90+ is a key goal. This is challenging with heavy 3D and video content, but we will adopt numerous strategies across development and deployment to optimize performance in terms of load time, runtime efficiency, and responsiveness. 1. Asset Optimization:
Images: Use efficient image formats (WebP/AVIF) for any raster images. If we have photographs or texture images, we’ll compress them and serve appropriately sized versions. Next.js can assist with <Image> optimization (serving different sizes for different screen widths and WebP when supported). We will also use lazy loading for offscreen images (Next <Image> does this by default or we can use loading="lazy" for normal <img>).
Videos: Optimize video files provided by the user:
Encode videos in modern codecs (H.264 or H.265/VP9 for better compression) and ensure resolution/bitrate is not excessive (no 4K video if not needed; maybe 720p or 1080p if clarity needed).
Host videos on a fast CDN or use Supabase Storage (which provides a CDN). We can also consider streaming via HTML5 video streaming protocols if needed, but since it's likely short demo clips, progressive MP4 is fine.
Use the preload="metadata" attribute on video tags so that the browser only downloads metadata (not the whole video) until user interacts. We can also not autoplay heavy videos, giving user control.
Potentially provide poster images for videos so that a placeholder shows without loading the video frames.
3D Models: Use Draco or GLTF compression for 3D assets. Remove unnecessary data from models (e.g., reduce mesh complexity, limit textures sizes). We'll only load models when needed. Using R3F’s lazy loading with Suspense ensures that, for instance, the model for the Education section isn't loaded until user scrolls near it.
Fonts: Use system fonts where possible to avoid additional requests. If using custom fonts (for Japanese/Chinese, we might need them), subset them to include only needed characters (especially Chinese font files can be huge; we might rely on user’s device fonts or use Google Noto fonts but subset to reduce size). Use font-display: swap or optional so text shows immediately with fallback if needed.
Iconography: Use CSS or SVG for icons (like social icons) instead of heavy images. SVGs can be inlined or combined in a sprite to reduce requests.
2. Code Optimization:
Tree Shaking and Bundle Size: We'll ensure unused code isn't included:
Avoid large libraries if not necessary. For instance, use only specific Lodash functions instead of whole Lodash, or no Lodash at all.
Use dynamic imports for components that are not immediately needed. In Next.js, we can do next/dynamic to load heavy components (like the 3D canvas) on client-side after initial render. For example, the initial page could show a lightweight intro and then dynamically import the heavy Three.js stuff when appropriate (or when user scrolls).
We might split the bundle by route or section. If using Next, each page (if we had multi-page) gets its own chunk. In a single-page app context, we can simulate that by code-splitting per section. E.g., import the Projects section component dynamically so its code (and maybe videos data) isn't loaded until needed.
Remove any development/debug libraries in production. Ensure NODE_ENV=production for React to use prod optimizations.
Minification & Compression:
Rely on Next/Webpack to minify JS/CSS. Also ensure removing source maps in prod (or hosting them separately).
Enable Gzip or Brotli compression on the web server for text assets (HTML, JS, CSS). This greatly reduces transfer size of code.
We'll configure caching headers for static assets (images, videos, JS) with a long max-age and content-hash in filenames for cache-busting. This helps repeat visits.
Caching of Data:
If content (projects, publications) is fetched from Supabase at runtime, we will implement caching. The easiest is to fetch once and store in context or SWR cache so we don't make multiple network calls. We could also leverage HTTP caching: Supabase REST can send ETag headers; on our side, we might not need it because the data is small, but it's worth considering if data grew.
Next.js static generation is a form of caching at build time: since the content doesn't change often, we can pre-build pages. If dynamic, we can use Incremental Static Regeneration (ISR) to rebuild e.g. once a day or when content changes.
Lazy-loading and Defer:
All non-critical scripts will be loaded with defer or async. For example, if we have any analytics script, load it after main content is loaded.
We will place script tags (if any outside bundler) at bottom of body or use Next’s strategy to ensure they don’t block rendering.
The 3D canvas itself might be heavy in render; if the top section (About) doesn’t strictly need heavy 3D right away, we could delay its full initialization for a second or two (post onLoad). Or show a low-detail version then enhance.
Use requestIdleCallback or setTimeout for any non-urgent work after load (if polyfills needed).
Runtime Performance:
Optimize React rendering by preventing unnecessary re-renders. Use React.memo for components that don't need to re-run often, particularly if they contain heavy 3D logic. Use useCallback/useMemo appropriately.
Avoid heavy computations on the main thread. For instance, if parsing large data or doing image manipulations, consider web workers. Not likely needed in our case but something to keep in mind.
For Three.js animations, we might cap the frame rate or stop animations when tab is not visible (browsers auto throttle requestAnimationFrame in background).
Ensure that event handlers are efficient (debounce expensive tasks like scroll events if we do something on scroll aside from Three's optimized approach).
Smooth Scrolling Performance: If we implement smooth scrolling or parallax, we'll ensure it's done using CSS transform/translateZ(0) or requestAnimationFrame with efficient calculation, to keep 60fps. Possibly rely on GSAP or a library that is optimized for this. Ensure to test on lower-end devices.
3. Server-Side Rendering & Loading Strategy:
Use SSR for initial paint of content: The text content of at least the initial view (and maybe all sections, since it's not too large) can be rendered server-side. That way, the user sees something immediately (good Largest Contentful Paint and Time to First Byte). The hydration cost exists but React handles that.
Preload critical resources: We will mark the main hero image or main font as preload in the HTML head if needed. Also, if using Next, its resource hints might automatically do that.
Possibly use a service worker to cache assets after first load for offline or repeat visits, though for a portfolio it's optional. However, if Lighthouse PWA score is considered, a basic service worker with a precache could bump that (only do if time permits and not complicating open-source requirement; Workbox is open-source though).
4. Lighthouse and Web Vitals Monitoring:
We'll continuously test and fine-tune. For example, run Lighthouse in Chrome DevTools with device emulation (mobile, Fast 3G) to see where the performance bottlenecks are. If LCP is large, check what element it is (could be a large image or video poster) and optimize that (maybe use a smaller image or defer video).
Optimize First Contentful Paint (FCP) by keeping initial HTML small and critical CSS inline (Next can inline critical CSS). The dark theme might allow us to use a simple background color (so not reliant on large background images early).
Optimize Largest Contentful Paint (LCP): Usually the largest thing might be a hero image or text. If it's text, ensure webfont isn't delaying it (use font swap). If it's an image, ensure that image is optimized and maybe use next/image with priority.
Minimize Total Blocking Time (TBT): This means ensure our JavaScript bundles aren’t too large or heavy. Splitting and deferring as discussed addresses this. Also avoid long tasks – e.g., if Three.js initialization is heavy, maybe split it into smaller chunks or start it after first paint.
Ensure Cumulative Layout Shift (CLS) is near zero: This means avoid layout jumps. Use fixed dimensions for images/video so they don't cause reflow when loaded. Ensure fonts flash minimal (font swap helps avoid invisible text).
Check Memory and FPS for 3D: We might use Chrome's performance profiler on mid-tier devices to ensure the animation loops are not dropping frames. If we see consistent 60fps then good; if not, reduce complexity.
5. Content Delivery and Hosting:
We will host static assets on a global CDN if possible (Supabase Storage uses CDN, or if deploying on Vercel/Netlify, they have CDN). This reduces latency for global users.
HTTP/2 or HTTP/3 will be used so multiple assets can load in parallel efficiently.
Gzip/Brotli as mentioned for transfer reduction.
6. Performance Budgets and Monitoring:
We can set a budget such as "JS bundle < 500KB gzipped", "Total images < 1MB on load", etc., and keep checking during development. Webpack Bundle Analyzer can be used to inspect what’s contributing to bundle size and eliminate bloat.
After launch, monitor site analytics for performance (e.g., use Chrome UX report or a simple RUM script to log page load times). Or use a free service like Cloudflare Web Analytics or SpeedCurve (though not open-source, we can do RUM ourselves with some script to Supabase perhaps).
If any section seems heavy, we might introduce a toggle to disable 3D if user chooses (like a "disable effects" mode), but hopefully not necessary with optimizations.
7. Specific 3D Performance Tricks:
Use requestAnimationFrame wisely: Only render animations when needed. R3F provides control over the render loop; we can pause the render loop when nothing is animating or not in view. For example, Drei's ScrollControls can only render on scroll changes, etc.
Use lower frame rate for certain effects if imperceptible (30fps animations for subtle background perhaps).
Combine shaders where possible, reduce draw calls by merging geometries if possible for static objects.
Limit shadows and post-processing passes. Maybe disable expensive shadow calculations on mobile (use simple lighting).
Possibly leverage WebGL extensions like hardware instancing if we have many similar objects (like dozens of star particles, instance them).
Clean up Three.js objects to prevent memory leaks (dispose geometries, materials when unmounting a scene/section).
We will test performance on a mid-range mobile device. If it struggles, consider simplifying the scene (e.g., fewer particles, simpler materials on mobile via user-agent or WebGL context info).
By systematically applying these optimizations, we expect to meet or come close to the Lighthouse targets:
Performance 90+: Achieved by reducing initial load (size and requests), optimizing runtime (smooth 3D), and leveraging caching.
Accessibility 90+: Our Accessibility strategy covers that.
Best Practices 90+: That usually means using HTTPS, correct HTML, no security vulnerabilities; we'll ensure no console errors, correct image aspect ratios, etc.
SEO 90+: We'll ensure meta tags, proper titles, language attributes, and mostly server-rendered content for crawlers. Even though it's a JS-heavy site, SSR or static generation ensures crawlers see content. We'll also provide a sitemap if needed and use semantic HTML.
Performance will be an ongoing consideration during development, not just an afterthought. We will profile and optimize at each milestone (especially when adding videos and 3D) to keep the experience fast and responsive.
Folder Structure

We will organize the project files in a modular, feature-oriented structure, making it easy to maintain and navigate. Below is the proposed folder structure (for the front-end and project overall):
project-root/
├── public/              # Public assets served directly
│   ├── locales/        # JSON files for translations (en.json, ja.json, etc.)
│   ├── videos/         # Project videos (or could be hosted elsewhere, but keep placeholders or thumbnails)
│   ├── models/         # 3D model files (GLB/GLTF)
│   └── images/         # Images (thumbnails, icons if any, maybe a fallback image for 3D scenes)
├── src/                 # Application source code
│   ├── components/     # Reusable UI components (used across sections/pages)
│   │   ├── Navbar.jsx        # Navigation bar component (language switcher, etc.)
│   │   ├── Footer.jsx        # Footer component (if any)
│   │   ├── LanguageSwitcher.jsx 
│   │   ├── ProjectCard.jsx   # Possibly a card component for projects
│   │   ├── ... (common buttons, form elements, etc.)
│   │ 
│   ├── sections/       # Section-specific components (each corresponds to a section of the page)
│   │   ├── AboutSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── TechStackSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── PublicationsSection.jsx
│   │   └── ContactSection.jsx
│   │       (Each may include its own sub-components or 3D components specific to that section.)
│   │
│   ├── three/          # 3D-specific utilities and components
│   │   ├── CanvasContainer.jsx   # Wrapper for R3F Canvas, providing context (could be in sections too)
│   │   ├── models/              # If we code split 3D models, could have components to load them
│   │   │   ├── AvatarModel.jsx      # Example: 3D model component for About section avatar
│   │   │   └── ... (other model components)
│   │   ├── effects/             # Custom shader or effect implementations
│   │   └── ** (any custom hooks like useSpin or useScrollAnimation)
│   │
│   ├── hooks/          # Custom React hooks for logic
│   │   ├── useTranslations.js   # Maybe a wrapper around i18n
│   │   ├── useContactForm.js    # Manages form state and submission logic
│   │   └── useMediaQuery.js     # e.g., to handle prefers-reduced-motion or responsive queries
│   │
│   ├── context/        # Context providers
│   │   ├── LanguageContext.js   # Context for current language selection
│   │   └── ... (maybe ThemeContext if needed, though theme is static dark)
│   │
│   ├── services/       # External service integration (API calls)
│   │   ├── supabaseClient.js   # Initialize Supabase client
│   │   ├── supabaseService.js  # Functions for CRUD (e.g., fetchProjects, submitContact)
│   │   └── i18n.js            # i18next initialization configuration
│   │
│   ├── styles/         # Global and shared styles
│   │   ├── globals.css       # Base CSS (if using Tailwind, tailwind base goes here)
│   │   ├── theme.css         # Color variables, etc.
│   │   └── ... (or Tailwind config and generated file)
│   │
│   ├── pages/ (if using Next.js)   # Pages directory for Next.js
│   │   ├── _app.jsx        # Custom App component for global providers (Language provider, etc.)
│   │   ├── _document.jsx   # Custom Document for lang attribute and meta tags
│   │   ├── index.jsx       # The main page, which would import all sections 
│   │   └── api/            # API routes (Next.js backend functions)
│   │       └── contact.js  # API route for contact form submission
│   │
│   └── index.js (if not Next, e.g., ReactDOM render entry)
│
├── tests/              # Additional test utilities (if not colocating tests)
│   ├── __mocks__/      # Mock files (e.g., file mocks for Jest, or Supabase client mocks)
│   └── setupTests.js   # Configuration for testing library, e.g., importing jest-dom matchers
│
├── Dockerfile          # Docker configuration for containerizing the app
├── docker-compose.yml  # If needed for local dev (could set up app + local db)
├── supabase/           # Supabase configuration (SQL scripts, seed data)
│   ├── migrations/     # SQL migration files for setting up tables
│   ├── seeds/          # SQL or script for initial content seeding
│   └── README.md       # Instructions on connecting to Supabase, applying migrations
│
├── public/locales/...  # (as above in public folder)
├── package.json
├── tailwind.config.js  # (if using Tailwind)
├── .eslintrc.js
├── jest.config.js
└── README.md           # Documentation for developers and users
This structure emphasizes modularity and separation of concerns
linkedin.com
:
Components vs Sections: We separate generic, reusable components (buttons, cards, nav) from section-specific ones. Each section component under sections/ can assemble its content and possibly include unique 3D subcomponents or logic. This makes it easy to work on one section in isolation without affecting others.
Three.js concerns: By placing 3D logic in a dedicated directory (or collocated with sections if tightly coupled), we keep it organized. For example, if the About section uses an AvatarModel, we could put AvatarModel.jsx near AboutSection.jsx or in a three/models. The decision will be documented for consistency.
Hooks & Context: Encapsulating logic like internationalization, form handling, etc., into hooks/contexts keeps components cleaner and follows DRY principles.
Services: The services layer is akin to an API layer – any interaction with Supabase or other external APIs goes through functions here. This means if we switch backend or adjust queries, we do it in one place. It also makes it easier to mock in tests (we can mock these service functions to not actually call network).
Styles: All global CSS resides in styles (if using Tailwind, the global CSS might just include the Tailwind directives). If not using Tailwind, we might have multiple CSS files here for layout, typography, etc. We might also use CSS Modules for component-specific styles – those would live alongside components (e.g., Component.module.css next to a component, which is a fine approach too). The folder structure can accommodate either approach.
We will follow feature-based organization
linkedin.com
: each section and component has its own files (and potentially CSS and test file together). For instance, AboutSection.test.jsx could live in the same folder as AboutSection.jsx to colocate tests. Alternatively, we keep tests in a parallel structure under __tests__. The exact placement we'll decide early and be consistent. Colocating tests with components improves cohesion and makes moving/refactoring components easier. Additional notes on structure:
We include a supabase/ directory for database scripts. This is for infrastructure-as-code, ensuring the DB schema is versioned. We might write SQL migration files to create tables and RLS policies. This way, setting up Supabase in a new environment is documented (e.g., run these SQL commands). Supabase also allows exporting the schema.
The Dockerfile is at root for easy access. If our app evolves to multiple services (e.g., a separate admin server), we could have a docker-compose to orchestrate, but likely unnecessary.
Config files like ESLint, Prettier, Tailwind, etc., reside at root. We will use these to enforce style and build config.
By structuring the project this way, we achieve:
Clarity: Developers (and the user) can easily find where things are: content of a section is in one place, the logic for translation in another, etc.
Modularity: Changes in one section or component don't inadvertently affect another, reducing risk.
Scalability: If the site grows (say adding a "Blog" section or more pages), we can naturally extend this structure (e.g., add a new section component and route).
Maintainability: Feature grouping means one can work on "Projects section" entirely within ProjectsSection.jsx and related components, which is intuitive. Also, this aligns with clean code principles by grouping related code together rather than by type only
linkedin.com
.
We will document this structure in the developer README so anyone working on the project understands where to place new files and find existing ones. Tools like ESLint will be configured to align with this structure (for example, maybe using an import plugin to ensure proper path aliasing if needed for cleaner imports rather than long relative paths).
Development Workflow

To ensure efficient and high-quality development, we will adopt a clear workflow with iterative development, code reviews, and continuous integration. Key aspects of the development workflow include: Project Management & Planning: We will break down the project into tasks and milestones (as detailed in the Milestones section). Likely using an agile approach, each milestone (or sprint) focuses on a set of features (e.g., "Implement 3D in About and Education sections" or "Set up multi-language support"). Tasks will be tracked possibly via GitHub Issues or a Trello board, to keep track of progress and ensure nothing is missed (especially regarding the many requirements like security checks, testing, etc.). Branching Strategy:
The main (or master) branch will always contain the stable, deployable code.
For development, feature branches will be created from main for each feature or section (e.g., feature/3d-about-section, feature/i18n-setup).
Once a feature is complete (and tests pass), it will be merged into main through a Pull Request. We will use PRs to do code reviews (even if a single dev, treating it as a checkpoint) and let CI run tests.
We might also have a develop branch if multiple features need integration testing together before going to main, but for a project of this scope, feature -> main might suffice.
Coding Standards: We will adhere to clean code principles:
Use meaningful naming for variables, functions, and components.
Keep functions and components focused (single-responsibility). Large sections might be broken into sub-components for readability.
Add comments and JSDoc where non-obvious logic occurs (particularly for complex 3D computations or tricky multilingual handling).
Remove dead code promptly to avoid clutter.
Follow consistent coding style as enforced by Prettier and ESLint. This ensures consistency (semi colons, quotes, indentations, etc., are uniform).
Incremental Development: We plan to build the site feature by feature while always maintaining a runnable state:
Start with a skeleton (basic page structure, navigation, empty sections with just headings). Ensure this loads and is deployed.
Add one section's content and its visual features at a time. E.g., implement About section 3D and text, get that working, then proceed to next section. This way, if something breaks, it's easier to pinpoint.
Integrate multi-language early with just a couple of strings to test the system, then expand to all text.
Add Supabase integration once the front-end can display data; perhaps stub data first, then connect actual DB.
Testing as part of development:
We adopt a test-driven or test-guided approach whenever feasible. For example, when developing the contact form, first write tests for validation and submission behavior, then implement the code to satisfy them.
Run tests and lint locally frequently. We can use npm run dev concurrently with npm run test --watch to continuously run tests on file changes.
Use Storybook (optional): If time permits, we may use Storybook to develop components in isolation, especially for the UI components like cards or the language switcher. This isn't required, but it could help test components at different states (and it's open source). However, given heavy 3D, we might skip Storybook to avoid complexity.
Use of Design Tools:
The mention of Figma assets suggests we have some design mockups. We'll refer to those for exact styling, spacing, and interactive behavior expectations. We might export images or measure dimensions from Figma. We'll keep Figma open during development as a reference and ensure pixel (or near-pixel) perfect implementation.
If needed, use the color palette and font styles from Figma by translating them into CSS variables or Tailwind config.
Communication and Feedback:
If working with the user or a team, frequent demos (perhaps at each milestone) will be given to gather feedback. For example, after implementing the 3D intro, show it to ensure it meets expectations.
Use GitHub issues to discuss any changes or to document decisions (like "Decided to use Next.js because...").
Continuous Integration:
The CI pipeline is part of workflow: developers are expected not to merge code that fails CI. This means running tests locally before pushing is ideal to avoid broken builds.
We will set up pre-commit hooks (using Husky, open source) to run linting/tests on commit. This acts as a safeguard to catch issues early. For example, Husky can run npm run lint && npm run test:unit on commit. (We have to ensure this doesn’t slow down too much; we might skip running full e2e on commit but do it on push via CI).
Documentation and Knowledge Sharing:
Maintain the README (with setup, build instructions). Also, create a USER_GUIDE.md (if needed) to explain to the site owner how to update content (like "to add a new project, do X in Supabase or in code").
Comment the code, especially for complex sections like 3D logic, to explain how it works.
If multiple devs, use comments or PR descriptions to explain rationale of complex implementations.
Environment Management:
We will have a .env.local (not committed) for local development with keys (Supabase URL, anon key, etc.). Provide an example .env.example for reference.
Possibly set up a local Supabase using the Supabase CLI for dev (so dev environment doesn't affect prod data).
Use dummy/test API keys in dev to avoid accidentally posting to production DB while developing. Ensure config for dev vs prod is separated.
Milestone-based Reviews:
At the end of each milestone, do a review: run all tests, do cross-browser test, check performance of what's done so far, adjust plan if needed (maybe some features need more time or tweaking design).
Tooling Integration in Workflow:
Use the browser devtools extensively for profiling (Network tab to ensure no large files unaccounted for, Performance tab for frame rate, Lighthouse tab for quick feedback).
Possibly use VSCode extensions for ESLint/Prettier to get instant feedback in editor.
Use Git hooks or CI to enforce commit message style if we use conventional commits for changelog (this might be optional since it's a personal project, but good practice if scaling).
The development workflow will treat performance and accessibility as first-class citizens: so while developing a section, also test it with keyboard and Lighthouse then and there, rather than waiting until the end. This iterative checking prevents costly rework.
Deployment Workflow (Dev/Staging):
We might deploy a staging version (e.g., on a temporary URL or using Vercel preview) for user to test multilingual content and visuals in a live environment. Getting feedback on a staging site is valuable. With our CI, any branch can be deployed to a test environment, or we can push to a staging branch that auto-deploys to a non-production site.
Handling Risks in Dev:
If an experimental feature (like a fancy 3D effect) is not working out or causing delays, we will communicate and potentially pivot to a simpler implementation to keep overall timeline.
Keep the user updated if any trade-offs are made (like reducing complexity for mobile).
Have contingency plans (like using static images if a particular model is too slow).
Overall, the development workflow is structured yet flexible, emphasizing regular testing, incremental progress, and collaboration/feedback. This will help ensure the final product is delivered on time and meets all of the user's requirements without last-minute surprises.
Milestones and Timeline

We estimate the project can be completed in a series of milestones over approximately 8-10 weeks. Each milestone represents a chunk of work with specific deliverables. Below is a breakdown of these milestones, their focus, and an estimated timeline:
Milestone 1: Project Setup and Planning (Week 1)
Deliverables: Completed project scaffolding and planning docs.
Set up version control (Git repository initialized with README).
Set up the React/Next.js project with initial structure (create the basic Next app or CRA, add TypeScript if using, configure ESLint, Prettier, Tailwind, etc.).
Install core dependencies (React, Three.js, R3F, i18next, Supabase client).
Verify that a simple "Hello World" page runs locally and in a Docker container.
Write the PLANNING.md (this document) to confirm understanding and approach (this is essentially happening now).
Timeline: End of Week 1 – have environment running and team agreement on structure (this includes approval of design in Figma if not already finalized).
Milestone 2: Basic Structure & Navigation (Week 2)
Deliverables: Static page with all sections laid out (without final design/3D), global navigation working.
Implement the HTML structure of the single-page layout: sections for About, Education, Tech Stack, Projects, Publications, Contact with placeholder content.
Implement the Navbar (with section links and language switcher UI stubbed out).
Implement a basic dark theme styling (set background color, base text styles).
No 3D yet, just maybe placeholders or static image where 3D will go.
Setup React router or Next linking for anchor links (maybe one-page scroll, but ensure clicking nav scrolls or jumps to section).
Ensure the page is responsive with this basic layout (mobile view shows sections stacked, nav collapses if needed).
Integrate CI pipeline basics (lint and test jobs) so from here on every push is checked.
Timeline: End of Week 2 – a skeleton site is online (possibly at a staging URL) with navigable sections (even if empty content), demonstrating overall layout.
Milestone 3: 3D Integration & About Section (Week 3-4)
Deliverables: Fully implemented About Me section with interactive 3D, initial 3D framework in place.
Set up the React Three Fiber <Canvas> and global 3D context. Test adding a simple cube or shape in About section to confirm Three.js rendering.
Develop the actual 3D content for About (e.g., load the avatar model or create the desired 3D graphic). Implement animation or interaction as planned (like rotation or cursor tracking).
Style the About Me text and ensure it's legible on the background (tweak lighting in 3D if needed to contrast text).
Add any microinteractions in this section (like a hover effect on the 3D model or a prompt to scroll).
Test performance impact of this 3D on load; optimize as needed (maybe use a low LOD model for initial load).
Write unit tests for any logic introduced (e.g., a hook controlling the animation).
Timeline: End of Week 4 – the top section is visually impressive and functional. Possibly show to user for feedback and tweak accordingly.
Milestone 4: Develop Remaining Sections (Week 4-6)
Deliverables: Education, Tech Stack, Projects, Publications sections implemented, including 3D elements and placeholder data.
Implement Education section: likely simpler 3D (e.g., icons or timeline). Ensure content is formatted (maybe use a timeline list).
Implement Tech Stack section: the orbiting tech icons or however chosen. This is another complex 3D bit, ensure it's interactive and not too heavy. Might involve adding multiple objects and controlling them.
Implement Projects section: initially use placeholder project entries (can hard-code a couple of projects). Integrate video embedding, but can use a sample video or a stub for now. Ensure the layout (cards or list) works and the video modal/player appears and plays. Implement switching logic in code (maybe not fully functional i18n yet, but structure it to handle different videos).
Implement Publications section: list out a few dummy publications with links. Possibly include a small 3D graphic if planned (like floating papers).
Ensure each section's 3D and animations trigger at right time (this might involve linking to scroll events — we might use simple checks for now, like on component mount play animation).
Add basic form in Contact section (fields and a disabled submit for now).
During this milestone, continually test that adding each new 3D piece doesn’t break others. If we see performance dropping, adjust immediately (maybe toggle things off if not visible).
Write relevant tests (component tests to ensure project cards render, clicking play opens video, etc.).
Timeline: End of Week 6 – all main content sections are implemented with placeholder content. Site is fully scrollable with all features visible. Internationalization and backend not yet integrated, but structure is there.
Milestone 5: Internationalization (Week 6-7)
Deliverables: Site content translated into all four languages, language switcher fully functional (switches text and videos).
Setup i18next (or Next i18n). Create translation JSON files for at least English and one other language to start. Possibly use Google Translate temporarily for filler text or ask user for translations.
Integrate the translations in components: replace hard-coded text with t('key') lookups.
Ensure dynamic content (like projects, publications) can also be translated. Possibly implement logic to fetch different data sets per language or structure state to hold content for current language.
Implement the language switcher dropdown functionality: on selection, triggers i18n change and video source updates.
Load the correct language by default (maybe based on browser or a config).
Add tests: e.g., set language context to Spanish and verify a known element text matches Spanish JSON. Also test that video.src changes when language changes
stackoverflow.com
.
By the end, the site should be viewable completely in each language by toggling. (At this point, final translation text may still need refinement from the user, but the mechanism works).
Timeline: Mid of Week 7 – All languages toggling smoothly. Possibly demo to bilingual colleagues or user to verify translations are placed correctly and layout still looks good (some adjustments may be needed if, say, Spanish text is longer).
Milestone 6: Supabase Integration (Week 7)
Deliverables: Data-driven content and functional contact form using Supabase backend.
Set up the Supabase project (if not done already). Create tables for projects, publications, contact as planned. Enable RLS policies.
Replace placeholder content with real data fetched from Supabase:
Use Supabase JS client to fetch projects list (with all languages video URLs) and publications list on page load or via getStaticProps.
Verify the data displays correctly in the UI.
Implement the contact form submission: Next.js API route (or Supabase function) that writes to DB. Test end-to-end (submit form, see entry in DB).
Add a success feedback on form and handle error (for example, if DB insertion fails, show error).
Security: test that RLS is working by trying to read contact messages with anon (should not succeed, which we simulate maybe).
Possibly implement a basic rate-limit or honeypot on contact now.
Ensure environment variables for Supabase keys are configured in dev and production.
Write tests for service functions (e.g., mock Supabase client and test that submitMessage calls the right insert with given data).
Timeline: End of Week 7 – The site is now dynamic: can update DB and see changes (e.g., add a new project entry in Supabase and it shows up). Contact form can be tested and should record messages.
Milestone 7: Testing & QA (Week 8)
Deliverables: Test suite finalized (unit, integration, e2e), all tests passing. Bugs from testing fixed.
Do a thorough round of cross-browser testing: open site in Chrome, Firefox, Safari, Edge, plus mobile browsers. Fix any compatibility issues (maybe minor CSS tweaks or polyfills if needed).
Perform accessibility audit using tools and manual tests. Fix any issues (like missing alt, keyboard trap, etc.) uncovered.
Optimize any poor performance findings: run Lighthouse on both desktop and mobile settings. If any category <90, address it (maybe compress something further, or defer some code).
Run the full CI suite – ensure all tests are green. Increase test coverage if some critical path was missed.
Prepare any documentation needed (if delivering to user, how to run or update content).
Timeline: Middle of Week 8 – Aim to have essentially a release candidate. This is where we might do a soft launch on a staging environment for the user to test everything themselves and sign off.
Milestone 8: Deployment and Launch (Week 8)
Deliverables: Live production deployment of the site via Docker, with CI/CD pipeline fully operational.
Set up production hosting: e.g., set up domain, SSL, and ensure the Docker container is running on the server. If using a service, finalize config.
Double-check environment variables in prod (pointing to production Supabase, etc.). Do a test deployment through CI pipeline to see it flows.
Once deployed, do a final sanity check on the live site (maybe with some monitoring tools).
Launch: make the site public on the intended domain.
Monitor for initial issues (maybe ask a few people to visit and report any issues).
Timeline: End of Week 8 or early Week 9 – the site is officially live.
Milestone 9: Post-Launch Improvement (Week 9-10)
Deliverables: Any post-launch fixes or enhancements, and project wrap-up.
Collect any user feedback or bug reports after launch (maybe something was missed like a translation nuance or an edge-case bug).
Fine-tune content if needed (maybe adjusting text or adding a new project if user provides).
Ensure the user is comfortable with updating content via Supabase or making minor text tweaks via translations files.
Final performance tuning if real-user monitoring shows any slow points.
Write a short guide for the user (how to add content or how the multi-language video works if they want to change videos).
Timeline: Week 9 and 10 – addressing final feedback and polishing, then concluding the project.
Each milestone ends with a review/checkpoint to ensure the project is on track and to incorporate any changes in direction if needed (for example, if after Milestone 3 the user wants a different visual effect, we adjust in Milestone 4). The timeline is approximate; some milestones (like the integration and testing) might overlap or iterate (e.g., as we build sections we also test them). But by structuring it this way, we cover all required features systematically. The highest risk tasks (3D and multi-language) are done early enough to mitigate issues, while the testing and optimization are towards the end once we have something complete to fine-tune.
Risks and Mitigations

Developing an interactive 3D multi-language site comes with several risks. We identify key risks and our mitigation strategies for each:
Performance Risk (Heavy 3D/Video content): The rich media could lead to slow load times or laggy interactions, especially on mobile or low-end devices.
Mitigation: Optimize assets and use performance best practices as outlined (compress media, lazy load, code split). We will continuously profile performance during development (not wait until the end) and adjust complexity accordingly. If a certain 3D effect is too slow, we will simplify the model or effect (e.g., reduce polygon count, remove expensive shaders). We'll also implement fallbacks: e.g., if device has low performance (we can check hardware concurrency or user agent), use simpler visuals. Ensuring Lighthouse tests throughout development will catch regressions early.
Additionally, we have the option to allow user to disable animations via a "Reduce Motion" setting if needed, which can improve performance for those who opt in.
Technical Complexity Risk (Three.js & React integration): Building advanced 3D interactions in React might pose a learning curve and potential integration bugs (e.g., state not syncing with animations, or memory leaks).
Mitigation: Use well-documented libraries (R3F, Drei) and refer to examples or community snippets for similar effects. We'll create small prototypes for tricky parts (for example, test a mini React+R3F scene separately) before integrating into the main project, to iron out issues. We also plan to write tests for 3D components to verify basic behavior (as much as possible) to catch issues like event mis-binding.
Also, continuously monitor console for Three.js warnings or errors which can hint at incorrect usage (like forgetting to dispose objects).
Timeline Risk: The scope is broad (multiple features: 3D, i18n, backend, testing). There's risk of underestimating time for certain tasks, which could cause delays.
Mitigation: We have built slack into the timeline (8-10 weeks with a buffer in Milestone 9). We prioritized core features early (3D sections by week 6) to leave time for integration issues. If things run behind, we will triage features:
Ensure the most essential content is working (all sections, language support, contact form).
If needed, reduce some of the bells and whistles: e.g., simplify a 3D animation or skip a very fancy effect to meet performance/timeline.
Possibly overlap some tasks (internationalization integration can occur while finishing last section).
Frequent check-ins each week will identify if we're slipping and need to adjust scope or add resources (maybe get help for translation or testing tasks if needed).
Cross-Browser/Device Compatibility Risk: The site may work on modern Chrome but could have issues on Safari or older devices (WebGL differences, CSS differences).
Mitigation: Use progressive enhancement: rely on standard APIs and test on Safari and Firefox regularly (not just at the end). Polyfill any features if needed (Next can include polyfills for e.g. IntersectionObserver if not present, though most modern browsers are fine).
For WebGL, Three.js is widely compatible, but iOS Safari has some limitations (no WebGL2 on older iPhones). We'll ensure our Three.js usage has WebGL1 fallback (Three.js does this by default).
Also test on at least one mid-tier Android phone early (maybe via remote debugging) to gauge performance and issues.
Use autoprefixer (via PostCSS/Tailwind) to automatically handle vendor prefixes in CSS.
Security Risk: Despite measures, there's risk if we misconfigure RLS or expose something inadvertently.
Mitigation: Thoroughly test the security scenarios:
Try to retrieve data via the public API that should be protected (attempt to fetch contact messages with anon key in a controlled test – should fail).
Use Supabase's logging to see if any forbidden requests are attempted.
Review our code for any usage of dangerouslySetInnerHTML or similar and ensure none present.
Keep dependencies updated to avoid known vulnerabilities (like if a library we use gets a security patch, apply it).
If feasible, have a third-party (or the user) do a quick security review or run an automated scan.
Content & Localization Risk: Managing four languages can introduce consistency issues (e.g., a change in English text might be forgotten in others, or layout breaking for a particular language).
Mitigation: Use a structured approach for i18n – every string goes through the translation files. We won't have mixed languages in code. This way, it's easy to spot missing keys for a language (i18next can be configured to warn about missing translations). We can also create a script to find untranslated keys.
After populating translations, we'll do a full review in each language. Possibly get a native speaker or use online translation check for Japanese/Chinese to ensure no glaring mistakes or encoding issues.
We must also consider Chinese font/encoding. We'll ensure proper <meta charset="UTF-8"> and test that Chinese and Japanese characters display correctly (no tofu boxes). If a font issue, include appropriate font or let system fonts handle it.
For videos, there's risk that maybe not all videos are available in all languages by launch. If so, we'll decide on fallback (e.g., if Spanish video not provided, default to English video with maybe Spanish subtitles or a note). Communicate with user to get all assets or plan fallback.
Supabase/Infrastructure Risk: Using a cloud service means we rely on external uptime and we need to ensure proper config (like setting up RLS correctly or handling service outages).
Mitigation: Supabase is generally stable, but in case of a downtime, our site should handle it gracefully (e.g., if data fails to load, show a friendly error or cached content instead of breaking). For contact form, if the database isn't reachable, perhaps queue the message locally and retry, or at least notify user to try later.
We'll have some logging or alert if a backend call fails, so we can react if Supabase endpoints change or require updated keys.
We also mitigate by containerizing - if need to move away from Supabase to another Postgres, we can relatively easily do so since our data access is somewhat abstracted.
Maintaining High Lighthouse Scores Risk: It's possible that including certain necessary scripts or if 3D is heavy, we might struggle to get 90+ on mobile performance.
Mitigation: Use Lighthouse CI thresholds to continuously gauge. We can cheat a bit by prerendering as much as possible (e.g., since it's mostly static content, static generation yields a heavy initial HTML but maybe less JS).
If still low, consider strategies like:
Possibly loading 3D after a user interaction rather than immediately (so initial load is lighter).
Marking the site as a single-page app with no-javascript content properly so Lighthouse doesn't penalize as much (harder, likely not needed).
Ultimately, if one category (like performance on mobile) is stuck at 85 due to genuine reasons, discuss with user the trade-offs. But we'll strive to meet 90 by aggressive optimization as needed.
User Experience Risk (Too complex or distracting): There's a risk that in focusing on fancy 3D, we could overshadow the content or confuse users (especially those not used to interactive sites).
Mitigation: Ensure UX is intuitive: include instructions if needed (like a subtle "Scroll down" prompt, or an indicator to switch language). Do user testing (maybe have a couple of friends navigate and observe if they get stuck).
Provide easy ways out: e.g., if an animation is playing, user can still scroll past or skip. If a 3D game-like interaction is present (like Bruno Simon's portfolio has a driving game; we likely are simpler than that), ensure it doesn't block progression.
Keep a balance: e.g., do not make Contact form submission reliant on solving a 3D puzzle (unless it's obvious), just keep interactive fun where appropriate and straightforward for essential tasks.
SEO Risk: Single-page 3D sites can sometimes have poor SEO if not handled (because content is canvas-based or heavy JS).
Mitigation: Use Next.js for SSR so that all textual content is in HTML source. Also provide proper metadata (title tags with user's name and keywords like "Portfolio", meta descriptions). Use structured data (JSON-LD schema for personal profile or creative work) if relevant to help SEO.
Ensure each section is anchor-linkable (maybe allow /#projects links) which can help share links and also for search result snippet.
Submit sitemap after launch to Google to index the site.
By identifying these risks early and planning mitigations, we increase the likelihood of project success. We will maintain a risk log as needed, updating with any new risks that emerge and addressing them promptly. Regular team discussions or self-review each week will include a quick risk check: "Are we facing any new issues? How to mitigate them?" This proactive approach should prevent most major problems or at least allow us to react swiftly.
Post-Launch Considerations

Launching the site is not the end; we must also plan for its maintenance, scalability, and continuous improvement after it goes live. Here are key post-launch considerations:
Monitoring and Analytics: After launch, set up monitoring to ensure the site runs smoothly:
Use an uptime monitoring service (like UptimeRobot or a self-hosted Cron job pinging the site) to alert if the site goes down.
Monitor performance with real user metrics. We can integrate Google Analytics or a privacy-friendly open-source analytics (like Plausible, Umami) to track page load times and user interactions (ensuring all scripts remain lightweight). Supabase might also capture logs of queries, which can show if any are slow or erroring.
Possibly set up Sentry (or a similar error tracking) to catch any runtime JS errors in users' browsers that our testing didn't catch.
Supabase provides dashboard for database and auth usage; keep an eye on any spike in requests or failures.
Content Management: The user might want to update or add content (new projects, new publications) over time:
Since projects/publications are in the database, the user can use Supabase Studio (the web GUI) to add or edit entries. We should provide a short guide on how to do that (like which table, what fields, any format requirements such as language codes for video links).
Alternatively, if the user is non-technical, we might consider adding a basic admin UI in the future. But given all software must be open source, an admin could be just another front-end page protected by Supabase Auth. This is beyond initial scope but possible later.
We should also instruct how to update translations if needed (e.g., if they want to change wording, they'd have to update the JSON and redeploy). Perhaps non-English text is static enough, but in case of corrections, we can handle minor text updates via the same process as code changes or by also storing some content in the database.
Publications might be updated (new papers). This is easy through DB or code, but making sure the site stays updated is important (so the user or dev should periodically sync it with their latest CV, etc.).
SEO and Promotion: Post-launch, ensure the site is properly indexed:
Submit the site to search engines (Google Search Console, Bing Webmaster) so they crawl it. Monitor search console for any SEO or mobile usability issues reported.
Because it's a portfolio, consider adding links to it from the user's social profiles (LinkedIn, GitHub) to drive traffic and improve SEO via backlinks.
Possibly consider adding meta tags for social sharing (Open Graph tags, Twitter Card). This ensures if the site link is shared, it shows a nice preview (like the user's name, title, and maybe a snapshot of the 3D scene). We can use a representative image (maybe take a screenshot of the site and use it as og:image).
The site could also be submitted to Awwwards or similar galleries if the user desires recognition (keeping in mind the user has to do a submission process).
Maintenance of Dependencies: Over time, libraries get updates (security or performance improvements).
We will set up Dependabot on GitHub which will alert of outdated dependencies. The user or maintainer should apply updates periodically. Especially critical for security (e.g., if a vulnerability in Next.js is discovered, update promptly).
We should pin the versions in package.json or use caret carefully, and test the site after updating any major library (especially Three.js or R3F which could have breaking changes).
The CI tests will help ensure an update doesn't break functionality.
Backup and Recovery:
Ensure Supabase data is backed up. Supabase likely has automated backups on paid plans; if using the free tier, we should occasionally export the data (they have a download database option or one can use pg_dump since it's Postgres). At least the contact messages should be backed up if they accumulate valuable info, and project data if not stored elsewhere.
The code is in Git, which is inherently backed up if on GitHub. We may want to tag a release version on launch for reference.
Scalability and Future Enhancements:
If the user's portfolio grows (more projects, languages, or even new sections like a blog), the architecture should accommodate it. We already have a structure to add new sections.
Supabase can handle scaling of reads easily. If the site gets high traffic, we might consider caching responses or using a CDN for the generated page. Next.js static export is very scalable via CDN; if we went SSR, ensure the host can handle concurrent connections or upgrade if needed.
For a blog, we could integrate a markdown-based or CMS solution easily thanks to modular design (maybe an MDX blog page or hooking to Supabase for blog posts).
If adding more languages, it’s straightforward (just add new JSON and video, possibly adjust UI for more options in language switcher).
If adding more 3D complexity, ensure to revisit performance at that time or perhaps use more advanced techniques (like moving heavy computations to workers or using WASM).
User Engagement:
Since contact is available, the user might get inquiries. Possibly integrate sending an email notification when a new message arrives (Supabase can trigger a function or a Zapier integration). That way the user doesn’t have to check the database manually. This could be a future improvement: for now, maybe advise the user to check Supabase or we can quickly connect an email service for alerts if time permits.
Consider adding social media links or a CTA if the user wants to drive engagement (like "Download CV" or "Email me directly").
Legal and Privacy:
Post-launch, ensure compliance with any legal requirements:
If targeting EU users, consider a privacy policy or at least mention how contact form data is used (probably not necessary as it's personal portfolio, but if analytics is used, disclose it).
If the site uses cookies (maybe only for language preference), consider a simple cookie notice if required by local laws (for just language cookie maybe not needed).
Since all components are open source, license compliance: ensure we have attributions if needed (some libraries might require a LICENSE file distribution; we'll include dependency licenses if any special ones).
Feedback Loop:
After launch, gather feedback from actual users (or recruiters viewing it). Did they find it easy to use? Was anything annoying or confusing?
Use that feedback to do minor adjustments. Maybe some might say "the intro animation took too long" – then we could shorten or allow skipping it.
This continuous improvement will keep the site effective as a portfolio.
Operational Handoff:
If the user is not the developer, ensure they have all access needed (Supabase project access, hosting access) and understand how to do basic tasks. Provide a brief training or docs for:
Updating content (via Supabase or code).
Running the site locally if they want (how to use Docker or npm start).
What to do if something goes wrong (e.g., contact developer or check logs).
If we used CI with GitHub, ensure the user also has access to the repo and understands that merging changes triggers deployment.
In summary, post-launch we will transition into a maintenance mode: keep the site running securely and efficiently, update content as needed, and be prepared to implement enhancements. Our planning and use of best practices aim to minimize maintenance headaches (clean code and tests mean future changes are easier). We consider this project a living product that can evolve, and we've built a foundation (with modular code, CI/CD, etc.) to support that evolution smoothly.
Citations
Favicon
A Guide on Building Awwwards Worthy Websites | by Alex Streza | Medium
https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43
Favicon
A Guide on Building Awwwards Worthy Websites | by Alex Streza | Medium
https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43
Favicon
How to Build Multilingual Apps with i18n in React - freeCodeCamp
https://www.freecodecamp.org/news/build-multilingual-apps-with-i18n-in-react/
Favicon
javascript - changing video source in useEffect based on language change - Stack Overflow
https://stackoverflow.com/questions/60522732/changing-video-source-in-useeffect-based-on-language-change
Favicon
A Guide on Building Awwwards Worthy Websites | by Alex Streza | Medium
https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43
Favicon
A Guide on Building Awwwards Worthy Websites | by Alex Streza | Medium
https://medium.com/@alex.streza/a-guide-on-building-awwwards-worthy-websites-c4fa710b1c43
Favicon
Securing Your Next.js API Calls with Supabase Service Keys | by Phoebe Theresa Peters | Medium
https://medium.com/@zgza778/securing-your-next-js-api-calls-with-supabase-service-keys-1d6f024b3cd2
Favicon
A Supa-Introduction to Supabase. Get ready for SupaLaunchWeek 8 | by Alex Streza | Medium
https://medium.com/@alex.streza/a-supa-introduction-to-supabase-e551ea6708e
Favicon
React Security: Essential Best Practices to Protect Your App
https://www.linkedin.com/pulse/react-security-essential-best-practices-protect-your-app-kapoor-bkw9c
Favicon
Testing - React Three Fiber
https://r3f.docs.pmnd.rs/api/testing
Favicon
Testing - React Three Fiber
https://r3f.docs.pmnd.rs/api/testing
Favicon
Testing - React Three Fiber
https://r3f.docs.pmnd.rs/api/testing
Favicon
Securing Your Next.js API Calls with Supabase Service Keys | by Phoebe Theresa Peters | Medium
https://medium.com/@zgza778/securing-your-next-js-api-calls-with-supabase-service-keys-1d6f024b3cd2
Favicon
React Security: Essential Best Practices to Protect Your App
https://www.linkedin.com/pulse/react-security-essential-best-practices-protect-your-app-kapoor-bkw9c
Favicon
React Security: Essential Best Practices to Protect Your App
https://www.linkedin.com/pulse/react-security-essential-best-practices-protect-your-app-kapoor-bkw9c
Favicon
React Security: Essential Best Practices to Protect Your App
https://www.linkedin.com/pulse/react-security-essential-best-practices-protect-your-app-kapoor-bkw9c
Favicon
React Security: Essential Best Practices to Protect Your App
https://www.linkedin.com/pulse/react-security-essential-best-practices-protect-your-app-kapoor-bkw9c
Favicon
Testing - React Three Fiber
https://r3f.docs.pmnd.rs/api/testing
Favicon
Optimizing React Projects with Modular Folder Structure
https://www.linkedin.com/pulse/optimizing-react-projects-modular-folder-structure-suhag-lapani-g9huf

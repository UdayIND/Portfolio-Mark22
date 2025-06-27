import * as React from "react";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import "./App.css";

function App() {
  const [showBlogs, setShowBlogs] = React.useState(false);

  if (showBlogs) {
    return (
      <div className="portfolio-app">
        <nav style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
          <button 
            onClick={() => setShowBlogs(false)}
            style={{
              padding: '0.5rem 1rem',
              border: 'none',
              background: '#646cff',
              color: 'white',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            ← Portfolio
          </button>
        </nav>
        <Blogs />
      </div>
    );
  }

  return (
    <div className="portfolio-app">
      <nav style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <button 
          onClick={() => setShowBlogs(true)}
          style={{
            padding: '0.5rem 1rem',
            border: 'none',
            background: '#646cff',
            color: 'white',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '0.875rem'
          }}
        >
          Blog
        </button>
      </nav>
      <AboutMe />
      <Education />
      <Projects />
      <Publications />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;

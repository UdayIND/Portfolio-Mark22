import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { create } from 'zustand';
import i18nData from '../assets/i18n/en.json';

// i18n fallback loader
const getI18n = (lang: string) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(`../assets/i18n/${lang}.json`);
  } catch {
    return i18nData; // fallback to English
  }
};

const lang = navigator.language.split('-')[0];
const t = getI18n(lang).projects || i18nData.projects;

// Zustand store for hover/animation state
interface ProjectsState {
  hovered: number | null;
  setHovered: (idx: number | null) => void;
}
const useProjectsStore = create<ProjectsState>((set: (fn: (state: ProjectsState) => ProjectsState) => void) => ({
  hovered: null,
  setHovered: (idx: number | null) => set(() => ({ hovered: idx, setHovered: useProjectsStore.getState().setHovered })),
}));

// Dummy project data (to be replaced with real projects)
const projects = [
  { name: 'Portfolio Website', model: '/src/assets/user-3d-model.gltf', description: 'A 3D interactive portfolio.' },
  { name: 'Visualizer', model: '/src/assets/user-3d-model.gltf', description: 'A 3D data visualization tool.' },
  { name: 'Game Demo', model: '/src/assets/user-3d-model.gltf', description: 'A WebGL game prototype.' },
  // TODO: Add more and replace with real assets
];

function ProjectCard3D({ modelPath, position, idx, name }: { modelPath: string; position: [number, number, number]; idx: number; name: string }) {
  const { scene } = useGLTF(modelPath);
  const ref = React.useRef<any>(null);
  const hovered = useProjectsStore((state: ProjectsState) => state.hovered);
  const setHovered = useProjectsStore((state: ProjectsState) => state.setHovered);

  // Animate scale on hover
  React.useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current.scale, {
      x: hovered === idx ? 1.2 : 1,
      y: hovered === idx ? 1.2 : 1,
      z: hovered === idx ? 1.2 : 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [hovered, idx]);

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      onPointerOver={() => setHovered(idx)}
      onPointerOut={() => setHovered(null)}
      tabIndex={0}
      aria-label={name || 'Project card'}
      role="img"
      onFocus={() => setHovered(idx)}
      onBlur={() => setHovered(null)}
    />
  );
}

// Arrange project cards in a grid
function getGridPositions(count: number, columns = 3, spacing = 2.5): [number, number, number][] {
  return Array.from({ length: count }, (_, i) => {
    const row = Math.floor(i / columns);
    const col = i % columns;
    return [col * spacing - ((columns - 1) * spacing) / 2, row * -spacing, 0];
  });
}

const Projects: React.FC = () => {
  // Video asset by language
  const videoSrc = `/src/assets/project-videos/project-${['en','ja','es','zh'].includes(lang) ? lang : 'en'}.webm`;
  const positions = getGridPositions(projects.length);

  // Cursor-driven rotation
  const groupRef = React.useRef<any>(null);
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!groupRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(groupRef.current.rotation, { y: x * 0.5, x: y * 0.2, duration: 0.7, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="projects-section">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <div style={{ width: '100%', height: '400px' }}>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <React.Suspense fallback={null}>
            <group ref={groupRef}>
              {projects.map((project, idx) => (
                <ProjectCard3D key={project.name + idx} modelPath={project.model} position={positions[idx]} idx={idx} name={project.name} />
              ))}
            </group>
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <ul className="project-list" style={{ margin: '2rem auto', maxWidth: 600 }}>
        {projects.map((project) => (
          <li key={project.name + '-desc'} style={{ margin: '1rem 0' }}>
            <strong>{project.name}</strong>: {project.description}
          </li>
        ))}
      </ul>
      <video
        src={videoSrc}
        controls
        style={{ width: '100%', maxWidth: 600, margin: '2rem auto', display: 'block' }}
        aria-label={t.title + ' video'}
      >
        Sorry, your browser does not support embedded videos.
      </video>
      {/* TODO: Replace dummy 3D models and video with real project assets. Add more advanced GSAP/3D animation. */}
    </section>
  );
};

export default Projects;

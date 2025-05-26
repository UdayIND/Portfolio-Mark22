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
const t = getI18n(lang).techStack || i18nData.techStack;

// Zustand store for hover/animation state
interface TechStackState {
  hovered: number | null;
  setHovered: (idx: number | null) => void;
}
const useTechStackStore = create<TechStackState>((set: (fn: (state: TechStackState) => TechStackState) => void) => ({
  hovered: null,
  setHovered: (idx: number | null) => set(() => ({ hovered: idx, setHovered: useTechStackStore.getState().setHovered })),
}));

// Dummy tech stack data (to be replaced with real icons/models)
const techIcons = [
  { name: 'React', model: '/src/assets/tech/placeholder-tech.glb' },
  { name: 'Three.js', model: '/src/assets/tech/placeholder-tech.glb' },
  { name: 'TypeScript', model: '/src/assets/tech/placeholder-tech.glb' },
  { name: 'GSAP', model: '/src/assets/tech/placeholder-tech.glb' },
  { name: 'Zustand', model: '/src/assets/tech/placeholder-tech.glb' },
  // TODO: Add more and replace with real assets
];

function TechIcon3D({ modelPath, position, idx }: { modelPath: string; position: [number, number, number]; idx: number }) {
  const { scene } = useGLTF(modelPath);
  const ref = React.useRef<any>(null);
  const hovered = useTechStackStore((state: TechStackState) => state.hovered);
  const setHovered = useTechStackStore((state: TechStackState) => state.setHovered);

  // Animate scale on hover
  React.useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current.scale, {
      x: hovered === idx ? 1.3 : 1,
      y: hovered === idx ? 1.3 : 1,
      z: hovered === idx ? 1.3 : 1,
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
      aria-label={techIcons[idx]?.name || 'Tech icon'}
      role="img"
      onFocus={() => setHovered(idx)}
      onBlur={() => setHovered(null)}
    />
  );
}

// Arrange icons in a circle
function getCirclePositions(count: number, radius = 2): [number, number, number][] {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return [Math.cos(angle) * radius, Math.sin(angle) * radius, 0];
  });
}

const TechStack: React.FC = () => {
  // Video asset by language
  const videoSrc = `/src/assets/project-videos/techstack-${['en','jp','es','zh'].includes(lang) ? lang : 'en'}.webm`;
  const positions = getCirclePositions(techIcons.length);

  // Cursor-driven rotation
  const groupRef = React.useRef<any>(null);
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!groupRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(groupRef.current.rotation, { y: x * 0.7, x: y * 0.3, duration: 0.7, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="tech-stack-section">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <div style={{ width: '100%', height: '400px' }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <React.Suspense fallback={null}>
            <group ref={groupRef}>
              {techIcons.map((icon, idx) => (
                <TechIcon3D key={icon.name + idx} modelPath={icon.model} position={positions[idx]} idx={idx} />
              ))}
            </group>
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <video
        src={videoSrc}
        controls
        style={{ width: '100%', maxWidth: 600, margin: '2rem auto', display: 'block' }}
        aria-label={t.title + ' video'}
      >
        Sorry, your browser does not support embedded videos.
      </video>
      {/* TODO: Replace dummy 3D icons and video with real assets. Add more advanced GSAP/3D animation. */}
    </section>
  );
};

export default TechStack;

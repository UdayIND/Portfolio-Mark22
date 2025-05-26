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
const t = getI18n(lang).publications || i18nData.publications;

// Zustand store for hover/animation state
interface PublicationsState {
  hovered: number | null;
  setHovered: (idx: number | null) => void;
}
const usePublicationsStore = create<PublicationsState>((set: (fn: (state: PublicationsState) => PublicationsState) => void) => ({
  hovered: null,
  setHovered: (idx: number | null) => set(() => ({ hovered: idx, setHovered: usePublicationsStore.getState().setHovered })),
}));

// Dummy publication data (to be replaced with real publications)
const publications = [
  { title: 'Interactive 3D Web Portfolios', authors: 'U. Developer, A. Designer', year: 2024, model: '/src/assets/user-3d-model.gltf' },
  { title: 'WebGL for Data Visualization', authors: 'U. Developer', year: 2023, model: '/src/assets/user-3d-model.gltf' },
  { title: 'Accessible 3D UI Patterns', authors: 'A. Designer', year: 2022, model: '/src/assets/user-3d-model.gltf' },
  // TODO: Add more and replace with real assets
];

function Publication3D({ modelPath, position, idx, title }: { modelPath: string; position: [number, number, number]; idx: number; title: string }) {
  const { scene } = useGLTF(modelPath);
  const ref = React.useRef<any>(null);
  const hovered = usePublicationsStore((state: PublicationsState) => state.hovered);
  const setHovered = usePublicationsStore((state: PublicationsState) => state.setHovered);

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
      aria-label={title || 'Publication'}
      role="img"
      onFocus={() => setHovered(idx)}
      onBlur={() => setHovered(null)}
    />
  );
}

// Arrange publications in a row
function getRowPositions(count: number, spacing = 2.5): [number, number, number][] {
  return Array.from({ length: count }, (_, i) => [i * spacing - ((count - 1) * spacing) / 2, 0, 0]);
}

const Publications: React.FC = () => {
  // Video asset by language
  const videoSrc = `/src/assets/publications/publications-${['en','ja','es','zh'].includes(lang) ? lang : 'en'}.webm`;
  const positions = getRowPositions(publications.length);

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
    <section className="publications-section">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <div style={{ width: '100%', height: '350px' }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <React.Suspense fallback={null}>
            <group ref={groupRef}>
              {publications.map((pub, idx) => (
                <Publication3D key={pub.title + idx} modelPath={pub.model} position={positions[idx]} idx={idx} title={pub.title} />
              ))}
            </group>
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <ul className="publication-list" style={{ margin: '2rem auto', maxWidth: 600 }}>
        {publications.map((pub) => (
          <li key={pub.title + '-desc'} style={{ margin: '1rem 0' }}>
            <strong>{pub.title}</strong> ({pub.year})<br />
            <span>{pub.authors}</span>
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
      {/* TODO: Replace dummy 3D models and video with real publication assets. Add more advanced GSAP/3D animation. */}
    </section>
  );
};

export default Publications;

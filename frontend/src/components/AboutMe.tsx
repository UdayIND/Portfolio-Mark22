import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import i18nData from '../assets/i18n/en.json';

// i18n fallback loader
const getI18n = (lang: string) => {
  try {
    // Dynamically import language file
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require(`../assets/i18n/${lang}.json`);
  } catch {
    return i18nData; // fallback to English
  }
};

const lang = navigator.language.split('-')[0];
const t = getI18n(lang).aboutMe || i18nData.aboutMe;

function AvatarModel(props: any) {
  // Load the placeholder 3D model
  const { scene } = useGLTF('/src/assets/models/placeholder-avatar.glb');
  const ref = React.useRef<any>();

  // Cursor-based rotation animation
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(ref.current.rotation, { y: x * 0.5, x: y * 0.2, duration: 0.6, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <primitive ref={ref} object={scene} {...props} />;
}

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section">
      <h2>{t.title}</h2>
      <div style={{ width: '100%', height: '400px' }}>
        <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          {/* Placeholder 3D avatar */}
          <React.Suspense fallback={null}>
            <AvatarModel scale={1.2} position={[0, -1, 0]} />
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <p>{t.description}</p>
      {/* TODO: Add scroll-triggered animation and mobile optimizations */}
    </section>
  );
};

export default AboutMe;

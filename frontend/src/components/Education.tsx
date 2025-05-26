import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
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
const t = getI18n(lang).education || i18nData.education;

function UniversityLogo3D(props: any) {
  const meshRef = React.useRef<any>();
  // Cursor-based rotation animation
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!meshRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(meshRef.current.rotation, { y: x * 0.3, x: y * 0.15, duration: 0.6, ease: 'power2.out' });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <mesh ref={meshRef} {...props}>
      <planeGeometry args={[1.5, 1.5]} />
      <meshBasicMaterial>
        <texture attach="map" image={require('../assets/university-logo.png')} />
      </meshBasicMaterial>
    </mesh>
  );
}

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <h2>{t.title}</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          {/* 3D university logo */}
          <React.Suspense fallback={null}>
            <UniversityLogo3D position={[0, 0, 0]} />
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <p>{t.degree} — {t.university}</p>
      {/* TODO: Add scroll-triggered animation and mobile optimizations */}
    </section>
  );
};

export default Education;

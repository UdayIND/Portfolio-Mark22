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
const t = getI18n(lang).contact || i18nData.contact;

// Zustand store for animation/hover/submission state
interface ContactState {
  hovered: boolean;
  submitting: boolean;
  setHovered: (hovered: boolean) => void;
  setSubmitting: (submitting: boolean) => void;
}
const useContactStore = create<ContactState>((set) => ({
  hovered: false,
  submitting: false,
  setHovered: (hovered: boolean) => set({ hovered }),
  setSubmitting: (submitting: boolean) => set({ submitting }),
}));

function ContactCard3D(props: any) {
  const { scene } = useGLTF('/src/assets/contact/contact-card.glb');
  const ref = React.useRef<any>(null);
  const hovered = useContactStore((state) => state.hovered);
  const setHovered = useContactStore((state) => state.setHovered);

  // Animate scale/rotation on hover
  React.useEffect(() => {
    if (!ref.current) return;
    gsap.to(ref.current.scale, {
      x: hovered ? 1.1 : 1,
      y: hovered ? 1.1 : 1,
      z: hovered ? 1.1 : 1,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(ref.current.rotation, {
      y: hovered ? 0.3 : 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [hovered]);

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      tabIndex={0}
      aria-label={t.title + ' 3D card'}
      role="img"
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      {...props}
    />
  );
}

const Contact: React.FC = () => {
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState(false);
  const submitting = useContactStore((state) => state.submitting);
  const setSubmitting = useContactStore((state) => state.setSubmitting);
  const successRef = React.useRef<HTMLDivElement>(null);
  const errorRef = React.useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      gsap.fromTo(errorRef.current, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'power2.out' });
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '' });
        gsap.fromTo(successRef.current, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'power2.out' });
      } else {
        setError(data.message || 'Submission failed.');
        gsap.fromTo(errorRef.current, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'power2.out' });
      }
    } catch (err) {
      setError('Network error. Please try again.');
      gsap.fromTo(errorRef.current, { scale: 0.9 }, { scale: 1, duration: 0.3, ease: 'power2.out' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <div style={{ width: '100%', height: '300px' }}>
        <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[2, 5, 2]} intensity={1} />
          <React.Suspense fallback={null}>
            <ContactCard3D />
          </React.Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '2rem auto', display: 'flex', flexDirection: 'column', gap: 16 }} aria-label="Contact form">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required aria-required="true" />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required aria-required="true" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="Your message" required aria-required="true" rows={4} />
        {error && <div ref={errorRef} role="alert" style={{ color: 'red' }}>{error}</div>}
        {success && <div ref={successRef} role="status" style={{ color: 'green' }}>Message sent!</div>}
        <button type="submit" disabled={submitting} style={{ marginTop: 8 }}>{submitting ? 'Sending...' : 'Send'}</button>
      </form>
      {/* TODO: Replace dummy 3D model with real contact card asset. Connect to backend API. Add more advanced GSAP/3D animation. */}
    </section>
  );
};

export default Contact;

import React from 'react';
import { render, screen } from '@testing-library/react';
import TechStack from '../../frontend/src/components/TechStack';

jest.mock('zustand');
jest.mock('@react-three/drei', () => ({
  ...jest.requireActual('@react-three/drei'),
  useGLTF: () => ({ scene: {} }),
}));

// Mock i18n
jest.mock('../../frontend/src/assets/i18n/en.json', () => ({
  techStack: { title: 'Tech Stack', description: 'Technologies and tools I use.' },
}), { virtual: true });

// 1. Rendering with tech data
it('renders TechStack component with tech data', () => {
  render(<TechStack />);
  expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  expect(screen.getByText('Technologies and tools I use.')).toBeInTheDocument();
  // Canvas and video should be present
  expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  expect(screen.getByLabelText(/video/i)).toBeInTheDocument();
});

// 2. Handles missing/empty tech data gracefully
it('handles missing tech data gracefully', () => {
  jest.spyOn(React, 'useState').mockReturnValueOnce([[], jest.fn()]);
  render(<TechStack />);
  expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  // Should not throw or crash
});

// 3. Fallback for unsupported language
it('falls back to English if language is not supported', () => {
  Object.defineProperty(window.navigator, 'language', { value: 'fr-FR', configurable: true });
  render(<TechStack />);
  expect(screen.getByText('Tech Stack')).toBeInTheDocument();
}); 
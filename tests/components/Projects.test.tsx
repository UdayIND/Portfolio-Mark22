import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../../frontend/src/components/Projects';

jest.mock('zustand');
jest.mock('@react-three/drei', () => ({
  ...jest.requireActual('@react-three/drei'),
  useGLTF: () => ({ scene: {} }),
}));

// Mock i18n
jest.mock('../../frontend/src/assets/i18n/en.json', () => ({
  projects: { title: 'Projects', description: 'A selection of my best work.' },
}), { virtual: true });

// 1. Rendering with project data
it('renders Projects component with project data', () => {
  render(<Projects />);
  expect(screen.getByText('Projects')).toBeInTheDocument();
  expect(screen.getByText('A selection of my best work.')).toBeInTheDocument();
  // Canvas and video should be present
  expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  expect(screen.getByLabelText(/video/i)).toBeInTheDocument();
});

// 2. Handles missing/empty project data gracefully
it('handles missing project data gracefully', () => {
  jest.spyOn(React, 'useState').mockReturnValueOnce([[], jest.fn()]);
  render(<Projects />);
  expect(screen.getByText('Projects')).toBeInTheDocument();
  // Should not throw or crash
});

// 3. Fallback for unsupported language
it('falls back to English if language is not supported', () => {
  Object.defineProperty(window.navigator, 'language', { value: 'fr-FR', configurable: true });
  render(<Projects />);
  expect(screen.getByText('Projects')).toBeInTheDocument();
}); 
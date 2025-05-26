import React from 'react';
import { render, screen } from '@testing-library/react';
import Publications from '../../frontend/src/components/Publications';

jest.mock('zustand');
jest.mock('@react-three/drei', () => ({
  ...jest.requireActual('@react-three/drei'),
  useGLTF: () => ({ scene: {} }),
}));

// Mock i18n
jest.mock('../../frontend/src/assets/i18n/en.json', () => ({
  publications: { title: 'Publications', description: 'Research and articles published.' },
}), { virtual: true });

// 1. Rendering with publication data
it('renders Publications component with publication data', () => {
  render(<Publications />);
  expect(screen.getByText('Publications')).toBeInTheDocument();
  expect(screen.getByText('Research and articles published.')).toBeInTheDocument();
  // Canvas and video should be present
  expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument();
  expect(screen.getByLabelText(/video/i)).toBeInTheDocument();
});

// 2. Handles missing/empty publication data gracefully
it('handles missing publication data gracefully', () => {
  jest.spyOn(React, 'useState').mockReturnValueOnce([[], jest.fn()]);
  render(<Publications />);
  expect(screen.getByText('Publications')).toBeInTheDocument();
  // Should not throw or crash
});

// 3. Fallback for unsupported language
it('falls back to English if language is not supported', () => {
  Object.defineProperty(window.navigator, 'language', { value: 'fr-FR', configurable: true });
  render(<Publications />);
  expect(screen.getByText('Publications')).toBeInTheDocument();
}); 
import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from '../../frontend/src/components/Contact';

jest.mock('zustand');
jest.mock('@react-three/drei', () => ({
  ...jest.requireActual('@react-three/drei'),
  useGLTF: () => ({ scene: {} }),
}));

// Mock i18n
jest.mock('../../frontend/src/assets/i18n/en.json', () => ({
  contact: { title: 'Contact', description: 'Get in touch with me.' },
}), { virtual: true });

afterEach(() => {
  jest.restoreAllMocks();
});

// 1. Rendering with all fields
it('renders Contact component with all fields', () => {
  render(<Contact />);
  expect(screen.getByText('Contact')).toBeInTheDocument();
  expect(screen.getByText('Get in touch with me.')).toBeInTheDocument();
  expect(screen.getByLabelText('Contact form')).toBeInTheDocument();
  expect(screen.getByLabelText('Contact 3D card')).toBeInTheDocument();
  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Email')).toBeInTheDocument();
  expect(screen.getByLabelText('Message')).toBeInTheDocument();
});

// 2. Handles missing field error
it('shows error if required fields are missing', () => {
  render(<Contact />);
  fireEvent.click(screen.getByText('Send'));
  expect(screen.getByRole('alert')).toHaveTextContent('All fields are required.');
});

// 3. Fallback for unsupported language
it('falls back to English if language is not supported', () => {
  Object.defineProperty(window.navigator, 'language', { value: 'fr-FR', configurable: true });
  render(<Contact />);
  expect(screen.getByText('Contact')).toBeInTheDocument();
});

// 4. Successful API submission
it('submits form and shows success on valid API response', async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: true, message: 'Message received!' })
  });
  render(<Contact />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByText('Send'));
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Message sent!'));
});

// 5. API/network error shows error message
it('shows error if API/network fails', async () => {
  global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));
  render(<Contact />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Test User' } });
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByText('Send'));
  await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent('Network error'));
}); 
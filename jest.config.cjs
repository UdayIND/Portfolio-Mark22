module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.test.json'
    }
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(gltf|glb|png|webm|svg)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '^@react-three/fiber$': '<rootDir>/node_modules/@react-three/fiber',
    '^@react-three/drei$': '<rootDir>/node_modules/@react-three/drei'
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTests.ts']
}; 
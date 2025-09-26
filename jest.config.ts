
// jest.config.ts
import type { Config } from 'jest';
import nextJest from 'next/jest';

// Tell Jest where to find the Next.js config
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  // Use jest-environment-jsdom for browser DOM simulation
  testEnvironment: 'jest-environment-jsdom', 
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Allow for absolute imports using the same structure as tsconfig.json
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
};

// Export the Next.js config wrapper
export default createJestConfig(customJestConfig);
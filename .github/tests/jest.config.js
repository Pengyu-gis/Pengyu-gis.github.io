/**
 * Jest configuration for Type-on-Strap theme unit tests
 * @see https://jestjs.io/docs/configuration
 */
module.exports = {
  testEnvironment: 'jsdom',
  testMatch: [
    '**/unit/**/*.test.js',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/_site/',
    '/e2e/',
    '/playwright-report/',
    '/test-results/',
  ],
  collectCoverageFrom: [
    'unit/**/*.js',
    '!unit/**/*.test.js',
    '!**/node_modules/**',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  setupFiles: [],
  roots: ['<rootDir>/unit'],
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
  verbose: true,
};


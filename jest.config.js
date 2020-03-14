module.exports = {
  verbose: false,
  testPathIgnorePatterns: [
    '<rootDir>/(?:.+?)/lib/',
    '<rootDir>/(?:.+?)/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/(?:.+?)/lib/',
    '<rootDir>(?:.+?)/node_modules/',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupFilesAfterEnv: ['q3-ui-test-utils'],
};

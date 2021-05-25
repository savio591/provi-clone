module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    '^.+.(svg|css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': 'jest-transform-stub',
  }
}
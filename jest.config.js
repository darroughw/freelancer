const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
  },
};

module.exports = createJestConfig(customJestConfig);

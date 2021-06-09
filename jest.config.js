module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "\\.[j]sx?$": "babel-jest",
    "^.+\\.svg$": "jest-svg-transformer",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageThreshold: {
    "./src": {
      lines: 70,
    },
  },
}

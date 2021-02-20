module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    "**/*.(test|spec).(ts|tsx)"
  ],
  globals: {
    "ts-jest": {
      useBabelrc: true,
      tsConfigFile: "jest.tsconfig.json"
    }
  },
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "enzyme.js"
  ],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  coverageReporters: [
    "json",
    "lcov",
    "text",
    "text-summary"
  ],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "node",
  globals: {
      "ts-jest": {
          tsconfig: "<rootDir>/jest.tsconfig.json"
      }
  }
}
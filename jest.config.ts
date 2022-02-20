import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  moduleDirectories: ["<rootDir>/node_modules"],
};
export default config;

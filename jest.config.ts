import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
export default config;

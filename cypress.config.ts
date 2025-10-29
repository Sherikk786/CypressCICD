import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    setupNodeEvents(on, config) {
      // add node events if needed
      return config;
    }
  },
  video: false,
  defaultCommandTimeout: 8000,
  retries: { runMode: 1, openMode: 0 }
});

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'ngr8es',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

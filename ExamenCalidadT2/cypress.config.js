const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
     base: 'https://localhost:5001/'
  },
  e2e: {
    setupNodeEvents(on, config) {
       
    },
  },
});

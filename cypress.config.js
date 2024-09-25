const { defineConfig } = require("cypress");

module.exports = {
  
  e2e: {
    supportFile: 'cypress/support/e2e.js', 
    specPattern: 'cypress/e2e/**/*.spec.{js,jsx,ts,tsx}',
  },
};




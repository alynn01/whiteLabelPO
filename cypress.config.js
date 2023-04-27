const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 800,
  projectId: "cfxgxe",
  retries: {
    runMode: 2,
    openMode: 0,
  },

  env: {
    MAILOSAUR_API_KEY: "{API KEY}",
  },
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin/src/installLogsPrinter')(on);
      on("task", {
        log(message) {
          console.log(message);
          return null;
          
        },
        
      });

      const baseUrl =
        config.env.APP_ENV === "production"
          ? "https://companyadmin.essolo.com/"
          : "https://devcompanyadmin-safex.essolo.com/";

      config.baseUrl = baseUrl;

      return config;
    },
  },
});
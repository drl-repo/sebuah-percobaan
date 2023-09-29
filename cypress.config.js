const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://themoviedb.org',
    //testIsolation: false
  },
  chromeWebSecurity: false,
  pageLoadTimeout: 20000, //bisa ditambah kalau koneksi agak lemot
  defaultCommandTimeout: 10000,
  env: {
    username: '',
    password: ''
  },
  video: false
});

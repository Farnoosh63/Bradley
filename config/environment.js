/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'bradley',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    firebase: {
      apiKey: "AIzaSyCbO0ZFw1Atc4hS8GmSMh5_OE-wUi-ekSA",
      authDomain: "bradley-e0bd2.firebaseapp.com",
      databaseURL: "https://bradley-e0bd2.firebaseio.com",
      storageBucket: 'bradley-e0bd2.appspot.com',
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';

  }

  return ENV;
};

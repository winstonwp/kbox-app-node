'use strict';

module.exports = function(kbox, app) {
  // Load events
  require('./lib/events.js')(kbox, app);
  // Load the integrations
  //require('./lib/integrations.js')(kbox);
};

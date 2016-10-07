
'use strict';

module.exports = function(kbox) {

  // NPM modules
  var _ = require('lodash');

  /*
   * Add some other important things to our kalabox.yml before
   * configin it
   */
  kbox.core.events.on('pre-create-configure', function(data) {

    // Grab the config from teh data
    var config = data.config;
    var results = data.results;
    var pkg = data.pkg;

    /*
     * Returns the filemount based on the framework
     */
    var getFilemount = function(framework) {
      return '/var/www/html';
    };

    // Only run if this is a node app
    if (config.type === 'node') {

      // Get the created app type
      var created = results._type;

      // Get the framework and version in various ways
      // For drupal
      if (_.includes(created, 'node')) {
        config.pluginconfig.node.framework = 'node';
        config.pluginconfig.node.version = created.replace('node', '');
        config.pluginconfig.node.filemount = getFilemount(
          config.pluginconfig.node.framework
        );
        config.pluginconfig.node.image = [
          config.pluginconfig.node.framework,
          config.pluginconfig.node.version
        ].join(':');
      }

      // Get the filemount from the framework and add it to our list of ignores
      // NOTE: on Pantheon apps the filemount should be a symlink ie "Name"
      // not "Path"
      var filemount = config.pluginconfig.node.filemount;
      var ignores = config.pluginconfig.sharing.ignore || [];
      //ignores.push('Name ' + filemount);
      config.pluginconfig.sharing.ignore = ignores;

      // Set the version
      config.version = pkg.version;

    }

  });

};

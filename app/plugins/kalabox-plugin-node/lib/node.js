
'use strict';

module.exports = function(kbox, app) {

  // Node modules
  var path = require('path');
  var id = kbox.core.deps.get('globalConfig').engineId;
  var group = kbox.core.deps.get('globalConfig').engineGid;

  /*
   * Helper to get a appserver run def template
   */
  var getAppRunner = function() {
    return {
      compose: app.composeCore,
      project: app.name,
      opts: {
        services: ['appserver'],
        app: app
      }
    };
  };

  /*
   * Node post-create setup function
   */
  app.events.on('post-create', function(done) {

    //TODO ESTO PUEDE SER MUY UTIL PARA POBLAR DIRECTORIOS Y ETC
    var baseExpressClone = getAppRunner();
    var baseExpressUrl = 'https://github.com/winstonwp/helloworld-express.git';
    baseExpressClone.opts.entrypoint = ['git'];
    baseExpressClone.opts.cmd = [
      'clone',
      baseExpressUrl
    ]
    return kbox.engine.run(baseExpressClone)
      .then(function(){
        var installDeps = getAppRunner();
        installDeps.opts.entrypoint = ['npm'];
        installDeps.opts.cmd = [
          '--prefix',
          './helloworld-express/',
          'install',
          './helloworld-express/'
        ]
        kbox.engine.run(installDeps);
      })
      .nodeify();

  });

  /*
   * Add node specific CLI containers
   */
  app.events.on('post-app-load', function(app) {

    // Add node specific tasks
    var nodeCli = path.resolve(__dirname, '..', 'cli', 'node-cli.yml');
    app.taskFiles.push(nodeCli);

  });

};

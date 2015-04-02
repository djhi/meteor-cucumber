(function () {

  'use strict';

  Package.describe({
    name: 'xolvio:cucumber',
    summary: 'CucumberJS for Velocity',
    version: '0.5.5',
    git: 'git@github.com:xolvio/meteor-cucumber.git',
    debugOnly: true
  });

  Npm.depends({
    'cuke-monkey': '0.1.1',
    'colors': '1.0.3',
    'fs-extra': '0.17.0'
  });

  Package.onUse(function (api) {

    api.versionsFrom('METEOR@1.0.3.2');

    api.use([
      'underscore',
      'http',
      'velocity:core@0.4.5',
      'velocity:shim@0.1.0'
    ], ['server', 'client']);
    api.use([
      'velocity:html-reporter@0.4.2'
    ], 'client');

    api.add_files([
      'sample-tests/feature.feature',
      'sample-tests/steps.js'
    ], 'server', {isAsset: true});

    api.addFiles(['hub-server.js'], 'server');
    //api.addFiles(['mirror-server.js'], 'server');

  });

})();
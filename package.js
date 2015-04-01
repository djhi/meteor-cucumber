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
    'cucumber': '0.4.8',
    'fs-extra': '0.17.0',
    'chai': '2.0.0',
    'chai-as-promised': '4.2.0'
  });

  Package.onUse(function (api) {

    api.versionsFrom('METEOR@1.0.3.2');

    api.use('sanjo:meteor-version@1.0.0', 'server');
    api.use('package-version-parser', 'server');
    api.use([
      'underscore@1.0.2',
      'http@1.0.9',
      'velocity:core@0.4.5',
      'velocity:shim@0.1.0',
      'xolvio:webdriver@0.5.2'
    ], ['server', 'client']);
    api.use([
      'velocity:html-reporter@0.4.2'
    ], 'client');

    api.add_files([
      'sample-tests/feature.feature',
      'sample-tests/hooks.js',
      'sample-tests/steps.js',
      'sample-tests/world.js'
    ], 'server', {isAsset: true});

    api.addFiles(['server.js'], 'server');

    api.export('cucumber', 'server');
  });

})
();

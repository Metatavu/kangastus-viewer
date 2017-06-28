/*jshint esversion: 6 */
/* global __dirname */

(function() {
  'use strict';
  
  const argv = require('minimist')(process.argv.slice(2));
  const http = require('http');
  const config = require('nconf');
  config.file({ file: argv.config || 'config.json' });
  const app = require(__dirname + '/index');
  const options = require(__dirname + '/options');
  
  if (!options.isOk()) {
    options.printUsage();
    process.exitCode = 1;
    return;
  }
  
  app.startServer(options.getOption('port'), () => {
    console.log('Express server started');
  });
  
}).call(this);

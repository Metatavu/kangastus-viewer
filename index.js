/*jshint esversion: 6 */
/* global __dirname */

(function() {
  'use strict';
  
  const express = require('express');
  const path = require('path');
  const mongoose = require('mongoose');
  const config = require('nconf');
  const util = require('util');  
  const app = express();
  const http = require('http').Server(app);
  
  mongoose.connect('mongodb://' + config.get('database:host') + '/' + config.get('database:table'), { useMongoClient: true });
  
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');
  
  app.use(express.static(path.join(__dirname, 'public')));
  require('./routes')(app);
  
  exports.startServer = (port, callback) => {
    http.listen(port, callback);
  };
  
  exports.close = (callback) => {
    http.shutdown(callback);
  };
  
}).call(this);
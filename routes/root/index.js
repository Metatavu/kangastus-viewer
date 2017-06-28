/*jshint esversion: 6 */
/*global __dirname*/
(function() {
  'use strict';

  module.exports = (app) => {
    
    app.get('/', (req, res, next) => {
      res.render('pages/index.pug', {
        
      });
    });
  };

}).call(this);
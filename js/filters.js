'use strict';

/* Filters */
phonecatApp.filter('mark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  }
})
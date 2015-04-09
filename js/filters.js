'use strict';

/* Filters */
phonecatApp
	.filter('mark', function() {
		return function(input) {
			return input ? '\u2713' : '\u2718';
		}
	}) // filter for Phone Details Page for attributes, which true or false, change them to icons
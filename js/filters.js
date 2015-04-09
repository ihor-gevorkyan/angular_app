'use strict';

/* Filters */
phonecatApp
	.filter('mark', function() {
		return function(input) {
			return input ? '\u2713' : '\u2718';
		}
	}) // filter for Phone Details Page for attributes, which true or false, change them to icons
	.filter('services', function() {
		return function(services, filterBy) {
			return services.filter(function(element, index, array) {
				return element.category.name === filterBy.category.name;
			})
		}
	})
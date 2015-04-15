'use strict';

/* Directives */


/**
 * This directive for include navigation menu at file
 */
phonecatApp.directive('navMenu', function() {
	return {
		restrict: 'E', // element
		templateUrl: 'components/nav__menu.html',
		controller: 'NavCtrl'
	}
})


/**
 * This directive checked fields on focus event and return some value to form where was included
 */
phonecatApp.directive('customFocus', function() {
	return {
		restrict: 'A', //attribute
		require: 'ngModel',
		link: function(scope, element, attrs, controller) {
			element
				.on('focus', function() {
					scope.$apply(function(e) {
						controller.$focused = true;
					})
				})
				.on('blur', function(e) {
					scope.$apply(function() {
						controller.$focused = false;
					})
				})
		}
	}
})
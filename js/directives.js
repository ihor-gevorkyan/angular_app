'use strict';

/* Directives */
phonecatApp.directive('navmenu', function() {
	return {
		restrict: 'E',
		templateUrl: 'components/nav__menu.html',
		controller: 'NavCtrl'
	}
})
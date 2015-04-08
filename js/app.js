'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', '$locationProvider', function($routeProvide, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvide
	.when('/', {
		templateUrl:'template/home.html',
		controller:'PhoneListCtrl'
	})
	.when('/about', {
		templateUrl:'template/about.html',
		controller:'AboutCtrl'
	})
	.when('/contact', {
		templateUrl:'template/contact.html',
		controller:'ContactCtrl'
	})
	.when('/phones/:phoneId', {
		templateUrl:'template/phone-detail.html',
		controller:'PhoneDetailCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
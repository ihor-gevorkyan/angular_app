'use strict';

/* Controllers */

// Navigation Controller
phonecatApp.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(path) {
        return path === $location.path();
    };
}]) 


// Home Controller 
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data, status, headers, config) {
        $scope.phones = data;
    });
}]);


// About Controller
phonecatApp.controller('AboutCtrl', ['$scope', 'AboutService', function($scope, AboutService) {
    $scope.services = AboutService.services(); // call return method at services

    // functions for displaying some skills by service
    var selectedService = null;

    $scope.selectService = function(service) {
        //selectedService = service; // for accordion effect
        selectedService = (selectedService === service) ? null : service; //for toogle effect
    };

    $scope.isSerciveSelected = function(service) {
        return service === selectedService;
    };

    // function for formatting skills concatination 
    $scope.displayConcatSkills = function(skills) {
        var result = '';

        for (var i = 0; i < skills.length; i++) {
            if (result !== '') { 
                result += ' : '; 
            }
            if (skills[i].name) {
                result += skills[i].name + ' : ';
            }
            result += skills[i].value;
        }

        return result;
    };
}]);


// Contact Controller 
phonecatApp.controller('ContactCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {

}]);


// Phone Detail Controller
phonecatApp.controller('PhoneDetailCtrl', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
    $scope.location = $location;

    var url = 'phones/' + $routeParams.phoneId + '.json';

    $scope.phone = [];

    $http.get(url).success(function(data) {
        $scope.phone = data;
        $scope.mainImgUrl = data.images[0];
    })

    $scope.setImage = function(imageUrl) {
        $scope.mainImgUrl = imageUrl;
    }
}]); 
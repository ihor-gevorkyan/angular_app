'use strict';

/* Controllers */
phonecatApp.controller('NavCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.isActive = function(path) {
    return path === $location.path();
  }
}])

//Home Controller
phonecatApp.controller('PhoneListCtrl',['$scope','$http', '$location', function($scope, $http, $location) {
  console.log('$location.url() - ', $location.url());
  console.log('$location.path() - ', $location.path());
  console.log('$location.search() - ', $location.search());
  console.log('$location.hash() - ', $location.hash());

  $http.get('phones/phones.json').success(function(data, status, headers, config) {
    $scope.phones = data;
  });

}]);


//About Controller
phonecatApp.controller('AboutCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);


//Contact Controller
phonecatApp.controller('ContactCtrl',['$scope','$http', '$location', function($scope, $http, $location) {

}]);


//Phone Detail Controller
phonecatApp.controller('PhoneDetailCtrl',['$scope','$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
  $scope.phoneId = $routeParams.phoneId;
  $scope.location = $location;

  var url = 'phones/' + $routeParams.phoneId + '.json'

  $scope.phone = [];

  $http.get(url).success(function(data) {
    $scope.phone = data;
    $scope.mainImgUrl = data.images[0]
  })

  $scope.setImage = function(imageUrl) {
    $scope.mainImgUrl = imageUrl
  }
}]);
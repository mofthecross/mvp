angular.module('myApp')

.controller('gifIDController', function($scope, $window, $location, $http, $routeParams) {
  $scope.gifs = {};
  $scope.getGifs = function() {
    $http.get('/api/gifs').success(function(response) {
      console.log('inside',response)
        $scope.gifs = response;
      });
    }
  $scope.getGifs();
  });

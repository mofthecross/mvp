angular.module('myApp')

.controller('saveGifController', function($scope, $window, $location, $http, $routeParams) {
  $scope.gif = {}
  $scope.saveGif = function() {

    $http.post('/api/gifs', $scope.gif).success(function(response) {
        window.location.href='#/gifs'
      });
    }

  });

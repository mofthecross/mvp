angular.module('myApp')

.controller('saveGifController', function($scope, uploadForm , $window, $location, $http, $routeParams) {
  $scope.gif = {}
  $scope.saveGif = function() {

    $http.post('/api/gifs', $scope.gif).success(function(response) {
        window.location.href='#/gifs'
      });
    }
  $scope.Submit = function() {
     var uploadUrl = '/upload';
     uploadForm.post(uploadUrl, $scope.gif)
  }

  });

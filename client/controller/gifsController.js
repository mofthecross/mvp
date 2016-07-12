angular.module('myApp')
//
.controller('gifsController', function($scope, $window, $location, $routeParams) {
  $scope.getGifs = function() {
    $http.get('/api/gifs').success(function(response) {
        $scope.gifs = response
      });
    }
  });





//
//
// //
// //     console.log('books controller loaded' )
// //     $scope.getGifs = function() {
// //       $http.get('/api/gifs').success(function(response) {
// //           $scope.gifs = response;
// //     });
// //
// // }])
// //

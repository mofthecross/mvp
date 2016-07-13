var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'gifsController',
    templateUrl: 'views/gifs.html'
  })
  .when('/gifs', {
    controller: 'gifsController',
    templateUrl: 'views/gifs.html'
  })
  .when('/saveGif', {
    controller: 'saveGifController',
    templateUrl:'views/saveGif.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});

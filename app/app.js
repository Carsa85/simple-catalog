(function() {
  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('myApp', [
    'ngRoute',
    'myApp.main',
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'main/main.html',
      controller: 'mainCtrl'
    })
    .otherwise({redirectTo: '/'});
  }])
  .run(['$rootScope', function($rootScope) {
    //
  }])
})();
(function() {
  'use strict';

  angular.module('myApp.main', ['ngRoute'])
  .controller('mainCtrl', mainCtrl);
  mainCtrl.$inject =
    ['$scope'];

  function mainCtrl($scope) {
    var vm = this
    vm.init = init;
    init();
    function init() {
      $scope.inProgress = "Work in progress";
    }
  }
})();
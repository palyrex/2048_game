'use strict';

/**
 * @ngdoc function
 * @name game2048App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the game2048App
 */
angular.module('game2048App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

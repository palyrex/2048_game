'use strict';

angular.module('game2048', ['Game'])
.controller('GameController', function(GameManager) {
  this.game = GameManager;
});




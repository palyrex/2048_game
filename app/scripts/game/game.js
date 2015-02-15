angular.module('Game', [])
.service('GameManager', function() {
  this.movesAvailable = function() {
    return GridService.anyCellsAvailable() || 
                GridService.tileMatchesAvailable();
  };
});
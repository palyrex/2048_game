describe('Game module', function() {
  describe('GameManager', function() {
    beforeEach(module('Game'));

    var gameManager;

    beforeEach(inject(function(GameManager) {
      gameManager = GameManager;
    }));

    var _gridService;

    beforeEach(module(function($provide){
      _gridService = {
        anyCellAvailable: angular.noop,
        tileMatchesAvailable: angular.noop
      };

      $proveide.value('GridService', _gridService);
    }));

    describe('.movesAvailable', function() {
      it('should return true if there any moves availabale', function() {
        spyOn(_gridService, 'anyCellAvailable').addReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });

      it('should return true, if there needed cells or tiles', function() {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
        spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
        expect(gameManager.movesAvailable()).toBeTruthy();
      });

      it('should return false, if there is no matching cells or tiles', function() {
        spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
        spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
        expect(gameManager.movesAvailable()).toBeFalsy();
      });
    });
  });
});

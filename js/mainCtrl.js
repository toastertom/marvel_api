angular.module('heroSearch').controller('mainCtrl', function ($scope, serviceHttp) {

// $scope.characters = serviceHttp.getCharacter();

  $scope.getCharacterData = function (character) {
    serviceHttp.getCharacter(character).then(response) {
      $scope.characterData = response;
    }
  }

})

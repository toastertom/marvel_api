angular.module('heroSearch').controller('mainCtrl', function ($scope, serviceHttp) {

// $scope.characters = serviceHttp.getCharacter();

  $scope.getCharacterData = function (character) {
    serviceHttp.getCharacter(character).then(function functionName(response) {
        $scope.characterData = responseData;
    })
  }

})

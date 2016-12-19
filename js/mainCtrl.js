angular.module('heroSearch').controller('mainCtrl', function ($scope, serviceHttp) {

// $scope.characters = serviceHttp.getCharacter();

  $scope.getCharacterData = function (character) {
    // character = ''; auto clears the text box.
    $scope.character = '';
    serviceHttp.getCharacter(character).then(function (response) {
        $scope.characterData = response;
    })
  }

})

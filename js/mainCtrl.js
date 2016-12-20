angular.module('heroSearch').controller('mainCtrl', function ($scope, serviceHttp) {

// $scope.characters = serviceHttp.getCharacter();

  $scope.getCharacterData = function (character) {
    // character = ''; auto clears the text box.
    $scope.character = '';
    serviceHttp.getCharacter(character).then(function (response) {
        $scope.characterData = response;
    })
  }

});

app = angular.module('heroSearch')
app.directive('hidden', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('hidden', function() {
             if (this.pageYOffset >= 400) {
                //element.addClass('hidden');
                element.removeClass('card');
              }  else {
                //  scope.boolChangeClass = false;
                //element.removeClass('hidden');
                element.addClass('card');
             }

        });
    };
});

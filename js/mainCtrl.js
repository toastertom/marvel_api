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

angular.module('heroSearch')
.directive("scroll-hidden", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll-hidden", function() {
             if (this.pageYOffset >= 630) {
                element.addClass('hidden');
                // element.removeAttr('id');
              }  else {
                //  scope.boolChangeClass = false;
                element.removeClass('hidden');
                // element.addClass('');
             }

        });
    };
});

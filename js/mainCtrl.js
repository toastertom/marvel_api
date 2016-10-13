angular.module('heroSearch').controller('mainCtrl', function ($scope, serviceHttp) {

$scope.characters = serviceHttp.getCharacter();

})

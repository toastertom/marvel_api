angular.module('heroSearch').service('serviceHttp', function ($http, $q) {

this.getCharacter = function (character) {
  $http({
    method: 'GET',
    url: 'https://gateway.marvel.com/v1/public/comics',
    params: {
    "apikey": "75f03c4b1cd6f77e464461c42f03c068"
     }
  }).then(function (response) {
    console.log(response);
  })
}

})

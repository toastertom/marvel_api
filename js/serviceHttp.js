angular.module('heroSearch').service('serviceHttp', function ($http, $q) {

this.getCharacter = function (character) {
  const myTs = new Date();
  $http({
    method: 'GET',
    url: 'https://gateway.marvel.com/v1/public/comics',
    params: {
    "apikey": "75f03c4b1cd6f77e464461c42f03c068"
    // "ts": myTs,
    // "hash": "md5(ts+3409f516b08d6b34a919f5871fb7c4423faef01d+75f03c4b1cd6f77e464461c42f03c068)"
     }
  }).then(function (response) {
    console.log(response);
  })
}

})

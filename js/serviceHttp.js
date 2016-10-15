angular.module('heroSearch').service('serviceHttp', function ($http, $q) {

this.getCharacter = function (character) {
  var defer = $q.defer();
  $http({
    method: 'GET',
    url: 'https://gateway.marvel.com/v1/public/characters',
    params: {
    "apikey": "75f03c4b1cd6f77e464461c42f03c068",
    "name": character
     }
  }).then(function (response) {
    console.log(response);

    var filterCharData = response.data.data.results;
    console.log(filterCharData);
    var responseData = [];
    for (var i = 0; i < filterCharData.length; i++){

      var obj = {
        thumbnail: filterCharData[i].thumbnail,
        name: filterCharData[i].name,
        series: filterCharData[i].series,
        description: filterCharData[i].description
      }
      responseData.push(obj);
    }
    defer.resolve(responseData);
  })
return defer.promise;
}

})

angular.module('heroSearch').service('serviceHttp', function ($http, $q) {

this.getCharacter = function (character) {
  var defer = $q.defer();
  $http({
    method: 'GET',
    url: 'https://gateway.marvel.com/v1/public/characters',
    params: {
    "apikey": "75f03c4b1cd6f77e464461c42f03c068",
    "nameStartsWith": character
     }
  }).then(function (response) {

    var filterCharData = response.data.data.results;
    console.log(filterCharData);

    var responseData = [];
    for (var i = 0; i < filterCharData.length; i++){

      var obj = {
        thumbnail: `${filterCharData[i].thumbnail.path}/portrait_incredible.${filterCharData[i].thumbnail.extension}`,
        //filterCharData + "/portrait_incredible."+filterCharData.extension
        name: filterCharData[i].name,
        series: filterCharData[i].series.items,
        description: filterCharData[i].description,
        urls: filterCharData[i].urls
      }
      responseData.push(obj);
    }
    defer.resolve(responseData);
    console.log(responseData);
  })
return defer.promise;
}

})

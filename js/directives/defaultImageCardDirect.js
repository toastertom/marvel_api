app = angular.module('heroSearch')
app.directive('hidden', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('hidden', function() {
             if (this.pageYOffset >= 300) {
                element.addClass('hidden');
                //element.removeClass('card');
              }  else {
                //  scope.boolChangeClass = false;
                //element.removeClass('hidden');
                //element.addClass('card');
             }

        });
    };
});

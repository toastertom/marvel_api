// Note to self: Directive name must be different than the attribute that is being assigned.
app = angular.module('heroSearch')
app.directive('scroll', function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind('scroll', function() {
             if (this.pageYOffset >= 200) {
                element.addClass('hidden');
                //element.removeClass('card');
              }  else {
                //  scope.boolChangeClass = false;
                element.removeClass('hidden');
                //element.addClass('card');
             }

        });
    };
});

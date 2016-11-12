angular.module('heroSearch', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/homeTmpl.html",
                controller:'mainCtrl'
            })
            .state('characters',{
                url:'/characters',
                templateUrl: "../views/characterCardsTmpl.html",
                controller:'mainCtrl'
            })

            $urlRouterProvider
              .otherwise('/');

            });

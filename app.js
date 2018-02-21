var app = angular.module('RentalManagementApp', ['ngRoute','angular-loading-bar']);
        app.config(['$locationProvider','$routeProvider', function ($locationProvider,$routeProvider) {
            $locationProvider.html5Mode({
                enabled: true, requireBase: false
            });

            $routeProvider
            .when('/home', {
                controller: 'catalogController',
                templateUrl: 'catalog.html',
            })

            .otherwise({ redirectTo: '/home' });
        }]);
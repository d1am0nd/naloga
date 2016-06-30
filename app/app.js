app = angular.module('generalApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider
    .otherwise('/');

    $stateProvider
    .state('home', {
        url: '/',
        controller: 'CreateController',
        templateUrl: '/app/templates/create.html'
    })
    .state('people', {
        url: '/osebe',
        controller: 'PeopleController',
        templateUrl: '/app/templates/people.html'
    })
    .state('customers', {
        url: '/stranke',
        controller: 'CustomersController',
        templateUrl: '/app/templates/customers.html'
    });
});
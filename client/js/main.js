var fortinsApp = angular.module('fortinsApp', ['ngRoute']);

fortinsApp.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '../partials/login.html',
      controller: 'loginCtrl',
      access: {restricted: false}
    })
    .when('/register', {
      templateUrl: '../partials/register.html',
      controller: 'registerCtrl',
      access: {restricted: false}
    })
    .when('/home', {
      templateUrl: '../partials/home.html',
      controller: 'homeCtrl',
      access: {restricted: true}
    })
    .when('/admins', {
      templateUrl: '../partials/admins.html',
      controller: 'adminsCtrl',
      access: {restricted: true}
    })
    .when('/customers', {
      templateUrl: '../partials/customers.html',
      access: {restricted: true}
    })
    .when('/drivers', {
      templateUrl: '../partials/drivers.html',
      access: {restricted: true}
    })
    .when('/stats', {
      templateUrl: '../partials/stats.html',
      access: {restricted: true}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .otherwise('/');
}).run(function($rootScope, $http){
  $rootScope.logout = function(){
    $http.post('/logout');
  };
});

var fortinsApp = angular.module('fortinsApp', ['ngRoute']);

fortinsApp.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl: '../partials/login.html',
      controller: 'loginCtrl'
    })
    .when('/register', {
      templateUrl: '../partials/register.html',
      controller: 'registerCtrl'
    })
    .when('/home', {
      templateUrl: '../partials/home.html',
      controller: 'homeCtrl'
    })
    .when('/myaccount', {
      templateUrl: '../partials/myaccount.html',
      controller: 'myaccountCtrl'
    })
    .when('/updateAdmin', {
      templateUrl: '../partials/updateAdmin.html',
      controller: 'updateAdminCtrl'
    })
    .when('/contact', {
      templateUrl: '../partials/contact.html',
      controller: 'contactCtrl'
    })
    .when('/admins', {
      templateUrl: '../partials/admins.html',
      controller: 'adminsCtrl'
    })
    .when('/customers', {
      templateUrl: '../partials/customers.html',
      controller: 'customersCtrl'
    })
    .when('/drivers', {
      templateUrl: '../partials/drivers.html',
      controller: 'driversCtrl'
    })
    .when('/stats', {
      templateUrl: '../partials/stats.html',
      controller: 'ordersCtrl'
    })
    .otherwise('/')
}])
.run(function($rootScope, $http){
  $rootScope.logout = function(){
    $http.post('/logout');
  };
});

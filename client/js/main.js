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
      controller: 'statsCtrl'
    })
    .otherwise('/')
}])
.run(["$rootScope", "$http", function($rootScope, $http){
  $rootScope.logout = function(){
    $http.post('/logout');
  };
}]);

// Home Controller
angular.module('fortinsApp').controller('homeCtrl', ["$scope", "$location", "$http", function ($scope, $location, $http) {
  $http.get('/api/home')
  .then(function(data) {
    console.log("Session Data:", data.data.sessions.passport.admin);
    console.log("Admin Data:", data.data.data);
  })
  .catch(function(err) {
    console.log(err);
   })
}]);

// Login Controller
angular.module('fortinsApp').controller('loginCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
  $scope.login = function () {

    var email = $scope.email;
    var password = $scope.password;

    $http.post('/api/login', {
      email: email,
      password: password
    })
    .success(function(data) {
      $location.path('/home');
      console.log("Successful! Admin Authenticated", data)
    })
    .error(function(err) {
      console.log("Failure! Admin Not Authenticated", err)
      $location.path('/');
    })
  }
}]);

// Register Controller
angular.module('fortinsApp').controller('registerCtrl', ['$scope', '$location', '$http', function ($scope, $location, $http) {
  $scope.register = function () {
    $scope.error = false;
    $scope.disabled = true;

    var email = $scope.email;
    var password = $scope.password;
    var first_name =  $scope.first_name;
    var last_name =  $scope.last_name;
    var gender = $scope.gender;
    var street_address = $scope.street_address;
    var postal_code = $scope.postal_code;
    var position = $scope.position;
    var phone_number = $scope.phone_number;
    var date_created = new Date();

    $http.post('/api/register', {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      street_address: street_address,
      postal_code: postal_code,
      position: position,
      phone_number: phone_number,
      date_created: date_created
    }).then(function(response) {
      console.log(response);
    })

    $scope.email = '';
    $scope.password = '';
    $scope.first_name = '';
    $scope.last_name = '';
    $scope.gender = '';
    $scope.street_address = '';
    $scope.postal_code = '';
    $scope.position = '';
    $scope.phone_number = '';
    $scope.date_created = '';

  }
}]);

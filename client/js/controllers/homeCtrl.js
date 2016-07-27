// Home Controller
angular.module('fortinsApp').controller('homeCtrl', ["$scope", "$location", "$http", 'DriverSvc', 'AdminSvc', 'OrderSvc', function ($scope, $location, $http, DriverSvc, AdminSvc, OrderSvc) {
  $http.get('/api/home')
  .then(function(data) {
  })
  .catch(function(err) {
    console.log(err);
  });

   AdminSvc.fetch()
   .then(function (admins) {
     $scope.admins = admins
   });

   DriverSvc.fetch()
   .then(function (drivers) {
     $scope.drivers = drivers
   });

   OrderSvc.fetch()
   .then(function (orders) {
     $scope.orders = orders;
   });

}]);

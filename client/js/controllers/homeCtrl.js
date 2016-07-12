
// Home Controller
angular.module('fortinsApp').controller('homeCtrl', ["$scope", "$location", "$http", 'DriverSvc', 'AdminSvc', 'OrderSvc', function ($scope, $location, $http, DriverSvc, AdminSvc, OrderSvc) {
  $http.get('/api/home')
  .then(function(data) {
    //console.log("Home Session Data:",  data.data.sessiondata.passport.user);
    //console.log("Home Admin Data:", data.data);
  })
  .catch(function(err) {
    console.log(err);
    //$location.path('/');
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

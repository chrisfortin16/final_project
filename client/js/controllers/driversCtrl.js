angular.module('fortinsApp')
.controller('driversCtrl', ['$scope', 'DriverSvc', function ($scope, DriverSvc) {
  DriverSvc.fetch()
  .then(function (drivers) {
    $scope.drivers = drivers
  })
}]);

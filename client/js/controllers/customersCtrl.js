angular.module('fortinsApp')
.controller('customersCtrl', ['$scope', 'CustomerSvc', function ($scope, CustomerSvc) {
  CustomerSvc.fetch()
  .then(function (customers) {
    $scope.customers = customers
  })
}]);

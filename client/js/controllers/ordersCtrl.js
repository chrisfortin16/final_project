angular.module('fortinsApp')
.controller('ordersCtrl', ['$scope', 'OrderSvc', 'CustomerSvc', function ($scope, OrderSvc, CustomerSvc) {
  OrderSvc.fetch()
  .then(function (orders) {
    $scope.orders = orders;
    //console.log(' Eyyyy Orders', orders);
  });
  CustomerSvc.fetch()
  .then(function (customers) {
    $scope.customers = customers
  });
}]);

angular.module('fortinsApp')
.controller('ordersCtrl', ['$scope', 'OrderSvc', function ($scope, OrderSvc) {
  OrderSvc.fetch()
  .then(function (orders) {
    $scope.orders = orders
  })
}]);

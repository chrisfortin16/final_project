angular.module('fortinsApp')
.service('OrderSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/orders')
    .then(function (response) {
      return response.data
    })
  }
});

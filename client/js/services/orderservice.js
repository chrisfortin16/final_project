angular.module('fortinsApp')
.service('OrderSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/orders')
    .then(function (response) {
      //console.log('Orders Coming back', response)
      return response.data
    })
  }
});

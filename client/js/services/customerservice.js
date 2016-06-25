angular.module('fortinsApp')
.service('CustomerSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/customers')
    .then(function (response) {
      console.log('Coming back', response)
      return response.data
    })
  }
});

angular.module('fortinsApp')
.service('DriverSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/drivers')
    .then(function (response) {
      return response.data
    })
  }
});

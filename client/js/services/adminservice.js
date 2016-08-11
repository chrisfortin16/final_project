angular.module('fortinsApp')
.service('AdminSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/admins')
    .then(function (response) {
      return response.data
    })
  }
});

angular.module('fortinsApp')
.service('AdminSvc', function ($http) {
  this.fetch = function () {
    return $http.get('/api/admins')
    .then(function (response) {
      //console.log('Admins Coming back', response)
      return response.data
    })
  }
});

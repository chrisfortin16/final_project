angular.module('fortinsApp').controller('loginCtrl',
  ['$scope', '$rootScope', '$location', '$http',
  function ($scope, $rootScope, $location, $http) {
    $scope.login = function () {

      var email = $scope.email;
      var password = $scope.password;

      $http.post('/api/login', {
        email: email,
        password: password
      })
      .success(function(data) {
        $location.path('/home');
        console.log("Successful! Admin Authenticated", data.passport)
      })
      .error(function(err) {
        $location.path('/');
        console.log("Failure! Admin Not Authenticated", err)
      })
    }
  }]);


angular.module('fortinsApp').controller('loginCtrl',
  ['$scope', '$rootScope', '$location', '$http',
  function ($scope, $rootScope, $location, $http) {
    $scope.login = function () {

      // $scope.error = false;
      // $scope.disabled = true;

      var email = $scope.email;
      var password = $scope.password;

      // console.log(email);
      // console.log(password);

      $http.post('/api/login', {
        email: email,
        password: password
      })
      .success(function(data) {
        $location.path('/home');
        console.log("Successful! Admin Authenticated")
      })
      .error(function() {
        console.log("Failure! Admin Not Authenticated")
        $location.path('/');
      })
    }
  }]);

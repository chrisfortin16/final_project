angular.module('fortinsApp').controller('myaccountCtrl', ["$scope", "$location", "$http", "AdminSvc", function ($scope, $location, $http, AdminSvc) {
  $http.get('/api/myaccount')
  .then(function(data) {
    console.log("Admin My Account Data:", data);
    $scope._id = data.data.sessionData.passport.user._id;
    $scope.email = data.data.sessionData.passport.user.email;
    $scope.password = data.data.sessionData.passport.user.password;
    $scope.first_name = data.data.sessionData.passport.user.first_name;
    $scope.last_name = data.data.sessionData.passport.user.last_name;
    $scope.gender = data.data.sessionData.passport.user.gender;
    $scope.street_address = data.data.sessionData.passport.user.street_address;
    $scope.postal_code = data.data.sessionData.passport.user.postal_code;
    $scope.phone_number = data.data.sessionData.passport.user.phone_number;
    $scope.position = data.data.sessionData.passport.user.position;
    $scope.date_created = data.data.sessionData.passport.user.date_created;
  })
  .catch(function(err) {
    console.log("WARNING ERROR:", err);
  });
}]);

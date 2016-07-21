angular.module('fortinsApp').controller('updateAdminCtrl', ["$scope", "$rootScope", "$q", "$location", "$http", function ($scope, $rootScope, $q, $location, $http ) {
  var done = $q.defer();
  $http.get('/api/updateAdmin')
  .then(function(data) {
    console.log("Admin My Account Data:", data.data.sessionData.passport.user);
    $scope.original_id = data.data.sessionData.passport.user._id;
    $scope.originalemail = data.data.sessionData.passport.user.email;
    $scope.originalpassword = data.data.sessionData.passport.user.password;
    $scope.originalfirst_name = data.data.sessionData.passport.user.first_name;
    $scope.originallast_name = data.data.sessionData.passport.user.last_name;
    $scope.originalgender = data.data.sessionData.passport.user.gender;
    $scope.originalstreet_address = data.data.sessionData.passport.user.street_address;
    $scope.originalpostal_code = data.data.sessionData.passport.user.postal_code;
    $scope.originalphone_number = data.data.sessionData.passport.user.phone_number;
    $scope.originalposition = data.data.sessionData.passport.user.position;
    $scope.originaldate_created = data.data.sessionData.passport.user.date_created;
    done.resolve();
  })
  .catch(function(err) {
    console.log("WARNING ERROR:", err);
  });

  $scope.updateAdmin = function() {
    done.promise.then(function() {
      if($scope.first_name === undefined) {
        var updated_first_name = $scope.originalfirst_name;
      } else {
        var updated_first_name = $scope.first_name;
      }
      if($scope.last_name === undefined) {
        var updated_last_name = $scope.originallast_name;
      } else {
        var updated_last_name = $scope.last_name;
      }
      if($scope.email === undefined) {
        var updated_email = $scope.originalemail;
      } else {
        var updated_email = $scope.email;
      }
      if($scope.password === undefined) {
        var updated_password = $scope.originalpassword;
      } else {
        var updated_password = $scope.password;
      }
      if($scope.street_address === undefined) {
        var updated_street_address = $scope.originalstreet_address;
      } else {
        var updated_street_address = $scope.street_address;
      }
      if($scope.postal_code === undefined) {
        var updated_postal_code = $scope.originalpostal_code;
      } else {
        var updated_postal_code = $scope.postal_code;
      }
      if($scope.phone_number === undefined) {
        var updated_phone_number = $scope.originalphone_number;
      } else {
        var updated_phone_number = $scope.phone_number;
      }

      $http.post('/api/updateAdmin', {
        first_name: updated_first_name,
        last_name: updated_last_name,
        email: updated_email,
        password: updated_password,
        street_address: updated_street_address,
        postal_code: updated_postal_code,
        phone_number: updated_phone_number
      })
    })
    .then(function(data) {
      console.log("UPDATED USER", data);
    })
    .catch(function(err) {
      console.log("ERROR", err);
    })

  }
}]);

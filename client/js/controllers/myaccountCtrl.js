angular.module('fortinsApp').controller('myaccountCtrl', ["$scope", "$location", "$http", "AdminSvc", function ($scope, $location, $http, AdminSvc) {
  $http.get('/api/myaccount')
  .then(function(data) {
    console.log("Profile Admin Data:", data.data.adminData);

    $scope.admins = data.data.adminData;

    var uuid = data.data.sessionData.passport.user.uuid;
    console.log('uuid', uuid);
    $scope.dashboardRoute = uuid;
  })
  .catch(function(err) {
    console.log(err);
  });

  AdminSvc.fetch()
  .then(function (admins) {
    $scope.admins = admins
  })

}]);

angular.module('fortinsApp')
.controller('adminsCtrl', ['$scope', 'AdminSvc', function ($scope, AdminSvc) {
  AdminSvc.fetch()
  .then(function (admins) {
    $scope.admins = admins
  })
}]);

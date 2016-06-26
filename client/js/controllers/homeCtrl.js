
// Home Controller
angular.module('fortinsApp').controller('homeCtrl', ["$scope", "$location", "$http", function ($scope, $location, $http) {
  $http.get('/api/home')
  .then(function(data) {
    console.log("Home Session Data:", data.data.sessions.passport.user);
    console.log("Home Admin Data:", data.data);
  })
  .catch(function(err) {
    console.log(err);
   })
}]);

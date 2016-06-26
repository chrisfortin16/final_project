// angular.module('fortinsApp').factory('AuthService',
//   ['$q', '$timeout', '$http',
//   function ($q, $timeout, $http) {
//
//     // create user variable
//     var admin = null;
//
//     // return available functions for use in the controllers
//     return ({
//       isLoggedIn: isLoggedIn,
//       login: login,
//       logout: logout,
//       register: register
//     });
//
//     function isLoggedIn() {
//       if(admin) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//
//     function login(email, password) {
//
//       // create a new instance of deferred
//       var deferred = $q.defer();
//
//       // send a post request to the server
//       $http.post('/admin/login',
//         {email: email, password: password})
//         // handle success
//         .success(function (data, status) {
//           if(status === 200 && data.status){
//             admin = true;
//             deferred.resolve();
//           } else {
//             admin = false;
//             deferred.reject();
//           }
//         })
//         // handle error
//         .error(function (data) {
//           admin = false;
//           deferred.reject();
//         });
//
//       // return promise object
//       return deferred.promise;
//
//     }
//
//     function logout() {
//
//       // create a new instance of deferred
//       var deferred = $q.defer();
//
//       // send a get request to the server
//       $http.get('/admin/logout')
//         // handle success
//         .success(function (data) {
//           admin = false;
//           deferred.resolve();
//         })
//         // handle error
//         .error(function (data) {
//           admin = false;
//           deferred.reject();
//         });
//
//       // return promise object
//       return deferred.promise;
//
//     }
//
//     function register(email, password) {
//
//       // create a new instance of deferred
//       var deferred = $q.defer();
//
//       // send a post request to the server
//       $http.post('/admin/register',
//         {email: email, password: password})
//         // handle success
//         .success(function (data, status) {
//           if(status === 200 && data.status){
//             deferred.resolve();
//           } else {
//             deferred.reject();
//           }
//         })
//         // handle error
//         .error(function (data) {
//           deferred.reject();
//         });
//
//       // return promise object
//       return deferred.promise;
//
//     }
//
// }]);

// Home Controller
angular.module('fortinsApp').controller('homeCtrl', ["$scope", "$location", "$http", 'DriverSvc', 'AdminSvc', 'OrderSvc', function ($scope, $location, $http, DriverSvc, AdminSvc, OrderSvc) {
  $http.get('/api/home')
  .then(function(data) {
  })
  .catch(function(err) {
    console.log(err);
  });

$scope.options = {
  chart: {
    type: 'discreteBarChart',
    height: 450,
    margin : {
        top: 20,
        right: 20,
        bottom: 20,
        left: 55
    },
    x: function(d){ return d.label; },
    y: function(d){ return d.value; },
    showValues: true,
    valueFormat: function(d){
        return d3.format(',.4f')(d);
    },
    transitionDuration: 500,
    xAxis: {
        axisLabel: 'X Axis'
    },
    yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: 30
    }
  }
};

$scope.data = [{
  key: "Cumulative Return",
  values: [
      { "label" : "Standard Oil" , "value" : 3600 },
      { "label" : "Premium Oil" , "value" : 1200 },
      { "label" : "Natural Gas" , "value" : 2700 },
      { "label" : "Propane" , "value" : 2100 },
      { "label" : "Coal" , "value" : 1800 }
      ]
  }]

   AdminSvc.fetch()
   .then(function (admins) {
     $scope.admins = admins
   });

   DriverSvc.fetch()
   .then(function (drivers) {
     $scope.drivers = drivers
   });

   OrderSvc.fetch()
   .then(function (orders) {
     $scope.orders = orders;
   });

}]);

var weatherApp = angular.module('weatherApp', ['ngResource', 'ngRoute']);

weatherApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");

  /**
   * Routes
   */
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
}]);

weatherApp.service('shareCity', function () {
  var _city = '';
  this.setCity = function (city) {
    _city = city;
  };
  this.getCity = function () {
    return _city;
  };
});

weatherApp.controller('homeController', ['$scope', 'shareCity', '$location', function ($scope, shareCity, $location) {

  $scope.city = '';
  $scope.setCity = function (ev) {
    ev.preventDefault();
    shareCity.setCity($scope.city);
    $location.path('/forecast')
  };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'shareCity', function ($scope, $resource, shareCity) {
  $scope.city = shareCity.getCity();
  var weatherAPiId = 'ec84ae7111a3dafd02e5a984872f4461';
  var weatherAppUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  var weatherApi = $resource(weatherAppUrl,
    {
      get: {
        method: 'GET'
      }
    });
  $scope.weatherResult = weatherApi.get({
    q: $scope.city,
    cnt: 2,
    appid: weatherAPiId
  });
  console.log($scope.weatherResult);
}]);
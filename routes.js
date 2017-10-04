weatherApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix("");

  /**
   * Routes
   */
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController',
      controllerAs: 'home'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
    .when('/forecast/:days', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
}]);
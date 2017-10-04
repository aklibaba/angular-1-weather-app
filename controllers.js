weatherApp.controller('homeController', ['shareCity', '$location', function (shareCity, $location) {

  this.city = '';
  this.setCity = function (ev) {
    ev.preventDefault();
    shareCity.setCity(this.city);
    $location.path('/forecast')
  };

}]);

weatherApp.controller('forecastController', ['$scope', '$filter', '$routeParams', 'shareCity', 'tempConverter', 'weatherService',
  function ($scope, $filter, $routeParams, shareCity, tempConverter, weatherService) {
    $scope.city = shareCity.getCity();
    $scope.tempConverter = function (opt) {
      return $filter('number')(tempConverter.convert(opt), 2);
    };
    $scope.count = $routeParams['days'];
    if ($scope.city.trim().length === 0) {
      $scope.city = 'Warsaw'
    }

    $scope.weatherResult = weatherService.get({
      q: $scope.city,
      cnt: $scope.count || '2'
    });
  }]);
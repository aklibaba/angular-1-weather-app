weatherApp.controller('homeController', ['$scope', 'shareCity', '$location', function ($scope, shareCity, $location) {

  $scope.city = '';
  $scope.setCity = function (ev) {
    ev.preventDefault();
    shareCity.setCity($scope.city);
    $location.path('/forecast')
  };

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$filter', '$routeParams', 'shareCity', 'tempConverter',
  function ($scope, $resource, $filter, $routeParams, shareCity, tempConverter) {
    $scope.city = shareCity.getCity();
    $scope.tempConverter = function (opt) {
      return $filter('number')(tempConverter.convert(opt), 2);
    };
    $scope.count = $routeParams['days'];
    console.log(typeof $scope.count);
    if ($scope.city.trim().length === 0) {
      $scope.city = 'Warsaw'
    }
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
      cnt: $routeParams['days'] || '2',
      appid: weatherAPiId
    });
    console.log($scope.weatherResult);
  }]);
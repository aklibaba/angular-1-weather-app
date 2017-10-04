weatherApp.service('shareCity', function () {
  var _city = '';
  this.setCity = function (city) {
    _city = city;
  };
  this.getCity = function () {
    return _city;
  };
});

weatherApp.service('tempConverter', function () {
  this.convert = function (opt) {
    if (opt.unit === 'C') {
      return opt['amount'] - 273.15;
    }
    else if (opt.unit === 'K') {
      return opt['amount'] + 273.15;
    }
  }
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
  var weatherAPiId = 'ec84ae7111a3dafd02e5a984872f4461';
  var weatherAppUrl = 'http://api.openweathermap.org/data/2.5/forecast';
  var weatherApi = $resource(weatherAppUrl, {
    get: {
      method: 'GET'
    }
  });

  this.get = function (opt) {
    return weatherApi.get({
      q: opt.q,
      cnt: opt.cnt,
      appid: weatherAPiId
    })
  }
}]);
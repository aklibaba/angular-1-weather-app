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
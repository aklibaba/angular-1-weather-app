weatherApp.directive('dateCard', function () {
  return {
    restrict: 'E',
    templateUrl: 'directives/date-card.html',
    replace: true,
    scope: {
      w: "=weatherObject",
      tempConverter: "&",
      dateFormat: "@"
    }
  }
});

let app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "html/home.html",
    })
    .when("/vehicle", { templateUrl: "html/vehicle.html" });
});
app.controller("navCtrl", function ($scope) {
  $scope.bar = true;
  $scope.cart = true;
});

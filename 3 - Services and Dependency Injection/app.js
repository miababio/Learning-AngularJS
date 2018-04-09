var myApp = angular.module("myApp", []);

myApp.controller("mainController", ['$scope', '$log', function($scope, $log) {
    console.log($scope);
}]);
// myApp.controller("mainController",["$scope","$log",function(o,n){n.info(o)}]);
// var myApp=angular.module("myApp",[]);myApp.controller("mainController",function(n,o){o.info(n)});
var default_Text = "this works";

var myapp = angular.module("dynaGoog", []);
var func = myapp.controller('ngCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.name = default_Text;

    $scope.url = 'https://script.google.com/a/macros/bwilliamsconsulting.com/s/AKfycbzhCB0-O8u-17z3y5hK6RXofBcuLHLITkOIsBxBVuzC2ihcpLO8/exec';
    $scope.change = function (ev) {
        if(ev == 13){
        if ($scope.name != default_Text && $scope.name.length>10) {
            callScriptFunction();
        }
        }
    }
}]);
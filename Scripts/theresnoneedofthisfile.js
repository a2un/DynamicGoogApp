var default_Text = "this works";

var myapp = angular.module("dynaGoog", []);
var func = myapp.controller('ngCtrl', ['$scope','$http',function ($scope,$http) {
    $scope.name = default_Text;
    $scope.showdiv = 0;
    $scope.url = 'https://script.google.com/a/macros/bwilliamsconsulting.com/s/AKfycbzhCB0-O8u-17z3y5hK6RXofBcuLHLITkOIsBxBVuzC2ihcpLO8/exec';

    $scope.items = ['Client Details', 'Current Jobs', 'Client Folder', 'Client Information', 'Client Timesheet Entries'];
  
    

    $scope.change = function () {
        //if(ev == 13){
            if ($scope.name != default_Text && $scope.name.length>6) {
                var folderLink = callScriptFunction($scope.name);
                appendPre(folderLink);
            }
            else if ($scope.name == default_Text) {
                appendPre('Please change the input text');
            }
            else if ($scope.name.length <= 6) {
                appendPre('length of text must be greater than 6');
            }
        //}
    }
}]);
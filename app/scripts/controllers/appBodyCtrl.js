"use strict";
angular.module("attendance").controller("appBodyCtrl",["$scope","passwordService",function($scope,ps){
    $scope.id=1;
    $scope.updateId=function(id){
        if (id==4){
            ps.logout();
        }
        $scope.id=id;
    }
}]);
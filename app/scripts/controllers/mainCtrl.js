"use strict";
angular.module("attendance").controller("mainCtrl",["$scope","passwordService",function($scope,ps){
    $scope.auth=ps.auth;
    $scope.$watch(function(){
        return ps.auth;
    },function(newVal,oldVal){
        if(newVal!=oldVal){
            $scope.auth=newVal;
        }
    });
}]);
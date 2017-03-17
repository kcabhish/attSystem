"use strict";
angular.module("attendance").controller("navBarCtrl",["$scope","passwordService","navBarService",function($scope,ps,navBarService){
    $scope.navBarList = navBarService.getNavList();
}]);
"use strict";
angular.module("attendance").controller("navBarCtrl",["$scope","passwordService","navBarService",function($scope,ps,navBarService){
   // alert(navBarService.test);
    $scope.navBarList = [];
    navBarService.navBarList.forEach(function(item){
        if (item.cred.indexOf(ps.loggedUser.cred)>=0){
            $scope.navBarList.push(item);
        }  
    });

}]);
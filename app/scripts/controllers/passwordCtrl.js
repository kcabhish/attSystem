"use strict";
angular.module("attendance").controller("passwordCtrl",["$scope",function("$scope"){
    alert("From Password Controller");
    
    //Scope variable for biding form elements
    $scope.passwordModel={
        "username":"",
        "password":""
    };
}]);
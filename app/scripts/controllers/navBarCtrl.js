"use strict";
angular.module("attendance").controller("navBarCtrl",["$scope",function($scope){
    $scope.navBarList = [
        {
            "title":"Home",
            "id":1,
            "cred":[1,2] 
        },{
            "title":"Add Student",
            "id":2,
            "cred":[1] 
        },{
            "title":"Student List",
            "id":3,
            "cred":[1,2] 
        },{
            "title":"Logout",
            "id":4,
            "cred":[1,2]
        },
        
    ]
}]);
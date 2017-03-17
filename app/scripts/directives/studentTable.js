"use strict";
angular.module("attendance").directive("studentTable",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/studentTable.html",
        controller:"studentTableCtrl"
    }
}]);
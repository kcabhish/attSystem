"use strict";
angular.module("attendance").directive("appBody",[function(){
    return{
        restrict:"EA",
        templateUrl:"/app/views/body.html",
        controller:"appBodyCtrl"
    }
}]);
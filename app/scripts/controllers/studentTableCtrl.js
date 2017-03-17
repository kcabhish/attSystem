"use strict";
angular.module("attendance").controller("studentTableCtrl",["$scope","studentService",function($scope,ss){
    $scope.studentList =ss.getStudentList();
    console.log($scope.studentList);
}]);
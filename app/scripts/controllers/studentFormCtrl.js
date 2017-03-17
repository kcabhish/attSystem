angular.module("attendance")
.controller("studentFormCtrl",["$scope","studentService",function($scope,ss){
    $scope.studentFormModel=ss.studentModel;
    $scope.submit=function(){
        console.log($scope.studentFormModel);
        ss.addStudent($scope.studentFormModel);
        //Resetting the form contents
        $scope.studentFormModel={};
    }
}]);
"use strict";
angular.module("attendance").service("passwordService",[function(){
    this.auth = false;
    
    var passwordModel={
        "username":"",
        "password":""
    };
    var validUser=[
        {
            "username":"cat",
            "password":"123"
        },{
            "username":"test",
            "password":"123"
        }
    ];
    
    this.setUsername=(uname)=>passwordModel.username=uname;
    this.setPassword=(pass)=>passwordModel.password=pass;
    this.getUsername=()=>passwordModel.username;
    this.getPassword=()=>passwordModel.password;
    
}]);
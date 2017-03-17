"use strict";
angular.module("attendance").service("passwordService",[function(){
    var _this=this;
    this.auth = false;
    this.loggedUser={};
    
    var passwordModel={
        "username":"",
        "password":""
    };
    
    var validUser=[
        {
            "username":"cat",
            "password":"123",
            "cred":2  //1 is for admin 2 is for others
        },{
            "username":"con",
            "password":"123",
            "cred":2
        },{
            "username":"admin",
            "password":"123",
            "cred":1
        }
    ];
    this.logout=()=>{
        _this.auth = false;
        _this.loggedUser = {}
    }
    //Function to validate the user
    this.validateUser=()=>{
        for(let i =0;i<validUser.length;i++){
            if (validUser[i].username==passwordModel.username
                &&
                validUser[i].password==passwordModel.password
               ){
                _this.auth = true;
                _this.loggedUser = validUser[i];
                break;
            }
        }
        return _this.auth;
    }
    
    this.setUsername=(uname)=>passwordModel.username=uname;
    this.setPassword=(pass)=>passwordModel.password=pass;
    this.getUsername=()=>passwordModel.username;
    this.getPassword=()=>passwordModel.password;
    
}]);
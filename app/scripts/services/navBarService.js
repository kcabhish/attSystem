"use strict";
angular.module("attendance").service("navBarService",["passwordService",function(ps){
    this.test="test";
    this.navBarList=[
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
            "title":"Questions",
            "id":4,
            "cred":[1]
        },
        {
            "title":"Logout",
            "id":5,
            "cred":[1,2]
        }
        
    ];
    
    
    this.getNavList = function(){
        var updatedList = [];
        navBarList.forEach(function(item){
            if (item.cred.indexOf(ps.loggedUser.cred)>=0){
                updatedList.push(item);
            }
        });
        return updatedList;
    };
    
    
    

}]);
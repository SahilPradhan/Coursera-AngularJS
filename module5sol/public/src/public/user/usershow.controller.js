(function () {
"use strict";

angular.module('public')
.controller('UserInfoShowController', UserInfoShowController);

UserInfoShowController.$inject = ['MenuService'];
function UserInfoShowController(MenuService) {
  var $ctrl = this;
  // $ctrl.menuItems = menuItems;
  console.log("Inside UserInfoShowController");

  

  

   $ctrl.showinfo = function() {
      var info = MenuService.showinfo();

      return info;

      // if (info.isArray()) 
      // {
      //   var fname = info[0];
      //   var lname = info[1];
      //   var email = info[2];
      //   var favdish = info[3];

        
      //     return fname, lname, email, favdish;
      // }

      // // if (info.length>1) 
      // // {
      // //   
        

      // // }
      // else
      // {
      //   return info;
      // }

      

      

   };


 

     
 

  
}



})();

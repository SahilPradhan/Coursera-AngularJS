(function () {
"use strict";

angular.module('public')
.controller('UserInfoController', UserInfoController);

UserInfoController.$inject = ['MenuService'];
function UserInfoController(MenuService) {
  var $ctrl = this;
  // $ctrl.menuItems = menuItems;
  console.log("Inside UserInfoController");

  var fname = "";
  var lname = "";
  var emailid = "";
  var favdish = "";

  $ctrl.saveinfo = function(firstname, lastname, email, favouritedish) 
  {

	var favdish = favouritedish.toUpperCase();

  	var promise = MenuService.getMenuItemsU();

  	var dish_found = 0;

  	promise.then(function (response) 
  	{
   	
  		$ctrl.menuitems = response.data;

  		for (var i = 0; i < $ctrl.menuitems['menu_items'].length; i++)
  		{

  			if ($ctrl.menuitems['menu_items'][i].short_name == favdish) 
  			{
  				dish_found = 1;
  				MenuService.saveinfo(firstname, lastname, email, favdish);
  				console.log(firstname, lastname, email, favdish);
  				break;
  			}


  			
  		}

  		if (dish_found == 0) 
  		{
  			alert("Dish doesn't exist");
  		}

    
  })
  .catch(function (error) {
   		console.log("Something went terribly wrong.");
  });
  		
  

  	
  };

  
}



})();

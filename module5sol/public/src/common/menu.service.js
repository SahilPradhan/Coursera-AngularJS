(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  // this.fname = "";
  // this.lname = "";
  // this.emailid = "";
  // this.favdish = "";
  service.fname = "";
  service.lname = "";
  service.emailid = "";
  service.favdish = "";
  service.info = [];
  service.keys = ["First Name", "Last Name", "email", "Favourite Dish"];
  service.obj = {};


  service.saveinfo = function(firstname, lastname, email, favouritedish) {
     service.fname = firstname;
     service.lname = lastname;
     service.emailid = email;
     service.favdish = favouritedish;

    // console.log(service.fname, service.lname, service.emailid, service.favdish);
    service.info.push(service.fname, service.lname, service.emailid, service.favdish);

    for(var i = 0; i < service.keys.length; i++)
    { 
        service.obj[service.keys[i]] = service.info[i]; 
    }
  };

  service.showinfo = function() {
     // console.log(service.info);
     if (service.info.length > 0) 
     {
        return service.obj; 
     }
     else
      return "Please sign up first !";
     
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getMenuItemsU = function() {
    var response = $http({
      method: "GET",
      url: (ApiPath + "/menu_items.json")
    });

    return response;
  };


  service.getMenuItems = function (shortName) {
    var config = {};
    if (shortName) {
      config.params = {category: shortName};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  }


  service.getCategory = function (shortName) {
    return $http.get(ApiPath + '/categories/' + shortName + '.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItem = function(shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json')
    .then(function(response) {
      return response.data;
    });
  };


  service.saveMenuItem = function (menuItem) {
    return $http.put(ApiPath + '/menu_items/' + menuItem.short_name, menuItem)
    .then(function (response) {
      return response.data;
    });
  };

}



})();

(function () {
'use strict';

angular.module('ShoppingList')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('ItemDetailService', ItemDetailService);



ItemDetailService.$inject = ['$http','$q', '$timeout']
function ItemDetailService($http, $q, $timeout) {

  var iservice = this;

  iservice.getMenuItems = function (shortName) 
  {
    var response = $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      param:{
        category: shortName
      }
    });

    return response;
  };

  

  // List of shopping items
  // var items = [];

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // service.getItems = function () {
  //   var deferred = $q.defer();

  //   // Wait 2 seconds before returning
  //   $timeout(function () {
  //     // deferred.reject(items);
  //     deferred.resolve(items);
  //   }, 800);

  //   return deferred.promise;
  // };
}







})();
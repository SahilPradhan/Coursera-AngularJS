(function () {
'use strict';

angular.module('ShoppingList')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['ShoppingListService', 'items'];
function MainShoppingListController(ShoppingListService, items) {

  var mainList = this;
  // mainList.items = items;

  var promise = ShoppingListService.getMenuCategories();

  promise.then(function (response) {
    mainList.items = response.data;

    // console.log();
    console.log(mainList.items);

    
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });

  
}

})();
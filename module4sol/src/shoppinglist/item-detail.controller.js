(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams', 'items', 'ItemDetailService'];

function ItemDetailController(items, ItemDetailService) {
  var itemDetail = this;

  console.log(items.itemId);

  var promise = ItemDetailService.getMenuItems(items.itemId);

  promise.then(function (response) {
    //mainList.items = response.data;

    console.log(response);
    //console.log(mainList.items);

    
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  // var item = items[$stateParams.itemId];
  // itemDetail.name = item.name;
  // itemDetail.quantity = item.quantity;
  // itemDetail.description = item.description;
}



})();
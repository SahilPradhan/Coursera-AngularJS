(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListAddController.$inject = ['ShoppingListService'];
function ShoppingListAddController(ShoppingListService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListService.getItems();

  // itemAdder.itemName = "";
  // itemAdder.itemQuantity = "";

  itemAdder.addItem = function (itemIndex) {
    ShoppingListService.addItem(itemAdder.items[itemIndex].name, itemAdder.items[itemIndex].quantity);
    ShoppingListService.removeItem(itemIndex);
  }
}


ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.itemsBought = ShoppingListService.getItemsBought();

  // showList.removeItem = function (itemIndex) {
  //   ShoppingListService.removeItem(itemIndex);
  // };
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
  {
    name: "Chocolate Milk",
    quantity: "2 bottles"
  },

  { name: "Doritos",
    quantity: "6 bags"
  },
  {
    name: "Diet Coke",
    quantity: "10 cans"
  },
  {
    name: "Instant Noodles",
    quantity: "5 packs"
  },
  {
    name: "Ice-cream",
    quantity: "2 tubs"
  }
  ];

  var itemsBought = [];

  


  service.addItem = function (itemName, quantity) {

    

    var item = {
      name: itemName,
      quantity: quantity
    };
    itemsBought.push(item);

    
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };

  service.getItemsBought = function () {
    return itemsBought;
  };
}

})();
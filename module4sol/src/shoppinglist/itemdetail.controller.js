(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['ItemDetailService', '$stateParams', 'items'];

function ItemDetailController(ItemDetailService, items) 
{
  var itemDetail = this;

  console.log(items.itemId);

  var id = items.itemId; 

  var promise = ItemDetailService.getMenuItems(id);

  itemDetail.newarray = [];

  promise.then(function (response) 
  {
    //mainList.items = response.data;
     itemDetail.items = response.data;

    // console.log(response.data['menu_items']);

    for (var i = 0; i < itemDetail.items['menu_items'].length; i++) 
    {
      
      if (itemDetail.items['menu_items'][i].short_name.includes(id)) 
      {
        itemDetail.newarray.push(itemDetail.items['menu_items'][i]);

      }
    }

    console.log(itemDetail.newarray);

  })

  .catch(function (error) 
  {
    console.log("Something went terribly wrong.");
  });


  // var item = items[$stateParams.itemId];
  // console.log(itemDetail.newarray);
  // itemDetail.names  = itemDetail.newarray;
  // console.log(itemDetail.names);
}



})();

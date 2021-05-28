(function () {
'use strict';

angular.module('CounterApp', [])
.controller('Counter',Counter);

Counter.$inject = ['$scope'];
function Counter($scope){
	$scope.message = "";
	$scope.countFood = function () {
		
		var foods = $scope.my_food;
		
		if (foods == null || foods == "") 
		{
			$scope.message = "Please enter data first";
		}

		else
		{
			const items = foods.split(',');

			var list_length = items.length;

			if (list_length <=3) 
			{
				if (list_length == 0) 
				{
					$scope.message = "Please enter data first1";
				}
				else
					$scope.message = "Enjoy!";
			}
			else
			{
				$scope.message = "Too much!";
			}
			
		}
		
	};
}

})();

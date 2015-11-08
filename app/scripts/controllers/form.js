'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('FormCtrl', function($scope, $http) {
  	$scope.menu = [
  	  	{
  			name: "Fries",
  			price: "$10.00"
  		},
  		{
  			name: "Burger",
  			price: "$30.00"
  		},
  		{
  			name: "Pizza",
  			price: "$20.00"
  		},
  		{
  			name: "Beer",
  			price: "$10.00"
  		},
  		{
  			name: "Coke",
  			price: "$5.00"
  		}
  	];

  	$scope.submitMenu = function() {
  		console.log("submitMenu");
  		var order = {
  			timestamp: new Date().getTime(),
  			beacon_id: "d157546925db",
  			namespace:"EDD1EBEAC04E5DEFA017",
  			selected_items: $scope.menu
  		}
  		console.log(order);
  		$http.post('https://immense-taiga-9511.herokuapp.com/acceptOrder', order).success(function(a) {
  			console.log(a);
  		// $scope.paymentCount = 0;
  		// $scope.$apply();
  		})
  	}
});
'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 */
angular.module('sbAdminApp')
  .controller('MainCtrl', function($scope,$position,$http) {
  	console.log("test");
  	$scope.paymentCount = 0;
  	//$http.post('https://immense-taiga-9511.herokuapp.com/acceptOrder', {test:"test"}).success(function(a) {
  		// console.log(a);
  		// $scope.paymentCount = 0;
  		// $scope.$apply();
  	//})
  });

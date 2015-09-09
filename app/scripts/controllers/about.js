'use strict';

/**
 * @ngdoc function
 * @name semillasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the semillasApp
 */
angular.module('semillasApp')
  .controller('AboutCtrl',['$scope','$http', function ($scope,$http) {
  	$scope.semillas=[];
  	$http.get('/semillas.json')
  		.success(function (data){
  				$scope.semillas=data;	
  		});
    
 
  }]);

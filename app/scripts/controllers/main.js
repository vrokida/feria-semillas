'use strict';

/**
 * @ngdoc function
 * @name semillasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the semillasApp
 */
angular.module('semillasApp')
  .controller('MainCtrl',['$scope','$http','$routeParams', function ($scope, $http,$routeParams) {
    
    $scope.semilla = [];
 	var nombre=$routeParams.nombre;

 
 

function filtarPorNombre(nombre, data){
  				
			var resultados= data.filter(function(m){		
				return m.nombre===nombre;
			});			
			if(resultados.length>0){			
				return resultados[0];
			}
			else{
				//Fallar
			}
 }

    $http.get('/semillas.json')
  		.success(function (data){
  				$scope.semillas=data;	
  				$scope.semilla=filtarPorNombre(nombre,data);
  		});
    
 
  }]);

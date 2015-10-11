'use strict';
angular.module('semillasApp')
  .directive('semillaComentario', function () {
  
 return{
    restrict:'E',
    templateUrl:'views/partials/comentario.html',
    controller: 'CommentsCtrl',
    controllerAs: 'comnCtrl'

      };
  });


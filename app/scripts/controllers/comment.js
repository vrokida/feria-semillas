'use strict';

/**
 * @ngdoc function
 * @name semillasApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the semillasApp
 */
angular.module('semillasApp')
  .controller('CommentsCtrl', function () {
  	this.comments=[];
  	this.show=false;
    this.comment={};
  	this.toggle=function(){  		
		  this.show=!this.show;  				
  	};
    this.anonymounsChange=function(){
      if(this.comment.anonymouns){
        this.comment.email="";
      }
    }

    this.addCommet=function(){
      this.comment.date=Date.now();
      console.log(this.comment.body);
      this.comments.push(this.comment);
         console.log( this.comments);
      this.comment={};
    };

 
  });




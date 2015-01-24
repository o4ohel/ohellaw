'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:CorpCtrl
 * @description
 * # CorpCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('CorpCtrl', function ($scope) {
  	$scope.faqs = [{
    	question: 'What are the advantages of organizing an LLC or incorporating?',
    	answer: 'Both a corporate structure and an LLC offer increased protection from liability. Creditors may not legally go after your personal assets in fulfilling any business debts.'
    },{
    	question: 'What is the major difference between incorporating and organizing an LLC?',
    	answer: 'Corporate entity structures are much more formal structures, and require regular meetings, while LLC structures are informal, and do not require regular meetings.'
    },{
    	question: 'What is the best type of legal entity for my business?',
    	answer: 'That depends on a number of factors, including your business philosophy, market conditions, and type of sector your business deals in. An attorney is best suited to advise you on the most appropriate legal entity.'
    },{
    	question: 'Where is the best place to incorporate or organize my business?',
    	answer: 'This depends on where the business will have its primary address, and where most of the business activity will take place.'
    },{
    	question: 'Is incorporating or organizing an LLC complicated?',
    	answer: 'YES, it can be. An attorney is well suited to take care of the legal aspects of your business so that you can focus on the business side.'
    },{
    	question: 'Can an LLC member be a non-US resident?',
    	answer: 'YES. An LLC member does not have to be a resident or citizen of the United States.'
    }];
  });

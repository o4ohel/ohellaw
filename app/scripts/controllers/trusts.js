'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:TrustsCtrl
 * @description
 * # TrustsCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('TrustsCtrl', function ($scope) {
    $scope.faqs = [{
    	question: 'What can a Living Trust do for me?',
    	answer: 'A Living Trust protects your property from probate - a court mandated procedure - which takes a percentage fee off of your estate upon passing. A Living Trust saves you and your beneficiaries\' time, money, and protects privacy.'
    },{
    	question: 'Does a Living Trust change my ability to handle property?',
    	answer: 'NO. A Living Trust allows you to keep maximum command and control over your property.'
    },{
    	question: 'Does a Living Trust increase my personal income tax?',
    	answer: 'NO. Profits from a Living Trust "pass-through" the Trustee, and your income tax remains unchanged. Likewise, with a Revocable Living Trust, you do not need to file separate or special income tax forms.'
    },{
    	question: 'Does a Living Trust increase my property tax in California?',
    	answer: 'NO. You must "fund" the Trust by passing your real property into a Trust, but this transfer is exempt from Proposition 13 increased taxes.'
    },{
    	question: 'Is a Living Trust valid if I move out of California to another state?',
    	answer: 'YES. A Living Trust is valid in all 50 states. A Living Trust also protects your property from probate in all 50 states.'
    },{
    	question: 'Is a Living Trust beneficial to a single person?',
    	answer: 'YES. A Living Trust offers protection to your estate, no matter if you are single, in a domestic partnership, or are married.'
    },{
    	question: 'Are Living Trusts beneficial only for the very wealthy?',
    	answer: 'NO. Living Trusts are beneficial to everyone with assets above $150,000. If your estate is worth more than $150,000, a Living Trust will save you time, money, and keep your finance private.'
    },{
    	question: 'May I change a Living Trust after I draft one?',
    	answer: 'YES. Living Trusts may be changed and revised, according to your wishes.'
    },{
    	question: 'Is the management of Living Trust complicated?',
    	answer: 'NO. The management of a Living Trust is not complicated for most people.'
    }];
  });

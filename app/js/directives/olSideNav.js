'use strict';

angular.module('app').directive('olSideNav', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			active: '@'
		},
		controller: function($scope) {
			$scope.links = [{
				url: 'home', label: 'Home'
			},{
				url: 'areas', label: 'Areas Of Practice'
			},{
				url: 'profile', label: 'Attorney Profile'
			},{
				url: 'testimonials', label: 'Testimonials'
			},{
				url: 'contact', label: 'Contact Us'
			}];	
		},
		template: '\n' +
			'<ul class="side-nav"> \n' +
				'<li ng-class="{active: active == link.url}" ng-repeat="link in links"><a href="#{{link.url}}">{{link.label}}</a></li> \n' +
			'</ul> \n' +
			'\n'
	};	
});

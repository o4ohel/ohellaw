'use strict';

// var app = (function(document, $) {
// 	var docElem = document.documentElement, _userAgentInit = function() {
// 		docElem.setAttribute('data-useragent', navigator.userAgent);
// 	}, _init = function() {
// 		$(document).foundation();
// 		_userAgentInit();
// 	};

// 	return {
// 		init : _init
// 	};

// })(document, jQuery);

// (function() {
// 	app.init();
// })();

angular.module('app', ['ngRoute', 'mm.foundation']).config(function($routeProvider) {
	$routeProvider
	.when('/home', {templateUrl : 'views/home.html', controller : 'HomeController'})
	.when('/areas', {templateUrl : 'views/areas.html', controller : 'AreasController'})
	.when('/profile', {templateUrl : 'views/profile.html'})
	.when('/testimonials', {templateUrl : 'views/testimonials.html', controller : 'TestimonialsController'})
	.when('/contact', {templateUrl : 'views/contact.html', controller : 'ContactController'})
	.when('/estateplan', {templateUrl: 'views/estateplan.html', controller: 'EstateplanController'})
	.when('/disclaimer', {templateUrl : 'views/disclaimer.html'})
	.otherwise({redirectTo : '/home'});
}).controller('MainController', ['$scope', '$route', '$routeParams', '$location',function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.randomizeList = function(list) {
		var i = list.length;
  		if(i === 0) {
  			return false;
  		}
  		while(--i) {
    		var j = Math.floor(Math.random() * (i + 1)),
    			tempi = list[i],
    			tempj = list[j];
    		list[i] = tempj;
    		list[j] = tempi;
  		}
		return list;
	};
}]).controller('HomeController', ['$scope', '$http',function($scope, $http) {
	$http.get('data/testimonials.json').success(function(data) {
		$scope.testimonials = data.items;
	});
}]).controller('AreasController', ['$scope',function($scope) {
	$scope.foo = 'bar';
}]).controller('TestimonialsController', ['$scope', '$http',function($scope, $http) {
	$http.get('data/testimonials.json').success(function(data) {
		$scope.testimonials = $scope.randomizeList(data.items);
	});
}]).controller('ContactController', ['$scope',function($scope) {
	$scope.foo = 'bar';
}])
; 
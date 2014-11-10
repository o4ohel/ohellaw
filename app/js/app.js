var app = (function(document, $) {'use strict';
	var docElem = document.documentElement, _userAgentInit = function() {
		docElem.setAttribute('data-useragent', navigator.userAgent);
	}, _init = function() {
		$(document).foundation();
		_userAgentInit();
	};

	return {
		init : _init
	};

})(document, jQuery);

(function() {'use strict';
	app.init();

})();

angular.module('app', ['ngRoute']).config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/home', {templateUrl : 'views/home.html', controller : 'HomeController'})
	.when('/areas', {templateUrl : 'views/areas.html', controller : 'AreasController'})
	.when('/profile', {templateUrl : 'views/profile.html', controller : 'ProfileController'})
	.when('/testimonials', {templateUrl : 'views/testimonials.html', controller : 'TestimonialsController'})
	.when('/contact', {templateUrl : 'views/contact.html', controller : 'ContactController'})
	.when('/estateplan', {templateUrl: 'views/estateplan.html', controller: 'EstateplanController'})
	.when('/disclaimer', {templateUrl : 'views/disclaimer.html'})
	.otherwise({redirectTo : '/home'});

	// configure html5 to get links working on jsfiddle
	// $locationProvider.html5Mode(true);
}).controller('MainController', ['$scope', '$route', '$routeParams', '$location',function($scope, $route, $routeParams, $location) {
	$scope.$route = $route;
	$scope.$location = $location;
	$scope.$routeParams = $routeParams;
	$scope.randomizeList = function(list) {
		var i = list.length;
  		if(i == 0) return false;
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

}]).controller('ProfileController', ['$scope',function($scope) {

}]).controller('TestimonialsController', ['$scope', '$http',function($scope, $http) {
	$http.get('data/testimonials.json').success(function(data) {
		$scope.testimonials = $scope.randomizeList(data.items);
	});
}]).controller('ContactController', ['$scope',function($scope) {

}])
; 
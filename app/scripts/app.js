'use strict';

/**
 * @ngdoc overview
 * @name ohellawApp
 * @description
 * # ohellawApp
 *
 * Main module of the application.
 */
angular
  .module('ohellawApp', ['ngAnimate','ngMessages','ngRoute','ngSanitize','ngTouch','ui.bootstrap','ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {url: '/', templateUrl: 'views/home.html', controller: 'HomeCtrl'})
      .state('areas', {url: '/areas', template: '<ui-view/>', abstract: true})
        .state('areas.main', {url: '/', templateUrl: 'views/areas.html'})
        .state('areas.trusts', {url: '/trusts', templateUrl: 'views/trusts.html', controller: 'TrustsCtrl'})
        .state('areas.corp', {url: '/corp', templateUrl: 'views/corp.html', controller: 'CorpCtrl'})
      .state('profile', {url: '/profile', templateUrl: 'views/profile.html', controller: 'ProfileCtrl'})
      .state('testimonials', {url: '/testimonials', templateUrl: 'views/testimonials.html', controller: 'TestimonialsCtrl'})
      .state('locations', {url: '/locations', template: '<ui-view/>', abstract: true})
        .state('locations.cupertino', {url: '/cupertino', templateUrl: '/views/cupertino.html'})
        .state('locations.fremont', {url: '/fremont', templateUrl: '/views/fremont.html'})
        .state('locations.sanmateo', {url: '/sanmateo', templateUrl: '/views/sanmateo.html'})
      .state('contact', {url: '/contact', templateUrl: 'views/contact.html', controller: 'ContactCtrl'})
      .state('disclaimer', {url: '/disclaimer', templateUrl: 'views/disclaimer.html', controller: 'DisclaimerCtrl'})
      .state('estateplan', {url: '/estateplan', templateUrl: 'views/estateplan.html', controller: 'EstateplanCtrl'})
    ;
  });

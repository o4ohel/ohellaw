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
  .module('ohellawApp', ['ngMessages','ngRoute','ngSanitize','ngTouch','ui.bootstrap','ui.router', 'ngAnimate'])
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
      .state('directions', {url: '/directions', templateUrl: 'views/cupertino.html'})
      .state('contact', {url: '/contact', templateUrl: 'views/contactform.html', controller: 'ContactCtrl'})
      .state('disclaimer', {url: '/disclaimer', templateUrl: 'views/disclaimer.html', controller: 'DisclaimerCtrl'})
      .state('estateplan', {url: '/estateplan/:planId?capNames', template: '<ui-view class="estateplan"></ui-view>', abstract: true, controller: 'EstateplanCtrl'})
        .state('estateplan.form', {url: '', templateUrl: 'views/estateplan.html'})
        .state('estateplan.preview', {url: '/preview', templateUrl: 'views/estateplan_preview.html'})
    ;
  });

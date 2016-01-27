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
      .state('profile', {url: '/profile', templateUrl: 'views/profile.html'})
      .state('testimonials', {url: '/testimonials', templateUrl: 'views/testimonials.html', controller: 'TestimonialsCtrl'})
      .state('directions', {url: '/directions', templateUrl: 'views/cupertino.html'})
      .state('contact', {url: '/contact', templateUrl: 'views/contactform.html'})
      .state('disclaimer', {url: '/disclaimer', templateUrl: 'views/disclaimer.html'})
      .state('estateplan', {url: '/estateplan/:planId?capNames', template: '<ui-view class="estateplan"></ui-view>', abstract: true, controller: 'EstateplanCtrl'})
        .state('estateplan.form', {url: '', templateUrl: 'views/estateplan.html'})
          .state('estateplan.form.section', {url: '/:sectionId', templateProvider: function ($stateParams, epfSectionSrv, $templateFactory) {
              epfSectionSrv.setCurId($stateParams.sectionId);
              var url = epfSectionSrv.getTplUrl($stateParams.sectionId);
              return $templateFactory.fromUrl(url);
            }
          })    
        .state('estateplan.preview', {url: '/preview', templateUrl: 'views/estateplan_preview.html'})
    ;
  });

angular.module('ohellawApp').factory('epfSectionSrv', function($http) {
  var curId = 1,
      sections = {
        '1': {tpl: 'views/estateplan/estateplanClient.html', state: '', label: 'Client'},
        '2': {tpl: 'views/estateplan/_estateplanBeneficiaries.html', state: '', label: 'Beneficiaries'},
        '3': {tpl: 'views/estateplan/_estateplanTrustees.html', state: '', label: 'Trustee(s)'},
        '4': {tpl: 'views/estateplan/_estateplanDistribution.html', state: '', label: 'Distribution'},
        '5': {tpl: 'views/estateplan/_estateplanGuardianship.html', state: '', label: 'Guardianship'},
        '6': {tpl: 'views/estateplan/_estateplanPowerOfAttorney.html', state: '', label: 'Power Of Attorney'},
        '7': {tpl: 'views/estateplan/_estateplanHealthCareProvisions.html', state: '', label: 'Health Care'},
        '8': {tpl: 'views/estateplan/_estateplanBurial.html', state: '', label: 'Burial'},
        '9': {tpl: 'views/estateplan/_estateplanRentalProperty.html', state: '', label: 'Rental Property'},
        '10': {tpl: 'views/estateplan/_estateplanStocks.html', state: '', label: 'Stocks'},
        '11': {tpl: 'views/estateplan/_estateplanPrevMarriage.html', state: '', label: 'Previous Marriage'},
        '12': {tpl: 'views/estateplan/_estateplanPrevPlan.html', state: '', label: 'Previous Plan'},
        '13': {tpl: 'views/estateplan/_estateplanNotes.html', state: '', label: 'Notes'}
      };
  function getSections() {
    return sections;
  }
  function getTplUrl(id) {
    return sections[id].tpl;
  }
  function getTpl(id) {
    var url = getTplUrl(id);
    return $http.get(url);
  }
  function getCurId() {
    return curId;
  }
  function setCurId(id) {
    curId = id;
  }
  return {
    getSections: getSections,
    getTpl: getTpl,
    getTplUrl: getTplUrl,
    getCurId: getCurId,
    setCurId: setCurId
  };
});

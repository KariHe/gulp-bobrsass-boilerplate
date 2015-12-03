(function() {
  'use strict';

  var ngModule = angular.module('pages.{{camelCase name}}', [
    'ui.router'
  ]);

  ngModule.config(function($stateProvider) {
    $stateProvider
      .state('{{camelCase name}}', {
        url: '/{{camelCase name}}',
        templateUrl: 'pages/{{camelCase name}}/{{camelCase name}}.html',
        controller: '{{capitalize name}}Controller',
        controllerAs: 'pageCtrl'
      });
  });
})();

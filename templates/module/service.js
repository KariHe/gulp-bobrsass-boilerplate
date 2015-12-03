(function() {
  'use strict';

  angular.module('app.{{camelCase name}}')
    .factory('{{capitalize name}}', function() {
      return {
        value: 'test'
      };
    });

})();

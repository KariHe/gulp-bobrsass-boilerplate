module.exports = function (plop) {
  plop.addHelper('capitalize', function (text) {
    return text.toLowerCase().replace(/\W/g, '').replace(/^[a-z]]/, function(letter) {
      return letter.toUpperCase();
    })
  });

  plop.setGenerator('page', {
    description: 'Add new page',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Page name',
      validate: function (value) {
        if ((/.+/).test(value)) {
          return true;
        }
        return 'name is required';
      }
    }],
    actions: [
      {
        type: 'add',
        path: 'src/app/pages/{{camelCase name}}/{{camelCase name}}.module.js',
        templateFile: 'templates/page/module.js'
      },
      {
        type: 'add',
        path: 'src/app/pages/{{camelCase name}}/{{camelCase name}}-controller.js',
        templateFile: 'templates/page/controller.js'
      },
      {
        type: 'add',
        path: 'src/app/pages/{{camelCase name}}/{{camelCase name}}.html',
        templateFile: 'templates/page/page.html'
      },
      {
        type: 'add',
        path: 'src/app/pages/{{camelCase name}}/{{camelCase name}}.test.js',
        templateFile: 'templates/page/test.js'
      },
      {
        type: 'modify',
        path: 'src/app/pages/pages.module.js',
        pattern: /(-- APPEND ITEMS HERE --)/gi,
        template: "$1\r\n    'pages.{{camelCase name}}',"
      }
    ]
  });

  plop.setGenerator('module', {
    description: 'Add new main level module',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Module name',
      validate: function (value) {
        if ((/.+/).test(value)) {
          return true;
        }
        return 'name is required';
      }
    }],
    actions: [
      {
        type: 'add',
        path: 'src/app/{{camelCase name}}/{{camelCase name}}.module.js',
        templateFile: 'templates/module/module.js'
      },
      {
        type: 'add',
        path: 'src/app/{{camelCase name}}/{{camelCase name}}-service.js',
        templateFile: 'templates/module/service.js'
      },
      {
        type: 'add',
        path: 'src/app/{{camelCase name}}/{{camelCase name}}.spec.js',
        templateFile: 'templates/module/spec.js'
      },
      {
        type: 'modify',
        path: 'src/app/app.js',
        pattern: /(-- APPEND ITEMS HERE --)/gi,
        template: "$1\r\n    'app.{{camelCase name}}',"
      }
    ]
  });

};
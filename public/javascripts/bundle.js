'use strict';

var app = angular.module('vinyl', ['ui.router']);

angular.module('vinyl')
  .run(function() {
    console.log('Vinyl Exchange Online');
  });

'use strict';

angular.module('vinyl')
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/templates/home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: '/templates/login/login.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: '/templates/signup/signup.html'
      })
      .state('browse', {
        url: '/browse',
        templateUrl: '/templates/browse/browse.html'
      })
      .state('add', {
        url: '/',
        templateUrl: '/templates/add/add.html'
      })
      .state('inventory', {
        url: '/inventory',
        templateUrl: '/templates/inventory/inventory.html'
      })
      .state('trades', {
        url: '/trades',
        templateUrl: '/templates/trades/trades.html'
      });
  });

'use strict';

angular.module('vinyl')
  .constant('urls', {
    'apiUrl': ''
  });

'use strict';

angular.module('vinyl')
  .controller('mainCtrl', function($scope) {

  });

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
        templateUrl: '/templates/login/login.html',
        controller: 'mainCtrl'
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
  .controller('mainCtrl', function($scope, $state, User) {
    $scope.login = function() {
      User.login($scope.user).success(function(data) {
        $state.go('home');
        console.log('working!!!');
      }).
      catch(function(error) {
        console.log(error);
        console.log('so sad');
      });
    }


  });

'use strict';

angular.module('vinyl')
  .service('User', function($http, urls) {

    this.login = function(user) {

      return $http.post(urls.apiUrl + "/login", user)
    }
  });

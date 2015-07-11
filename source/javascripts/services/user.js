'use strict';

angular.module('vinyl')
  .service('User', function($http, urls) {

    this.login = function(user) {

      return $http.post(urls.apiUrl + "/login", user)
    }
  });

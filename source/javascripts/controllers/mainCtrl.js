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

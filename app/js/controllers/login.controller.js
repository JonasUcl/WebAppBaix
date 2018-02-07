app.controller('loginController', ['authService', '$scope', '$http', '$state',
  function (authService, $scope, $http, $state, $route) {

    var vm = this;
    window.scope = $scope;
    $scope.username = vm.username;

    $scope.onFormSubmit = function (event, form) {
      authService.getToken($scope.username);
        $state.go("home");

    }
  }

]);


app.controller('homeController', ['authService', '$scope', '$http',
  function (authService, $scope, $http) {

    authService.getPrice().then(function (response) {
      $scope.data = response.data.ofertas;
    });  
  }
]);

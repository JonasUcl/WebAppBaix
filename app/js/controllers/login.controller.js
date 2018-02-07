// app.controller('homeController', ['$scope','authService',
//     function ($scope,authService) {
//         console.log("controller");
//     }
// ]);

app.controller('loginController', ['authService', '$scope', '$http', '$state',
  function (authService, $scope, $http, $state, $route) {
    var vm = this;
    window.scope = $scope;
    $scope.username = vm.username;



    $scope.onFormSubmit = function (event, form) {
      authService.getToken($scope.username).then(function (response) {

        console.log("mariana", response.data);

        $scope.resp = response.data;
        $scope.token = $scope.resp.token;


        if ($scope.resp.error == "E-mail inválido." || "Você solicitou uma token recentemente. Aguarde até 30 minutos.") {
          $scope.resp = $scope.resp.error;
          alert($scope.resp);
          window.location.reload();
          console.log($scope.resp);
        }
        else {
          $state.go('home');
          function saveToken(token) {
            console.log("entrou");
            $window.localStorage.token = JSON.stringify($scope.token);
          };


        }

      });

    }
  }

]);

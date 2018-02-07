(function () {
    'use strict';

    app.service('authService', authService);

    authService.$inject = ['$q', '$http', '$window', '$state'];

    function authService($q, $http, $window, $scope, $state) {

        function saveToken(token) {
            console.log("entrou");
            $window.localStorage.token = JSON.stringify(token)
        };

        // function getToken(username) {
        //     return $http({
        //         url: 'http://testedev.baixou.com.br/processo/auth',
        //         method: "POST",
        //         data: 'email=' + username,
        //         headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        //     })
        //     .saveToken = function(token) {
        //         $window.localStorage.token = JSON.stringify(token)
        //     };
        // };

        // function getPrice() {
        //     var tokenn = JSON.parse(window.localStorage.token);
        //     return $http.get('http://testedev.baixou.com.br/processo/lista', { params: { token: tokenn } })
        // }

        var service = this;
        var getPrice = this;
        var getToken = this;

        service.getToken = getToken;
        service.getPrice = getPrice;


        return {
            getToken(username) {
                return $http({
                    url: 'http://testedev.baixou.com.br/processo/auth',
                    method: "POST",
                    data: 'email=' + username,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })

            },
            getPrice() {
                var teste = JSON.parse(window.localStorage.token);
                return $http.get('http://testedev.baixou.com.br/processo/lista', { params: { token: teste } })
            }
        }
    }
})();
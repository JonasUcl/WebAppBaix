(function () {
    'use strict';

    app.service('authService', authService);

    authService.$inject = ['$q', '$http', '$window', '$state'];

    function authService($q, $http, $window, $scope, $state) {

        function saveToken(token) {
            $window.localStorage.token = JSON.stringify(token);
        };

        var service = this;
        var getPrice = this;
        var getToken = this;


        service.getToken = getToken;
        service.getPrice = getPrice;


        return {
            getToken(username) {

                $http({
                    url: 'http://testedev.baixou.com.br/processo/auth',
                    method: "POST",
                    data: 'email=' + username,
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).then(function (response) {
                        var token = {};
                        console.log(response.data);
                        saveToken(response.data.token);
                        return token;
                    },
                    function (response) {
                    });
            },
            getPrice() {
                var teste = JSON.parse(window.localStorage.token);
                return $http.get('http://testedev.baixou.com.br/processo/lista', { params: { token: teste } })// esse é o get
            }
        }
    }
})();
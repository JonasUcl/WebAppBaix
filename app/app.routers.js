app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller:'loginController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller:'homeController'
        });

});





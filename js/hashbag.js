
var single-page-app = angular.module('single-page-app', []);

single-page-app.config(function ($routeProvider) {

    $routeProvider.when("/", { templateUrl: "/home.html" }).
                   when("/server", { templateUrl: "/server.html" }).
                   when("/hlstats", { templateUrl: "/hlstats.html" }).
                   when("/members", { templateUrl: "/members.html" }).
                   when("/history", { templateUrl: "/history.html" }).
                   when("/faq", { templateUrl: "/faq.html" }).
                   when("/projects", { templateUrl: "/projects.html" }).
                   otherwise({ redirectTo: '/' });

});

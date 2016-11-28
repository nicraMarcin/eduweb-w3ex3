(function() {

var blogApp = angular.module("blogApp", ["ngRoute", "blogApp.services", "blogApp.controllers"]);

blogApp
    .constant("API_URL", "https://jsonplaceholder.typicode.com/posts")
    .config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider) {

        $httpProvider.defaults.cache = true;

        $routeProvider
            .when("/", {
                controller: "BlogController",
                templateUrl: "views/blog.html"
            })
            .when("/blog/:postid", {
                controller: "PostController",
                templateUrl: "views/post.html"
            })
            .otherwise({
                redirectTo: "/"
            });

    }]);

})();
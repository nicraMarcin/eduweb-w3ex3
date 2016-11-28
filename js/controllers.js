(function() {

var blogAppControllers = angular.module("blogApp.controllers", []);

	blogAppControllers.controller("BlogController", ["$scope", "$timeout", "BlogService", function($scope, $timeout, BlogService) {
		
		BlogService.loadPosts()
			.then(function(response) {
				$scope.posts = response.data;
				$scope.no_of_posts = response.data.length;
				$scope.postsHasLoaded = true;
			});

		$scope.limit = 15;
		$scope.offset = 0;
		$scope.loading = false;

		$scope.loadMorePosts = function() {
			$scope.loading = true;
			$timeout(function() {
				$scope.loading = false;
				$scope.limit += 15;
			},	1500);
		};


	}]);

	blogAppControllers.controller("PostController", ["$scope", "$routeParams", "BlogService", function($scope, $routeParams, BlogService) {
		
		BlogService.loadPost($routeParams.postid)
			.then(function(response) {
				$scope.post = response.data;
				$scope.postLoaded = true;
			});

		

	}]);

})();
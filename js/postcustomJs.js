(function() {
  var app = angular.module('blogpostApp', ['textAngular']);

  app.controller('PostController', ['$scope', '$http', '$log', function($scope, $http, $log) {
  	var post = this;
  	post.content = "";
  	console.log(post.content);
  }
  ]);

})();
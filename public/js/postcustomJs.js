(function() {
  var app = angular.module('blogpostApp', ['textAngular']);

  app.controller('PostController', ['$scope', '$http', '$log', function($scope, $http, $log) {
    var post = this;

    post.makePost = function() {
      
      var data = JSON.stringify({
        title: post.title,
        tags: post.tags.split(','),
        content: post.content,
        imageURL: post.imageURL,
        author: post.author
      });

      console.log('data ' + data);

      $http.post("/article", data)
        .success(function(data, status) {
          if (data.status !== 200) {
            post.error = data.error;
          } else {
            post.error = "";
          }
          console.log(data + ' ' + status);
        })
        .error(function(data, status) {
          post.error = data;
        });
    }

  }]);



})();
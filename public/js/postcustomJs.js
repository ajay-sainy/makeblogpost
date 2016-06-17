(function() {
  var app = angular.module('blogpostApp', ['textAngular']);

  app.controller('PostController', ['$scope', '$http', '$log', function($scope, $http, $log) {
    var post = this;
    var validated;
    post.makePost = function() {

      validateFields();

      if (validated) {
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
            clearFields();
            alert('Hau Dada, Kar di post...');
            console.log(data + ' ' + status);
          })
          .error(function(data, status) {
            post.error = data;
          });
      }
    }

    function clearFields() {
      post.title = "";
      post.tags = "";
      post.content = "";
      post.imageURL = "";
      post.author = "";
    }

    function validateFields() {
      if (post.title && post.tags && post.content && post.imageURL && post.author) {
        validated = true;
      } else {
        alert('O Bhiyaa, sagli field jaruri hai...');
      }

    }

  }]);



})();
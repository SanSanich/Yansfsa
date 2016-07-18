angular.module('Yansfsa')
.factory('posts', [function(){
  var o = {
    posts: [
      {title: 'Test post',upvotes:123, link: "https://www.google.ru", comments: []}
      ]
  };
  return o;
}]);
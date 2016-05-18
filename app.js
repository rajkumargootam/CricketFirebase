var MyCricket = angular.module('MyCricketApp', ['firebase','ngRoute']);
 MyCricket.config(function ($routeProvider){
    $routeProvider
    .when ('/',
    {
      templateUrl: 'pages/index.html',
      controller: 'MainController',
      controllerAs: 'hm'
    })
});

MyCricket.controller('MainController',['$scope','$firebaseArray',function($scope,$firebaseArray){
  var teamRef = new Firebase ("https://my-cricket-app.firebaseio.com/Teams")
  $scope.teams = $firebaseArray(teamRef);
   $scope.addTeams = function(){
   $scope.teams.$add({
     location:$scope.location,
     Date:$scope.Date,
     teamA:$scope.teamA,
     teamB:$scope.teamB ,

   });
    $scope.location='';
    $scope.Date='';
    $scope.teamA='';
    $scope.teamB='';
 };


}]);

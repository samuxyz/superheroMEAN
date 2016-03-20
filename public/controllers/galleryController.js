var galleryCtrl = angular.module('galleryCtrl', []);
galleryCtrl.controller('galleryController', function($scope, $http){
	$scope.superheroes = [];
	//Retrieve all the superheroes to show the gallery
	$http.get('/superhero')
		.success(function(data){
			console.log(JSON.stringify(data));
			$scope.superheroes = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	
});
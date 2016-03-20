var addCtrl = angular.module('addSuperheroCtrl', []);
addCtrl.controller('addSuperheroController', function($scope, $http, filepickerService){
	$scope.superhero = {};
	//Send the newly created superhero to the server to store in the db
	$scope.createSuperhero = function(){
		$http.post('/superhero', $scope.superhero)
			.success(function(data){
				console.log(JSON.stringify(data));
				//Clean the form to allow the user to create new superheroes
				$scope.superhero = {};
			})
			.error(function(data) {
                console.log('Error: ' + data);
            });
	};
	//Single file upload, you can take a look at the options
	$scope.upload = function(){
		filepickerService.pick(
            {
				mimetype: 'image/*',
				language: 'en',
				services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
				openTo: 'IMAGE_SEARCH'
			},
            function(Blob){
				console.log(JSON.stringify(Blob));
				$scope.superhero.picture = Blob;
				$scope.$apply();
			}
        );
	};
	//Multiple files upload set to 3 as max number
	$scope.uploadMultiple = function(){
		filepickerService.pickMultiple(
            {
				mimetype: 'image/*',
				language: 'en',
				maxFiles: 3,
				services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
				openTo: 'IMAGE_SEARCH'
			},
            function(Blob){
				console.log(JSON.stringify(Blob));
				$scope.superhero.morePictures = Blob;
				$scope.$apply();
			}
        );
	};	
});
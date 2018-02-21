'use strict';
angular.module('RentalManagementApp')
    .controller('catalogController', catalogController);

catalogController.$inject = ['$scope','$location', '$http', '$q', '$window'];

function catalogController($scope,$location, $http, $q, $window) {

$scope.locationArray = [{name:'',branches:[]}];
$scope.path = "/category";
$scope.getData = function () {
        $http.get('catalogData.json').then(function(response) {
            $scope.locations = response.data.data.locations;
            for(var i = 0; i<$scope.locations.length; i++){
            	var branchNames = $scope.locations[i].branches.map(function(br)
            		{
            			return br.name
            		});

            	$scope.locationArray.push({name:$scope.locations[i].name,branches:branchNames});

            }
        },function(er){
        	alert(er);
        });

    }

$scope.showCategories = function(branch){
	$scope.subCategoryPage = false;
	$scope.branchSelected = true; 
	$scope.selectedBranch = branch.branches[0];
}

$scope.displaySubCategory = function(category){
	$scope.branchSelected = false;
	$scope.subCategoryPage = true; 
	$scope.selectedCategory= category;
}

$scope.getData();
}



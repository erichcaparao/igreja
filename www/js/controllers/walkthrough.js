angular.module('roots.controllers')

.controller('WalkthroughCtrl', function($scope, $rootScope, $timeout, $state, Walkthrough) {

	$scope.goHome = function(){
		console.log('Ir para Login');
		Walkthrough.markAsShown();
		$state.go("app.home");	
	};

});

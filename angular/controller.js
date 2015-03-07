bowlingApp.controller("playerController",function($scope,$http) 
{	
    	$http.get("json/players.json")
    	.success(function(bowlers){
    		$scope.players = bowlers;
    	});    	
	
});

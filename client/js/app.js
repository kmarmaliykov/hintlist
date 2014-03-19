var hintApp = angular.module("hintListApp", []);


hintApp.config(['$routeProvider', function($routeProvider){
	
});
hintApp.controller("EventsListCtrl", ['$scope','$http',function($scope, $http){
	$http.get('events.json').success(function(data){
		$scope.events = data;
	});
}]);

hintApp.controller("PlacesListCtrl", ['$scope','$http',function($scope, $http){
	$http.get('places.json').success(function(data){
		$scope.places = data;
	});
}]);


function loadMap() {
	var mapOptions = {
		center: new google.maps.LatLng(53.8935943,27.5481534),
		zoom: 14
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}

google.maps.event.addDomListener(window, 'load', loadMap);

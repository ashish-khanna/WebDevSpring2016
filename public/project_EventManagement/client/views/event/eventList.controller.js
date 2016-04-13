/**
 * Created by Ashish on 4/5/2016.
 */
(function() {
    angular
        .module("EventApp")
        .controller("EventListController", EventListController)

    function EventListController($rootScope, $scope, $location, $routeParams, EventService) {
        $scope.showSpinner = true;
        $scope.basicSearchRecords = [];
        $scope.markers = [];
        $scope.createMarker = createMarker;

        var vm = this;
        console.log("Inside Event List");
        var key = $routeParams.key;

        function init(){
            EventService.getEventByQuery(key)
                .then(
                    function(doc){
                        $scope.currentPage = 1;
                        $scope.pageSize = 10;
                        $scope.basicSearchRecords = doc.events;
                        $scope.showSpinner = false;

                        var mapOptions = {
                            zoom: 8,
                            center: new google.maps.LatLng(42.364506, -71.038887),
                            mapTypeId: google.maps.MapTypeId.TERRAIN
                        }
                        $scope.map= new google.maps.Map(document.getElementById('eEvent'), mapOptions);

                        if ($scope.basicSearchRecords.length == 0) {
                            $scope.noResults = true;
                        }
                    }
                )
        }
        init();

        function createMarker(record){
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(record.venue.latitude, record.venue.longitude),
                    title: record.name.text,
                    animation: "Animation.BOUNCE",
                    icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Home_%E2%80%93_People_%E2%80%93_Default.png"
                });
            $scope.map.setCenter(marker.getPosition());
        }
    }
})();
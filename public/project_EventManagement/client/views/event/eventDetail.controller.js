/**
 * Created by Ashish on 4/4/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("EventController", EventController)

    function EventController($rootScope, $scope, $location, $routeParams, EventService){
        var vm = this;
        var eventId = $routeParams.event;

        $scope.saveEvent = saveEvent;

        function init(){
            console.log(eventId);
            EventService.getEventById(eventId)
                .then(
                    function(doc){
                        vm.event = doc;
                        $scope.event = vm.event;

                        var mapOptions = {
                            zoom: 13,
                            center: new google.maps.LatLng(vm.event.venue.latitude, vm.event.venue.longitude),
                            mapTypeId: google.maps.MapTypeId.TERRAIN,
                        }
                        $scope.map = new google.maps.Map(document.getElementById('eventMap'), mapOptions);

                        var marker = new google.maps.Marker({
                               map: $scope.map,
                                    position: new google.maps.LatLng(vm.event.venue.latitude, vm.event.venue.longitude),
                                    title: vm.event.name.text,
                                    animation: "Animation.BOUNCE",
                                    icon: "https://upload.wikimedia.org/wikipedia/commons/9/92/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Home_%E2%80%93_People_%E2%80%93_Default.png"
                                });

                    }
                )
        }
        init();


        function saveEvent(event){
            var cu = $rootScope.currentUser;
            console.log("Click Login button");

            if(cu.likes.indexOf(event.id)){
                console.log("Already Registered");
                $scope.err = "Already Registered for this event..!!";
            }else {
                EventService.saveUserEvent(cu, event)
                    .then(
                        function (response) {
                            console.log("Successfully saved events");
                            $rootScope.currentUser = response.data;
                            $location.url("/");
                        }
                    )
            }

        }
    }
})();
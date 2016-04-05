/**
 * Created by Ashish on 4/4/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("EventController", EventController)

    function EventController($rootScope, $scope, $location, $routeParams, EventService){
        var vm = this;
        console.log("EventController");

        var eventId = $routeParams.event;

        function init(){
            console.log(eventId);
            EventService.getEventById(eventId)
                .then(
                    function(doc){
                        vm.event = doc;
                        $scope.event = vm.event;
                    }
                )
        }
        init();
    }
})();
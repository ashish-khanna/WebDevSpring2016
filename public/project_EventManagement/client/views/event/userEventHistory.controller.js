/**
 * Created by Ashish on 4/15/2016.
 */
(function() {
    angular
        .module("EventApp")
        .controller("UserEventHistoryController", UserEventHistoryController)

    function UserEventHistoryController($rootScope, $scope, $location, $routeParams, EventService, EventService) {
        console.log("Inside user event history");

        function init(){
            console.log("Success in Login");
            $rootScope.history = $rootScope.currentUser.events;
        }

        init();
    }
})();

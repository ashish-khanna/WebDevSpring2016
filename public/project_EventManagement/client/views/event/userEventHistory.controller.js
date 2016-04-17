/**
 * Created by Ashish on 4/15/2016.
 */
(function() {
    angular
        .module("EventApp")
        .controller("UserEventHistoryController", UserEventHistoryController)

    function UserEventHistoryController($rootScope, $scope, $location, $routeParams, UserService, EventService) {
        console.log("Inside user event history");

        if(UserService.getUserFromWindowScope()){
            UserService.setRootScope(JSON.parse(UserService.getUserFromWindowScope()));
        }

        function init(){
            console.log("Success in Login");
            $rootScope.history = UserService.getRootScope().events;
        }

        init();
    }
})();

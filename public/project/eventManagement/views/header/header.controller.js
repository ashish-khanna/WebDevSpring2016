/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("EventApp")
        .controller("HeaderController", HeaderController)

    function HeaderController($scope, $rootScope, EventService){
        console.log("this is HeaderController");
        var vm = this

        $scope.logout = logout;
        $scope.getEvent = getEvent;

        function logout() {
            $rootScope.currentUser = null;
            $location.url("/");
        }

        function getEvent(event){
            EventService.searchEvent(event)
                .then(
                    function(doc){
                        vm.events = doc;
                        $scope.events = vm.events;

                    }
                )
        }
    }
})();
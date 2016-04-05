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
        $scope.categories = [ {
            value : '1',
            text : 'Music'
        }, {
            value : '2',
            text : 'Travel & Outdoor'
        }, {
            value : '3',
            text : 'Food & Drink'
        }, {
            value : '4',
            text : 'Seasonal & Holiday'
        }, {
            value : '6',
            text : 'Science & Technology'
        } ];

        function logout() {
            $rootScope.currentUser = null;
            $location.url("/");
        }

        function getEvent(query){
            EventService.getEventByQuery(query)
                .then(
                    function(doc){
                        vm.events = doc;
                        $scope.events = vm.events;
                        console.log(vm.events);
                        console.log(vm.events);
                    }
                )
        }
    }
})();
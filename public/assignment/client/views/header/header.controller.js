/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController)

    function HeaderController($scope, $rootScope, UserService){
        console.log("this is HeaderController");
        $scope.logout = logout;

        function logout() {
            UserService.logout();
        }

    }
})();
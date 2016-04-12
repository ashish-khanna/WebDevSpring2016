/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($scope, $routeParams, $rootScope, UserService){
        console.log("This is ProfileController");
        console.log($rootScope.user);

        $scope.update = update;

        function update(newUser) {
            UserService.updateUser(newUser._id, newUser)
                .then(function (response) {
                    if (response) {
                        UserService.setUser(response);
                     }
                }
            )
        };
    }
})();
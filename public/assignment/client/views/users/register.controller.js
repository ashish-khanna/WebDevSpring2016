/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController)

    function RegisterController($scope, $location, $rootScope, UserService){
        $scope.registerUser = function(user){
            console.log("user data -" + user);
            UserService.createUser(user)
                .then(function(response){
                    if(response){
                        UserService.setUser(response);
                        $location.url("/profile");
                    }
            });

        }
    }
})();
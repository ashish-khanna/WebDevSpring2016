/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("LoginController", LoginController)

    function LoginController($rootScope, $scope, $location, $window, UserService){
        console.log("LoginController");

        $scope.login = login;

        function login(user){
            console.log("Click Login button");
            UserService.findUserByCredential(user)
                .then(
                    function(response){
                        UserService.setUserToWindowScope(response.data[0]);
                        UserService.setRootScope(response.data[0]);

                        $location.url("/");
                    }
                )

        }
    }
})();
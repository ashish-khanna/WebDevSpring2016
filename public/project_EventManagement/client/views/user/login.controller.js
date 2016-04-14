/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("LoginController", LoginController)

    function LoginController($rootScope, $scope, $location, UserService){
        console.log("LoginController");

        $scope.login = login;

        function login(user){
            console.log("Click Login button");
            UserService.findUserByCredential(user)
                .then(
                    function(response){
                        console.log("Success in Login");
                        $rootScope.currentUser = response.data[0];
                        $location.url("/");
                    }
                )

        }
    }
})();
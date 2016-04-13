/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("LoginController", LoginController)

    function LoginController($rootScope, $scope, $location){
        console.log("LoginController");

        $scope.login = login;

        function login(user){
            console.log("Click Login button");
            $rootScope.currentUser = user;
            $location.url("/");
        }
    }
})();
/**
 * Created by Ashish on 3/3/2016.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController)

    function LoginController($scope, $location, $rootScope, UserService){
        console.log("This is LoginController");
        $scope.login = login;

        function login(user){
            UserService.findUserByCredentials(user.username,user.password,
                function(response){
                    $rootScope.currentUser = response;
                    //console.log($rootScope.user._id+", "+$rootScope.user.username+", "+$rootScope.user.email);
                }
            )
            if($rootScope.currentUser){
                $location.path('/profile');
            }
            else{
                $scope.errorMsg = "Invalid User";
            }

        }
    }
})();
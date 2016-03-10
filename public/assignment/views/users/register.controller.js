/**
 * Created by Ashish on 3/3/2016.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController)

    function RegisterController($scope, $location, $rootScope, UserService){
        $scope.registerUser = function(user){
            console.log("user data -" + user);
            UserService.createUser(user, function(response){
                $rootScope.currentUser = response;
                //console.log($rootScope.user._id+", "+$rootScope.user.username+", "+$rootScope.user.email);
            });
            $location.url("/profile");
        }
    }
})();
/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
  angular
      .module("EventApp")
      .controller("RegistrationController", RegistrationController)

    function RegistrationController($rootScope, $scope, $location, UserService){
        $scope.register = register;

        function register(user){
            console.log("This is register click");
            UserService.createUser(user)
                .then(
                    function(response){
                        console.log("Success in registration");
                    }
                )
        }

    }
})();
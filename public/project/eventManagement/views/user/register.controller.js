/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
  angular
      .module("EventApp")
      .controller("RegistrationController", RegistrationController)

    function RegistrationController($rootScope, $scope, $location){
        $scope.register = register;

        function register(){
            console.log("This is register click");
        }

    }
})();
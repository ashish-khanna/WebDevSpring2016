/**
 * Created by Ashish on 3/3/2016.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController)

    function ProfileController($scope, $routeParams, $rootScope, UserService){
        console.log("This is ProfileController");
        //var u = $routeParams.id;
        //console.log(u);
        console.log($rootScope.currentUser);

        $scope.update = update;

        function update(newUser) {
            UserService.updateUser(newUser._id, newUser,
                function (response) {
                    $rootScope.currentUser = response;
                }
            )
        };
    }
})();
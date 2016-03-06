/**
 * Created by Ashish on 3/6/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController)

    function MainController($scope, $location){
        $scope.$location = $location;
    }
})();
/**
 * Created by Ashish on 3/6/2016.
 */
'use strict';
(function(){
    angular
        .module("EventApp")
        .controller("MainController", MainController)

    function MainController($scope, $location, UserService){
        $scope.$location = $location;

        if(UserService.getUserFromWindowScope()){
            UserService.setRootScope(JSON.parse(UserService.getUserFromWindowScope()));
        }
    }
})();
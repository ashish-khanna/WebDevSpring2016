/**
 * Created by Ashish on 3/24/2016.
 */
(function(){
    angular
        .module("EventApp")
        .controller("ContactController", ContactController)

    function ContactController($rootScope, $scope, $location){
        console.log("ContactController");

    }
})();
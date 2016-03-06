/**
 * Created by Ashish on 3/3/2016.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController)

    function HeaderController($scope){
        console.log("this is HeaderController");
    }
})();
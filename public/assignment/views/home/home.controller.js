/**
 * Created by Ashish on 3/3/2016.
 */
(function() {
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController)

    function HomeController($scope){
        console.log("this is HomeController");
    }
})();
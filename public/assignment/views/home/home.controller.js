/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController)

    function HomeController($scope){
        console.log("this is HomeController");
    }
})();
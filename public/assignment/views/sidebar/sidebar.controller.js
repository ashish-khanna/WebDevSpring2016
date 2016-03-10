/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController)

    function SidebarController($scope){
        console.log("This is SidebarController");
    }
})();
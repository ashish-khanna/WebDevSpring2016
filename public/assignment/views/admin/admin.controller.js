/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController)

    function AdminController($scope){
        console.log("this is admin controller");
    }

})();
/**
 * Created by Ashish on 3/3/2016.
 */
'use strict';
(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController)

    function FieldController($scope, FormService){
        console.log("this is FormsController");
    }
})();
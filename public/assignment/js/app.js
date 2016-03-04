/**
 * Created by Ashish on 3/3/2016.
 */
(function(){

    var app = angular
        .module("FormApp", []);

    app.controller("TestController", testController);

    function testController($scope) {
        $scope.home = "Testing angular";
    }

})();
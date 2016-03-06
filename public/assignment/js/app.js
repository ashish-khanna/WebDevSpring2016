/**
 * Created by Ashish on 3/3/2016.
 */
(function(){
    var app = angular
        .module("FormApp", ["ngRoute"])
        .controller("TestController", testController)
        .config(function ($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl : "views//home/home.view.html"
                })
                .when("/home", {
                    templateUrl : "views//home/home.view.html"
                })
                .when("/profile", {
                    templateUrl : "views/users/profile.view.html"
                })
                .when("/admin", {
                    templateUrl : "views//admin/admin.view.html"
                })
                .when("/forms", {
                    templateUrl : "views//forms/forms.view.html"
                })
                .when("/register", {
                    templateUrl : "views//users/register.view.html"
                })
                .when("/login", {
                    templateUrl : "views//users/login.view.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
    });

    function testController($scope) {
        $scope.home = "Testing angular";
    }

})();
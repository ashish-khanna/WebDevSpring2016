/**
 * Created by Ashish on 3/6/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .config(function ($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl : "views/home/home.view.html",
                    controller : "HomeController"
                })
                .when("/profile", {
                    templateUrl : "views/users/profile.view.html",
                    controller : "ProfileController"
                })
                .when("/admin", {
                    templateUrl : "views/admin/admin.view.html",
                    controller : "AdminController"
                })
                .when("/forms", {
                    templateUrl : "views/forms/forms.view.html",
                    controller : "FormsController"
                })
                .when("/fields", {
                    templateUrl : "views/forms/fields.view.html",
                    controller : "FieldController"
                })
                .when("/register", {
                    templateUrl : "views/users/register.view.html",
                    controller : "RegisterController"
                })
                .when("/login", {
                    templateUrl : "views/users/login.view.html",
                    controller : "LoginController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });

})();
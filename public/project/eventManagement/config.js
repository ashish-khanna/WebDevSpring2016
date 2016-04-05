/**
 * Created by Ashish on 3/24/2016.
 */
'use strict';
(function(){
    angular
        .module("EventApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/login", {
                    templateUrl: "views/user/login.view.html",
                    controller: "LoginController"
                })
                .when("/register", {
                    templateUrl: "views/user/register.view.html",
                    controller: "RegisterController"
                })
                .when("/contact", {
                    templateUrl: "views/user/contact.view.html",
                    controller: "ContactController"
                })
                .when("/eventDetail/:event", {
                    templateUrl: "views/event/eventDetail.view.html",
                    controller: "EventController"
                })
                .otherwise({
                    redirectTo: "/"
                })
        });
})();
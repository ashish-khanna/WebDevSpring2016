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
                .when("/home", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/login", {
                    templateUrl: "views/user/login.view.html",
                    controller: "LoginController"
                })
                .when("/register", {
                    templateUrl: "views/user/register.view.html",
                    controller: "RegistrationController"
                })
                .when("/uploadevent", {
                    templateUrl: "views/event/uploadEvent.view.html",
                    controller: "UploadEventController"
                })
                .when("/contact", {
                    templateUrl: "views/user/contact.view.html",
                    controller: "ContactController"
                })
                .when("/eventDetail/:event", {
                    templateUrl: "views/event/eventDetail.view.html",
                    controller: "EventController"
                })
                .when("/eventList/:key", {
                    templateUrl: "views/event/eventList.view.html",
                    controller: "EventListController"
                })
                .when("/myFavouriteEvent", {
                    templateUrl: "views/event/myFavouriteEvents.view.html",
                    controller: "FavouriteEventController"
                })
                .when("/mypreference", {
                    templateUrl: "views/user/userpreference.view.html",
                    controller: "UserPreferenceController"
                })
                .when("/myhistory", {
                    templateUrl: "views/event/userEventHistory.view.html",
                    controller: "UserEventHistoryController"
                })
                .otherwise({
                    redirectTo: "/"
                })
        });
})();
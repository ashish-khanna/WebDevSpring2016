/**
 * Created by Ashish on 4/12/2016.
 */
'use strict';
(function() {
    angular
        .module("EventApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope, $window, $q) {

        var api = {
            createUser: createUser,
            findUserByCredential: findUserByCredential,
            savePreference: savePreference,
            setRootScope: setRootScope,
            getRootScope: getRootScope,
            setUserToWindowScope: setUserToWindowScope,
            getUserFromWindowScope: getUserFromWindowScope,
            logout: logout
        };
        return api;

        function createUser(user){
            var deferred = $q.defer();
            $http.post("/api/em/user", user)
                .then(
                    function(response){
                        deferred.resolve(response);
                    },
                    function(error){
                        deferred.reject(error);
                    }
                );
            return deferred.promise;
        }

        function findUserByCredential(user){
            var deferred = $q.defer();
            $http.post("/api/em/userlogin", user)
                .then(
                    function(response){
                        deferred.resolve(response);
                    },
                    function(error){
                        deferred.reject(error);
                    }
                );
            return deferred.promise;
        }

        function savePreference(user){
            var deferred = $q.defer();
            $http.post("/api/em/userpreference", user)
                .then(
                    function(response){
                       deferred.resolve(response);
                    },
                    function(error){
                       deferred.reject(error);
                    }
                );
            return deferred.promise;
        }

        function logout(){
            console.log("Logout here");
            $rootScope.currentUser = null;
            $window.sessionStorage.removeItem('id');
        }

        function setRootScope(user){
            $rootScope.currentUser = user;
        }

        function getRootScope(){
            return $rootScope.currentUser;
        }

        function setUserToWindowScope(user){
            $window.sessionStorage.setItem('id', JSON.stringify(user));
        }

        function getUserFromWindowScope(){
            return $window.sessionStorage.getItem('id');
        }
    }

})();

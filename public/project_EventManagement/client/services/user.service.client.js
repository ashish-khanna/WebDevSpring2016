/**
 * Created by Ashish on 4/12/2016.
 */
'use strict';
(function() {
    angular
        .module("EventApp")
        .factory("UserService", UserService);

    function UserService($http, $rootScope, $q) {

        var api = {
            createUser: createUser,
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

        function logout(){
            console.log("Logout here");
        }
    }

})();

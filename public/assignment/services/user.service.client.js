/**
 * Created by Ashish on 3/6/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService()
    {
        var users = [];
        users = [
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]		},
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		},
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]		},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]		}
        ]


        var service = {
            findUserByCredentials : findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById : deleteUserById,
            updateUser : updateUser
        };

        return service;

        function findUserByCredentials(username, password, callback)
        {
            var foundUser = null;
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u.username == username && u.password == password) {
                    foundUser = u;
                }
            }
            return foundUser;
        }

        function findAllUsers(callback)
        {
            return users;
        }

        function createUser(user, callback)
        {
            users.push(user);
            return users;
        }

        function deleteUserById(userId, callback)
        {
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u._id == userId) {
                    users.splice(i,1);
                }
            }
            return false;
        }

        function updateUser(userId, user, callback)
        {
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u._id == userId) {
                    users[i] = user;
                }
            }

            return users;
        }

    }
})();
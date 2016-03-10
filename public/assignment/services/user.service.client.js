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
            updateUser : updateUser,
            getMaxId : getMaxId
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
            if (typeof callback === "function") {
                callback(foundUser);
            }
        }

        function findAllUsers(callback)
        {
            callback(users);
        }

        function createUser(user, callback)
        {
            user._id = getMaxId();
            users.push(user)

            if (typeof callback === "function") {
                callback(user);
            }
        }

        function deleteUserById(userId, callback)
        {
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u._id == userId) {
                    users.splice(i,1);
                }
            }
            if (typeof callback === "function") {
                callback(users);
            }
        }

        function findUserById(userId){
            for (var index in users){
                var user = users[index];
                if(userId == user._id){
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user, callback)
        {
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if (u._id == userId) {
                    users[i] = user;
                }
            }

            if (typeof callback === "function") {
                callback(user);
            }
        }

        function getMaxId(callback){
            var id = -1;
            for (var i = 0; i < users.length; i++) {
                var u = users[i];
                if(id < parseInt(u._id)){
                   id = parseInt(u._id);
                }
            }
            return (id + 1);
        }
    }
})();
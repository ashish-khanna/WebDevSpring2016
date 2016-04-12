/**
 * Created by Ashish on 3/19/2016.
 */
//var mock = require("./user.mock.json");
var uuid = require('node-uuid');

// load q promise library
var q = require("q");

module.exports = function(db, mongoose) {
    // load user schema
    var UserSchema = require("./user.schema.server.js")(mongoose);

    // create user model from schema
    var UserModel = mongoose.model('UserModel', UserSchema);

    var api = {
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        createUser: createUser,
        findUserById: findUserById,
        deleteUserById: deleteUserById,
        getAllUsers: getAllUsers,
        updateUserById: updateUserById
    };
    return api;

    function findUserById(userId) {
        return UserModel.findById(userId);
    }

    function deleteUserById(userId) {
        var deferred = q.defer();

        // remove user with mongoose user model's remove()
        UserModel.remove(
            {_id: userId},
            function(err, stats) {

                if (err) {
                    // reject promise if error
                    deferred.reject(err);
                } else {
                    // resolve promise
                    deferred.resolve(findAllUsers());
                }
            });
        return deferred.promise;
    }

    function createUser(user) {
        var _id = uuid.v1();
        var newUser = {
            "_id": _id,
            "username": user.username,
            "password": user.password,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "emails" : [user.emails],
            "phones" : [user.phones]
        };

        var deferred = q.defer();

        UserModel.create(newUser, function (err, doc) {

            if (err) {
                // reject promise if error
                console.log(err);
                deferred.reject(err);
            } else {
                // resolve promise
                console.log(doc);
                deferred.resolve(doc);
            }

        });

        // return a promise
        return deferred.promise;
    }

    function getAllUsers() {
        var deferred = q.defer();

        // find users with mongoose user model's find()
        UserModel.find(
            function(err, doc) {

                if (err) {
                    // reject promise if error
                    deferred.reject(err);
                } else {
                    // resolve promise
                    deferred.resolve(doc);
                }

            });
        return deferred.promise;
    }

    function updateUserById(userId, newUser) {
        var deferred = q.defer();
        if(newUser.emails) {
            if(newUser.emails && newUser.emails.indexOf(",")>-1) {
                newUser.emails =  newUser.emails.split(",");
            }
        }
        if(newUser.phones) {
            if(newUser.phones && newUser.phones.indexOf(",")>-1) {
                newUser.phones =  newUser.phones.split(",");
            }
        }
        // update user with mongoose user model's update()
        UserModel.update (
            {_id: userId},
            {$set: newUser},
            function (err, stats) {
                if(err) {
                    deferred.reject(err);
                }
                else {
                    UserModel.findById(userId,
                        function (err, user) {
                            if(err) {
                                deferred.reject(err);
                            }
                            else {
                                deferred.resolve(user);
                            }
                        });
                }
            });
        return deferred.promise;
    }

    function findUserByCredentials(username, password) {
       var deferred = q.defer();

        // find one user with mongoose user model's findOne()
        UserModel.findOne(

            // first argument is predicate
            { username: username,
                password: password },

            // doc is unique instance matches predicate
            function(err, doc) {

                if (err) {
                    // reject promise if error
                    console.log("hello man1");
                    console.log(err);
                    deferred.reject(err);
                } else {
                    // resolve promise
                    console.log("hello man");
                    deferred.resolve(doc);
                }

            });

        return deferred.promise;
    }

    function findUserByUsername(userName) {
        var deferred = q.defer();

        // find one user with mongoose user model's findOne()
        UserModel.findOne (
            {username: userName},
            function (err, user) {
                if(err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(user);
                }
            });
        return deferred.promise;
    }
};
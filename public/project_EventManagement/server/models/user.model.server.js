/**
 * Created by Ashish on 4/12/2016.
 */

// load q promise library
var q = require("q");

module.exports = function(db, mongoose) {
    // load user schema
    var UserSchema = require("./user.schema.server.js")(mongoose);

    // create user model from schema
    var UserModelEm = mongoose.model('UserModelEm', UserSchema);


    var api = {
        createUser: createUser,
        findUserByCredential: findUserByCredential,
        updateUserPreferences: updateUserPreferences
    };
    return api;

    function createUser(user){
        var newUser = {
            "email": user.emailId,
            "password": user.password,
            "firstName": user.fName,
            "lastName": user.lName,
            "address": user.address,
            "city": user.city,
            "zip": user.zipCode,
            "phone" : user.phone
        };

        var deferred = q.defer();

        UserModelEm.create(newUser, function (err, doc) {

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

    function findUserByCredential(user) {
        var uemail = user.email;
        var upassword = user.password;
        var deferred = q.defer();

        // find one user with mongoose user model's findOne()
        UserModelEm.find(
            // first argument is predicate
            {
                email: uemail,
                password: upassword
            },

            // doc is unique instance matches predicate
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

    function updateUserPreferences(user) {
        var uid = user._id;
        var upreference = user.preference;
        var deferred = q.defer();

        // find one user with mongoose user model's findOne()
        UserModelEm.update(
            // first argument is predicate
            {
                _id: uid
            },
            {
                $set: user
            },

            // doc is unique instance matches predicate
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

}
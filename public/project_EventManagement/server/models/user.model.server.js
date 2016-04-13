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
        createUser: createUser
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

}
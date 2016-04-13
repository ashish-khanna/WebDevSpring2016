/**
 * Created by Ashish on 4/12/2016.
 */
module.exports = function(mongoose) {
    // use mongoose to declare a user schema
    var UserSchema = mongoose.Schema({
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        address: String,
        city: String,
        zip: String,
        phone: String
        // collection property sets
        // collection name to 'user'
    }, {collection: 'em.user'});
    return UserSchema;
};
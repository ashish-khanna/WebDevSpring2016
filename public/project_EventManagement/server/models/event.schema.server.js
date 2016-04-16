/**
 * Created by Ashish on 4/14/2016.
 */
module.exports = function(mongoose) {
    // use mongoose to declare a user schema
    var EventSchema = mongoose.Schema({
        id: String,
        name: {
            text: String
        },
        logo: {
            url: String
        },
        start: {
            local: String
        },
        capacity: String,
        url: String,
        description: {
            text: String
        },
        venue: {
            address: {
                address_1: String,
                address_1: String,
                city: String,
                country: String,
                latitude: String,
                longitude: String
            }
        },
        userLikes: [String]
        // collection property sets
        // collection name to 'user'
    }, {collection: 'em.event'});
    return EventSchema;
};
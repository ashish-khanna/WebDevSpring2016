/**
 * Created by Ashish on 4/14/2016.
 */
// load q promise library
var q = require("q");

module.exports = function(db, mongoose) {
    // load user schema
    var EventSchema = require("./event.schema.server.js")(mongoose);

    // create user model from schema
    var EventModelEm = mongoose.model('EventModelEm', EventSchema);


    var api = {
        saveUserEvent: saveUserEvent
    };
    return api;

    function saveUserEvent(userId, eventObj){
        var deferred = q.defer();

        console.log("Inside saveUserEvent");
        EventModelEm.findOne({id: eventObj.id},
            function(err, doc){
                if(err){
                    deferred.reject(err);
                }

                if(doc){
                    doc.userLikes.push(userId);
                    doc.save(function(err, doc){
                        if (err) {
                            deferred.reject(err);
                        } else {
                            deferred.resolve(doc);
                        }
                    });
                }
                else{
                    //create new entry for this event in collection
                    event = new EventModelEm({
                        id: eventObj.id,
                        name: {
                            text: eventObj.name.text
                        },
                        logo: {
                            url: eventObj.logo.url
                        },
                        start: {
                            local: eventObj.start.local
                        },
                        capacity: eventObj.capacity,
                        url: eventObj.url,
                        description: {
                            text: eventObj.description.text
                        },
                        venue: {
                            address: {
                                address_1: eventObj.venue.address.address_1,
                                address_1: eventObj.venue.address.address_2,
                                city: eventObj.venue.address.city,
                                country: eventObj.venue.address.country,
                                latitude: eventObj.venue.address.latitude,
                                longitude: eventObj.venue.address.longitude
                            }
                        }
                    });

                    event.userLikes.push(userId);

                    event.save(function(err, doc){
                            if (err) {
                                deferred.reject(err);
                            } else {
                                deferred.resolve(doc);
                            }
                        });
                }
            });

        return deferred.promise;
    }

}

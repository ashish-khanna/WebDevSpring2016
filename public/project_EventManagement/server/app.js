/**
 * Created by Ashish on 4/12/2016.
 */
module.exports = function(app, db, mongoose) {
    var userModel = require("./models/user.model.server.js")(db, mongoose);
    var eventModel = require("./models/event.model.server.js")(db, mongoose);

    var userService = require("./services/user.service.server.js") (app, userModel);
    var eventService = require("./services/event.service.server.js") (app, userModel, eventModel);
};
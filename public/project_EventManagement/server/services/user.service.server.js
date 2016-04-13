/**
 * Created by Ashish on 4/12/2016.
 */
module.exports = function(app, userModel) {
    app.post("/api/em/user", register);

    function register(req, res) {
        var user = req.body;
        userModel.createUser(user)
            .then(
                // login user if promise resolved
                function ( doc ) {
                    //req.session.currentUser = doc;
                    res.json(doc);
                },
                // send error if promise rejected
                function ( err ) {
                    res.status(400).send(err);
                }
            );
    }

}
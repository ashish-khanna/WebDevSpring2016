/**
 * Created by Ashish on 4/14/2016.
 */
module.exports = function(app, userModel, eventModel) {
   app.post("/api/em/saveuserevent/:id", saveUserEvent);

    function saveUserEvent(req, res){
        console.log("inside save userevent in server");
        var userId = req.params.id;
        var eventObj = req.body;

        eventModel.saveUserEvent(userId, eventObj)
            .then(
                function (event) {
                    userModel.updateUserLikes(userId, event)
                        .then(
                            function (doc){
                                res.json(doc);
                            },
                            function(err){
                                res.status(400).send(err);
                            }
                        );
                    //res.json(doc);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );

        //userModel.findUserById(userId)
        //    .then(
        //        // login user if promise resolved
        //        function ( doc ) {
        //            //req.session.currentUser = doc;
        //            console.log("inside userModel.findUserById");
        //            var u = doc.likes.push(eventObj.id);
        //            userModel.updateUserPreferences(u)
        //                .then(
        //                    // login user if promise resolved
        //                    function ( doc1 ) {
        //                        //req.session.currentUser = doc;
        //                        console.log(doc1);
        //                        res.json(doc1);
        //                    },
        //                    // send error if promise rejected
        //                    function ( err1 ) {
        //                        res.status(400).send(err1);
        //                    }
        //                );
        //        },
        //        // send error if promise rejected
        //        function ( err ) {
        //            res.status(400).send(err);
        //        }
        //    );


    }

}
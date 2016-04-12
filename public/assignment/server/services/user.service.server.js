/**
 * Created by Ashish on 3/19/2016.
 */
module.exports = function(app, userModel) {
    app.get("/api/assignment/user?username=username",getUsers);
    app.get("/api/assignment/user/:username/password/:password",getUsers);
    app.post("/api/assignment/user", register);
    //app.get("/api/assignment/user", delegate);
    app.get("/api/assignment/user/:id", profile);
    app.put("/api/assignment/user/:userId", updateUserById);
    app.delete("/api/assignment/user/:userId", deleteUserById);
    //app.post("/api/project/omdb/logout", logout);

    function getUsers(req, res){
       if(req.params.username){
            if(req.params.password){
                login1(req, res);
            }else{
                findUserByUsername(req, res);
            }
        }else{
            getAllUsers(req, res);
        }
    }

    function login1(req, res){
        userModel.findUserByCredentials(req.params.username, req.params.password)
            .then(
                // return user if promise resolved
                function (doc) {
                    res.json(doc);
                },
                // send error if promise rejected
                function (err) {
                    res.status(400).send(err);
                }
            );
    }
    

    function register(req, res) {
        var user = req.body;
        console.log(user);
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


        //console.log("this is register service");
        //console.log(user);
        //res.json(user);
    }

    function profile(req, res) {
        var userId = req.params.id;
        console.log("IDD :::: ", userId);
        userModel.findUserById(userId)
            .then(
                // return user if promise resolved
                function (doc) {
                    res.json(doc);
                },
                // send error if promise rejected
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    //function delegate(req, res) {
    //    if (req.query.username && req.query.password) {
    //        findUserByCredentials(req, res);
    //    }
    //    else if (req.query.username) {
    //        findUserByUsername(req, res);
    //    }
    //    else {
    //        getAllUsers(req, res);
    //    }
    //}

    function getAllUsers(req, res) {
        userModel.getAllUsers()
            .then(
                    // return user if promise resolved
                    function (doc) {
                        res.json(doc);
                    },
                    // send error if promise rejected
                    function (err) {
                        res.status(400).send(err);
                    }
                );
    }

    function findUserByUsername(req, res) {
        var username = req.query.username;
        userModel.findUserByUsername(username)
            .then(
                 // return user if promise resolved
                 function (doc) {
                      res.json(doc);
                 },
                 // send error if promise rejected
                 function (err) {
                      res.status(400).send(err);
                 }
                );
    }

    //function findUserByCredentials1(req, res) {
    //    var credentials = {
    //        username: req.query.username,
    //        password: req.query.password
    //    };
    //
    //    var user = userModel.findUserByCredentials(credentials);
    //    res.json(user);
    //}

    function updateUserById(req, res) {
        var userId = req.params.userId;
        var user = req.body;
        userModel.updateUserById(userId, user)
        .then(
            function (doc) {
                console.log("after update");
                console.log(doc);
                console.log(user);
                res.json(doc);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function deleteUserById(req, res) {
        var userId = req.params.userId;
        userModel.deleteUserById(userId)
        .then(
            function (doc) {
                res.json(doc);
            },
            function (err) {
                res.status(400).send(err);
            }
        );
    }

    function logout(req, res) {
        res.send(200);
    }
};
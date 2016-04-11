#!/bin/env node
//  OpenShift sample Node application
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
// create a default connection string
var connectionString = 'mongodb://localhost/WebDev';

// use remote connection string
// if running in remote server
if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

// connect to the database
var db = mongoose.connect(connectionString);


var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer());

app.use(express.static(__dirname + '/public'));


require("./public/assignment/server/app.js")(app, db, mongoose);
//require("./public/assignment/server/services/user.service.server.js")(app, db, mongoose);
//require("./public/assignment/server/services/form.service.server.js")(app, db, mongoose);
//require("./public/assignment/server/services/field.service.server.js")(app, db, mongoose);

var s = "<!DOCTYPE html>";
s += "<html lang='en'>";
s += "<head>";
s += "  <title>My Form</title>";
s += "  <meta charset='utf-8'>";
s += "  <meta name='viewport' content='width=device-width, initial-scale=1'>";
s += "  <link rel='stylesheet' href='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>";
s += "  <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js'></script>";
s += "  <script src='http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'></script>";
s += "</head>";
s += "<body>";
s += "";
s += "<div class='container'>";
s += "  <h1>PART Demo Rest API </h1>";
s += "  <h2>1. General Information </h2>";
s += "  <h3>Your Information </h3>";
s += "  <form class='form-horizontal' role='form' action='getForm' method='post'>";
s += "    <div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='name'>Name:</label>";
s += "      <div class='col-sm-10'>";
s += "        <input type='text' class='form-control' name='name' placeholder='Enter Name'>";
s += "      </div>";
s += "    </div>";
s += "	<div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='address'>Address:</label>";
s += "      <div class='col-sm-10'>";
s += "        <input type='text' class='form-control' name='address' placeholder='Enter address'>";
s += "      </div>";
s += "    </div>";
s += "	<div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='city'>City, State, Zip:</label>";
s += "      <div class='col-sm-10'>";
s += "        <input type='text' class='form-control' name='city' placeholder='Enter City, State, Zip'>";
s += "      </div>";
s += "    </div>";
s += "	<div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='phone'>Phone:</label>";
s += "      <div class='col-sm-10'>";
s += "        <input type='text' class='form-control' name='phone' placeholder='Enter phone'>";
s += "      </div>";
s += "    </div>";
s += "";
s += "	<div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='email'>Email:</label>";
s += "      <div class='col-sm-10'>";
s += "        <input type='email' class='form-control' name='email' placeholder='Enter email'>";
s += "      </div>";
s += "    </div>";
s += "	<h3>Pet Information </h3>";
s += "    <div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='account'>Account Number:</label>";
s += "      <div class='col-sm-10'>          ";
s += "        <input type='text' class='form-control' name='account' placeholder='Enter Account Number'>";
s += "      </div>";
s += "    </div>";
s += "    <div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='petName'>Name:</label>";
s += "      <div class='col-sm-10'>          ";
s += "        <input type='text' class='form-control' name='petName' placeholder='Enter Name:'>";
s += "      </div>";
s += "    </div>";
s += "    <div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='breed'>Breed:</label>";
s += "      <div class='col-sm-10'>          ";
s += "        <input type='text' class='form-control' name='breed' placeholder='Enter Breed:'>";
s += "      </div>";
s += "    </div>";
s += "    <div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='age'>Age:</label>";
s += "      <div class='col-sm-10'>          ";
s += "        <input type='text' class='form-control' name='age' placeholder='Enter Age:'>";
s += "      </div>";
s += "    </div>";
s += "    <div class='form-group'>";
s += "      <label class='control-label col-sm-2' for='gender'>Gender:</label>";
s += "      <div class='col-sm-10'>          ";
s += "        <input type='text' class='form-control' name='gender' placeholder='Enter gender:'>";
s += "      </div>";
s += "    </div>";
s += "    <div class='form-group'>        ";
s += "      <div class='col-sm-offset-2 col-sm-10'>";
s += "        <div class='checkbox'>";
s += "          <label><input type='checkbox'> Remember me</label>";
s += "        </div>";
s += "      </div>";
s += "    </div>";
s += "    <div class='form-group'>        ";
s += "      <div class='col-sm-offset-2 col-sm-10'>";
s += "        <button type='submit' class='btn btn-default'>Submit</button>";
s += "      </div>";
s += "    </div>";
s += "  </form>";
s += "</div>";
s += "";
s += "</body>";
s += "</html>";

app.get('/test', function(req, res){
    res.send(s);
});

app.get('/hello', function(req, res){
    res.send("Hello World - this is my testing api");
});

app.listen(port, ipaddress);
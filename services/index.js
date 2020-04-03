var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
mongoose.Promise = global.Promise;

// The main instance of HTTP server
var server = require('http').Server(app);

// server configuration
var config = {};
config.mongoURI = {
    development: "mongodb://localhost:27017/serverDB",
};

// Added for exposing our server instance to the test suite
module.exports = server;

/*DB Connection*/
mongoose.connect(config.mongoURI[app.settings.env], function(err, db) {
    if(err) {
	console.log('Error connecting to the database. ' + err);
    } else {
	console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
    }
});

var hostname = 'localhost';
var port = 8080;

// APIs go here

// Start listening for requests
server.listen(process.env.PORT || port, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
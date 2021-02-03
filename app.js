const express = require('express');
const cors = require('cors');
const apiResponse = require('./helpers/apiResponse');
var apiRouter = require("./routes/Route");

var app = express();

// support parsing of application/json type post data
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({ extended: false }));  //to recognize the incoming Request Object as strings or arrays.
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use("/", apiRouter);

// throw 404 if URL not found
app.all("*", function(req, res) { //   Server unable to find a requested resource from the client, it returns a HTTP Response code 404.
	return apiResponse.notFoundResponse(res, "Page not found");
});


module.exports = app;
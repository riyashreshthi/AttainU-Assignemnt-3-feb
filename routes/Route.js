var express = require("express");
var app = express();
var user = require("../controllers/UserController");

app.post("/login", user.login);


module.exports = app;
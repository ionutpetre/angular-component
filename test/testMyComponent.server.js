var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser');

var app = express();

app.use(express.static(path.join(__dirname, '.')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

var port = 1234;
var host = 'localhost';

app.listen(port, host, function() {
    console.log("server starting on " + host + ":" + port);
});
require('rootpath')();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('config.json');
var mongoose = require('mongoose');

mongoose.connect(config.connectionString);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/people', require('controllers/people.controller'));
app.use('/api/customers', require('controllers/customers.controller'));
app.use('/api/tasks', require('controllers/tasks.controller'));

app.use('/', require('controllers/home.controller'));

app.use('/app', express.static('app'));

var server = app.listen(3000, function(){
    console.log('Server listening at port 3000');
});
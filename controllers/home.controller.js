var path = require('path');
var express = require('express');
var router = express.Router();

// use session auth to secure the angular app files
router.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../app/index.html'));
});

module.exports = router;
var express = require('express');
var path = require('path');

var router = express.Router();

/* GET home page. */

// router.get('*', function(req, res, next){
//   res.sendFile(path.join(__dirname + '/views/', 'index.hjs'))
// })

// router.get('/', function(req, res, next) {
//   res.render('index.html', null);
// });

// router.get('/createzone', function(req, res, next) {
//   res.render('createZone', null);
// });

// router.get('/createcomment', function(req, res, next) {
//   res.render('createcomment', null);
// });

module.exports = router;

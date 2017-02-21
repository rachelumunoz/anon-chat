var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

require('dotenv').config()
// const MongoClient = require('mongodb').MongoClient;

// MongoClient.connect(process.env.MONGODB_URI, (err, db) => {  
//   if (err) {
//     return console.log(err);
//   }
// })

var dbURL = 'mongodb://localhost:27017/yakyik'
process.env.MONGODB_URI
mongoose.connect(process.env.MONGODB_URI, function(err, res){
  if(err){
    console.log('DB connection failed', err)
  }else {
    console.log('DB connection success')
  }
})



var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

app.use(express.static('public')); 


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hjs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);
// app.use('/', index);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/public/', 'index.html'))
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

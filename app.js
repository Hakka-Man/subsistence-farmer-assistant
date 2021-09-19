var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Call body-parser for POST data handling
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Google Auth
const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '1030812775063-voaa2nmetvaq5bgs4g9ln6ntmmls9t13.apps.googleusercontent.com';
const client = new OAuth2Client('1030812775063-voaa2nmetvaq5bgs4g9ln6ntmmls9t13.apps.googleusercontent.com');

//CockroachDB
const Sequelize = require("sequelize-cockroachdb");
 
// For secure connection to CockroachDB
const fs = require('fs');
 
// Connect to CockroachDB through Sequelize
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "alan",
  password: "haaxEmGrSBlZII6S",
  host: "free-tier.gcp-us-central1.cockroachlabs.cloud",
  port: 26257,
  database: "subsistance-farmer-3652.bank",
  dialectOptions: {
    ssl: {
      
      //For secure connection:
      ca: fs.readFileSync('/cc-ca.crt')
              .toString()
    },
  },
  logging: false, 
});

//Define the table we'll be working with in CockroachDB

const Produce = sequelize.define("produce", {
  produceName: {
      type: Sequelize.TEXT,
  },
  price: {
      type: Sequelize.INTEGER,
  },
  slogan: {
      type: Sequelize.TEXT,
  },
  discription: {
    type: Sequelize.TEXT,
  },
  recipes: {
    type: Sequelize.TEXT,
  },

});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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


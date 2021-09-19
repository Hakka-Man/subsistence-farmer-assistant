var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/demo-post', function(req, res, next) {
    res.render('post/viewpost')
});

router.get('/enterData', function(req, res, next) {
  res.render('enterData');
});

router.get('/profile', function(req, res, next) {
  res.render('userInfo');
});

router.get('/editInfo', function(req, res, next) {
  res.render('editUser');
});

router.get('/orders', function(req, res, next) {
  res.render('orders');
});

router.get('/dashboard', function(req, res, next) {
  res.render('buyerDashboard');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

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
      ca: fs.readFileSync('certs/cc-ca.crt')
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

//Handle submitted form data
router.post('/submit', function (req, res) {
 
  //Get our values submitted from the form
  var fromName = req.body.produceName;
  var fromPrice = req.body.price;
  var fromslogan = req.body.slogan;
  var fromDiscription = req.body.discription;
  var fromRecipes = req.body.recipes;

  //Add our POST data to CockroachDB via Sequelize
  Produce.sync({
      force: false,
  })
      .then(function () {
      // Insert new data into Produce table
      return Produce.bulkCreate([
          {
          produceName: fromName,
          price: fromPrice,
          slogan: fromslogan,
          discription: fromDiscription,
          recipes: fromRecipes,
          },
      ]);
      })

      //Error handling for database errors
      .catch(function (err) {
      console.error("error: " + err.message);
      });    
      
      //Tell them it was a success
      res.send('Submitted Successfully!<br /> Name:  ' + fromName + '<br />Price:  ' + fromPrice);
      console.log('Submitted Successfully!<br /> Name:  ' + fromName + '<br />Price:  ' + fromPrice)
});


module.exports = router;

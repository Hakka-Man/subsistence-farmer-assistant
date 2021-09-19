var express = require('express');
var router = express.Router();

//Define the table we'll be working with in CockroachDB

// router.get('/test', (req, res) => {
//     //Get our data from CockroachDB
//     Produce.sync({
//          force:false,
//     })
//     .then(function() {
//        return Produce.findAll();
//     })
//     .then(function (produce) {
//         //Render output from CockroachDB using our PUG template
//         res.render('test', { produce : produce });
//     })
// });

//Handle submitted form data
// router.post('/', function (req, res) {
//
//   //Get our values submitted from the form
//   var fromName = req.body.produceName;
//   var fromPrice = req.body.price;
//   var fromslogan = req.body.slogan;
//   var fromDiscription = req.body.discription;
//   var fromRecipes = req.body.recipes;
//
//   //Add our POST data to CockroachDB via Sequelize
//   Produce.sync({
//       force: false,
//   })
//       .then(function () {
//       // Insert new data into Produce table
//       return Produce.bulkCreate([
//           {
//           produceName: fromName,
//           price: fromPrice,
//           slogan: fromslogan,
//           discription: fromDiscription,
//           recipes: fromRecipes,
//           },
//       ]);
//       })
//
//       //Error handling for database errors
//       .catch(function (err) {
//       console.error("error: " + err.message);
//       });
//
//       //Tell them it was a success
//       res.send('Submitted Successfully!<br /> Name:  ' + fromName + '<br />Price:  ' + fromPrice);
//       console.log('Submitted Successfully!<br /> Name:  ' + fromName + '<br />Price:  ' + fromPrice)
// });

module.exports = router;

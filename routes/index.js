var express = require('express');
var router = express.Router();
const{ ensureAuth, ensureGuest} = require('../middleware/auth')

const indexController = require('../controller/index')
var Produce = require('../models/produce.js')


/* GET home page. */
router.get('/', indexController.index);
router.get('/demo-post', indexController.post);
router.get('/profile', indexController.profile);
router.get('/enterData', indexController.enterData);
router.get('/editInfo', indexController.editUser);
router.get('/orders', indexController.orders);
router.get('/dashboard', indexController.dashboard);
router.get('/about', indexController.about);


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

router.get('/test', async function (req, res) {
    Produce.sync({
         force:false,
    })
    var produce = await Produce.findAll();
    console.log(produce);
    res.render('test', { produce : produce});
})


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
      // res.send('Submitted Successfully!<br /> Name:  ' + fromName + '<br />Price:  ' + fromPrice);
      console.log('Submitted Successfully!<br /> Name:  ' + fromName + '<br />Price:  ' + fromPrice)
      res.redirect("test");
});





module.exports = router;

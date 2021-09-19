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



module.exports = router;

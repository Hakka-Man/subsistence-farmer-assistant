var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/demo-post', function(req, res, next) {
    res.render('post/viewpost')
});

module.exports = router;

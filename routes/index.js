var express = require('express');
//var app = require('/app')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/', (req, res)=>{
    let token = req.body.token;
    console.log(token);
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload);
    }
    verify().catch(console.error);
})

router.get('/demo-post', function(req, res, next) {
    res.render('post/viewpost')
});

router.get('/enterData', function(req, res, next) {
  res.render('enterData');
});

router.get('/userInfo', function(req, res, next) {
  res.render('userInfo');
});

router.get('/editInfo', function(req, res, next) {
  res.render('editUser');
});


module.exports = router;

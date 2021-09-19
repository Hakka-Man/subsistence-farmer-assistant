var express = require('express');
const passport = require('passport')
var router = express.Router();

// Auth with Google
//Get /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile'] }));


// Google Auth Callback
// Get /dashboard
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/' }), (req, res) => {
    res.redirect('/')
});


module.exports = router;

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

//Log out user
// /auth/logout
router.get('/logout', (req ,res) => {
    req.logout()
    res.redirect('/')
    console.log('Log Out')
})
module.exports = router;

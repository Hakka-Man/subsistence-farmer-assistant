var express = require('express');
const passport = require('passport')
var router = express.Router();

// Auth with Google
//Get /auth/google
router.get('/google', passport.authenticate('google', {scope: ['profile'] }));


// Google Auth Callback
// Get /dashboard
router.get('https://farmerassistant.herokuapp.com/auth/google/callback', passport.authenticate('google', {failureRedirect: '/' }), (req, res) => {
    res.redirect('/')
});

//Log out user
// /auth/logout
router.get('/logout', (req ,res) => {
    req.logout()
    res.redirect('/')
})
module.exports = router;

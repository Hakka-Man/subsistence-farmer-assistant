const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('./models/User')

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: '1030812775063-voaa2nmetvaq5bgs4g9ln6ntmmls9t13.apps.googleusercontent.com',
        clientSecret: '3b1n7pkb8L2orFiwMUyndNfm',
        callbackURL: '/auth/google/callback'
        },
        async (accessToken, refreshToken, done) => {
        console.log("Done")
        }
    )
  )
    passport.serializeUser((user, done) => {
    done(null, user.id);
    });
  
    passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })
}
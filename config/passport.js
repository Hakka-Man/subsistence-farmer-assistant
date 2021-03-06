const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: '1030812775063-voaa2nmetvaq5bgs4g9ln6ntmmls9t13.apps.googleusercontent.com',
        clientSecret: '3b1n7pkb8L2orFiwMUyndNfm',
        callbackURL: 'https://farmerassistant.herokuapp.com/auth/google/callback'
        // callbackURL: 'http://localhost:3000/auth/google/callback'
        },
        async (accessToken, refreshToken ,profile,done) => {
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
                // email: profile.emails[0].value
            }
            try {
                let user = await User.findOne({ googleId: profile.id})
                if(user){
                    done(null, user)
                } else{
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (err){
                console.error(err)
            }
            // console.log(profile)
            // done(null, null)
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

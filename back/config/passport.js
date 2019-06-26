//we import passport packages required for authentication
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//
//We will need the models folder to check passport agains
var User  = require('../db/models/index').User

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, done) {
   console.log(user)
    done(null, user.id);
});
//
passport.deserializeUser(function (id, done) {
    console.log(id,'SOY ID')
    User.findByPk(id)
    .then(user=>{
        done(null, user);
    })
    .catch(done)
});
//
// Telling passport we want to use a Local Strategy. In other words,
//we want login with a username/email and password
passport.use(new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
        usernameField: "email",
        passwordField: "password"
    },
    function (email, password, done) {
        // When a user tries to sign in this code runs
        User.findOne({
            where: {
                email: email
            }
        }).then(function (dbUser) {
            // If there's no user with the given email
            if (!dbUser) {
                return done(null, false, {
                    message: "Incorrect email."
                });
            }
            // If there is a user with the given email, but the password the user gives us is incorrect
            else if (!dbUser.validatePassword(password)) {
                return done(null, false, {
                    message: "Incorrect password."
                });
            }
            // If none of the above, return the user
            return done(null, dbUser);
        });
    }
));
//
//
// Exporting our configured passport
module.exports = passport;
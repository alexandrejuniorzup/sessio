const local = require("passport-local");
const db = require("mongoose");
const bcrypt = require("bcryptjs");

require("../Models/User");
const User = db.model("User");

module.exports = (passport) => {

    passport.use(new local({usernameField: 'email'}, (email, password, done) => {
        User.findOne({ email: email}).select(('+password'))
            .then((user) => {
                if(!user) {
                    return done(null, false, { message: "User not exist"})
                }
                bcrypt.compare(password, user.password, (err, match) => {
                    if(match) {
                        return done(null, user)
                    } else {
                        return done(null, false, { message: "Wrong password"})
                    }
                })
            })

    }));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {

        User.findById(id, (err, user) => {
            done(err, user)
        })
    }

    )
};
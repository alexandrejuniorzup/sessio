const passport = require('passport')

function login(req, res, next) {

    passport.authenticate("local", {
        successRedirect: '/success',
        failureRedirect: '/failed'
    })(req, res, next)
}

module.exports = { login };
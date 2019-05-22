const passport = require('passport')

function login(req, res, next) {

    // passport.authenticate("local", {
    //     successRedirect: '/success',
    //     failureRedirect: '/failed'
    // })(req, res, next)

    passport.authenticate("local", (err, user, info) => {
        if(err) return next(err);
        if(!user) return res.redirect("/failed");
        req.logIn(user, (err) => {
            if(err) return next(err);
            //return res.redirect("/success")
            return res.send(user)
        })
    })(req,res, next);

}


function render(req,res, next) {
    return res.render("login.pug")
}

module.exports = { login, render };
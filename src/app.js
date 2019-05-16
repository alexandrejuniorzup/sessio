const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require("./config/passportAuth")(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: "session",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
    app.locals.user = req.user;
    next()
});


//Middle
app.use(require("./Middlewares/requestType"));

//Routes
app.use('/', require("./Routes/index"));
app.use('/login', require("./Routes/login"));

app.use("/register", require("./Routes/register"));


module.exports = app;
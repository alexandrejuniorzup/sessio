const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app)
const io = require("socket.io")(server);
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
require("./config/passportAuth")(passport);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require("ejs").renderFile);
app.set('view engine', 'pug');


app.use(session({
    secret: "session",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
    app.locals.user = req.user || null;
    next()
});

let middle = require("./Middlewares/requestType")
//Middle
app.use(middle.getRequestType);

//Routes
app.use('/', require("./Routes/index"));
app.use('/login', require("./Routes/login"));
app.use("/register", require("./Routes/register"));
app.use('/chat', require("./Routes/chat"));


io.on('connection', socket => {

    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected")
    });

    socket.on('sendMessage', (msg) => {
        io.emit('sendMessage', msg);
    })
});


module.exports = server;
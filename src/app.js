const express = require("express");
const path = require("path");
const app = express();
const server = require("http").createServer(app);
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
    cookie:{_expires : 600000},
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res,next) => {
    app.locals.user = req.user || null;
    next()
});

//Middle
app.use(require("./Middlewares/requestType"));
app.use('/chat', require("./Middlewares/chat"))
app.use('/validation', require("./Middlewares/validation"))
//Routes
app.use('/', require("./Routes/index"));
app.use('/login', require("./Routes/login"));
app.use("/register", require("./Routes/register"));
app.use('/chat', require("./Routes/chat"));
app.use("/validation", require("./Routes/validation"))

var userCount = 0
var messages = [];
const service = require("./Services/chatMessages.js");

io.on('connection', socket => {
    let name;
    userCount += 1;
    if(app.locals.user) {
        name = app.locals.user.name;
        socket.broadcast.emit('update',  name + " has joined the server.");
    }

    service.getMessages()
        .then((msgs) => {
            messages = msgs;
            socket.emit("history", messages);
        })
        .catch((err) => {
            console.log(err)
        });

    console.log("a user connected");





    socket.on("disconnect", () => {
        userCount -= 1;
        service.deleteData()
            .then( () => {
                return service.saveManyMessages(messages)
                    .catch((err) => {
                        console.log("AAAA :" + err)
                    });
            });
        socket.broadcast.emit("left", name + " has left the server." )
    });

    socket.on('sendMessage', (msg) => {
        if(messages.length === 10){
            messages.shift();
            messages.push(msg)
        } else {
            messages.push(msg)
        }
        io.emit('sendMessage', msg);

    })
});


module.exports = server;
const express = require("express");
const morgan = require("morgan");
const path = require('path');
const cors = require("cors");
const router = require("./routes/index.routes");
const db = require('../db/models').db
const app = express();
const session = require("express-session");
const passport = require("../config/passport")
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// Db connection

// Settings
app.set("port", process.env.PORT || 8000);

// MIDDLEWARES
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Passport middleware
app.use(session({ secret: "cats", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.user = req.user;
    next()
})

app.use("/", router);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})

// Starting the server

db.sync({ force: false })
    .then(() => {
        console.log("DB CONNECTED!")
        app.listen(app.get("port"), () => {
            console.log(`Server on port ${app.get("port")}`);
        });
    })
    .catch(console.error);

module.exports = app;
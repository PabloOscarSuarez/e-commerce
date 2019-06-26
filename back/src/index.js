const express = require("express");
const morgan = require("morgan");
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

// Middlewares
app.use(morgan("dev"));
// app.use(express.json()); // cumple el mismo funcionamiento que bodyparser
//hablito cors para poder pedir a mi API desde un cliente externo
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Passport middleware
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) =>{
app.locals.user = req.user;
next()
})
// Routes
app.use((req, res, next)=>{
  app.locals.user = req.user;
  next()
})

app.use("/", router);

// Starting the server

db.sync({force:false})
.then(()=>{
    console.log("DB CONNECTED!")
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
})
.catch(console.error);

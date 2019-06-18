const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const router = require("./routes/task.routes");
const app = express();

// Db connection

// Settings
app.set("port", process.env.PORT || 8000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json()); // cumple el mismo funcionamiento que bodyparser
//hablito cors para poder pedir a mi API desde un cliente externo
app.use(cors());

// Routes
app.use("/", router);

// Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

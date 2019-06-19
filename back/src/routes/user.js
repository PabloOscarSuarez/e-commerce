const express = require("express");
const router = new express.Router();

const User = require("../../db/models/index").User;

// MODEL

router.route("/create").post((req, res) => {
  User.create(req.body)
    .then(user => {
      console.log("User created", user);
    })
    .then(res.json("data guardada correctamente"));
});

module.exports = router;

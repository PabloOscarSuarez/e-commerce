const express = require("express");
const router = new express.Router();
const User = require("../../db/models/index").User;
var passport = require ("../../config/passport");

// const Book = require("../../db/models/index").Book;

router.post("/register", function(req, res) {
  User.create(req.body)
    .then(newUser => {
      req.login(newUser, function(err){
        if(err){ console.log("error al loguear al user")} //con esto ya lo dejo logueado
        return res.send(newUser)
      })
    });

});
router.post('/login', passport.authenticate("local"), function (req, res, next) {
  res.send(req.user)
})
router.get('/logged', function (req, res, next) {
  console.log("entre al logged!!")
  res.send(req.user)
})
router.get('/logout', function(req, res){
  req.logout();
  res.send(req.user);
});

module.exports = router;

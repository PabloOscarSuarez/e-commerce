const express = require("express");
const router = new express.Router();
const User = require("../../db/models/index").User;
var passport = require("../../config/passport");

// const Book = require("../../db/models/index").Book;

router.post("/register", function (req, res) {
  User.create(req.body)
    .then(newUser => {
      req.login(newUser, function (err) {
        if (err) { console.log("error al loguear al user") } //con esto ya lo dejo logueado
        return res.send(newUser)
      })
    });

});
router.post('/login', passport.authenticate("local"), function (req, res, next) {
  res.send(req.user)
})
router.get('/logout', function (req, res) {
  req.logout();
  res.json(req.user);
  // res.send(req.user);
});

router.get('/logged', function (req, res, next) {
  console.log("entre al logged!!")
  console.log(req.user, 'SOY EL REQ.USER')
  res.send(req.user)
})

router.get("/admins", function (req, res) {
  User.findAll({
    where: {
      isAdmin: true
    }
  })
    .then(admins => res.send(admins));
});


router.delete('/admins/:adminId', (req, res) => {

  User.destroy({
    where: {
      id: req.params.adminId
    }
  })
    .then(() => {
      User.findAll({
        where: {
          isAdmin: true
        }
      })
        .then(admins => res.send(admins));
    })
})

router.put("/edit/:userId", function (req, res, next) {

  // console.log("soy req.body del back DEL EDIT", req.body);
  User.update(req.body, { returning: true, where: { id: req.params.userId } })
    .then(function ([rowsUpdate, [updatedUser]]) {
      console.log('SOY UPDATED USER DESDE ROUTES DE USER', updatedUser)
      return updatedUser
    })
    .then(user=>{
      console.log(user)
      res.send(user)
    })
});



module.exports = router;

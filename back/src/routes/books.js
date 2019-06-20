const express = require("express");
const sequelize = require("sequelize");
const op = sequelize.Op
const router = new express.Router();

const Book = require("../../db/models/index").Book;

// MODEL
router.get("/", function(req, res) {
  Book.findAll({
    where:{
      stock: {[op.gte]: 1},
    }
  })
  .then(books => res.send (books));
});

router.get("/search/:title", function(req, res, next) {
  
  Book.findAll({
    where: {
      title: req.params.title
    }
  })
    .then(books => res.send(books))
    .catch(() => res.sendStatus(404));
});

router.route("/:id").get(function(req, res, next) {

  Book.findByPk(req.params.id)
    .then(function(Book) {
      res.send(Book);
    })
    .catch(next);
});

router.route("/create").post((req, res) => {
  Book.create(req.body).then(book => {
    console.log("Book created", book);
  });
});

module.exports = router;

const express = require("express");
const router = new express.Router();

const Book = require("../../db/models/index").Book;

// MODEL
router.get("/", function(req, res) {
  Book.findAll().then(books => res.send(books));
});

router.route("/create").post((req, res) => {
  Book.create(req.body).then(book => {
    console.log("Book created", book);
  });
});

module.exports = router;

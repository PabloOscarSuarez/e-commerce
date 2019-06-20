
const express = require('express');
const router = new express.Router();

const Author = require('../../db/models/index').Author

// MODEL


router.route('/create')
.post((req, res) => {
    console.log('soy req.body del back', req.body)
    
    var author = Author.build({
        name: req.body.name,
    });
    author.save()
    res.send(author)
})

router.get('/',(req, res)=>{
    Author.findAll()
    .then(authors=>{
        res.send(authors)
    })
})


module.exports = router;
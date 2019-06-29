
const express = require('express');
const router = new express.Router();

// const User = require('../../db/models/index').User
const Status = require('../../db/models/index').Status
// const Transaction = require('../../db/models/index').Transaction

// MODEL

router.get('/', (req, res) => {

  Status.findAll()
    .then(statuses => {
      res.send(statuses)
    })
})

// router.route("/:id")
//   .get(function (req, res, next) {
//     Transaction.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [
//         {
//           model: User,
//           as: 'user'
//         },
//         {
//           model: Status,
//           as: 'status'
//         }
//       ]
//     })
//       .then(function (transaction) {
//         res.send(transaction);
//       })
//       .catch(next);
//   });



module.exports = router;
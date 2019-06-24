const Sequelize = require("sequelize");
const db = require("../../db");

const TransactionDetail = db.define("transactionDetail", {

  price: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true,
      isNumeric: true
    }
  }
});

module.exports = TransactionDetail;

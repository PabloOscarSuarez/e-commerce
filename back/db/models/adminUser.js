const Sequelize = require("sequelize");
const db = require("../../db");
const crypto = require("crypto");

const Admin = db.define("user", {
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  salt: {
    type: Sequelize.STRING
  }
});

Admin.generateSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};

Admin.prototype.encryptPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

Admin.prototype.validatePassword = function(password) {
  const hash = crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");

  return this.password === hash;
};

Admin.addHook("beforeCreate", user => {
  user.salt = User.generateSalt();
  user.password = user.encryptPassword(user.password);
});

module.exports = Admin;

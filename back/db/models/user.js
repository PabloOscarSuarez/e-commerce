const Sequelize = require('sequelize');
const db = require('../../db');
const crypto = require('crypto');

const User = db.define('user', {

    name: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            isAlpha: true
        }
    },
    address: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        }
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        },
        unique: true
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
    },
    anonimousEmail: {
        type: Sequelize.STRING,
        // validate: {
        //     isEmail: true
        // }
    },
    password: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
        }
    },
    salt: {
        type: Sequelize.STRING,
    }
})

User.generateSalt = function () {
    return crypto.randomBytes(20).toString('hex')
}

User.prototype.encryptPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
};

User.prototype.validatePassword = function (password) {
    const hash = crypto.createHmac('sha1', this.salt).update(password).digest('hex')

    return this.password === hash;
};

User.addHook('beforeCreate',(user)=>{
    user.salt = User.generateSalt()
    user.password = user.encryptPassword(user.password)
})

module.exports = User;


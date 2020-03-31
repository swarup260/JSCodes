
const jwt = require('jsonwebtoken');
const config = require('../config')

exports.getToken = (data) => {
    return  jwt.sign({ username : data.username , email : data.email}, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRES });
}
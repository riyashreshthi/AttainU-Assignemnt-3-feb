const jwt = require('jsonwebtoken');

exports.sign = function (data){
    var token = jwt.sign({ data }, 'secretkey',{ expiresIn: "14d"});
    return token;
}

exports.verify = function (jwtToken){
    return jwt.verify(jwtToken, 'secretkey');
}

exports.decode = function (jwtToken) {
    return jwt.decode(jwtToken, {complete: true});
}
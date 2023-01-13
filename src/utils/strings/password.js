const crypto = require('crypto');

const cryptMD5 = (password) => {
    return crypto.createHash('md5').update(password).digest('hex');
}

module.exports = {
    cryptMD5
}
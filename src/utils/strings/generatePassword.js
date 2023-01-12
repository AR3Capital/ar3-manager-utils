const crypto = require('crypto');

const generate = (password) => {
    return crypto.createHash('md5').update(password).digest('hex');
}

module.exports = {
    generate
}
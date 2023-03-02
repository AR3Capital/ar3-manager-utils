const mysql = require('./src/db/mysql')
const mongodb = require('./src/db/mongodb')
const ssAr3 = require('./src/db/sqlserver/ar3-plataforma')
const ssHarpia = require('./src/db/sqlserver/harpia')
const validationUtil = require('./src/utils/validations/validationUtil')
const sendEmail = require('./src/utils/email/sendEmail')
const stringUtils = require('./src/utils/strings')

module.exports = {
    mysql,
    mongodb,
    ssAr3,
    ssHarpia,
    validationUtil,
    sendEmail,
    stringUtils
}
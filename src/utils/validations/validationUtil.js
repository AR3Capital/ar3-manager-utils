const Ajv = require('ajv');
const ajvErrors = require('ajv-errors');
const ajvValidator = new Ajv({ allErrors: true, jsonPointers: true, $data: true });
require("ajv-keywords")(ajvValidator);

const schemaValidations = require('./schemaValidations');

const validateSchema = (schema, body) => {
    if (!schema) return;
    if (typeof body === 'string') body = JSON.parse(body);
    
    //bodySchema = body;
    const validateCompiled = ajvValidator.compile(schema);
    const isValid = validateCompiled(body);

    if (isValid) return body;

    const error = [];
    validateCompiled.errors.forEach(i => error.push({ message: i.message, field: i.dataPath }));

    throw {
        statusCode: 400,
        body: JSON.stringify(error)
    };
}

module.exports = {
    validateSchema,
    ajvValidator,
    ajvErrors,
    schemaValidations
}
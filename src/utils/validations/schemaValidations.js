const schemaEmailValidation = {
    type: 'string',
    maxLength: 256,
    pattern: '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$',
    emailCorpValidate: true,
    errorMessage: {
        pattern: 'Invalid email',
        maxLength: 'Email address size larger than allowed. max=256.',
        emailCorpValidate: 'Email deve ser corporativo'
    },            
};

const passwordEmailValidation = {
    type: 'string',
    pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$',
    errorMessage: 'The password must contain at least one uppercase letter, one lowercase letter, a number, a special character and a minimum size of 12 characters.'
};

module.exports = {
    schemaEmailValidation,
    passwordEmailValidation
}
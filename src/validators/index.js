async function validate(validateFn, data) {
    try {
        return validateFn(data);
    } catch(error) {
        throw {message: error, code: 400};
    }
}

module.exports = validate;
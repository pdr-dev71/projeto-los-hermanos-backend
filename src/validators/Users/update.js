const yup = require('yup');
async function validate(data) {
    const schema = yup.object().shape({
        firstName: yup.string(),
        lastName: yup.string(),
        password: yup.string(),
        birthDate: yup.string(),
        phone: yup.string(),
        email: yup.string().email(),
    });

    try {
        const valid = await schema.isValid(data);
        return valid
    } catch(error) {
        throw error;
    }

    
};

module.exports = validate;
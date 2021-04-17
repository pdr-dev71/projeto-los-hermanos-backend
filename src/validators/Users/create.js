const yup = require('yup');
async function validate(data) {
    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        password: yup.string().required(),
        birthDate: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().email().required(),
        type: yup.string().required()
    });

    try {
        const valid = await schema.isValid(data);
        console.log(valid)
        return valid
    } catch(error) {
        console.log('não é valido')
        throw error;
    }

    
};

module.exports = validate;
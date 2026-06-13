const jwt = require('jsonwebtoken')

exports.generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret_key_for_hospital_management_system', {
        expiresIn: '30d',
    })
}


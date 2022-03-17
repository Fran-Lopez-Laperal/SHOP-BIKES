const { create } = require('connect-mongo')
const createError = require('http-errors')

module.exports.isAuthenticated = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        next(createError(401, 'Unauthorized, please login'))
    }
}


module.exports.isAdmin = (req, res, next) => {
    if (req.user.isAdmin()) {
        next()
    } else {
        next(createError(403, 'Forbidden'))
    }
}
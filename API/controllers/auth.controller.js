const createError = require('http-errors');
const User = require('../models/user.model');

module.exports.register = (req, res, next) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (!user) {
      return User.create(req.body)
        .then(user => res.status(201).json(user))
    } else {
      const error = new Error ('User already registered');
      error.errors = {
        email: 'email already registered'
      }
      next(createError(404, error))
    }
  }).catch(error => next(error))
}



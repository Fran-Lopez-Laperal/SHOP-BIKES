const ShoppingCart = require("../models/shoppingCart.model")

const createError = require("http-errors");
const shoppingCart = require("../models/shoppingCart.model");

module.exports.upsert = (req, res, next) => {
    ShoppingCart.findOneAndUpdate({ owner: req.user.id }, req.body, { new: true, runValidators: true, upsert: true })
        .then(cart => res.status(201).json(cart))
        .catch(error => next(error))
}

module.exports.detail = (req, res, next) => {
    shoppingCart.findOne(req.params.id)
    .populate("owner")
        .then(cart => res.json(cart))
        .catch(error => next(error))
}





//Carlos trabajar los objetos que me cuesta.
//preguntar a Carlos si para hacer una web informativa del rally me vale solo con react!
//como añadir una ventana de twitter a una web.
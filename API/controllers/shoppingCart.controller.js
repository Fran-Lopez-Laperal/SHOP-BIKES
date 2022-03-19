const ShoppingCart = require("../models/shoppingCart.model")
const createError = require("http-errors");
const Order = require('../models/order.model')

module.exports.upsert = (req, res, next) => {
    const cart = req.body
    cart.owner = req.user.id
    ShoppingCart.findOneAndUpdate(
        { owner: req.user.id },
        cart,
        { new: true, runValidators: true, upsert: true, populate: { path: "products.product", select: "name price" } })
        .then(cart => res.status(201).json(cart))
        .catch(error => next(error))
}

module.exports.detail = (req, res, next) => {
    ShoppingCart.findOne({ owner: req.user.id })
        .then(cart => {
            if (!cart) {
                next(createError(404, `Cart ${req.user.name}  not found`))
            } else {
                res.json(cart)
            }
        })
        .catch(error => next(error))
}

module.exports.order = (req, res, next) => {
    ShoppingCart.findOne({ owner: req.user.id })
        .then(cart => {
            if (!cart) {
                next(createError(404, `Cart ${req.user.name} not found`))
            } else {
                const order = {
                    products: cart.products.map((cardItem) => {
                        return {
                            product: cardItem.product.id,
                            amount: cardItem.amount,
                            price: cardItem.product.price
                        }
                    }),
                    owner: req.user.id,
                    state :'in process'
                }
                return Order.create(order)
                    .then(cart => res.status(201).json(cart))
            }
        })
        .catch(error => next(error))
}

module.exports.ordersList = (req, res, next) => {
    Order.find()
    .then(order => res.json(order))
    .catch(error => next (error))
}



const Order = require('../models/order.model')


module.exports.ordersList = (req, res, next) => {
    Order.find({ owner: req.user.id })
        .populate({
            path: 'products',
            populate: {
                path: 'product'
            }
        })
        .then(orders => res.status(201).json(orders))
        .catch(error => next(error))
}
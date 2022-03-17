const Product = require('../models/product.model');
const createError = require('http-errors')

module.exports.list = (req, res, next) => {
    console.log(req.query)
    const criterial = {}
    const { category, name, keyWords } = req.query



    if (category) {
        criterial.category = category
    }
    if (name) {
        criterial.name = new RegExp(name, "i")
    }
    if (keyWords) {
        criterial.keyWords = { $in: [keyWords] } 
    }

    Product.find(criterial)
        .then((products) => { res.json(products) })
        .catch(error => next(error))
}


module.exports.create = (req, res, next) => {
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch(error => next(error))
}

module.exports.detail = (req, res, next) => {
    Product.findById(req.params.id)
        .populate("owner")
        .then((product) => {
            if (!product) {
                createError(404, `Product ${req.params.id} not found`)
            } else {
                res.json(product)
            }
        })
        .catch(error => next(error))
}

module.exports.delete = (req, res, next) => {
    Product.findByIdAndDelete(req.params.id)
        .then(product => {
            if (!product) {
                createError(404, `Product ${req.params.id} not found`)
            } else {
                res.status(204).send();
            }
        })
        .catch(error => next(error))
}

module.exports.edit = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(product => {
            if (!product) {
                next(createError(404, `Product ${req.params.id} not found`))
            } else {
                res.json(product)
            }
        })
        .catch(error => next(error))
}

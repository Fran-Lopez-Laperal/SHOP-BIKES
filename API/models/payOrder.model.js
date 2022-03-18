const mongoose = require('mongoose')
const Schema = mongoose.Schema

const payOrderSchema = new Schema({

})

const payOrder = mongoose.model('payOrder', payOrderSchema)
module.exports = payOrder

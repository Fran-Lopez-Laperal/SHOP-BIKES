const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new Schema({
    products: {
        default: [],
        type: [
            {
                _id: false,
                product: {
                    type: mongoose.Types.ObjectId,
                    ref: 'Product',
                },
                amount: Number,
                price: Number
            }
        ]
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },

    state: {
        type: String,
        enum: ['in process', 'in delivery', 'picked up']
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, order) => {
            doc.id = doc._id,
                delete order.__v
            delete order._id

            return order
        }
    }
})

orderSchema.virtual('total').get(function () {
    return this.products.reduce((total, orderItem) => {
        return total + (orderItem.amount * orderItem.price)
    }, 0)
})

orderSchema.pre('findById', function (next) {
    this.populate('products.product', 'name price state')
    next()
})

const Order = mongoose.model('Order', orderSchema)
module.exports = Order

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const shoppingCartSchema = new Schema({
    products: {
        default: [],
        type: [
            {
                _id: false,
                product: {
                    type: mongoose.Types.ObjectId,
                    ref: 'Product'
                },
                amount: {
                    type: Number,
                }
            }
        ],
    },

    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (doc, cart) => {
            cart.id = doc._id
            return cart
        }
    }
})

shoppingCartSchema.virtual('total').get(function () {
    return this.products.reduce((total, cartItem) => {
        return total + (cartItem.amount * cartItem.product.price)
    }, 0)
})

shoppingCartSchema.pre('findOne', function (next) {
    this.populate('products.product', 'name price image')
    next()
})



const shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema);
module.exports = shoppingCart
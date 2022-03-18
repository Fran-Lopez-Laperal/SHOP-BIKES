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
}, { timestamps: true,
    toJSON: {
        transform : (doc, cart) => {
            cart.id = doc.id
        }
    }
})

const shoppingCart = mongoose.model('shoppingCart', shoppingCartSchema);
module.exports = shoppingCart
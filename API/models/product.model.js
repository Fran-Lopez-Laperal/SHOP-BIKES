const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema({
   productName: {
        type: String,
        required: 'Product is required'
    },

    description: {
        type: String,
        required: 'Description is required'
    },

    image: {
        type: String,
        default:"",
    },

    price: {
        type: Number,
        required:'Price product is required'
    },

    category:{
        //
    }
}, { timestamps:true ,
    toJSON: {
        transform: (doc, product) => {
            product.id = doc._id;
            delete product.__v;
            delete product._id;
            return product
        }
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports =Product;
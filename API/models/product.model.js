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
        //poner un array de imagenes
        type: String,
        default:"",
    },

    price: {
        type: Number,
        required:'Price product is required'
    },

    category:{
        //
    },

    keyWords:{
        //para añadir palabras claves de busqueda
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
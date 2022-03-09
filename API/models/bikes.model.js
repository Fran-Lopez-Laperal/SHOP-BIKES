const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bikeSchema = new Schema({
    modelBike: {
        type: String,
        required: 'Model bike is required'
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
        required:'Price bike is required'
    },

    category:{
        //
    }
}, { timestamps })

const Bikes = mongoose.model('Bikes', bikeSchema);
module.exports = Bikes;